requirejs.config({
    baseUrl: "lib",
    paths: {
        activity: "../js",
        volume3D: "../js/board" 
    }
});

requirejs(['volume3D'], function(Volume3D) {
    var app = new Vue({
        el: '#app',
        components: {
            'volume-3d': Volume3D
        },
        data: {
            displayText: ''
        },
        methods: {
            initialized: function () {
                var environment = this.$refs.SugarActivity.getEnvironment();
                this.displayText = "Hello " + environment.user.name + "!";    
            }
        }
    });
});
