const { applicationOwner } = require("../data/applicationOwner");

module.exports = {
    getApplicationOwner: (req, res) => {
        res.status(200).json(applicationOwner);
    },
    getApplicationOwnerById: (req, res) => {
        const applicationOwnerById = applicationOwner.find(item => item.id === parseInt(req.params.id));
        if (!applicationOwnerById) {
            return res.status(404).json({ message: "Application owner not found" });
        }
        res.status(200).json(applicationOwnerById);
    },
    createApplicationOwner: (req, res) => {
        const newApplicationOwner = {
            id: applicationOwner.length + 1,
            ...req.body
        };
        newApplicationOwner.href = `/v2/operate/applicationOwner/${newApplicationOwner.id}`;
        
        applicationOwner.push(newApplicationOwner);
        res.status(201).json(newApplicationOwner);
    },
    updateApplicationOwner: (req, res) => {
        const applicationOwnerById = applicationOwner.findIndex(item => item.id === parseInt(req.params.id));
        if (!applicationOwnerById) {
            return res.status(404).json({ message: "Application owner not found" });
        }
        
        const newApplicationOwner = {
            ...applicationOwner[applicationOwnerById],
            ...req.body,
            href: `/v2/operate/applicationOwner/${req.params.id}`,
            id: req.params.id
        };

        applicationOwner.splice(req.params.id, 1, newApplicationOwner);

        res.status(200).json(newApplicationOwner);
    },
};

