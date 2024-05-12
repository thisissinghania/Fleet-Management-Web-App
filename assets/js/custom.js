// ================================================
// LOADING JS FOR ALL PAGES
// ================================================ 
$(window).on('load', function(){
   $('.fixed_loading').fadeOut();
});


// ================================================
// THIS CODE IS FOR SIDEBAR NAVIGATION LIST
// ================================================ 
$(".sidebar .side_nav > ul > li > a, .sidebar .side_nav > ul > li > i").click(function(){
	$(this).parents("li").find(".dropdown_nav").slideToggle();
	$(this).parents("li").prevAll().removeClass("active_nav");
	$(this).parents("li").prevAll("li").find(".dropdown_nav").slideUp();
	$(this).parents("li").toggleClass("active_nav");
	$(this).parents("li").nextAll().removeClass("active_nav");
	$(this).parents("li").nextAll("li").find(".dropdown_nav").slideUp();
});


// ================================================
// CODE FOR TOGGLE BAR SIDEVNAV HIDE AND SHOW
// ================================================ 
$(".topbar .toggle_bar").click(function(){
	$(this).toggleClass("active_toggle");
	$(".sidebar").toggleClass("close_sidebar");
	$(".right_section").toggleClass("remove_space");
});


// ================================================
// ADMIN PROFILE CLICK FUNCTIONS LOGOUT
// ================================================ 
$(".user_profile i").click(function(){
	$(this).parents(".user_profile").find(".user_popup").fadeToggle();
	$(".topbar").toggleClass("z_index_high3");
});


// ================================================
// CODE FOR TOP RIGHT ICONS ON MOBILE VIEW
// ================================================ 
$(".mobile_click i").click(function(){
	$(this).parent().toggleClass("active_icons");
	$(".right_top_bar").toggleClass("show_top_icons");
	$(".topbar").toggleClass("z_index_high");
});


// ================================================
// TOOLTIP FOR ALL DASHBOARD
// ================================================ 
 $('[data-toggle="tooltip"]').tooltip(); 


// ================================================
// DRAG AND RESIZE AND SORT ALL DASHBOARD DATA (JQUERY UI)
// ================================================ 
$( ".draggable" ).draggable();
$( ".resizable" ).resizable();
$( ".sortable" ).sortable();


// ================================================
// MINI POPUP CODE ARE NOT A DYNAMIC CODE. THESE CODE ARE JUST FOR A DEMO PURPOSE
// ================================================
// mini popup of map ( For vehicle show ) start  
$(".mini_popup .view_part .remove").click(function(){
	$(".mini_popup").fadeOut();
});

$(".mini_popup .view_part li").click(function(){
	$(this).addClass("active_list");
	$(this).siblings().removeClass("active_list");
	$(".map_bottom_part").removeClass("show_now");
});

$(".mini_popup .view_part li.road_view").click(function(){
	$(".map_bottom_part").toggleClass("show_now");
	$(".close_area").toggleClass("mob_show"); // ----- this code works for only mobile view
});

//this code is only works for mobile view
$(".close_area").click(function(){
	$(".map_bottom_part").toggleClass("show_now");
	$(".close_area").toggleClass("mob_show");
});
// mini popup of map ( For vehicle show ) End


// ================================================
// HIDE BOX OF MAP GEOFENCES/FLEET/POINT OF INTEREST/LANDMARK
// ================================================
$(".all_main_headlines .inset_icons .remove_box").click(function(){
	$(this).parents(".draggable").fadeOut();
});


// ================================================
// SEARCH TOGGLE FOR MAP  GEOFENCES/FLEET/POINT OF INTEREST/LANDMARK
// ================================================
$(".all_main_headlines .inset_icons .main-search-toggle").click(function(){
	$(".main_search").slideToggle();
});


// ================================================
// GEOFENCES/POINT OF INTEREST/LANDMARK CREATE NEW CLICK FUNCTION
// ================================================
$(".all_main_headlines .inset_icons .new-data-show").click(function(){
	$(this).parents(".draggable").find(".tab_view1").slideUp();
	$(this).parents(".draggable").find(".tab_view2").slideDown();
	$(this).parents(".draggable").find(".back-data-show").show();
	$(this).parents(".draggable").find(".new-data-show").hide();
});

// ================================================
// GEOFENCES/POINT OF INTEREST/LANDMARK LIST VIEW CLICK FUNCTION
// ================================================
$(".all_main_headlines .inset_icons .back-data-show").click(function(){
	$(this).parents(".draggable").find(".tab_view1").slideDown();
	$(this).parents(".draggable").find(".tab_view2").slideUp();
	$(this).parents(".draggable").find(".back-data-show").hide();
	$(this).parents(".draggable").find(".new-data-show").show();
});


// ================================================
// ADD BACKGROUND COLOR & IMAGE ON FLEET LIST PARENT 
// ================================================
$(".accordians .one-list").parents(".accordians").addClass("bg_dropdown");


// ================================================
// ACCORDIAN CLICKS ON MAP VIEW FLEETS
// ================================================
$('.accordians .acc_title').on('click', function(e) {
  if (e.target !== this)
    return;
  $(this).next().slideToggle();
  $(this).toggleClass("rotate_img");
});
$(".accordians .acc_title span").click(function() {
  $(this).parent(".acc_title").trigger("click");
});


