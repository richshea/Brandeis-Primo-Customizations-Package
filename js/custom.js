(function()  {
            /* Load jQuery */
            var jquerymini = document.createElement("script");
            jquerymini.type = "text/javascript";
            jquerymini.async = true;
            jquerymini.src = "https://code.jquery.com/jquery-2.2.4.min.js";
            var c = document.getElementsByTagName("script")[0];
            c.parentNode.insertBefore(jquerymini, c); 
    
            /* Load LibAnswers 
            var LibAnswers = document.createElement("script");
            LibAnswers.type = "text/javascript";
            LibAnswers.async = true;
            LibAnswers.src = "https://api2.libanswers.com/1.0/widgets/7565";
            var d = document.getElementsByTagName("script")[0];
            d.parentNode.insertBefore(LibAnswers, d); 
            */
})();   

(function () {
 "use strict";
 'use strict';



    var app = angular.module('viewCustom', ['angularLoad']);
    
    app.controller('prmLoansAfterCtrl', [function () {
        
    }]);
    
     app.component('prmLoansAfter', {
        bindings: { parentCtrl: '<' },
        controller: 'prmLoansAfterCtrl',
        template: '<div><h2>Note on ILL Renewal</h2><p>ILL renewal is not available in OneSearch, but can be requested on <a target="_blank" href="https://syshomer.mainlib.brandeis.edu/illiad/illiad.dll?Action=10&Form=66">the ILLiad website here</a>.'
    });
    
     
    
        /* Add Featured Resources */
    app.controller('featuredTextCtrl', ['$http', '$scope', '$sce', function ($http, $scope, $sce) {
        $scope.featuredText = "Loading Featured Resources...";
        
        // These requests only work because the apache on scholartest was reconfigured to allow xhr requests. Additionally, if scholar-test is being shut down eventually, these scripts will need to be moved.

        
        $http({
            method: 'GET',
            url: 'https://mrmt.library.brandeis.edu/cgi-bin/alerts/primo_rss_feature.pl'
        }).then(function successCallback(response) {
            $scope.featuredText = $sce.trustAsHtml(response.data.replace(/document\.write\(\'|\'\);|\\/g, ''));
            //console.log($scope.featuredText);
        }, function errorCallback(response) {
            $scope.featuredText = "More new resources coming soon!";
        });

    }]);
    
        /* Add Primo LTS Alert */
    app.controller('alertTextCtrl', ['$http', '$scope', '$sce', function ($http, $scope, $sce) {
        $scope.alertText = "";
        
        // These requests only work because the apache on scholartest was reconfigured to allow xhr requests. Additionally, if scholar-test is being shut down eventually, these scripts will need to be moved.
        
        $http({
            method: 'GET',
            url: 'https://mrmt.library.brandeis.edu/cgi-bin/alerts/primo_lts_alert.pl'
        }).then(function successCallback(response) {
            $scope.alertText = $sce.trustAsHtml(response.data.replace(/document\.write\(\'|\'\);|\\/g, ''));
        }, function errorCallback(response) {
            $scope.alertText = "";
        });
    }]);
    
        /* Add Scholar Alert */
    app.controller('scholarTextCtrl', ['$http', '$scope', '$sce', function ($http, $scope, $sce) {
        $scope.scholarText = "";
        
        // These requests only work because the apache on scholartest was reconfigured to allow xhr requests. Additionally, if scholar-test is being shut down eventually, these scripts will need to be moved.
        
        $http({
            method: 'GET',
            url: 'https://mrmt.library.brandeis.edu/cgi-bin/alerts/scholar_rss_news.pl'
        }).then(function successCallback(response) {
            $scope.scholarText = $sce.trustAsHtml(response.data.replace(/document\.write\(\'|\'\);|\\/g, ''));
            //console.log($scope.scholarText);
        }, function errorCallback(response) {
            $scope.scholarText = "";
        });


    }]);
    
    /* End Add Featured Resources */
    
    /* Show Scopes dropdown by default and insert custom placeholder text */
    
    /* Version with the "Like our Look" button, only to display until the end of May */
    
    var date1 = new Date('June 1, 2018 00:00:00');
    
    var currentDate = new Date();
    
    if (currentDate < date1) {
    
        app.component('prmSearchBarAfter', {
            bindings: {parentCtrl: '<'},
            controller: 'SearchBarAfterController',
            template: `<div id="iconTray" style="padding:5px;">
            <div id="openIcon" style="display:none;min-width:30px;min-height:30px;" onclick="document.getElementById('myIcons').style.display = 'block'; document.getElementById('openIcon').style.display = 'none'; document.getElementById('closeIcon').style.display = 'block';">
            <img src="custom/BRAND/img/open.png" alt="close icon" style="min-width:30px;max-width:30px;height:30px;float:right;">
            </div>
            <div id="closeIcon" style="min-height:30px;min-width:30px;" onclick="document.getElementById('myIcons').style.display = 'none'; document.getElementById('openIcon').style.display = 'block'; document.getElementById('closeIcon').style.display = 'none';">
            <img src="custom/BRAND/img/close.png" alt="close icon" style="min-width:30px;max-width:30px;height:30px;float:right;">
            </div>
            <div id="myIcons">
            <div class="libraryh3lp" style="" data-lh3-jid="brandeiss-queue@chat.libraryh3lp.com">
            <a href="#" onclick="window.open('https://libraryh3lp.com/chat/brandeiss-queue@chat.libraryh3lp.com?skin=24214', 'AskUs', 'resizable=1,width=275,height=300'); return false;">
            <img src="https://libapps.s3.amazonaws.com/accounts/43164/images/Chat_Online_Primo-WhiteBorder-300dpi.png" alt="Chat with a librarian now">
            </a>
            </div>
            <div class="libraryh3lp" style="display: none;">
            <a href="https://help.brandeis.edu/help/servicedesk/customer/portal/6/create/40" target="_top">
            <img src="https://libapps.s3.amazonaws.com/accounts/43164/images/Chat_Offline_Email_A_Librarian-WhiteEdge-300dpi.png" alt="Chat is Offline. Email a librarian.">
            </a>
            </div>
            <div class="feedback">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScKMrgXYw7hI1j3C_jRlA494YIPMOW39_HrOFsUXnXMOBVBJg/viewform" aria-label="Like our new design? Use this button to open a Google Form to submit feedback about the new OneSearch interface" class="md-primoExplore-theme">
            <img src="custom/BRAND/img/feedback_button.png" alt="Like our new look?">
            </a>
            </div>
            </div>
            </div>`
        });
        
    } else {
    
            app.component('prmSearchBarAfter', {
            bindings: {parentCtrl: '<'},
            controller: 'SearchBarAfterController',
            template: `<div id="iconTray" style="padding:5px;">
            <div id="openIcon" style="display:none;min-width:30px;min-height:30px;" onclick="document.getElementById('myIcons').style.display = 'block'; document.getElementById('openIcon').style.display = 'none'; document.getElementById('closeIcon').style.display = 'block';">
            <img src="custom/BRAND/img/open.png" alt="close icon" style="min-width:30px;max-width:30px;height:30px;float:right;">
            </div>
            <div id="closeIcon" style="min-height:30px;min-width:30px;" onclick="document.getElementById('myIcons').style.display = 'none'; document.getElementById('openIcon').style.display = 'block'; document.getElementById('closeIcon').style.display = 'none';">
            <img src="custom/BRAND/img/close.png" alt="close icon" style="min-width:30px;max-width:30px;height:30px;float:right;">
            </div>
            <div id="myIcons">
            <div class="libraryh3lp" style="" data-lh3-jid="brandeiss-queue@chat.libraryh3lp.com">
            <a href="#" onclick="window.open('https://libraryh3lp.com/chat/brandeiss-queue@chat.libraryh3lp.com?skin=24214', 'AskUs', 'resizable=1,width=275,height=300'); return false;">
            <img src="https://libapps.s3.amazonaws.com/accounts/43164/images/Chat_Online_Primo-WhiteBorder-300dpi.png" alt="Chat with a librarian now">
            </a>
            </div>
            <div class="libraryh3lp" style="display: none;">
            <a href="https://help.brandeis.edu/help/servicedesk/customer/portal/6/create/40" target="_top">
            <img src="https://libapps.s3.amazonaws.com/accounts/43164/images/Chat_Offline_Email_A_Librarian-WhiteEdge-300dpi.png" alt="Chat is Offline. Email a librarian.">
            </a>
            </div>
            </div>
            </div>`
        });
    }

    app.controller('SearchBarAfterController', ['$scope', '$translate', function ( $scope, $translate ) {
        //shows scopes dropdown by default
        $scope.$parent.$ctrl.showTabsAndScopes = true;
        
        //Change initial value based on selected tab. Disabled for now because it's slow and probably unnecessary
        /*
        var myVar = setInterval(function(parentCtrl) { 
            parentCtrl._placeHolderText = calculatePlaceHolderText(parentCtrl._selectedTab);
            console.log("placeholder changed");
        }, 100, this.parentCtrl);

        setTimeout(function( myIntervalID ) { 
            clearInterval(myIntervalID);
            console.log("placeholder interval cleared");
        }, 5000, myVar);
        */

        //insert custom placeholder text when scope is switched
        $scope.$watch("$parent.$ctrl._selectedTab", function(newTab, oldTab) {
            $scope.$parent.$ctrl._placeHolderText = calculatePlaceHolderText(newTab);
        });

        //Function to calculate placeholder text based on tab code
        function calculatePlaceHolderText (myTab) {
            switch (myTab) {
                case "pci":
                    return "Find articles from journals, newspapers, and online collections";
                    break;
                case "alma":
                    return "Find books, movies, music, serials, etc";
                    break;
                case "everything":
                    return "Find ALL kinds of library resources (books, movies, journal articles, etc)";
                    break;
                case "course":
                    return "Find books & media on reserve for your class.";
                    break;
                default: 
                    return "Search";
            }
        }
    
                //add scripts for the chat widget
        var chatWidget = document.createElement("script");
        chatWidget.type = "text/javascript";
        chatWidget.async = true;
        chatWidget.src = "https://us.libraryh3lp.com/js/libraryh3lp.js?12041";
        var c = document.getElementsByTagName("script")[0];
        c.parentNode.insertBefore(chatWidget, c); 
    }]); 
    
    /* End Show Scopes... */
    
    /* Remove disabled attribute from showPnx=true page to make usable again */
    app.controller('prmFullViewPageAfterController',  [ function () {
        
        //The PNX record in the New UI is set to be disabled instead of readonly, and the scrollbar for the textarea containing the record text is hidden via css overflow=hidden. Basically, the styles and attributes make it broken, and this fixes it.
        function fixTextArea () {
            document.getElementsByTagName("textarea")[0].removeAttribute("disabled","");
            document.getElementsByTagName("textarea")[0].setAttribute("readonly","readonly");
            document.getElementsByTagName("textarea")[0].setAttribute("style","border:none; width: 100%; height: 99vh;");
        }
        
        //setTimeout has to be used because of the way angular loads elements asyncronously
        setTimeout( fixTextArea, 1000);
        
        //run it twice just in case the browser loads slowly
        setTimeout( fixTextArea, 2000); 


    }]);
    
        app.component('prmFullViewPageAfter', {
        bindings: { },
        controller: 'prmFullViewPageAfterController'
    });
    /* End Remove disabled attribute... */

    /* Make prm-full-view elements not keyboard focusable */
    
    app.component('prmFullViewAfter', {
        bindings: { },
        controller: 'prmFullViewAfterController'
    });
    
    
  app.controller('prmFullViewAfterController',  [ function () {
        
        //The PNX record in the New UI is set to be disabled instead of readonly, and the scrollbar for the textarea containing the record text is hidden via css overflow=hidden. Basically, the styles and attributes make it broken, and this fixes it.
        function fixTabIndex () {
            $('prm-full-view').removeAttr('tabindex').blur();
        }
        
        //setTimeout has to be used because of the way angular loads elements asyncronously
        setTimeout( fixTabIndex, 1000);
        
        //run it twice just in case the browser loads slowly
        setTimeout( fixTabIndex, 2000); 


    }]);


 /* End Make prm-full-view elements not keyboard focusable */
    
    /* Fix accessibility */
    
    /* remove skip to results, skip to facets, and skip to make menu links */
    
    app.controller('prmSkipToAfterController', ['$filter', function ($filter) {
        
        //console.time('Fix SkipTo');
        
        //remove skipTo Links that do not work well with screen readers because they use page scrolling instead of internal page linking
        
        //Get access to the service used by the skip to directive to create links
        var myContainer = this.parentCtrl.skipToService
        
        //access to the list of link codes for the page
        var searchLinks = myContainer.skipLinksObject["exploreMain.search"];

        //use custom filters to remove the codes for everything but skip to search.
        myContainer.skipLinksObject["exploreMain.search"] = $filter('filter')($filter('filter')($filter('filter')(searchLinks, '!mainResults'), '!facets'), '!mainMenu');
        myContainer.skipLinksObject["exploreMain.jsearch"] = $filter('filter')($filter('filter')($filter('filter')(searchLinks, '!mainResults'), '!facets'), '!mainMenu');
        myContainer.skipLinksObject["exploreMain.favorites"] = $filter('filter')($filter('filter')($filter('filter')(searchLinks, '!mainResults'), '!favoritesLabels'), '!mainMenu');
        myContainer.skipLinksObject["exploreMain.citationTrails"] = $filter('filter')($filter('filter')(searchLinks, '!mainResults'), '!mainMenu');
        //myContainer.skipLinksObject["account"] = $filter('filter')($filter('filter')($filter('filter')(searchLinks, '!backtosearch'), '!accountoverview'), '!banner);
        
        //console.timeEnd('Fix SkipTo');
        
        
    
        
    }])
    
    /* Add a consistent h1 heading at the beginning of every page for accessibility purposes */
      app.component('prmSkipToAfter', {
        bindings: { parentCtrl: '<' },
        controller: 'prmSkipToAfterController',
        template: '<h1 class="accessible-brandeis" >Brandeis OneSearch</h1>'
    });
                 
    
    
    /*General Accessibility controller to run jQuery functions to change element attributes, mainly aria-labels, roles, and alts. This controller is run on several components */
    app.controller('AccessibilityController', ['$timeout', function ($timeout) {
                                                               
        function fixAccessibility () {  
            //console.time("fixAccessibility");
            // Make tabs selector accessible 
            
            //md-select: adding the button role makes voiceover direct the use to click to access the menu
            //md-option: You have to click it to select anything so it's a button
            $('md-select, md-option').not('[role|=\'button\']').attr('role','button');

            //adding the listbox role improves voiceover navigation
            //$('#select_container_3 md-content').attr('role','listbox');
            $('md-content').not('[role|=\'listbox\']').attr('role','listbox');

           
            //This adds a meaningful option name to the scope options
            $('#select_container_3 md-option').attr('aria-label', function () { 
                return 'Search in '+this.children[0].children[0].innerHTML;
            });
            
            //This adds a meaningful message for the default search. Without this it just says "select search tab" with no mention of what is selected
            $('[aria-label|=\'select search tab\']').attr('aria-label','select search tab Library Catalog'); 
            
            //Add alt-text to logo link
            $('prm-logo #banner a').not('[aria-label|=\'Link to home page. Use this link to return to the simple search page\']').attr('aria-label','Link to home page. Use this link to return to the simple search page');
            
            //Fix main menu aria-labels, both inset and overlay
            $('[aria-label|=\'Contact Us\'],[translate*=\'mainmenu.label.contact_us\']').attr('aria-label','Contact Us Button. Clicking this button will open a new window and link to a form to contact Brandeis Library Staff.');
            $('[aria-label|=\'Find Journals\'],[translate*=\'mainmenu.label.journalsearch\']').attr('aria-label','Find Journals Button. Clicking this button will navigate to a new OneSearch page for finding journal records held by Brandeis Library.');
            $('[aria-label|=\'ILL\'],[translate*=\'mainmenu.label.ill\']').attr('aria-label','ILL Button. Clicking this button will open a new window and link to a Brandeis library guide to Inter-Library Loan.');
            $('[aria-label|=\'LTS Home\'],[translate*=\'mainmenu.label.lts_home\']').attr('aria-label','LTS Home Button. Clicking this button will open a new window and link to the Brandeis Library home page');
            $('[aria-label|=\'Browse\'],[translate*=\'mainmenu.label.browse\']').attr('aria-label','Browse Button. Clicking this button will navigate to a new OneSearch page with Browse search functionality.');
            $('#more-links-button').attr('aria-label','More Options Button. Clicking this button will open an overlay containing additional Main Menu options.');
            
            //Fix sign in and sign out button labels depending on is the user is logged in or not
            if ($('.user-name').html() == "Sign In ") {
                $('[aria-label|=\'Open user actions menu\']').attr('aria-label','You are currently using OneSearch as a Guest user. Click to open a two button sign in menu with options to sign in and access your library account');
                $('[aria-label|=\'Go To My Account\']').attr('aria-label','If you sign in this button will navigate to a new OneSearch page with your library account information. Since you are not logged in this button will navigate to a new OneSearch page with the login options.');
            } else {
                $('[aria-label|=\'Open user actions menu\']').attr('aria-label','You are currently logged in as '+$('.user-name').html()+'. Click to open a two button sign in menu with options to sign out and access your library account');
                $('[aria-label|=\'Go To My Account\']').attr('aria-label','Since you have already signed in, this button will navigate to a new OneSearch page with your library account information. If you were not logged in, this button would navigate to a new OneSearch page with the login options.');
            }

            $('prm-user-area [aria-label|=\'Sign in\']').attr('aria-label','Click to navigate to a new OneSearch page with the login options. Move focus to another element in this page or use the escape key to close this two-button sign in menu.');
            $('prm-user-area [aria-label|=\'Sign out\']').attr('aria-label','Click to sign out of OneSearch and navigate to the OneSearch home page. Move focus to another element in this page or use the escape key to close this two-button sign in menu.');   
            
            
            //Add alt and aria-label attributes to material type icons
            $('[alt|=\'Multiple Versions Image\'],.fallback-img').attr({"alt": "Book Icon", "aria-label": "Book Icon"});  
            
            /* This element was causing this accessibility error: "This element's role is "presentation" but contains child elements with semantic meaning." */
            $('md-virtual-repeat-container').removeAttr('role');
            
            
            //This element was missing an aria-label
            $('input[ng-model|=\'row.searchQuery\']').each( function (idx, element) { 
                if ($(element).attr('aria-label') == undefined) $(element).attr('aria-label', 'Search Query Text');
            }); 
            
            //this element was missing an aria-label 
            $('button.switch-to-simple').each( function (idx, element) {
                if ( $(element).attr('aria-label') == undefined) { 
                    $(element).attr('aria-label', 'Switch to Simple Search');
                }
            });
            
            //this element was missing an aria-label
            $('[ng-click|=\'$ctrl.switchAdvancedSearch()\']').each( function (idx, element) {
                if ( $(element).attr('aria-label') == undefined) { 
                    $(element).attr('aria-label', 'Switch to Advanced Search');
                }
            });
            
            //iframes need a title element to be wcag 2.0 AA compliant. The alma get it mashup does not have one
            $('.mashup-iframe').not('[title|=\'Request and Access and Loan Information\']').attr('title','Request and Access and Loan Information');
            
            //This submit input that exists specifically for accessibility purposes does not have an aria-label
            $('input.accessible-only[type|=\'submit\']').not('[aria-label|=\'Submit Find Journals Search\']').attr('aria-label','Submit Find Journals Search');
            
            //This h1 for accessibility is not present on all pages, and it is replaced by the one added to the prmSkipTpAfter template elsewhere in this file.
            $('h1.accessible-only').remove();
            
            //The submit button on the Browse page should be type submit instead of type button for accessibility purposes
            $('.submit-button').not('[type|=\'submit\']').attr('type','submit');
            
            //The title is undefined on the browse search page.
            if ($('#primoExploreTitle').innerHTML == undefined) { document.title = "Brandeis Library OneSearch"; }
            
            //The previous page button has no aria-label on the browse search result page for the first page of results
            if ($('div.counter-prev a').attr('aria-label') == undefined || $('div.counter-prev a').attr('aria-label') == "") { 
                $('div.counter-prev a').attr('aria-label', 'Go to Previous Page'); 
            }
            
            //These two elements have a tabindex attribute which makes them focusable, but they shouldn't be focusable
            $('#mainResults').removeAttr('tabindex');
            $('prm-search-result-list').removeAttr('tabindex');
            
            /* Code in progress to be improved by consultation with Web Accessibility Specialist
            $('#mainResults').not('[role|=\'list\']').attr('role','list');
            $('prm-brief-result-container').not('[role|=\'listitem\']').attr('role','listitem');
            console.timeEnd("fixAccessibility");
            */
                
        }
        
        
        //Run ASAP and then again in 3 second to make sure. This whole function take between 5 and 12 ms, and runs two or 3 times per page load, so about 6 times total.
        $timeout(fixAccessibility,10);
        $timeout(fixAccessibility,3000);

    }]); 
    
    
    app.component('prmAdvancedSearchAfter', {
        controller: 'AccessibilityController'
    }); 
    app.component('prmPageNavMenuAfter', {
        controller: 'AccessibilityController'
    });
    app.component('prmSearchAfter', {
        controller: 'AccessibilityController'
    });
    app.component('prmBrowseSearchAfter', {
        controller: 'AccessibilityController'
    }); 
        
    
    /* specific controller to run jQuery functions to change IDs and an image alt attributes, run only on prmIconAfter. prmIconAfter directives are probably the last directives to be loaded because they are nested the most deeply in the page. Since prmIconAfter appears so often and this code is run many times on the search results page, it has been optimized for speed */
    app.controller('prmIconAfterController', ['$timeout', function ($timeout) {
                                                               
        function fixAccessibility () {  
            
            var duplicateIds = ["select_value_label", "chevron-up", "briefResultMoreOptionsButton"];
            
            /* This is identical to the code block directly below, but it runs much slower 
            
            console.time('jquery'); 
            $.each(duplicateIds, function(idx, element) { $('[id*=\''+element+'\']').each( function (idx, element) {
                var myID = $(element).attr('id');
                var myElements = $('[id|=\''+myID+'\']');
                if (myElements.length > 1) {
                        $.each(myElements, function(idx, element) {  if (idx >0) $(element).attr('id',$(element).attr('id')+'_'+idx); } );
                }
            })}); 
            
            console.timeEnd('jquery'); */
            
            /* This code finds duplicate ids based on the array defined above and changes their ids to be distinct. This is done to fix accessibility errors according to the WCAG 2.0 AA standards */
            
            //console.time('minimal jquery');
            
            for (var i=duplicateIds.length-1; i>-1; i--) {
                var myElements = $('[id*=\''+duplicateIds[i]+'\']');
                for (var j=myElements.length-1; j>-1; j--) {
                    //AGRS removed the lines below to make it run faster, even though it might change IDs that are unique. This broadness is created in the definition of myElements above because it uses *= which is a contains comparison. This is necessary because the select_value_label_* id elements change the numeric suffix randomly.
                    //var myID = myElements[j].getAttribute('id');
                    myElements[j].setAttribute('id', duplicateIds[i]+'_'+j);
                    /* var myIdenticalElements = $('[id|=\''+myID+'\']');
                    for (var k=myIdenticalElements.length-1; k>0; k--) {
                        myIdenticalElements[k].setAttribute('id', myID+'_'+k);
                    } */
                } 
            } 
            
            //console.timeEnd('minimal jquery'); 
            
            //console.time('beacon fix');
            
            //This code adds an alt tag to the image in order to pass accessibility standards
            
            $('img[src*=\'https://beacon01.alma.exlibrisgroup.com\']').not('[alt|=\'No content image, please ignore\']').attr('alt','No content image, please ignore');
            
            //console.timeEnd('beacon fix');
                
        }
        
        //This controller code is run every time an icon is loaded, so it only needs to be run initiated once in the controller.
        $timeout(fixAccessibility,10);

    }]); 

    app.component('prmIconAfter', {
        controller: 'prmIconAfterController'
    });
    
    /* Embed LibAnswers widget in footer
    app.component('prmExploreMainAfter', {
        template: '<div id="s-la-widget-7565"></div>'
    }); 
    
    */
    
    /* Google Analytics */
    
    (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments);
      }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    if (window.location.hostname == 'search.library.brandeis.edu' || window.location.hostname == 'brand-primo.hosted.exlibrisgroup.com') {
        ga('create', 'UA-43138135-1', 'auto');
    }
    if (window.location.hostname == 'search-test.library.brandeis.edu' || window.location.hostname == 'brand-primosb.hosted.exlibrisgroup.com') {
        ga('create', 'UA-43138135-2', 'auto');
    }
    ga('send', 'pageview');
    
    /* code below from Jeff Peterson as UMN obtained here: https://exlibrisusers.org/cgi-bin/mailman/private/primo/2017-February/020545.html */

    app.run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {
      $rootScope.$on('$locationChangeSuccess', function (event) {
        $window.ga('send', 'pageview', { location: $location.url() });
      });
    }]);
     
    
})();

/* STACKMAP integration */

(function() {
        var script = document.createElement('script');
        script.id = 'StackMapScript';
        /* AGRS made a local copy of the stackmap script at
        https://stackmap.com/integration/brandeis-primo2/StackMap.js 
        so i could make changes that would make the page more accessible. 
        Those changes were to remove an h2 heading for accessibility purposes 
        and add aria-labels to the print and close buttons. */
        script.src = './custom/BRAND/html/StackMap.js';
        document.head.appendChild(script); 
     
        var link = document.createElement('link');
        link.id = 'StackMapSheet';
        link.rel = 'stylesheet';
        link.media = 'all';
        link.type = 'text/css';
        link.href = 'https://stackmap.com/integration/brandeis-primo2/StackMap.css';
        document.head.appendChild(link);

        var smlink2 = document.createElement('link'); 
        smlink2.rel = 'stylesheet'; 
        smlink2.type = 'text/css'; 
        smlink2.href = 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css';
        document.body.appendChild(smlink2);
})();


