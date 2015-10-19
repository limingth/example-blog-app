Blog.config({
  title: "Meteor Blog Example",
  syntaxHighlighting: true,
  syntaxHighlightingTheme: 'github',
  blogIndexTemplate: 'blog',
  blogShowTemplate: 'show',
  comments: {
    disqusShortname: 'blogpackage'
  },
  rss: {
    title: '文章',
    description: 'This is an example application for 文章 package'
  }
});

Meteor.startup(function() {
  console.log('starting....');
  // Blog.Post._collection._ensureIndex({
  //   'slug': 1
  // });
  // return Blog.Comment._collection._ensureIndex({
  //   'slug': 1
  // });
  var c = Blog.Post.find().count();
  console.log('c is ', c);
  var now = new Date();
  var p = {
      "title" : "第3篇",
      "tags" : [
          "flowertag"
      ],
      "slug" : "flower",
      "description" : "",
      "body" : "<p class=\"commentable-section\" data-section-id=\"1\"><span style=\"line-height: 1.42857;\">这个过程和目前我们已经实现的类似</span><br></p>",
      "updatedAt" : now,
      "titleBackground" : true,
      "featuredImageWidth" : 800,
      "featuredImageHeight" : 500,
      "featuredImageName" : "flower3.jpg",
      "featuredImage" : "/cfs/files/blog_images/aFz55PXeRGuigAchv/flower3.jpg?token=eyJhdXRoVG9rZW4iOiI5NXNnVGdHQ3VHN19DRTU2UGJMZmhQT2taN1BHc193aWctZ0NwZjNOM09DIn0%3D",
      "userId" : "pTigZYExtfRTAchft",
      "createdAt" : now,
      "excerpt" : "这个过程和目前我们已经实现的类似"
  };
//  Blog.Post._collection.insert(p);
  var c = Blog.Post.find().count();
  console.log('c is ', c);
});