// ================================================
// ON CLICK PARENT INPUT TO SELECT ALL CHILD INPUT IN MAP VIEW FLEET BOX
// ===============================================
$('.accordians .acc_title .parentCheckBox').click(function(){
    if($(this).prop("checked") == true){
        $(this).parents(".acc_title").next().find('input[type="checkbox"]').prop("checked", true);
    }
    else if($(this).prop("checked") == false){
        $(this).parents(".acc_title").next().find('input[type="checkbox"]').prop("checked", false);
    }
});


// ================================================
// THREE DOTS CLICK ON MAP VIEW FLEET LIST
// ================================================
$(".three_dots").click(function(){
	$(this).next().toggleClass("show_function");
});

$(".map_functions span").click(function(){
	$(this).toggleClass("active_function");
	$(this).siblings().removeClass("active_function");
});


// ================================================
// GEOFENCY/LANDMARKS/POINT OF INTEREST CHECKBOXES CLICK FUNCTION
// ================================================
$('.fences_list_heading .main_check input').click(function(){
    if($(this).prop("checked") == true){
        $(this).parents(".fences_list_heading").next(".geofence_list_data").find('input[type="checkbox"]').prop("checked", true);
    }
    else if($(this).prop("checked") == false){
        $(this).parents(".fences_list_heading").next(".geofence_list_data").find('input[type="checkbox"]').prop("checked", false);
    }
});


// ================================================
// SAVE RECORDS FOR GEOFENCY
// ================================================
var li_get = $("#geofances_setting_sections .geofence_list_data ul li").length;
$("#geofances_setting_sections .all_records span").text(li_get);
$(".geofence_list_data li .action_btn").click(function(){
	$(this).parent("li").remove();
	var li_get = $("#geofances_setting_sections .geofence_list_data ul li").length;
	$("#geofances_setting_sections .all_records span").text(li_get);
});

// ================================================
// SAVE RECORDS FOR LANDMARKS
// ================================================
var li_get2 = $("#landmarks_setting_sections .geofence_list_data ul li").length;
$("#landmarks_setting_sections .all_records span").text(li_get2);
$(".geofence_list_data li .action_btn").click(function(){
	$(this).parent("li").remove();
	var li_get2 = $("#landmarks_setting_sections .geofence_list_data ul li").length;
	$("#landmarks_setting_sections .all_records span").text(li_get2);
});

// ================================================
// SAVE RECORDS FOR POINT OF INTEREST
// ================================================
var li_get3 = $("#point_of_inetrest_setting_sections .geofence_list_data ul li").length;
$("#point_of_inetrest_setting_sections .all_records span").text(li_get3);
$(".geofence_list_data li .action_btn").click(function(){
	$(this).parent("li").remove();
	var li_get3 = $("#point_of_inetrest_setting_sections .geofence_list_data ul li").length;
$("#point_of_inetrest_setting_sections .all_records span").text(li_get3);
});


// ================================================
// MAP VIEW RIGHT SIDE OF SCREEN TABS CLICKS FUNCTION
// ================================================
$(".tabs ul li a").click(function(){
	$(this).parent().toggleClass("active_tab");
	$(this).parent().siblings().removeClass("active_tab");
});


// ================================================
// ALL BOXES GEOFENCE/ LANDMARKS/ POINT AND FLEET/ HIDE AND SHOW FUNCTIONS ON MAP VIEW
// ================================================
$("#geo_click").click(function(){
	$("#fleet_setting_sections, #landmarks_setting_sections, #point_of_inetrest_setting_sections").slideUp();
	$("#geofances_setting_sections").animate({
	    width: 'toggle',
	    height:'toggle'
	 });
});
$("#fleet_click").click(function(){
	$("#geofances_setting_sections, #landmarks_setting_sections, #point_of_inetrest_setting_sections").slideUp();
	$("#fleet_setting_sections").animate({
	    width: 'toggle',
	    height:'toggle'
	 });
});
$("#land_click").click(function(){
	$("#geofances_setting_sections, #fleet_setting_sections, #point_of_inetrest_setting_sections").slideUp();
	$("#landmarks_setting_sections").animate({
	    width: 'toggle',
	    height:'toggle'
	 });
});
$("#point_click").click(function(){
	$("#geofances_setting_sections, #fleet_setting_sections, #landmarks_setting_sections").slideUp();
	$("#point_of_inetrest_setting_sections").animate({
	    width: 'toggle',
	    height:'toggle'
	 });
});


// ================================================
// ON CLICK FULL MAP VIEW
// ================================================
$(".click_to_full").click(function(){
	$(".right_section").toggleClass("full_map_view");
	$(".click_to_full img.fl_view, .click_to_full .cl_view").toggle();
});


// // header top right icon click js
// $(".extra_links").click(function(){
// 	$(this).find(".dropdown_links").fadeToggle(100);
// 	$(".topbar").toggleClass("z_index_high2");
// });


// ================================================
// HEADER SEARCH CLICK VIEW
// ================================================
$(".desk_search_click").click(function(){
	$(".full_search_area").toggleClass("desktop_search");
}) 

