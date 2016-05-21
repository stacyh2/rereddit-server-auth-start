
app.factory('posts', ['$http', function($http) {
  
  var postService = {

    posts: [],

    getAll: function() {
      return $http.get('/posts').then(function(data) {
  
        angular.copy(data.data, postService.posts);
      });
    },

    get: function(id) {
      return $http.get('/posts/' + id).then(function(res){
        return res.data;
      });
    },

    create: function(post) {
      return $http.post('/posts', post).success(function(data){
        postService.posts.push(data);
      });
    },

    upvote: function(post) {
      // TODO: Finish
    },

    addComment: function(id, comment) {
      return $http.post('/posts/' + id + '/comments', comment);
    },

    upvoteComment: function(post, comment) {
      // TODO: Finish
    }
  };
  

  return postService;
}]);

