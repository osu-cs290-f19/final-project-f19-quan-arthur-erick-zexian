(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['no-textbook'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 style=\"text-align: center; margin-top: 4rem;\">Congratulations! You're gonna save yourself $100</h2>\r\n<h3 style=\"text-align: center;\">Because this course doesn't require textbooks</h3>";
},"useData":true});
templates['post-details'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<main class=\"post-details-content\">\r\n  <div class=\"left-side-container\">\r\n    <div class=\"image-container\">\r\n      <img src="
    + alias4(((helper = (helper = helpers.imgSource || (depth0 != null ? depth0.imgSource : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgSource","hash":{},"data":data,"loc":{"start":{"line":4,"column":15},"end":{"line":4,"column":28}}}) : helper)))
    + " alt="
    + alias4(((helper = (helper = helpers.bookTitle || (depth0 != null ? depth0.bookTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bookTitle","hash":{},"data":data,"loc":{"start":{"line":4,"column":33},"end":{"line":4,"column":46}}}) : helper)))
    + ">\r\n    </div>\r\n    <div class=\"isbn-container\">\r\n      <span class=\"post-label\">ISBN: </span>"
    + alias4(((helper = (helper = helpers.ISBN || (depth0 != null ? depth0.ISBN : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ISBN","hash":{},"data":data,"loc":{"start":{"line":7,"column":44},"end":{"line":7,"column":52}}}) : helper)))
    + "\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"right-side-container\">\r\n    <div class=\"book-title post-field\">\r\n      <span class=\"post-label\">Title: </span>"
    + alias4(((helper = (helper = helpers.bookTitle || (depth0 != null ? depth0.bookTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bookTitle","hash":{},"data":data,"loc":{"start":{"line":13,"column":45},"end":{"line":13,"column":58}}}) : helper)))
    + "\r\n    </div>\r\n\r\n    <div class=\"book-author post-field\">\r\n      <span class=\"post-label\">Author: </span>"
    + alias4(((helper = (helper = helpers.bookAuthor || (depth0 != null ? depth0.bookAuthor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bookAuthor","hash":{},"data":data,"loc":{"start":{"line":17,"column":46},"end":{"line":17,"column":60}}}) : helper)))
    + "\r\n    </div>\r\n\r\n    <div class=\"book-price post-field\">\r\n      <span class=\"post-label\">Price: $</span>"
    + alias4(((helper = (helper = helpers.bookPrice || (depth0 != null ? depth0.bookPrice : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bookPrice","hash":{},"data":data,"loc":{"start":{"line":21,"column":46},"end":{"line":21,"column":59}}}) : helper)))
    + "\r\n    </div>\r\n\r\n    <div class=\"book-condition post-field\">\r\n      <span class=\"post-label\">Condition: </span> "
    + alias4(((helper = (helper = helpers.bookCondition || (depth0 != null ? depth0.bookCondition : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bookCondition","hash":{},"data":data,"loc":{"start":{"line":25,"column":50},"end":{"line":25,"column":67}}}) : helper)))
    + "\r\n    </div>\r\n\r\n\r\n    <div class=\"meetup-pref post-field\">\r\n      <span class=\"post-label\">Meetup preference: </span>"
    + alias4(((helper = (helper = helpers.meetPreference || (depth0 != null ? depth0.meetPreference : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"meetPreference","hash":{},"data":data,"loc":{"start":{"line":30,"column":57},"end":{"line":30,"column":75}}}) : helper)))
    + "\r\n    </div>\r\n\r\n    <div class=\"seller-contact post-field\">\r\n      <span class=\"post-label\">Email: </span>"
    + alias4(((helper = (helper = helpers.contactEmail || (depth0 != null ? depth0.contactEmail : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contactEmail","hash":{},"data":data,"loc":{"start":{"line":34,"column":45},"end":{"line":34,"column":61}}}) : helper)))
    + "\r\n    </div>\r\n    <div class=\"seller-phone post-field\">\r\n      <span class=\"post-label\">Phone: </span>"
    + alias4(((helper = (helper = helpers.contactPhone || (depth0 != null ? depth0.contactPhone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contactPhone","hash":{},"data":data,"loc":{"start":{"line":37,"column":45},"end":{"line":37,"column":61}}}) : helper)))
    + "\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"book-description post-field\">\r\n      <span class=\"post-label\">Description:</span>\r\n      <div class=\"book-description-box\">\r\n        "
    + alias4(((helper = (helper = helpers.userDescription || (depth0 != null ? depth0.userDescription : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userDescription","hash":{},"data":data,"loc":{"start":{"line":45,"column":8},"end":{"line":45,"column":27}}}) : helper)))
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>";
},"useData":true});
templates['post-list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["user-post"],depth0,{"name":"user-post","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<main class=\"post-list-container\">\r\n  <div id=\"post-header\" data-isbn="
    + alias4(((helper = (helper = helpers.isbn || (depth0 != null ? depth0.isbn : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"isbn","hash":{},"data":data,"loc":{"start":{"line":2,"column":34},"end":{"line":2,"column":42}}}) : helper)))
    + ">\r\n    <div class=\"book-container\">\r\n      <div class=\"book-cover\">\r\n        <img src=\""
    + alias4(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data,"loc":{"start":{"line":5,"column":18},"end":{"line":5,"column":25}}}) : helper)))
    + "\" alt=\"\">\r\n      </div>\r\n      <div class=\"book-info\">\r\n        <div class=\"title-container\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":8,"column":37},"end":{"line":8,"column":46}}}) : helper)))
    + "</div>\r\n        <div class=\"author-container\">"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":9,"column":38},"end":{"line":9,"column":48}}}) : helper)))
    + "</div>\r\n      </div>\r\n    </div>\r\n    <div id=\"sell-button\">\r\n      <button type=\"button\" class=\"btn primary-color sell-btn\">Sell This Book</button>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <section id=\" posts\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.postList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":4},"end":{"line":21,"column":13}}})) != null ? stack1 : "")
    + "  </section>\r\n</main>\r\n";
},"usePartial":true,"useData":true});
templates['user-post'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"post-container\" data-price=\""
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":1,"column":40},"end":{"line":1,"column":49}}}) : helper)))
    + "\" data-condition=\""
    + alias4(((helper = (helper = helpers.condition || (depth0 != null ? depth0.condition : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"condition","hash":{},"data":data,"loc":{"start":{"line":1,"column":67},"end":{"line":1,"column":80}}}) : helper)))
    + "\" data-postID=\""
    + alias4(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"count","hash":{},"data":data,"loc":{"start":{"line":1,"column":95},"end":{"line":1,"column":104}}}) : helper)))
    + "\">\r\n  <div class=\" post-content\">\r\n    <div class=\"book-image-container\">\r\n      <img src=\""
    + alias4(((helper = (helper = helpers.imgURL || (depth0 != null ? depth0.imgURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":16},"end":{"line":4,"column":26}}}) : helper)))
    + "\">\r\n    </div>\r\n    <div class=\"book-info-container\">\r\n      <div class=\"book-price\">\r\n        <a href=\"#\" class=\"price\">\r\n          Price: $"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":9,"column":18},"end":{"line":9,"column":27}}}) : helper)))
    + "\r\n        </a>\r\n      </div>\r\n      <div class=\"book-condition\">Condition: "
    + alias4(((helper = (helper = helpers.condition || (depth0 != null ? depth0.condition : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"condition","hash":{},"data":data,"loc":{"start":{"line":12,"column":45},"end":{"line":12,"column":58}}}) : helper)))
    + "</div>\r\n    </div>\r\n  </div>\r\n</div>";
},"useData":true});
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
    + " alt=\"\">\r\n    </div>\r\n    <div class=\"book-info\">\r\n      <a href=\"#\">\r\n        <p class=\"title\"><span class=\"book-label\">Title: </span>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.title : stack1), depth0))
    + "</p>\r\n      </a>\r\n      <p><span class=\"book-label\">Edition: </span>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.edition : stack1), depth0))
    + "</p>\r\n      <p><span class=\"book-label\">Author: </span>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.author : stack1), depth0))
    + "</p>\r\n      <p><span class=\"book-label\">Edition: </span>"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":12,"column":50},"end":{"line":12,"column":56}}}) : helper)))
    + "</p>\r\n    </div>\r\n  </div>\r\n\r\n</div>";
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
    + "</label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"create-post-container\">\r\n      <label for=\"create-condition\" class=\"create-post-label\">Condition</label>\r\n      <div class=\"create-post-element\">\r\n        <select id=\"create-condition\" class=\"create-input\" name=\"create-condition\">\r\n          <option selected value=\"\"></option>\r\n          <option>New</option>\r\n          <option>Excellent</option>\r\n          <option>Good</option>\r\n          <option>Fair</option>\r\n          <option>Poor</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"create-post-container\">\r\n      <label for=\"create-price\" class=\"create-post-label\">Price</label>\r\n      <div class=\"create-post-element\">\r\n        <input type=\"text\" name=\"price-text\" id=\"price-text\" class=\"create-input\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"create-post-container\">\r\n      <label for=\"create-meet\" class=\"create-post-label\">Meetup Info</label>\r\n      <div class=\"create-post-element\">\r\n        <input type=\"text\" name=\"meet-text\" id=\"meet-text\" class=\"create-input\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"create-post-container\">\r\n      <label for=\"create-description\" class=\"create-post-label\">Description</label>\r\n      <div class=\"create-post-element\">\r\n        <input type=\"text\" name=\"description-text\" id=\"description-text\" class=\"create-input\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"create-post-container\">\r\n      <label for=\"create-email\" class=\"create-post-label\">Email</label>\r\n      <div class=\"create-post-element\">\r\n        <input type=\"text\" name=\"description-text\" id=\"email-text\" class=\"create-input\">\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"create-post-container\">\r\n      <label for=\"create-description\" class=\"create-post-label\">Phone</label>\r\n      <div class=\"create-post-element\">\r\n        <input type=\"text\" name=\"phone-text\" id=\"phone-text\" class=\"create-input\">\r\n      </div>\r\n    </div>\r\n    <div class=\"create-post-container\">\r\n      <label for=\"create-url\" class=\"create-post-label\">Image</label>\r\n      <div class=\"create-post-element\">\r\n        <label name=\"url-text\" id=\"url-text\" class=\"create-input\">"
    + alias4(((helper = (helper = helpers.imgURL || (depth0 != null ? depth0.imgURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgURL","hash":{},"data":data,"loc":{"start":{"line":86,"column":66},"end":{"line":86,"column":76}}}) : helper)))
    + "</label>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div class=\"button-group\">\r\n  <button type=\"button\" id=\"create-back\" class=\"btn primary-color\">Go Back</button>\r\n  <button type=\"button\" id=\"create-accept\" class=\"btn primary-color\">Create</button>\r\n</div>";
},"useData":true});
templates['sell'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\r\n    <main class=\"searchPost-container\">\r\n        <div class=\"searchPost-text\" id=\"search-title\">\r\n            <h2>Sell a book</h2>\r\n        </div>\r\n        <div class=\"searchPost-container\">\r\n            <div class=\"search-class\">\r\n                <label for=\"search-class\" class=\"searchPost-input-label\">Class</label>\r\n                <div class=\"search-post-element\">\r\n                    <input type=\"text\" name=\"search-text\" id=\"search-text\" class=\"search-input\"\r\n                        placeholder=\"Enter your class\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"searchPost-container\">\r\n            <div class=\"search-footer\">\r\n                <button type=\"button\" id=\"search-action-button\" class=\"search--button\">🡪</button>\r\n            </div>\r\n        </div>\r\n    </main>";
},"useData":true});
})();