// ================================================
// HEADER SEARCH CLICK VIEW ON MOBILE
// ================================================
$(".mobile_search_click").click(function(){
	$(".full_search_area").addClass("show_search_bar");
}) 
$(".mobile_search_close").click(function(){
	$(".full_search_area").removeClass("show_search_bar");
}) 


// // form_fields playback
// $(".vehicle_name .clear").click(function(){
// 	$(this).parents(".vehicle_name").find("input").val("");
// });



// ================================================
// DATE AND TIMEPICKER
// ================================================
$(".datepicker").datepicker();
$('.timepicker').timepicker();


// ================================================
// REMOVE SORTABLE FUNCTION ON MOBILE AND TABLET VIEW FOR WHOLE DASHBOARD
// ================================================
if ($(window).width() <= 1024) {
 $("*").removeClass("sortable, ui-sortable, ui-sortable-handle");
}

// ================================================
// OPEN PLAYBACK POPUP VIEW ON DOUBLE CLICK IN FLEET 
// ================================================
$('.all_type_list .one-list .unique_numbers').dblclick(function(){
	$("#map_playback_view").fadeIn();
}); 
$('#map_playback_view .register_new_user .form_btn input').click(function(){
	$("#playback_popup_map").fadeIn();
	$(this).parents("#map_playback_view").fadeOut();
}); 


// ================================================
// FOR GEOFENCE/LANDMARKS/POINT OF INTEREST FORMS IN MAP VIEW
// ================================================
$(".map_form .fields_box ul li").click(function(){
	$(this).addClass("act_now");
	$(this).siblings().removeClass("act_now");
});
$(".second_form_title").click(function(){
	$(this).next(".second_form_inset").slideToggle();
});


// ================================================
// FILTER AND LIST-GRID VIEW PART CLICK FUNCTIONS
// ================================================
$(".title_bar_left .filter, .filter_part .filter_btn .close_filter").click(function(){
	$(".filter_part").slideToggle();
});
$(".title_bar_left .list_view").click(function(){
	$(".all_users_box").addClass("list_view_show");
});
$(".title_bar_left .grid_view").click(function(){
	$(".all_users_box").removeClass("list_view_show");
});


// ================================================
// ALL POPUP CLOSE FUNCTION
// ================================================
$('.add_new_user_popup, .login_popup').on('click', function(e) {
  if (e.target !== this)
    return;
  $(this).fadeOut();
  $("body").removeClass("scroll_hidden");
});

$(".add_new_user_popup .title i, .add_new_user_popup .close_btn").click(function(){
	$(this).parents(".add_new_user_popup").fadeOut();
});


// ================================================
// TOPBAR ALERTS, MAINTAIN, REMIND LOAD FOR ALL PAGES
// ================================================
$(".topbar_alerts").click(function(){
	$("#topbar_alerts").fadeIn().resize();
});
$(".topbar_maintain").click(function(){
	$("#topbar_maintain").fadeIn().resize();
});
$("body").on("click", "span.change", function(){
	$("#change_oil_filter").fadeToggle();
});
$(".topbar_reminder").click(function(){
	$("#topbar_reminder").fadeIn().resize();
});


// ================================================
// ADD CLASS ON DETAILS POPUP ROW DIV
// ================================================ 
$(".detail_list").parents(".row").addClass("det_padding");


////////////////////////////////////////////////////////////////////////////////////////////
// ============================Login page Js ===============================================
////////////////////////////////////////////////////////////////////////////////////////////

// login page cogs popup Close function
$(".login_popup .popup_view_area .remove").click(function(){
	$(this).parents(".login_popup").fadeOut();
	$("body").removeClass("scroll_hidden");
});

$("[class*='_cog']").click(function(){
	var get_form = $(".hide_log_form").html();
	$(".login_popup .pop-log-form").html(get_form);
});

// first-cog
$(".first_cog").click(function(){
	var get_cog = $(this).wrap('<p/>').parent().html();
	var headline_get = $(this).find('h6').text();
	$("#ideal_tracking").find("h2").text(headline_get);
	$("#ideal_tracking").find(".cog_ico").html(get_cog);
	$("#ideal_tracking").fadeToggle();
	$("body").addClass("scroll_hidden");
});

// second-cog
$(".second_cog").click(function(){
	var get_cog = $(this).wrap('<p/>').parent().html();
	var headline_get = $(this).find('h6').text();
	$("#ideal_customer").find("h2").text(headline_get);
	$("#ideal_customer").find(".cog_ico").html(get_cog);
	$("#ideal_customer").fadeToggle();
	$("body").addClass("scroll_hidden");
});

// third-cog
$(".third_cog").click(function(){
	var get_cog = $(this).wrap('<p/>').parent().html();
	var headline_get = $(this).find('h6').text();
	$("#ideal_project").find("h2").text(headline_get);
	$("#ideal_project").find(".cog_ico").html(get_cog);
	$("#ideal_project").fadeToggle();
	$("body").addClass("scroll_hidden");
});


