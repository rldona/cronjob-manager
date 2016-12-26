let projects = [

    {"_id":"5859598598fd24a4b94201a2","name":"new1","description":"new1","execution":{"from":null,"to":null,"time":{"interval":5,"exact":[],"range":[{"from":"1970-01-01T11:00:00.000Z","to":"1970-01-01T13:00:00.000Z"},{"from":null,"to":null}]},"months":[false,false,false,false,false,false,false,false,false,false,false,false],"weekdays":[false,false,false,false,false,false,false]},"timezone":"Europe/Madrid","transport":"driving","category":"Madrid","mapCenter":{"lat":0,"lng":0},"route":"https://datalab-test.s3-eu-west-1.amazonaws.com/02_datalab_repository/01_backup_kmls/new1-1482250628793/CBD%20-%20Airport.kml","inactive":true,"job":{"id":"b1ebd181-e9b4-4615-86f8-cca6a4a20e4e","name":"new1","group":"PRE/PROYECTOS_RUTAS","project":"cintraroutes","permalink":"http://localhost:4440/project/cintraroutes/job/show/b1ebd181-e9b4-4615-86f8-cca6a4a20e4e"},"cronjob":{"from":null,"to":null,"cronJobs":["15 */3 06-13 * * *"]}},

    {"_id":"58595ef18d91e8a60c7495c2","name":"b","description":"b","execution":{"from":null,"to":null,"time":{"interval":15,"exact":[],"range":[{"from":null,"to":null}]},"months":[false,false,false,false,false,false,false,false,false,false,false,false],"weekdays":[false,false,false,false,false,false,false]},"timezone":"Europe/Madrid","transport":"driving","category":"Barcelona","mapCenter":{"lat":0,"lng":0},"route":"https://datalab-test.s3-eu-west-1.amazonaws.com/02_datalab_repository/01_backup_kmls/b-1482252016333/CBD%20-%20Airport.kml","inactive":true,"job":{"id":"46d8aad5-813a-4dbc-84ab-efb06fdcb6e5","name":"b","group":"PRE/PROYECTOS_RUTAS","project":"cintraroutes","permalink":"http://localhost:4440/project/cintraroutes/job/show/46d8aad5-813a-4dbc-84ab-efb06fdcb6e5"},"cronjob":{"from":null,"to":null,"cronJobs":["55 */2 * * * *"]}},

    {"_id":"5859598598fd24a4b9420111","name":"new2","description":"new2","execution":{"from":null,"to":null,"time":{"interval":5,"exact":[],"range":[{"from":"1970-01-01T11:00:00.000Z","to":"1970-01-01T13:00:00.000Z"},{"from":null,"to":null}]},"months":[false,false,false,false,false,false,false,false,false,false,false,false],"weekdays":[false,false,false,false,false,false,false]},"timezone":"Europe/Madrid","transport":"driving","category":"Madrid","mapCenter":{"lat":0,"lng":0},"route":"https://datalab-test.s3-eu-west-1.amazonaws.com/02_datalab_repository/01_backup_kmls/new1-1482250628793/CBD%20-%20Airport.kml","inactive":true,"job":{"id":"b1ebd181-e9b4-4615-86f8-cca6a4a20eHH","name":"new1","group":"PRE/PROYECTOS_RUTAS","project":"cintraroutes","permalink":"http://localhost:4440/project/cintraroutes/job/show/b1ebd181-e9b4-4615-86f8-cca6a4a20e4e"},"cronjob":{"from":null,"to":null,"cronJobs":["15 */1 * * * *"]}}

];

module.exports = {

    projects: function() {
        return projects;
    }

};
