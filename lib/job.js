var CronJob = require('cron').CronJob;
var CronjobManager = require('./index');

class Job {

    constructor(project, index, start) {
        this.options = {
            project: project || {},
            cronTime: project.cronjob.cronJobs[index || 0],
            timezone: project.timezone,
            start: start || false
        };
    }

    create(start) {

        console.log('Start job by project: ', this.options.project._id);

        let job = new CronJob({
            cronTime: this.options.cronTime,
            onTick: function() {
                console.log(':: Minicronjob run ' + this.options.project._id + ' start [ ' + new Date() + ' ] ::');

                // this.runRundeck(this.project.job.id);

            },
            context: this,
            timeZone: this.options.timezone
        });

        if (start) {
            job.start();
        }

    }

}

module.exports = Job;