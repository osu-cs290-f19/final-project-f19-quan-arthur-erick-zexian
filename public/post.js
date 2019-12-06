(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['post'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"post\">\r\n  <div class=\"book-cover\">\r\n    <img src="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.coverImageUrl : stack1), depth0))
    + " alt=\"\">\r\n  </div>\r\n  <div class=\"book-info\">\r\n    <p>Title: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.title : stack1), depth0))
    + "</p>\r\n    <p>Edition: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.edition : stack1), depth0))
    + "</p>\r\n    <p>Author: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.author : stack1), depth0))
    + "</p>\r\n    <p>ISBN: "
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":9,"column":13},"end":{"line":9,"column":19}}}) : helper)))
    + "</p>\r\n  </div>\r\n</div>";
},"useData":true});
})();