// fourth-cog
$(".fourth_cog").click(function(){
	var get_cog = $(this).wrap('<p/>').parent().html();
	var headline_get = $(this).find('h6').text();
	$("#ideal_warehouse").find("h2").text(headline_get);
	$("#ideal_warehouse").find(".cog_ico").html(get_cog);
	$("#ideal_warehouse").fadeToggle();
	$("body").addClass("scroll_hidden");
});

// fifth-cog
$(".fifth_cog").click(function(){
	var get_cog = $(this).wrap('<p/>').parent().html();
	var headline_get = $(this).find('h6').text();
	$("#ideal_resource").find("h2").text(headline_get);
	$("#ideal_resource").find(".cog_ico").html(get_cog);
	$("#ideal_resource").fadeToggle();
	$("body").addClass("scroll_hidden");
});


// fifth-cog
$(".sixth_cog").click(function(){
	var get_cog = $(this).wrap('<p/>').parent().html();
	var headline_get = $(this).find('h6').text();
	$("#ideal_dispatching").find("h2").text(headline_get);
	$("#ideal_dispatching").find(".cog_ico").html(get_cog);
	$("#ideal_dispatching").fadeToggle();
	$("body").addClass("scroll_hidden");
});



////////////////////////////////////////////////////////////////////////////////////////////
// ============================= User Page Js ===========================================
////////////////////////////////////////////////////////////////////////////////////////////

// add new user
$("#user_section .title_bar_right .add_user").click(function(){
	$("#add_new_user").fadeToggle();
});

// edit user
$("#user_section .user_all_icons .u_edit").click(function(){
	$("#edit_current_user").fadeToggle();
});

// change password
$("#user_section .user_all_icons .u_password").click(function(){
	$("#change_password").fadeToggle();
});

// active deactive users
$('.user_all_icons .switch input:checkbox').change(function(){
    if($(this).is(":checked")) {
        $(this).parents(".user_box").removeClass("off_user");
    } else {
       $(this).parents(".user_box").addClass("off_user");
    }
});


////////////////////////////////////////////////////////////////////////////////////////////
// ============================= Fleet Page Js ===========================================
////////////////////////////////////////////////////////////////////////////////////////////


// fleet page three dots click function on fleet list view
$('.fleet_item .all_actions .view_pop').on('click', function(e) {
  if (e.target !== this)
    return;
   $(this).parents(".fleet_tree_box").find(".pop_action").slideUp();
   $(this).parents(".fleet_tree_box").nextAll().find(".pop_action").slideUp();
   $(this).parents(".fleet_tree_box").prevAll().find(".pop_action").slideUp();

   $(this).parents(".fleet_tree_box").find(".view_pop").show();
   $(this).parents(".fleet_tree_box").nextAll().find(".view_pop").show();
   $(this).parents(".fleet_tree_box").prevAll().find(".view_pop").show();

   $(this).parents(".fleet_tree_box").find(".hide_pop").hide();
   $(this).parents(".fleet_tree_box").nextAll().find(".hide_pop").hide();
   $(this).parents(".fleet_tree_box").prevAll().find(".hide_pop").hide();

   $(this).nextAll(".pop_action").slideDown();
   $(this).hide();
   $(this).next(".hide_pop").show();
});

 
$('.fleet_item .all_actions .hide_pop').on('click', function(e) {
  if (e.target !== this)
    return;
    $(this).nextAll(".pop_action").slideUp();
    $(this).hide();
    $(this).prevAll(".view_pop").show();
});

$(document).click(function(e){
    if( $(e.target).closest(".view_pop").length > 0 ) {
        return false;
    }
    $(".pop_action").slideUp();
    $(".hide_pop").hide();
    $(".view_pop").show();
});


$(".fleet_tree_heading .icons span.remove_box").click(function(){
	var answer = window.confirm("Are you sure you want to remove?");
	if (answer) {
	    $(this).parents(".fleet_tree_box").remove();
	    $(".tooltip").fadeOut(100);
	}
	else {
	   return false;
	}
});


$("#fleet_section .title_bar_left .list_view").click(function(){
	$(".fleet_tree_box").addClass("grid_fleet_view");
});
$("#fleet_section .title_bar_left .grid_view").click(function(){
	$(".fleet_tree_box").removeClass("grid_fleet_view");
});


// lists popup js
$("#fleet_section .title_bar_right .add_user").click(function(){
	$("#add_new_fleet").fadeToggle();
});

$(".all_fleets .fleet_tree_heading span.add_new_list").click(function(){
	$("#add_new_fleet_list").fadeToggle();
});

$(".all_fleets .fleet_item .pop_action li.add_child_fleet").click(function(){
	$("#add_child_fleet").fadeToggle();
});

$(".all_fleets .fleet_item .fleet_area .pop_action li.delete_fleet").click(function(){
	var answer = window.confirm("Are you sure you want to remove?");
	if (answer) {
	    $(this).closest(".fleet_item").remove();
		$(".tooltip").fadeOut(100);
	}
	else {
	   return false;
	}
});

$(".all_fleets .fleet_item .pop_action li.edit_current_fleet").click(function(){
	$("#edit_current_fleet").fadeToggle();
});

$(".all_fleets .fleet_item .pop_action li.assign_vehicle").click(function(){
	$("#assign_vehicle").fadeToggle().resize();
});

