(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['book-search'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["book-result"],depth0,{"name":"book-result","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"results\">\r\n  <h3>Here is the search results</h3>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.results : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":5,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});
templates['book-result'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
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
    + "</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"sell-button\">\r\n    <input type=\"button\" value=\"Sell This BBB\" class=\"btn primary-color sell-btn\">\r\n  </div>\r\n</div>";
},"useData":true});
templates['create_post'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"content\">\r\n  <div class=\"course-name-container\">\r\n    <h2 id=\"course-name\">"
    + alias4(((helper = (helper = helpers.courseName || (depth0 != null ? depth0.courseName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"courseName","hash":{},"data":data,"loc":{"start":{"line":4,"column":25},"end":{"line":4,"column":39}}}) : helper)))
    + "</h2>\r\n  </div>\r\n\r\n  <form class=\"create-info\">\r\n    <div class=\"create-post-container\">\r\n      <div class=\"create-post-label\">\r\n        <label for=\"create-title\">Title</label>\r\n      </div>\r\n\r\n      <div class=\"create-post-element\">\r\n        <label name=\"title-text\" id=\"title-text\" class=\"create-input\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":14,"column":70},"end":{"line":14,"column":79}}}) : helper)))
    + "</label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"create-post-container\">\r\n      <label for=\"create-author\" class=\"create-post-label\">Author</label>\r\n      <div class=\"create-post-element\">\r\n        <label name=\"author-text\" id=\"author-text\" class=\"create-input\">"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":21,"column":72},"end":{"line":21,"column":82}}}) : helper)))
    + "</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"create-post-container\">\r\n      <label for=\"create-isbn\" class=\"create-post-label\">ISBN</label>\r\n      <div class=\"create-post-element\">\r\n        <label name=\"isbn-text\" id=\"isbn-text\" class=\"create-input\">"
    + alias4(((helper = (helper = helpers.isbn || (depth0 != null ? depth0.isbn : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"isbn","hash":{},"data":data,"loc":{"start":{"line":29,"column":68},"end":{"line":29,"column":76}}}) : helper)))
    + "</label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"create-post-container\">\r\n      <label for=\"create-condition\" class=\"create-post-label\">Condition</label>\r\n      <div class=\"create-post-element\">\r\n        <select id=\"create-condition\" class=\"create-input\" name=\"create-condition\">\r\n          <option selected value=\"\"></option>\r\n          <option>New</option>\r\n          <option>Excellent</option>\r\n          <option>Good</option>\r\n          <option>Fair</option>\r\n          <option>Poor</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"create-post-container\">\r\n      <label for=\"create-price\" class=\"create-post-label\">Price</label>\r\n      <div class=\"create-post-element\">\r\n        <input type=\"text\" name=\"price-text\" id=\"price-text\" class=\"create-input\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"create-post-container\">\r\n      <label for=\"create-meet\" class=\"create-post-label\">Meetup Info</label>\r\n      <div class=\"create-post-element\">\r\n        <input type=\"text\" name=\"meet-text\" id=\"meet-text\" class=\"create-input\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"create-post-container\">\r\n      <label for=\"create-description\" class=\"create-post-label\">Description</label>\r\n      <div class=\"create-post-element\">\r\n        <input type=\"text\" name=\"description-text\" id=\"description-text\" class=\"create-input\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"create-post-container\">\r\n      <label for=\"create-email\" class=\"create-post-label\">Email</label>\r\n      <div class=\"create-post-element\">\r\n        <input type=\"text\" name=\"description-text\" id=\"email-text\" class=\"create-input\">\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"create-post-container\">\r\n      <label for=\"create-description\" class=\"create-post-label\">Phone</label>\r\n      <div class=\"create-post-element\">\r\n        <input type=\"text\" name=\"phone-text\" id=\"phone-text\" class=\"create-input\">\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div class=\"button-group\">\r\n  <button type=\"button\" id=\"create-back\" class=\"btn primary-color\">Go Back</button>\r\n  <button type=\"button\" id=\"create-accept\" class=\"btn primary-color\">Create</button>\r\n</div>";
},"useData":true});
templates['sell'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\r\n    <main class=\"searchPost-container\">\r\n        <div class=\"searchPost-text\" id=\"search-title\">\r\n            <h2>Sell a book</h2>\r\n        </div>\r\n        <div class=\"searchPost-container\">\r\n            <div class=\"search-class\">\r\n                <label for=\"search-class\" class=\"searchPost-input-label\">Class</label>\r\n                <div class=\"search-post-element\">\r\n                    <input type=\"text\" name=\"search-text\" id=\"search-text\" class=\"search-input\"\r\n                        placeholder=\"Enter your class\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"searchPost-container\">\r\n            <div class=\"search-footer\">\r\n                <button type=\"button\" id=\"search-action-button\" class=\"search--button\">🡪</button>\r\n            </div>\r\n        </div>\r\n    </main>";
},"useData":true});
})();