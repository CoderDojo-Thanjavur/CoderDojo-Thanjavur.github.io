jQuery(function(t){function e(){return{language:{errorLoading:function(){return wc_country_select_params.i18n_searching},inputTooLong:function(t){var e=t.input.length-t.maximum;return 1===e?wc_country_select_params.i18n_input_too_long_1:wc_country_select_params.i18n_input_too_long_n.replace("%qty%",e)},inputTooShort:function(t){var e=t.minimum-t.input.length;return 1===e?wc_country_select_params.i18n_input_too_short_1:wc_country_select_params.i18n_input_too_short_n.replace("%qty%",e)},loadingMore:function(){return wc_country_select_params.i18n_load_more},maximumSelected:function(t){return 1===t.maximum?wc_country_select_params.i18n_selection_too_long_1:wc_country_select_params.i18n_selection_too_long_n.replace("%qty%",t.maximum)},noResults:function(){return wc_country_select_params.i18n_no_matches},searching:function(){return wc_country_select_params.i18n_searching}}}}if("undefined"==typeof wc_country_select_params)return!1;if(t().selectWoo){var n=function(){t("select.country_select:visible, select.state_select:visible").each(function(){var n=t.extend({placeholderOption:"first",width:"100%"},e());t(this).selectWoo(n),t(this).on("select2:select",function(){t(this).focus()})})};n(),t(document.body).bind("country_to_state_changed",function(){n()})}var o=wc_country_select_params.countries.replace(/&quot;/g,'"'),c=t.parseJSON(o);t(document.body).on("change","select.country_to_state, input.country_to_state",function(){var e=t(this).closest(".woocommerce-billing-fields, .woocommerce-shipping-fields, .woocommerce-shipping-calculator");e.length||(e=t(this).closest(".form-row").parent());var n=t(this).val(),o=e.find("#billing_state, #shipping_state, #calc_shipping_state"),i=o.parent(),a=o.attr("name"),r=o.attr("id"),s=o.val(),_=o.attr("placeholder")||o.attr("data-placeholder")||"";if(c[n])if(t.isEmptyObject(c[n]))o.parent().hide().find(".select2-container").remove(),o.replaceWith('<input type="hidden" class="hidden" name="'+a+'" id="'+r+'" value="" placeholder="'+_+'" />'),t(document.body).trigger("country_to_state_changed",[n,e]);else{var l="",u=c[n];for(var p in u)u.hasOwnProperty(p)&&(l=l+'<option value="'+p+'">'+u[p]+"</option>");o.parent().show(),o.is("input")&&(o.replaceWith('<select name="'+a+'" id="'+r+'" class="state_select" data-placeholder="'+_+'"></select>'),o=e.find("#billing_state, #shipping_state, #calc_shipping_state")),o.html('<option value="">'+wc_country_select_params.i18n_select_state_text+"</option>"+l),o.val(s).change(),t(document.body).trigger("country_to_state_changed",[n,e])}else o.is("select")?(i.show().find(".select2-container").remove(),o.replaceWith('<input type="text" class="input-text" name="'+a+'" id="'+r+'" placeholder="'+_+'" />'),t(document.body).trigger("country_to_state_changed",[n,e])):o.is('input[type="hidden"]')&&(i.show().find(".select2-container").remove(),o.replaceWith('<input type="text" class="input-text" name="'+a+'" id="'+r+'" placeholder="'+_+'" />'),t(document.body).trigger("country_to_state_changed",[n,e]));t(document.body).trigger("country_to_state_changing",[n,e])}),t(function(){t(":input.country_to_state").change()})});