$(".all_fleets .fleet_item .pop_action li.assign_user").click(function(){
	$("#assign_users").fadeToggle().resize();
});

$(".fleet_tree_box .fleet_item .fleet_area span").click(function(){
	$(this).parent().nextAll(".inset_dropdowns").slideToggle();
	$(this).toggleClass("rotate_img2");
});

$(".fleet_tree_box .inset_dropdowns .fleet_item").parents(".inset_dropdowns").prevAll(".fleet_area").addClass("bg_with_image").append("<div class='in_set_filter'><i class='fa fa-filter'></i></div>");


// All table Data
$('.display').DataTable({
    responsive: true,
    dom: 'lBfrtip',
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5',
        ]
});


$('.fleet_tree_heading .icons span.fl_filter').click(function() {
	$(this).parents(".fleet_tree_heading").next(".fl_filter_popup").slideToggle(140);
});
$(".fl_filter_popup .fl_btns .fl-close input").click(function(){
	$(this).parents(".fl_filter_popup").slideUp(400);
});
$(".fleet_item .in_set_filter").click(function(){
	$(this).parents(".fleet_area").next(".fl_filter_popup").slideToggle(140);
});


$(".pop_up_tabs ul li").click(function(){
	$(this).addClass('active');
	$(this).siblings().removeClass('active');
});
$(".pop_up_tabs ul li.assinged_lists").click(function(){
	$(".assinged_item").fadeIn();
	$(".unassinged_item").fadeOut();
});
$(".pop_up_tabs ul li.unassinged_lists").click(function(){
	$(".unassinged_item").fadeIn();
	$(".assinged_item").fadeOut();
});


////////////////////////////////////////////////////////////////////////////////////////////
// ============================= Drivers Page Js ===========================================
////////////////////////////////////////////////////////////////////////////////////////////

$(".all_drivers .user_box .driver_cta .remove_driver").click(function(){
	var answer = window.confirm("Are you sure you want to remove?");
	if (answer) {
	    $(this).parents(".user_box").remove();
		$(".tooltip").fadeOut(100);
	}
	else {
	   return false;
	}
});


$("#driver_section .title_bar_right .add_user").click(function(){
	$("#add_new_driver").fadeToggle();
});

$("#driver_section .user_box .driver_cta .edit_driver").click(function(){
	$("#edit_current_driver").fadeToggle();
});

$("#driver_section .all_drivers .driver_details .id_card").click(function(){
	$("#drive_id_card").fadeToggle();
});

$("#driver_section .all_drivers .driver_details .driver_license").click(function(){
	$("#driver_license").fadeToggle();
});

$("#driver_section .all_drivers .driver_details .insurance").click(function(){
	$("#health_insurance").fadeToggle();
});

$("#driver_section .all_drivers .driver_details .rfid").click(function(){
	$("#rfid_number").fadeToggle();
});

$("#driver_section .user_box .driver_cta .dtl_btn").click(function(){
	$("#driver_detail_popup").fadeToggle().resize();
});




////////////////////////////////////////////////////////////////////////////////////////////
// ============================= Shift Page Js ===========================================
////////////////////////////////////////////////////////////////////////////////////////////

// All Page table Remove js
$(".display").on('click', '.remove_lists', function(){
	var answer = window.confirm("Are you sure you want to remove?");
	if (answer) {
		$(this).closest("tr").prev(".parent").remove();
	    $(this).closest("tr").remove();
		$(".tooltip").fadeOut(100);
	}
	else {
	   return false;
	}
});


$("#shifts_section .title_bar_right .add_user").click(function(){
	$("#new_shift_popup").fadeToggle();
});

$("#shifts_section").on("click", ".edit_lists", function(){
	$("#edit_shift_popup").fadeToggle();
});



////////////////////////////////////////////////////////////////////////////////////////////
// ============================= Maintenance Page Js ===========================================
////////////////////////////////////////////////////////////////////////////////////////////


$("#maintenance_section .title_bar_right .add_user").click(function(){
	$("#add_maintenance_popup").fadeToggle();
});

$("#maintenance_section").on("click", ".detail_lists", function(){
	$("#maintenance_detail_popup").fadeToggle();
});


////////////////////////////////////////////////////////////////////////////////////////////
// ============================= Fuel Tanks Page Js ===========================================
////////////////////////////////////////////////////////////////////////////////////////////


$("#fuel_tank_section .title_bar_right .add_user").click(function(){
	$("#new_fuel_tank_popup").fadeToggle();
});

$("#fuel_tank_section").on("click", ".edit_lists", function(){
	$("#edit_fuel_tank_popup").fadeToggle();
});

$("#fuel_tank_section").on("click", ".fuel-calibration", function(){
	$("#fuel_calibration_popup").fadeToggle().resize();
});

$("#fuel_tank_section").on("click", ".assign_vehicle_cta", function(){
	$("#assign_vehicle_for_tank").fadeToggle().resize();
});


////////////////////////////////////////////////////////////////////////////////////////////
// ============================= Invoice Page Js ===========================================
////////////////////////////////////////////////////////////////////////////////////////////


$("#invoice_section .title_bar_right .add_user").click(function(){
	$("#add_new_invoice_popup").fadeToggle();
});

