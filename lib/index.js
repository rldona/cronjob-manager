const Job = require('./job');

class CronjobManager {

    constructor(projects) {
        this.projects = projects;

        this.jobs = [];

        if (typeof projects === 'undefined' && projects === null) {
            throw new Error('You have to enter a list of projects');
        } else {
            this.initProjects();
        }
    }

    initProjects() {
        let start = false;

        for (var i = 0; i < this.projects.length; i++) {
            this.jobs.push({
                id: this.projects[i]._id,
                config: new Job(this.projects[i])
            });

            start = !this.projects[i].cronjob.from && !this.projects[i].cronjob.to ? true : false;

            this.jobs[i].config.create(start);
        }
    }

    static getListJobs() {
        return this.jobs;
    }

}

module.exports = CronjobManager;
