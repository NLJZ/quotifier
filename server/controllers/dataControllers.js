const Source = require("../models/sourceModel");
const Quote = require("../models/quoteModel");
const Project = require("../models/projectModel");
const mongoose = require("mongoose");
dataControllers = {};

// old addSource for SourceModelOld.js
// dataControllers.addSource = async (req, res) => {
//   const currentUser = res.locals.user;
//   try {
//     const source = await Source.create({
//       _id: new mongoose.Types.ObjectId(),
//       user: currentUser.id,
//       author: req.body.author,
//       sourceTitle: req.body.sourceTitle,
//       containerTitle: req.body.containerTitle,
//       otherContributors: req.body.otherContributors,
//       editor: req.body.editor,
//       translator: req.body.translator,
//       version: req.body.version,
//       number: req.body.number,
//       publisher: req.body.publisher,
//       pubDate: req.body.pubDate,
//     });
//     res.status(201).json(source);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

dataControllers.addSource = async (req, res) => {
  const currentUser = res.locals.user;
  try {
    const source = await Source.create({
      _id: new mongoose.Types.ObjectId(),
      user: currentUser.id,
      sourceTitle: req.body.sourceTitle,
      sourceInfo: req.body.sourceInfo,
    });
    res.status(201).json(source);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

dataControllers.addQuote = async (req, res) => {
  const currentUser = res.locals.user;
  Source.findById(req.body.source)
    .then((source) => {
      if (source) {
        const quote = new Quote({
          _id: new mongoose.Types.ObjectId(),
          user: currentUser.id,
          body: req.body.body,
          tags: req.body.tags,
          userNotes: req.body.userNotes,
          location: req.body.location,
          fave: req.body.fave,
          source: source.id,
        });
        quote.save();
        source.quotes.push(quote);
        source.save();
        res.status(201).json(quote);
      } else if (source === null) {
        const quote = new Quote({
          _id: new mongoose.Types.ObjectId(),
          user: currentUser.id,
          body: req.body.body,
          tags: req.body.tags,
          userNotes: req.body.userNotes,
          location: req.body.location,
          fave: req.body.fave,
        });
        quote.save();
        res.status(201).json(quote);
      } else {
        return res.status(404).json({
          message: "Source Not Found",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

dataControllers.addProject = async (req, res) => {
  const currentUser = res.locals.user;
  try {
    const project = await Project.create({
      _id: new mongoose.Types.ObjectId(),
      user: currentUser.id,
      projectName: req.body.projectName,
      quotes: req.body.quotes,
    });
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

dataControllers.getSources = async (req, res) => {
  try {
    const currentUser = res.locals.user;
    const sources = await Source.find({
      user: `${currentUser.id}`,
    }).lean();
    res.status(200).json(sources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

dataControllers.getQuotes = async (req, res) => {
  try {
    const currentUser = res.locals.user;
    const quotes = await Quote.find({
      user: `${currentUser.id}`,
    }).lean();
    res.status(200).json(quotes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

dataControllers.getProjects = async (req, res) => {
  try {
    const currentUser = res.locals.user;
    const projects = await Project.find({
      user: `${currentUser.id}`,
    }).lean();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

dataControllers.getOneQuote = async (req, res) => {
  try {
    const id = req.params.id;
    const quote = await Quote.find({
      _id: id,
    }).lean();
    res.status(200).json(quote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

dataControllers.getOneSource = async (req, res) => {
  try {
    const id = req.params.id;
    const source = await Source.find({
      _id: id,
    }).lean();
    res.status(200).json(source);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

dataControllers.getOneProject = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.find({
      _id: id,
    }).lean();
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

dataControllers.updateQuote = async (req, res, next) => {
  const id = req.params.id;
  const changes = req.body;
  try {
    const quote = await Quote.quoteCheck(id);
    if (req.body.source !== undefined && req.body.source !== quote.source) {
      const oldSource = await Source.sourceCheck(quote.source);
      console.log(oldSource.id);
      await Source.findByIdAndUpdate(
        oldSource.id,
        { $pull: { quotes: id } },
        { new: true },
        function (err, source) {
          if (err) {
            console.log(err);
          } else {
            console.log(source);
          }
        }
      );
      const newSource = await Source.sourceCheck(changes.source);
      await Source.findByIdAndUpdate(
        newSource.id,
        { $addToSet: { quotes: id } },
        { new: true },
        function (err, source) {
          if (err) {
            console.log(err);
          } else {
            console.log(source);
          }
        }
      );
      quote.source = changes.source;
    }
    if (req.body.body !== undefined) {
      quote.body = changes.body;
    }
    if (req.body.tags !== undefined) {
      quote.tags = changes.tags;
    }
    if (req.body.userNotes !== undefined) {
      quote.userNotes = changes.userNotes;
    }
    if (req.body.location !== undefined) {
      quote.location = changes.location;
    }
    if (req.body.fave !== undefined) {
      quote.fave = changes.fave;
    }
    await quote.save();
    res.json(quote);
  } catch (err) {
    let errorMsg = err.message;
    return res.status(500).json({ status: 500, error: errorMsg });
  }
};

dataControllers.updateSource = async (req, res, next) => {
  const id = req.params.id;
  const changes = req.body;
  try {
    const source = await Source.sourceCheck(id);
    if (req.body.sourceTitle !== undefined) {
      source.sourceTitle = changes.sourceTitle;
    }
    if (req.body.sourceInfo !== undefined) {
      source.sourceInfo = changes.sourceInfo;
    }
    await source.save();
    res.json(source);
  } catch (err) {
    console.log(err.message);
  }
};

dataControllers.updateProject = async (req, res, next) => {
  const id = req.params.id;
  const changes = req.body;
  try {
    const project = await Project.projectCheck(id);
    if (req.body.projectName !== undefined) {
      project.projectName = changes.projectName;
    }
    if (req.body.quotes !== undefined) {
      project.quotes = changes.quotes;
    }
    await project.save();
    res.json(project);
  } catch (err) {
    console.log(err.message);
  }
};

dataControllers.deleteQuote = async (req, res) => {
  try {
    const quote = await Quote.findByIdAndDelete(req.params.id);
    res.status(200).json(`${quote.id} deleted`);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

dataControllers.deleteSource = async (req, res) => {
  try {
    const source = await Source.findByIdAndDelete(req.params.id);
    res.status(200).json(`${source.id} deleted`);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

dataControllers.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    res.status(200).json(`${project.id} deleted`);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = dataControllers;
