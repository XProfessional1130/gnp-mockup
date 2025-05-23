const { application } = require("../data/application");

module.exports = {
    getApplication: (req, res) => {
        res.status(200).json(application);
    },

    getApplicationById: (req, res) => {
        const applicationById = application.find(item => item.id === parseInt(req.params.id));
        if (!applicationById) {
            return res.status(404).json({ message: "Application not found" });
        }
        res.status(200).json(applicationById);
    },

    createApplication: (req, res) => {
        const newApplication = {
            id: application.length + 1,
            ...req.body
        };
        newApplication.href = `/v2/operate/application/${newApplication.id}`;

        application.push(newApplication);
        res.status(201).json(newApplication);
    },

    updateApplication: (req, res) => {
        const applicationById = application.findIndex(item => item.id === parseInt(req.params.id));
        if (!applicationById) {
            return res.status(404).json({ message: "Application not found" });
        }

        const newApplication = {
            ...application[applicationById],
            ...req.body,
            href: `/v2/operate/application/${req.params.id}`,
            id: req.params.id
        };

        application.splice(req.params.id, 1, newApplication);
        
        res.status(200).json(newApplication);
    },
};