$("#invoice_section").on("click", ".edit_lists", function(){
	$("#edit_invoice_popup").fadeToggle();
});

$("#invoice_section ").on("click", ".invoice_detail_icon", function(){
	$("#invoice_details_popup").fadeToggle();
});



////////////////////////////////////////////////////////////////////////////////////////////
// ============================= Consumption Page Js ===========================================
////////////////////////////////////////////////////////////////////////////////////////////


$("#consumption_section").on("click", ".inset_consumption", function(){
	$("#inset_consumption_popup").fadeToggle();
});

$("#consumption_section").on("click", ".fuel_consumption_cta", function(){
	$("#fuel_consumption_popup").fadeToggle().resize();
});




////////////////////////////////////////////////////////////////////////////////////////////
// ============================= Report Page Js ===========================================
////////////////////////////////////////////////////////////////////////////////////////////


$("#report_section .title_bar_right .play_back").click(function(){
	$("#playback_popup").fadeToggle();
});

$("#report_section .title_bar_left .filter_by_fleet").click(function(){
	$("#report_fleet_setting_sections").fadeToggle();
});

$('#report_fleet_setting_sections .single_fl_box .headings .fl_parent_input').click(function(){
    if($(this).prop("checked") == true){
        $(this).parents(".headings").nextAll().find('input[type="checkbox"]').prop("checked", true);
    }
    else if($(this).prop("checked") == false){
        $(this).parents(".headings").nextAll().find('input[type="checkbox"]').prop("checked", false);
    }
});
$('.fl_lists li span input[type="checkbox"]').click(function(){
    if($(this).prop("checked") == true){
        $(this).parents("span").nextAll().find('input[type="checkbox"]').prop("checked", true);
    }
    else if($(this).prop("checked") == false){
        $(this).parents("span").nextAll().find('input[type="checkbox"]').prop("checked", false);
    }
});

$(".single_fl_box .dropdown_fl").prev("span").addClass("has_drop_fl");

$(".has_drop_fl p").click(function(){
	$(this).parents(".has_drop_fl").next(".dropdown_fl").slideToggle();
	$(this).parents(".has_drop_fl").toggleClass("rotate_img");
});


$(".top_select_field select").change(function(){
    $(this).find("option:selected").each(function(){
        var optionValue = $(this).attr("value");
        if(optionValue){
            $(".filter_part form").not("#" + optionValue).hide();
            $("#" + optionValue).show();
        } else{
            $(".filter_part form").hide();
        }
    });
}).change();



////////////////////////////////////////////////////////////////////////////////////////////
// ============================= Geofences Page Js ===========================================
////////////////////////////////////////////////////////////////////////////////////////////


$("#geofences_section").on("click", ".geofence_edit_location", function(){
	$("#edit_location_popup").fadeToggle();
});

$("#geofences_section").on("click", ".geofence_assign_vehicle", function(){
	$("#geofence_vehicle_popup").fadeToggle().resize();
});

$("#geofences_section").on("click", ".geofence_detail_icon", function(){
	$("#geofence_detail_popup").fadeToggle();
});

$("#geofences_section").on("click", ".geofence_edit_lists", function(){
	$("#geofence_edit_popup").fadeToggle();
});


////////////////////////////////////////////////////////////////////////////////////////////
// ============================= landmarks Page Js ===========================================
////////////////////////////////////////////////////////////////////////////////////////////


$("#landmarks_section").on("click", ".landmarks_edit_location", function(){
	$("#landmarks_location_popup").fadeToggle();
});

$("#landmarks_section").on("click", ".landmarks_assign_vehicle", function(){
	$("#landmarks_vehicle_popup").fadeToggle().resize();
});

$("#landmarks_section").on("click", ".landmarks_detail_icon", function(){
	$("#landmarks_detail_popup").fadeToggle();
});

$("#landmarks_section").on("click", ".landmarks_edit_lists", function(){
	$("#landmarks_edit_popup").fadeToggle();
});


////////////////////////////////////////////////////////////////////////////////////////////
// ============================= Point Of Interest Page Js ===========================================
////////////////////////////////////////////////////////////////////////////////////////////


$("#interest_section").on("click", ".interest_edit_location", function(){
	$("#interest_location_popup").fadeToggle();
});

$("#interest_section").on("click", ".interest_detail_icon", function(){
	$("#interest_detail_popup").fadeToggle();
});

$("#interest_section").on("click", ".interest_edit_lists", function(){
	$("#interest_edit_popup").fadeToggle();
});


////////////////////////////////////////////////////////////////////////////////////////////
// ============================= Alert Page Js ===========================================
////////////////////////////////////////////////////////////////////////////////////////////


// Range Slide Start
function getTheColor( colorVal ) {
  	var theColor = "";
  	if ( colorVal < 50 ) {
			    myRed = 255;
			    myGreen = parseInt( ( ( colorVal * 2 ) * 255 ) / 100 );
		  }
	  else 	{
			    myRed = parseInt( ( ( 100 - colorVal ) * 2 ) * 255 / 100 );
			    myGreen = 255;
		  }
	  theColor = "rgb(" + myRed + "," + myGreen + ",0)"; 
  	return( theColor ); 
}

