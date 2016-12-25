const Job = require('./job');

class CronjobManager {

    constructor(projects) {
        this.projects = projects;

        this.jobs = [];

        if (typeof projects === 'undefined' && projects === null) {
            throw new Error('You have to enter a list of projects');
        } else {
            this.createAllJobs();
        }
    }

    createAllJobs() {
        for (var i = 0; i < this.projects.length; i++) {
            this.jobs.push(new Job(this.projects[i]));
        }

        // TODO: pueden todos los job inicializarse: minijobs, job ??

        for (var i = 0; i < this.projects.length; i++) {
            this.jobs[i].start();
        }
    }

    getListJobs() {
        console.log(this.jobs);
    }

}

module.exports = CronjobManager;
