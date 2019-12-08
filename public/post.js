(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['post'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div class=\"post\" data-isbn="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":28},"end":{"line":1,"column":34}}}) : helper)))
    + ">\r\n  <div class=\"post-info\">\r\n    <div class=\"book-cover\">\r\n      <img src="
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.coverImageUrl : stack1), depth0))
    + " alt=\"\">\r\n    </div>\r\n    <div class=\"book-info\">\r\n      <p>Title: "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.title : stack1), depth0))
    + "</p>\r\n      <p>Edition: "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.edition : stack1), depth0))
    + "</p>\r\n      <p>Author: "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.author : stack1), depth0))
    + "</p>\r\n      <p>ISBN: "
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":10,"column":15},"end":{"line":10,"column":21}}}) : helper)))
    + "</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"sell-button\">\r\n    <input type=\"button\" value=\"Sell This Book\" class=\"btn primary-color\" id=\"sell-btn\">\r\n  </div>\r\n</div>";
},"useData":true});
})();