function refreshSwatch() {
	var coloredSlider = $( "#coloredSlider" ).slider( "value" ),
	myColor = getTheColor( coloredSlider );
	$( "#coloredSlider .ui-slider-range" ).css( "background-color", myColor );
	$( "#coloredSlider .ui-state-default, .ui-widget-content .ui-state-default" ).css( "background-color", myColor );
}

$(".slider_range").slider({
    orientation: "horizontal",
    range: "min",
    max: 100,
    value: 0,
    slide: refreshSwatch,
    change: refreshSwatch
});
// Range Slide End


$(".alert_detail span.alert_dtl").on("click", function(){
	$("#alert_detail_popup").fadeToggle();
});

$("#all_settings_setup .settings .lists span").on("click", function(){
	$("#speed_limit_popup").fadeToggle();
});

$(".alert_detail span.alert_atn").on("click", function(){
	$("#all_settings_setup").fadeToggle();
});


$('#alerts_section .title_bar_left .select_all').click(function() {
	$(this).toggleClass("active_all_click");
  var clicks = $(this).data('clicks');
  var input_get = $(".all_alert_boxes .user_box input[type='checkbox']");
  if (clicks) {
      $(input_get).prop("checked", false);
  } else {
    $(input_get).prop("checked", true);
  }
  $(this).data("clicks", !clicks);
});

$("#alerts_section .title_bar_right .apply_action").on("click", function(){
	$("#all_settings_setup").fadeToggle();
});




////////////////////////////////////////////////////////////////////////////////////////////
// ============================= Vehicle Page Js ===========================================
////////////////////////////////////////////////////////////////////////////////////////////

$("#vehicle_section .title_bar_right .add_user").click(function(){
	$("#add_new_vehicle").fadeIn();
});

$("#vehicle_section .v-detail").click(function(){
	$("#vehicle_detail_popup").fadeIn();
});

$("#vehicle_section .v-odometer").click(function(){
	$("#update_odometer").fadeIn();
});

$("#vehicle_section .v-edit").click(function(){
	$("#edit_vehicle").fadeIn();
});

$("#vehicle_section .v-registration").click(function(){
	$("#vehicle_registration_Expiry").fadeIn();
});

$("#vehicle_section .v-insurance").click(function(){
	$("#vehicle_insurance_Expiry").fadeIn();
});

$("#vehicle_section .v-assign").click(function(){
	$("#vehicle_assign_fleet").fadeIn();
});

$("#vehicle_section .v-status").click(function(){
	$("#vehicle_status").fadeIn();
});

$("#vehicle_section .v-driver").click(function(){
	$("#vehicle_drivers").fadeIn().resize();
});

$("#vehicle_section .v-near").click(function(){
	$("#nearest_vehicle").fadeIn().resize();
});


$(".all_vehicles .v-delete").click(function(){
	var answer = window.confirm("Are you sure you want to remove?");
	if (answer) {
	    $(this).parents(".user_box ").remove();
		$(".tooltip").fadeOut(100);
	}
	else {
	   return false;
	}
});


$(".all_vehicles .vehicle_icons .right_veh_icons").click(function(){
	$(this).parents(".vehicle_icons").find(".other_actions").slideToggle();
});

$(document).click(function(e){
    if( $(e.target).closest(".right_veh_icons").length > 0 ) {
        return false;
    }
    $(".all_vehicles .vehicle_icons .other_actions").slideUp();
});



////////////////////////////////////////////////////////////////////////////////////////////
// ============================= wizard Page Js ===========================================
////////////////////////////////////////////////////////////////////////////////////////////

$(".wizard .title_lists ul li span").click(function(){
	$(this).parents("li").nextAll().removeClass("active_span");
	$(this).parents("li").prevAll().addClass("active_span");
	$(this).parents("li").addClass("active_span");
});


// Department js
$(".depart_box .inset .check_area").click(function(){
	$(this).toggleClass("active_check");
	$(this).parents(".depart_box").nextAll().find(".check_area").removeClass("active_check");
	$(this).parents(".depart_box").prevAll().find(".check_area").removeClass("active_check");
});

$(".depart_box .depart_del").click(function(){
	var answer = window.confirm("Are you sure you want to remove?");
	if (answer) {
	    $(this).parents(".depart_box ").remove();
		$(".tooltip").fadeOut(100);
	}
	else {
	   return false;
	}
});

$(".depart_box .depart_edit").click(function(){
	$("#depart_edit").fadeIn();
});
$(".top_bar_title .add_new_depart").click(function(){
	$("#add_new_depart").fadeIn();
});
$(".depart_box .depart_empl").click(function(){
	$("#depart_empl").fadeIn().resize();
});



// wizard users js
$("#wizard_users .wizard_add_new_user").click(function(){
	$("#wizard_add_new_user").fadeIn();
});

$("#wizard_users .user_box .wizard_edit_user").click(function(){
	$("#wizard_edit_current_user").fadeIn();
});

$("#wizard_users .user_box .wizard_change_password").click(function(){
	$("#wizard_change_password").fadeIn();
});


// wizard fleet js
$("#wizard_fleets .wizard_add_new_fleet").click(function(){
	$("#wizard_add_new_fleet").fadeIn();
});

$("#wizard_fleets .fleet_tree_heading .add_new_list").click(function(){
	$("#wizard_add_new_fleet_list").fadeIn();
});

$("#wizard_fleets .pop_action .add_child_fleet").click(function(){
	$("#wizard_add_child_fleet").fadeIn();
});

$("#wizard_fleets .pop_action .edit_current_fleet").click(function(){
	$("#wizard_edit_current_fleet").fadeIn();
});

$("#wizard_fleets .pop_action .assign_user").click(function(){
	$("#wizard_assign_users").fadeIn().resize();
});

$("#wizard_fleets .pop_action .assign_vehicle").click(function(){
	$("#wizard_assign_vehicle").fadeIn().resize();
});


// wizard Shift page js
$("#wizard_shifts .wizard_add_new_shift").click(function(){
	$("#wizard_new_shift_popup").fadeIn().resize();
});

$("#wizard_shifts").on("click", ".edit_lists", function(){
	$("#wizard_edit_shift_popup").fadeToggle();
});

// wizard driver page js
$("#wizard_drivers .wizard_add_new_driver").click(function(){
	$("#wizard_add_new_driver").fadeToggle();
});

$("#wizard_drivers .user_box .driver_cta .edit_driver").click(function(){
	$("#wizard_edit_current_driver").fadeToggle();
});

$("#wizard_drivers .all_drivers .driver_details .id_card").click(function(){
	$("#wizard_drive_id_card").fadeToggle();
});

$("#wizard_drivers .all_drivers .driver_details .driver_license").click(function(){
	$("#wizard_driver_license").fadeToggle();
});

$("#wizard_drivers .all_drivers .driver_details .insurance").click(function(){
	$("#wizard_health_insurance").fadeToggle();
});

$("#wizard_drivers .all_drivers .driver_details .rfid").click(function(){
	$("#wizard_rfid_number").fadeToggle();
});

$("#wizard_drivers .user_box .driver_cta .dtl_btn").click(function(){
	$("#wizard_driver_detail_popup").fadeToggle().resize();
});


// wizard vehicle page js
$("#wizard_vehicles .wizard_add_new_vehicle").click(function(){
	$("#wizard_add_new_vehicle").fadeIn();
});

$("#wizard_vehicles .v-detail").click(function(){
	$("#wizard_vehicle_detail_popup").fadeIn();
});

$("#wizard_vehicles .v-odometer").click(function(){
	$("#wizard_update_odometer").fadeIn();
});

$("#wizard_vehicles .v-edit").click(function(){
	$("#wizard_edit_vehicle").fadeIn();
});

$("#wizard_vehicles .v-registration").click(function(){
	$("#wizard_vehicle_registration_Expiry").fadeIn();
});

$("#wizard_vehicles .v-insurance").click(function(){
	$("#wizard_vehicle_insurance_Expiry").fadeIn();
});

$("#wizard_vehicles .v-assign").click(function(){
	$("#wizard_vehicle_assign_fleet").fadeIn();
});

$("#wizard_vehicles .v-status").click(function(){
	$("#wizard_vehicle_status").fadeIn();
});

$("#wizard_vehicles .v-driver").click(function(){
	$("#wizard_vehicle_drivers").fadeIn().resize();
});

$("#wizard_vehicles .v-near").click(function(){
	$("#wizard_nearest_vehicle").fadeIn().resize();
});




// all wizard main steps
$(".wizard .wizard_department").click(function(){
	$("#wizard_department").fadeIn();
	$("#wizard_users, #wizard_fleets, #wizard_shifts, #wizard_drivers, #wizard_vehicles").fadeOut(10);
});
$(".wizard .wizard_users").click(function(){
	$("#wizard_users").fadeIn();
	$("#wizard_department, #wizard_fleets, #wizard_shifts, #wizard_drivers, #wizard_vehicles").fadeOut(10);
});
$(".wizard .wizard_fleets").click(function(){
	$("#wizard_fleets").fadeIn();
	$("#wizard_department, #wizard_users, #wizard_shifts, #wizard_drivers, #wizard_vehicles").fadeOut(10);
});
$(".wizard .wizard_shifts").click(function(){
	$("#wizard_shifts").fadeIn();
	$("#wizard_department, #wizard_users, #wizard_fleets, #wizard_drivers, #wizard_vehicles").fadeOut(10);
});
$(".wizard .wizard_drivers").click(function(){
	$("#wizard_drivers").fadeIn();
	$("#wizard_department, #wizard_users, #wizard_fleets, #wizard_shifts, #wizard_vehicles").fadeOut(10);
});
$(".wizard .wizard_vehicles").click(function(){
	$("#wizard_vehicles").fadeIn();
	$("#wizard_department, #wizard_users, #wizard_fleets, #wizard_shifts, #wizard_drivers").fadeOut(10);
});



// all new input fields
$(".field_inputs input").focus(function(){
   $(this).parents(".field_inputs").addClass("filled_box");
  });
  $(".field_inputs input").blur(function(){
	   tmpval = $(this).val();
	    if(tmpval == '') {
	        $(this).parents(".field_inputs").removeClass("filled_box");
	    } else {
	        $(this).parents(".field_inputs").addClass("filled_box");
	    }
 });
