(function() {
    "use strict";
    var globalWindow = window;
    var window$1 = globalWindow;
    var navigator$1 = globalWindow.navigator;
    var document$1 = globalWindow.document;
    var history$1 = globalWindow.history;
    var location$1 = globalWindow.location;
    var $$1 = window$1.jQuery;
    var msDocs = window$1.msDocs;
    var contentLoaded = new Promise(function(resolve) {
        if (document$1.readyState === "loading") {
            document$1.addEventListener("DOMContentLoaded", function() {
                return resolve();
            });
        } else {
            resolve();
        }
    });
    function affix() {
        var primary = document$1.querySelector(".primary-holder");
        var left = document$1.getElementById("sidebar");
        var right = document$1.getElementById("side-doc-outline");
        var footer = document$1.querySelector("body > .footerContainer");
        if (left === null && right === null) {
            return;
        }
        function update() {
            var spacing = 24;
            var viewportHeight = window$1.innerHeight;
            var top = Math.max(0, primary.getBoundingClientRect().top) + spacing;
            var bottom = Math.max(0, viewportHeight - footer.getBoundingClientRect().top) + spacing;
            if (left !== null && !left.hasAttribute("disable-affix")) {
                left.style.width = getParentColumnWidth(left) - spacing * 2 + "px";
                left.style.top = top + "px";
                left.style.bottom = bottom + "px";
            }
            if (right !== null) {
                right.style.width = getParentColumnWidth(right) - spacing * 2 + "px";
                right.style.top = top + "px";
                right.style.bottom = bottom + "px";
            }
        }
        var animationFrame = 0;
        function scheduleUpdate() {
            cancelAnimationFrame(animationFrame);
            animationFrame = requestAnimationFrame(update);
        }
        window$1.addEventListener("scroll", scheduleUpdate, {
            passive: true
        });
        window$1.addEventListener("resize", scheduleUpdate, {
            passive: true
        });
        window$1.addEventListener("content-update", scheduleUpdate);
        update();
        window$1.addEventListener("load", update, false);
        window$1.addEventListener("DOMContentLoaded", update, false);
    }
    function notifyContentUpdated() {
        window$1.dispatchEvent(new CustomEvent("content-update"));
    }
    function getParentColumnWidth(element) {
        return element.parentElement.getBoundingClientRect().width;
    }
    function unaffixSidebar() {
        var left = document$1.getElementById("sidebar");
        left.style.cssText = "";
        left.setAttribute("disable-affix", "true");
    }
    function reaffixSidebar() {
        var left = document$1.getElementById("sidebar");
        left.removeAttribute("disable-affix");
        notifyContentUpdated();
    }
    var loc_acceptInvite = "Accept invite";
    var loc_activateNewSandbox = "Yes, activate a new sandbox";
    var loc_activateSandbox = "Activate sandbox";
    var loc_aDayAgo = "a day ago";
    var loc_addParameter = "Add Parameter";
    var loc_administrator = "Administrator";
    var loc_advanced = "Advanced";
    var loc_allapis = "All APIs";
    var loc_allPackages = "All Packages";
    var loc_aMinuteAgo = "a minute ago";
    var loc_aMonthAgo = "a month ago";
    var loc_anHourAgo = "an hour ago";
    var loc_apiReference = "{0} API Reference";
    var loc_apiSearchIsUnavailable = "API search is unavailable. Please try again later.";
    var loc_archiveDocs = "Previous versions";
    var loc_aSecondAgo = "a second ago";
    var loc_avatar = "Avatar";
    var loc_aWeekAgo = "a week ago";
    var loc_azureDocs = "Azure Documentation";
    var loc_azureSelectorPrompt = "-- Select Value --";
    var loc_badgeEarnedFor = "You've earned a badge for completing";
    var loc_beginner = "Beginner";
    var loc_body = "Body";
    var loc_browse = "Browse";
    var loc_business_analyst = "Business Analyst";
    var loc_business_user = "Business User";
    var loc_caution = "Caution";
    var loc_checkWorkAgain = "Check your work again";
    var loc_chooseAzureAccount = "Choose one of your Azure accounts.";
    var loc_chooseReaction = "Choose reaction";
    var loc_claimReward = "Unlock achievement";
    var loc_clearfilter = "Clear Filter";
    var loc_clearterm = "Clear Term";
    var loc_clickForRSS = "Click for RSS feed";
    var loc_close = "Close";
    var loc_collaborator = "Collaborator";
    var loc_collaboratorDescription = "This user has been invited to collaborate on {repo}.";
    var loc_comment = "Comment";
    var loc_commentPostedFormat = "{name} commented {time ago}";
    var loc_comments = "Comments";
    var loc_configuringCloudShellForSandbox = "Configuring Cloud Shell for sandbox access...";
    var loc_confused = "Confused";
    var loc_confusedReactionCount = "{0} confused reactions";
    var loc_congratulations = "Congratulations!";
    var loc_continue = "Continue";
    var loc_continueToNextModule = "Continue to next module";
    var loc_continueWithoutSaving = "Continue without saving progress";
    var loc_contributor = "Contributor";
    var loc_contributorDescription = "This user has previously committed to the {repo} repository.";
    var loc_copy = "Copy";
    var loc_dark = "Dark";
    var loc_dateNotAvailable = "date not available";
    var loc_daysAgo = "{0} days ago";
    var loc_deleteParameter = "Delete Parameter";
    var loc_description = "Description";
    var loc_descriptionNotAvailable = "description not available";
    var loc_developer = "Developer";
    var loc_differentSandboxAlreadyActive = "A different sandbox is already active";
    var loc_differentSandboxAlreadyActiveExplanation = "You've already activated a sandbox in module <a href=\"{0}\">{1}</a>. If you activate this sandbox, you'll lose your work in the other module.";
    var loc_disable = "Disable";
    var loc_disclaimer_archive = "We're no longer updating this content regularly. Check the <a href='https://support.microsoft.com/en-us/lifecycle/selectindex'>Microsoft Product Lifecycle</a> for information about how this product, service, technology, or API is supported.";
    var loc_disclaimer_archiveMachineTranslated = "This article was translated by machine. We're no longer updating this content regularly. Check the <a href='https://support.microsoft.com/en-us/lifecycle/selectindex'>Microsoft Product Lifecycle</a> for information about how this product, service, technology, or API is supported.";
    var loc_disclaimer_archiveRetire = "This content has been retired and may not be updated in the future.  The product, service, or technology mentioned in this content is no longer supported.";
    var loc_disclaimer_archiveRetireMachineTranslated = "This article was translated by machine. This content has been retired and may not be updated in the future.  The product, service, or technology mentioned in this content is no longer supported.";
    var loc_disclaimer_dismissAlert = "Dismiss alert";
    var loc_disclaimer_learnMobileInteractive = "Contains learning options not available on mobile";
    var loc_disclaimer_machineTranslatedOnly = 'Parts of this topic may be machine translated. You can suggest a better translation by clicking the Edit button; instructions can be found in the <a href="https://docs.microsoft.com/en-us/contribute/">contribution guide</a>.';
    var loc_disclaimer_recommendedVersion = "Recommended Version";
    var loc_disclaimer_returnToMain = "Return to main site";
    var loc_disclaimer_sxs_human = "You can display the English text in a popup window by moving the mouse pointer over the text.";
    var loc_disclaimer_sxs_machine = "This article was translated by machine. You can display the English text in a popup window by moving the mouse pointer over the text.";
    var loc_disclaimer_text = "This content is not available in your language. Here is the English version.";
    var loc_disclaimerSearchPreviousVersions = "Search results are from previous versions' documentation and not regularly updated.";
    var loc_documentDetails = "Document Details";
    var loc_doNotEditThis = "Do not edit this section. It is required for docs.microsoft.com ➟ GitHub issue linking.";
    var loc_dotnetDocs = ".NET Documentation";
    var loc_dotnetEditor = ".NET Editor";
    var loc_downloadPdf = "Download PDF";
    var loc_email = "Email";
    var loc_emailIsRequired = "Email is required to activate a sandbox";
    var loc_emailIsRequiredExplanation = 'Your Microsoft account must be linked to a valid email to activate a sandbox. Go to <a href="https://account.live.com" target="_blank">Microsoft Account Settings</a> to link your email and try again.';
    var loc_emptyNameNotAllowed = "Empty name is not allowed";
    var loc_enable = "Enable";
    var loc_errorCreatingComment = 'Error creating comment. If you\'d like, you can retry on <a data-bi-name="create-comment-on-github" href="{0}">GitHub <span class="docon docon-navigate-external" aria-hidden="true"></span></a>.';
    var loc_errorCreatingIssue = 'Error creating issue. If you\'d like, you can retry on <a data-bi-name="create-issue-on-github" href="{0}">GitHub <span class="docon docon-navigate-external" aria-hidden="true"></span></a>.';
    var loc_errorLoadingBrowseContent = "We couldn't load your search results. Please try again later.";
    var loc_errorLoadingComments = "Error loading comments.";
    var loc_errorLoadingFeedback = "Error loading feedback.";
    var loc_exploreOtherModules = "Explore other modules";
    var loc_exploreOtherPaths = "Explore other Paths";
    var loc_facebook = "Facebook";
    var loc_feedback = "Feedback";
    var loc_feedbackPlaceholder = "[Enter feedback here]";
    var loc_filter = "Filter";
    var loc_filterByTitle = "Filter by title";
    var loc_functional_consultant = "Functional Consultant";
    var loc_goBackToFinish = "Go back to finish";
    var loc_goBackToFinishModule = "Go back to finish module";
    var loc_greatWork = "Great work!";
    var loc_headers = "Headers";
    var loc_heart = "Heart";
    var loc_heartReactionCount = "{0} heart reactions";
    var loc_helpMeChoose = "Help me choose";
    var loc_hint = "<strong>Hint:</strong> {0}";
    var loc_hooray = "Hooray";
    var loc_hoorayReactionCount = "{0} hooray reactions";
    var loc_hoursAgo = "{0} hours ago";
    var loc_howCanWeImprove = "How can we improve?";
    var loc_hrMin = "{0} hr {1} min";
    var loc_important = "Important";
    var loc_intermediate = "Intermediate";
    var loc_issueOpenedFormat = "opened {time ago} by {name}";
    var loc_isThisHelpful = "Is this page helpful?";
    var loc_justNow = "just now";
    var loc_knowledgeCheckCompleAllAnswers = "Knowledge check complete. You answered all questions correctly.";
    var loc_landmarkToc = "Table of Contents";
    var loc_landmarkTocFilterFormLabel = "Filter Table of Contents";
    var loc_laugh = "Laugh";
    var loc_laughReactionCount = "{0} laugh reactions";
    var loc_learningpath = "Learning Path";
    var loc_leaveAComment = "Leave a comment";
    var loc_level = "Level {0}";
    var loc_levels = "Levels";
    var loc_light = "Light";
    var loc_linkedin = "LinkedIn";
    var loc_loading = "Loading...";
    var loc_loadingFeedback = "Loading feedback...";
    var loc_loadingSandboxInformation = "Loading sandbox information...";
    var loc_loadMoreResults = "Load more results";
    var loc_manageMyProfile = "Manage my profile";
    var loc_member = "Member";
    var loc_memberDescription = "This user is a member of the {org} organization.";
    var loc_microsoftEmployeePrivacyNotice = "Microsoft Employee Privacy Notice";
    var loc_microsoftEmployeePrivacyStatement = "You have signed in with your Microsoft organizational account ({email}). By using Microsoft Learn, <strong>you understand and acknowledge</strong> that your membership means our network of sites and applications will record, and track your achievements and activities and we may share your results and activities with other teams within Microsoft. Additionally, your username, display name, achievements and activities will be publicly visible.";
    var loc_microsoftLearnIssue = "Microsoft Learn issue";
    var loc_microsoftLearnIssueBody = "Microsoft Learn is a brand new platform and we are striving to improve the content and experiences based on customer responses.\n\nWe want to hear from you!\n\nPlease fill out the following information for us:\n1. The issue or feedback you are reporting about.\n2. Anything else you would like to tell us.\n\nNote: While we are not directly responding to all customers at this time, please know that we are reviewing any and all feedback that is coming in.\n\nURL: {page-url}";
    var loc_minFormat = "{0} min";
    var loc_minutesAgo = "{0} minutes ago";
    var loc_module = "Module";
    var loc_moduleComplete = "Module complete";
    var loc_moduleIncomplete = "Module incomplete";
    var loc_moduleReference = "{0} Module Reference";
    var loc_monikerFallback = "The requested page is not available for {0}. You have been redirected to the newest product version this page is available for.";
    var loc_monthsAgo = "{0} months ago";
    var loc_moreInfo = "More Info";
    var loc_multipleModules = "{numberOf} Modules";
    var loc_multipleUnits = "{numberOf} Units";
    var loc_name = "Name";
    var loc_next = "Next";
    var loc_nextPage = "Next page";
    var loc_no = "No";
    var loc_noOutput = "No output";
    var loc_noResults = "No results";
    var loc_noResultsRest = "No results yet, but keep typing…";
    var loc_noResultsToc = 'No results for {term}<br /><a href="{url}">Search for "{filter-text}" in all {scope} documentation</a>';
    var loc_noSearchTerm = "No search term";
    var loc_note = "Note";
    var loc_numberClosedIssues = "{0} Closed";
    var loc_numberOpenIssues = "{0} Open";
    var loc_officeDocs = "Office Documentation";
    var loc_okGotIt = "Ok, got it.";
    var loc_oneModule = "1 Module";
    var loc_oneUnit = "1 Unit";
    var loc_onSpecificDate = "on {0}";
    var loc_output = "Output";
    var loc_overview = "Overview";
    var loc_owner = "Owner";
    var loc_ownerDescription = "This user is the owner of the {repo} repository.";
    var loc_packageReference = "{0} Package Reference";
    var loc_page = "Page {0}";
    var loc_parameters = "Parameters";
    var loc_pickReaction = "Pick your reaction";
    var loc_pleaseFillOut = "Please fill out this field.";
    var loc_portallab_launchButton = "Launch the Azure portal";
    var loc_portallab_loading = "Loading Azure portal...";
    var loc_portallab_openButton = "Open lab in a new window";
    var loc_portallab_prompt1 = "This unit requires an Azure portal to complete.";
    var loc_portallab_prompt2 = "An Azure Portal Lab provides free Azure resource access to complete the steps in this Unit. Azure Portal Labs do not affect your Azure subscription. You will not be charged.";
    var loc_portallab_ready = "Your Azure Portal Lab is ready.";
    var loc_portallab_releaseButton = "Yes, activate a new lab";
    var loc_portallab_releasePrompt1 = "An Azure Portal Lab for a different unit is already active";
    var loc_portallab_releasePrompt2 = "You currently have an Azure Portal Lab open for another unit ({lab-name}). Would you like to discard your current lab and activate a new lab for this unit?";
    var loc_portallab_retryButton = "Retry launching lab";
    var loc_portallab_signInButton = "Sign in to launch the Azure portal";
    var loc_preview = "Preview";
    var loc_previousPage = "Previous page";
    var loc_product = "Product";
    var loc_products = "Products";
    var loc_products_azure = "Azure";
    var loc_products_azure_active_directory = "Azure Active Directory";
    var loc_products_azure_advisor = "Azure Advisor";
    var loc_products_azure_application_insights = "Application Insights";
    var loc_products_azure_cdn = "Content Delivery Network";
    var loc_products_azure_clis = "CLIs";
    var loc_products_azure_cloud_shell = "Cloud Shell";
    var loc_products_azure_container_instances = "Container Instances";
    var loc_products_azure_container_registry = "Container Registry";
    var loc_products_azure_cosmos_db = "Cosmos DB";
    var loc_products_azure_cost_management = "Cost Management";
    var loc_products_azure_event_grid = "Event Grid";
    var loc_products_azure_event_hubs = "Event Hubs";
    var loc_products_azure_functions = "Functions";
    var loc_products_azure_iot_central = "IoT Central";
    var loc_products_azure_key_vault = "Key Vault";
    var loc_products_azure_log_analytics = "Log Analytics";
    var loc_products_azure_monitor = "Monitor";
    var loc_products_azure_portal = "Azure Portal";
    var loc_products_azure_redis_cache = "Redis Cache";
    var loc_products_azure_resource_manager = "Azure Resource Manager";
    var loc_products_azure_sdks = "SDKs";
    var loc_products_azure_service_bus = "Service Bus";
    var loc_products_azure_sql_database = "SQL Database";
    var loc_products_azure_storage = "Storage";
    var loc_products_azure_virtual_machines = "Virtual Machines";
    var loc_products_bizapps = "Business Applications";
    var loc_products_bizapps_d365 = "Dynamics 365";
    var loc_products_bizapps_flow = "Flow";
    var loc_products_bizapps_power_apps = "PowerApps";
    var loc_products_bizapps_power_bi = "Power BI";
    var loc_products_dynamics = "Dynamics 365";
    var loc_products_dynamics_ai_market_insights = "AI for Market Insights";
    var loc_products_dynamics_ai_customer_service = "AI for Customer Service";
    var loc_products_dynamics_ai_sales = "AI for Sales";
    var loc_products_dynamics_business_central = "Business Central";
    var loc_products_dynamics_customer_engagement = "Customer Engagement";
    var loc_products_dynamics_customer_service = "Customer Service";
    var loc_products_dynamics_field_service = "Field Service";
    var loc_products_dynamics_finance_operations = "Finance and Operations";
    var loc_products_dynamics_layout = "Layout";
    var loc_products_dynamics_marketing = "Marketing";
    var loc_products_dynamics_operations = "Operations";
    var loc_products_dynamics_project_service = "Project Service Automation";
    var loc_products_dynamics_remote_assist = "Remote Assist";
    var loc_products_dynamics_retail = "Retail";
    var loc_products_dynamics_sales = "Sales";
    var loc_products_dynamics_talent = "Talent";
    var loc_products_common_data_service = "Common Data Service for Apps";
    var loc_products_flow = "Microsoft Flow";
    var loc_products_power_bi = "Power BI";
    var loc_products_powerapps = "PowerApps";
    var loc_products_power_platform = "Power platform";
    var loc_products_vs = "Visual Studio";
    var loc_products_vs_code = "Visual Studio Code";
    var loc_products_windows = "Windows";
    var loc_quickfilters = "Quick Filters";
    var loc_quizComplete = "Congratulations!";
    var loc_rateLimitedLoadingComments = "Unable to load comments. GitHub API rate limit exceeded.";
    var loc_rateLimitedLoadingIssues = "Unable to search issues. GitHub API rate limit exceeded.";
    var loc_ratingCommentsPrompt = 'Comments or suggestions? <a href="#" data-bi-name="rating-verbatim-link">Tell us here</a>.';
    var loc_ratingShareIdeas = "Please share your ideas. We welcome feedback in any language.";
    var loc_relatedLearningPaths = "This module is part of these learning paths";
    var loc_remaining = "remaining";
    var loc_removeItem = "Remove {0}";
    var loc_requestPreview = "Request Preview";
    var loc_requestUrl = "Request URL";
    var loc_resource_type = "Types";
    var loc_responseCode = "Response Code";
    var loc_restart = "Restart";
    var loc_restrictedCloud = "We're unable to invite you to a sandbox tenant due to restrictions on your account. Please contact your administrator.";
    var loc_resultsFound = "{0} results found";
    var loc_retryActivatingSandbox = "Retry activating sandbox";
    var loc_reviewYourLearnHistory = "Review your Learning Path history";
    var loc_roles = "Roles";
    var loc_rss = "RSS";
    var loc_run = "Run";
    var loc_sandboxAccessAvailable = "Sandbox activated!";
    var loc_sandboxAccessExpired = "Sandbox access expired";
    var loc_sandboxExpiredExplanation = "Your sandbox has expired. Activate a new sandbox.";
    var loc_sandboxExplanation = "The sandbox will give you free access to the Azure resources needed to complete this unit. Your Azure subscription will not be charged.";
    var loc_sandboxLoginExpired = "Looks like your login has expired. Please sign in to activate the sandbox.";
    var loc_sandboxRequiresInvite = "Using a sandbox requires you to accept an Azure tenant invite";
    var loc_sandboxTemporaryDisabled = "The sandbox for this module is temporarily disabled for maintenance.";
    var loc_search = "Search";
    var loc_searchPreviousVersions = "Search previous versions";
    var loc_searchResultsFor = "Search results for";
    var loc_searchScopeTitle = 'Search filter is "{0}". Tap to remove.';
    var loc_secondsAgo = "{0} seconds ago";
    var loc_selectedVersion = "Selected Version";
    var loc_selectPackage = "Select Package";
    var loc_selectVersion = "Select Version";
    var loc_service = "Service";
    var loc_serviceUnavailable = "The service is temporarily unavailable. We are working on it.";
    var loc_sharedArticleSubject = "[Shared Article] {0}";
    var loc_shareYourAchievement = "Share your achievement:";
    var loc_signIn = "Sign in";
    var loc_signInAzure = "Please sign in with your Azure account.";
    var loc_signInCloudShellWithDifferentAccount = "You're signed into the cloud shell with an account that's different from your docs account. Please sign out of the cloud shell to retry accessing the sandbox.";
    var loc_signingIn = "Signing in...";
    var loc_signInToActivateSandbox = "Sign in to activate sandbox";
    var loc_signInToComment = "Sign in to comment";
    var loc_signInToIncreaseRateLimit = '<a class="feedback-sign-in-button" data-bi-name="rate-limit-sign-in" href="#">Sign in</a> to increase your GitHub API rate limit.';
    var loc_signInToReact = "Sign in to add your reaction";
    var loc_signInToSaveProgress = "Sign in to save progress";
    var loc_signOut = "Sign out";
    var loc_solution_architect = "Solution Architect";
    var loc_somethingWentWrong = "Hmm, something went wrong";
    var loc_start = "Start";
    var loc_submit = "Submit";
    var loc_taskNotComplete = "Task not completed correctly.";
    var loc_thanksForFeedback = "Thanks for the feedback!";
    var loc_thatIsNotRight = "That's not quite right.";
    var loc_thereIsCurrentlyNoFeedback = "There is currently no feedback for this document. Submitted feedback will appear here.";
    var loc_thumbsDownReactionCount = "{0} thumbs down reactions";
    var loc_thumbsUpReactionCount = "{0} thumbs up reactions";
    var loc_tip = "Tip";
    var loc_toggleIssue = "Toggle issue";
    var loc_toggleUnits = "Toggle Units";
    var loc_trophyEarnedFor = "You've earned a trophy for completing";
    var loc_tryAgain = "Try again";
    var loc_tryIt = "Try It";
    var loc_tryItDescription = "Try the REST API with the inputs below.";
    var loc_twitter = "Twitter";
    var loc_unitMarker = "Unit {index} of {total}";
    var loc_unitRequiresSandbox = "This unit requires a sandbox to complete";
    var loc_updated = "updated";
    var loc_version = "Version";
    var loc_viewIssueOnGH = "View this issue on GitHub";
    var loc_viewMoreOnGitHub = "View more feedback on GitHub";
    var loc_viewUserOnGH = "View {username} on GitHub";
    var loc_visualStudioArchive = "We recommend using Visual Studio 2017.";
    var loc_visualStudioArchiveDownload = "Download now";
    var loc_visualStudioDocs = "Visual Studio Documentation";
    var loc_vmlab_launchButton = "Launch VM mode";
    var loc_vmlab_loading = "Loading virtual machine...";
    var loc_vmlab_prompt1 = "This unit requires a VM to complete.";
    var loc_vmlab_prompt2 = "VM mode provides free Azure virtual machine access to complete the steps in this unit. Your Azure subscription will not be charged";
    var loc_vmlab_releaseButton = "Yes, activate a new VM";
    var loc_vmlab_releasePrompt1 = "A VM for a different unit is already active";
    var loc_vmlab_releasePrompt2 = "You've already opened a VM in module {lab-name}. If you activate this VM, you'll lose your work in the other module.";
    var loc_vmlab_retryButton = "Retry launching VM mode";
    var loc_vmlab_signInButton = "Sign in to launch VM mode";
    var loc_warning = "Warning";
    var loc_weeksAgo = "{0} weeks ago";
    var loc_windowsDocs = "Windows Documentation";
    var loc_xp = "{0} XP";
    var loc_yes = "Yes";
    var loc_youDidIt = "You did it!";
    var loc_youEarnedXpKnowledgeCheck = "You earned experience points for completing the knowledge check.";
    var loc_youEarnedXpTask = "You earned experience points for completing the task.";
    var loc_youMustUseSandboxResources = "You must use the resources provided by the sandbox to check your work.";
    var loc_yourWorkNotCompletedCorrectly = "Your work was not completed correctly.";
    function showDisclaimer(message, link, additionalBannerClasses, additionalButtonClasses) {
        var disclaimerHolder = document$1.getElementById("disclaimer-holder");
        var buttonClasses = additionalButtonClasses || "is-info is-outlined";
        var bannerClasses = additionalBannerClasses || "is-info";
        var buttonHTML = link ? '\n\t\t\t<div class="level-right has-margin-extra-small-mobile ">\n\t\t\t\t<div class="level-item has-flex-justify-content-start-mobile has-padding-small-tablet">\n\t\t\t\t\t<a href="' + link.url + '" class="button ' + buttonClasses + ' is-small has-margin-left-extra-small has-margin-right-extra-small">\n\t\t\t\t\t\t<span>' + link.text + "</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>" : "";
        disclaimerHolder.insertAdjacentHTML("afterbegin", '\n\t\t\t<section class="uhf-container has-padding has-padding-top-small has-padding-bottom-small ' + bannerClasses + ' alert is-banner">\n\t\t\t\t<button type="button" class="delete is-large"><span class="visually-hidden">' + loc_disclaimer_dismissAlert + '</span></button>\n\t\t\t\t<div class="level">\n\t\t\t\t\t<div class="level-left has-flex-shrink">\n\t\t\t\t\t\t<div class="level-item has-flex-shrink">\n\t\t\t\t\t\t\t<p class="has-text-white-static disclaimer-title has-margin-top-extra-small has-line-height-reset is-size-7-mobile">\n\t\t\t\t\t\t\t\t<span class="icon">\n\t\t\t\t\t\t\t\t\t<span class="docon docon-status-error-outline" aria-hidden="true"></span>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span>' + message + "</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t" + buttonHTML + "\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t");
        notifyContentUpdated();
        return disclaimerHolder.firstElementChild;
    }
    function setupDismissAlerts() {
        window.addEventListener("click", function(_a) {
            var target = _a.target;
            var button = target instanceof Element && target.closest(".alert > .delete");
            if (!button) {
                return;
            }
            var alert = button.parentElement;
            alert.classList.add("disappearing");
            setTimeout(function() {
                alert.parentNode.removeChild(alert);
                notifyContentUpdated();
            }, 500);
        }, {
            passive: true
        });
    }
    var metaDictionary;
    function readMetaTags() {
        metaDictionary = {};
        var metaTags = document$1.head.querySelectorAll("meta[name],meta[property]");
        for (var i = 0; i < metaTags.length; i++) {
            var meta = metaTags.item(i);
            var name = meta.name;
            if (name === "") {
                name = meta.getAttribute("property");
                if (name === "") {
                    continue;
                }
            }
            if (metaDictionary[name]) {
                metaDictionary[name].push(meta.content);
            } else {
                metaDictionary[name] = [ meta.content ];
            }
        }
        window$1.addEventListener("after-navigate", readMetaTags);
    }
    function getMeta(name) {
        if (metaDictionary === undefined) {
            readMetaTags();
        }
        return metaDictionary[name] === undefined ? undefined : metaDictionary[name][0];
    }
    function getMetas(name) {
        if (metaDictionary === undefined) {
            readMetaTags();
        }
        return metaDictionary[name] ? metaDictionary[name].slice() : [];
    }
    function parseQueryString(queryString) {
        var match;
        var pl = /\+/g;
        var search = /([^&=]+)=?([^&]*)/g;
        var decode = function(s) {
            return decodeURIComponent(s.replace(pl, " "));
        };
        if (queryString === undefined) {
            queryString = location$1.search;
        }
        queryString = queryString.substring(1);
        var urlParams = {};
        while (match = search.exec(queryString)) {
            urlParams[decode(match[1])] = decode(match[2]);
        }
        return urlParams;
    }
    function toQueryString(args, multiKey) {
        if (multiKey === void 0) {
            multiKey = false;
        }
        var parts = [];
        var _loop_1 = function(name) {
            if (args.hasOwnProperty(name) && args[name] !== "" && args[name] !== null && args[name] !== undefined) {
                if (multiKey && Array.isArray(args[name])) {
                    args[name].forEach(function(arg) {
                        parts.push(encodeURIComponent(name) + "=" + encodeURIComponent(arg));
                    });
                } else {
                    parts.push(encodeURIComponent(name) + "=" + encodeURIComponent(args[name]));
                }
            }
        };
        for (var name in args) {
            _loop_1(name);
        }
        return parts.join("&");
    }
    function updateQueryString(args, method) {
        var current = parseQueryString();
        var changed = false;
        for (var name in args) {
            if (args.hasOwnProperty(name) && current[name] !== args[name]) {
                current[name] = args[name];
                changed = true;
            }
        }
        if (!changed) {
            return;
        }
        var queryString = toQueryString(current);
        if (queryString.length > 0) {
            queryString = "?" + queryString;
        }
        var url = location$1.protocol + "//" + location$1.host + location$1.pathname + queryString + location$1.hash;
        if (method === "pushState") {
            history$1.pushState(current, document$1.title, url);
        } else if (method === "replaceState") {
            history$1.replaceState(current, document$1.title, url);
        } else {
            location$1.href = url;
        }
    }
    var checkIsArchived = function() {
        var isArchived;
        return function(force) {
            if (!force && isArchived !== undefined) {
                return isArchived;
            }
            var dataSource = parseQueryString().dataSource;
            isArchived = getMeta("is_archived") === "true" || msDocs.data.pageTemplate === "SearchPage" && dataSource === "previousVersions";
            return isArchived;
        };
    }();
    function checkMachineTranslated(meta) {
        return /^(?:MT|MTE|MTE75|MTE95)$/i.test(meta);
    }
    function checkIsRetired() {
        return getMeta("is_retired") === "true";
    }
    function showArchiveDisclaimer() {
        if (!checkIsArchived()) {
            return;
        }
        var isMachineTranslated = checkMachineTranslated(getMeta("ms.translationtype"));
        var retireString = isMachineTranslated ? loc_disclaimer_archiveRetireMachineTranslated : loc_disclaimer_archiveRetire;
        var archiveString = isMachineTranslated ? loc_disclaimer_archiveMachineTranslated : loc_disclaimer_archive;
        var archiveUrl = getMeta("current_version_url");
        var disclaimer = checkIsRetired() ? retireString : archiveString;
        var visualStudioArchive = getMeta("vs_archive") === "true";
        if (visualStudioArchive) {
            var visualStudioBanner = loc_visualStudioArchive;
            var text = loc_visualStudioArchiveDownload;
            showDisclaimer(visualStudioBanner, {
                url: "https://aka.ms/upgradevs2017",
                text: text
            });
        }
        if (archiveUrl) {
            var text = loc_disclaimer_recommendedVersion;
            showDisclaimer(disclaimer, {
                url: archiveUrl,
                text: text
            });
        } else if (msDocs.data.pageTemplate === "SearchPage") {
            var text = loc_disclaimer_returnToMain;
            showDisclaimer(loc_disclaimerSearchPreviousVersions, {
                url: "https://docs.microsoft.com",
                text: text
            });
        } else {
            var text = loc_disclaimer_returnToMain;
            showDisclaimer(disclaimer, {
                url: "https://docs.microsoft.com",
                text: text
            });
        }
    }
    function handleArchive() {
        if (!checkIsArchived()) {
            return;
        }
        showArchiveDisclaimer();
    }
    var idProperty = "__event_type_id__";
    var nextId = 0;
    var EventBus = function() {
        function EventBus() {
            this.callbacks = {};
        }
        EventBus.prototype.publish = function(event) {
            var id = event.constructor[idProperty];
            if (id === undefined || this.callbacks[id] === undefined) {
                return;
            }
            var callbacks = this.callbacks[id].slice(0);
            for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
                var callback = callbacks_1[_i];
                callback(event);
            }
        };
        EventBus.prototype.subscribe = function(eventType, callback) {
            var _this = this;
            if (!eventType.hasOwnProperty(idProperty)) {
                eventType[idProperty] = nextId++;
            }
            var id = eventType[idProperty];
            if (this.callbacks[id] === undefined) {
                this.callbacks[id] = [];
            }
            var callbacks = this.callbacks[id];
            if (callbacks.indexOf(callback) === -1) {
                callbacks.push(callback);
            }
            return function() {
                return _this.unsubscribe(eventType, callback);
            };
        };
        EventBus.prototype.unsubscribe = function(eventType, callback) {
            var id = eventType[idProperty];
            if (id === undefined || this.callbacks[id] === undefined) {
                return;
            }
            var callbacks = this.callbacks[id];
            var index = callbacks.indexOf(callback);
            if (index !== -1) {
                callbacks.splice(index, 1);
            }
        };
        EventBus.prototype.dispose = function() {
            this.callbacks = {};
        };
        return EventBus;
    }();
    var eventBus = new EventBus();
    var beforeUnloadFns = [];
    function beforeUnload(fn) {
        beforeUnloadFns.push(fn);
    }
    function listenUntilUnload(target, type, listener, options) {
        target.addEventListener(type, listener, options);
        var dispose = function() {
            return target.removeEventListener(type, listener, options);
        };
        beforeUnload(dispose);
        return dispose;
    }
    var tabbable = [ "a", "area", "button", "iframe", "input", "select", "textarea", "[contenteditable]", "[tabindex]" ];
    function constrainFocus(element) {
        return function(event) {
            if (event.target instanceof Element && !element.contains(event.target)) {
                event.preventDefault();
                var target = void 0;
                var visibleTabbableElements = Array.from(element.querySelectorAll(tabbable.join(",")));
                if (event.target.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_FOLLOWING) {
                    visibleTabbableElements = visibleTabbableElements.reverse();
                }
                var i = visibleTabbableElements.length;
                while (i--) {
                    var el = visibleTabbableElements[i];
                    var style = getComputedStyle(el);
                    if (!el.hidden && style.display != "none" && style.visibility != "none") {
                        target = el;
                        break;
                    }
                }
                target = target || element;
                target.focus();
            }
        };
    }
    function createTabSentinel(document) {
        var sentinel = document.createElement("span");
        sentinel.setAttribute("tabindex", "0");
        sentinel.classList.add("modal-tab-sentinel");
        return sentinel;
    }
    var modalBase = '\n\t<div class="modal-background modal-close"></div>\n';
    var Modal = function() {
        function Modal(modalContent, bus, parentContainer) {
            var _this = this;
            this.clickHandler = function(event) {
                var target = event.target;
                if (target.closest(".modal-close")) {
                    event.preventDefault();
                    _this.hide();
                }
            };
            this.escHandler = function(event) {
                if (event.keyCode === 27) {
                    event.preventDefault();
                    _this.hide();
                }
            };
            this.bus = bus || eventBus;
            this.container = parentContainer || document$1.createElement("div");
            this.container.setAttribute("tabindex", "-1");
            this.container.setAttribute("role", "dialog");
            this.container.classList.add("modal");
            this.container.classList.add("has-default-focus");
            this.container.innerHTML = modalBase;
            this.container.appendChild(modalContent);
            this.wrapper = document$1.createElement("div");
            this.wrapper.insertAdjacentElement("afterbegin", this.container);
            document$1.body.insertAdjacentElement("afterbegin", this.wrapper);
        }
        Modal.prototype.show = function() {
            if (this.container.classList.contains("is-active")) {
                return;
            }
            Modal.openCount++;
            this.wrapper.addEventListener("click", this.clickHandler);
            this.wrapper.addEventListener("keydown", this.escHandler);
            document$1.documentElement.style.overflowY = "hidden";
            this.container.classList.add("is-active");
            document$1.body.insertAdjacentElement("afterbegin", createTabSentinel(document$1));
            document$1.body.insertAdjacentElement("afterbegin", createTabSentinel(document$1));
            this.lastFocus = document$1.activeElement;
            this.focusHandler = constrainFocus(this.wrapper);
            listenUntilUnload(window$1, "focus", this.focusHandler, true);
            this.container.focus();
            this.bus.publish(new ModalOpenEvent());
        };
        Modal.prototype.hide = function() {
            if (!this.container.classList.contains("is-active")) {
                return;
            }
            Modal.openCount--;
            document$1.documentElement.style.overflowY = "";
            this.container.classList.remove("is-active");
            this.wrapper.parentElement.removeChild(this.wrapper);
            Array.from(document$1.body.querySelectorAll(".modal-tab-sentinel")).forEach(function(element) {
                document$1.body.removeChild(element);
            });
            window$1.removeEventListener("focus", this.focusHandler);
            this.wrapper.removeEventListener("click", this.clickHandler);
            this.wrapper.removeEventListener("keydown", this.escHandler);
            if (this.lastFocus && this.lastFocus instanceof HTMLElement) {
                this.lastFocus.focus();
            }
            this.bus.publish(new ModalCloseEvent());
        };
        Modal.openCount = 0;
        return Modal;
    }();
    var ModalOpenEvent = function() {
        function ModalOpenEvent() {}
        return ModalOpenEvent;
    }();
    var ModalCloseEvent = function() {
        function ModalCloseEvent() {}
        return ModalCloseEvent;
    }();
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : new P(function(resolve) {
                    resolve(result.value);
                }).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = {
            label: 0,
            sent: function() {
                if (t[0] & 1) throw t[1];
                return t[1];
            },
            trys: [],
            ops: []
        }, f, y, t, g;
        return g = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
        }), g;
        function verb(n) {
            return function(v) {
                return step([ n, v ]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
                0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [ op[0] & 2, t.value ];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;

                  case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };

                  case 5:
                    _.label++;
                    y = op[1];
                    op = [ 0 ];
                    continue;

                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;

                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [ 6, e ];
                y = 0;
            } finally {
                f = t = 0;
            }
            if (op[0] & 5) throw op[1];
            return {
                value: op[0] ? op[1] : void 0,
                done: true
            };
        }
    }
    var isProduction = !/^ppe\.|localhost/.test(location.hostname);
    var techProfileDomain = "techprofile.microsoft.com";
    var techProfileUrl = isProduction ? techProfileDomain : "ppe." + techProfileDomain;
    var fallbackImageUrl = "data:image/svg+xml;base64," + btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 448"><path fill="#e0e0e0" d="M277.733 252.81c31.966-18.644 53.742-52.923 53.742-92.527 0-59.267-48.22-107.475-107.475-107.475-59.267 0-107.475 48.208-107.475 107.475 0 39.604 21.77 73.884 53.738 92.528C112.35 274.105 72 328.998 72 395.193h24.566c0-71.466 55.98-127.434 127.434-127.434 72.64 0 127.434 54.793 127.434 127.434H376c0-66.197-40.35-121.09-98.267-142.383zM141.09 160.282c0-45.713 37.197-82.91 82.91-82.91 45.725 0 82.91 37.197 82.91 82.91s-37.186 82.91-82.91 82.91c-45.713 0-82.91-37.197-82.91-82.91z"/></svg>');
    var UserChangedEvent = function() {
        function UserChangedEvent() {}
        return UserChangedEvent;
    }();
    var User = function(_super) {
        __extends(User, _super);
        function User() {
            var _this = _super.call(this) || this;
            _this.setAnonymous();
            return _this;
        }
        User.prototype.setAnonymous = function() {
            if (this.isAuthenticated === false) {
                return;
            }
            this.userId = "00000000-0000-0000-0000-000000000000";
            this.upn = "anonymous@anonymous.com";
            this.email = "anonymous@anonymous.com";
            this.userName = "Anonymous";
            this.displayName = "Anonymous";
            this.authenticationMode = "AAD";
            this.isAuthenticated = false;
            this.avatarUrl = fallbackImageUrl;
            this.profileUrl = "#";
            this.isMicrosoftUser = false;
            this.createdOn = null;
            this.hasSeenMicrosoftPrivacyNotice = true;
            this.publish(new UserChangedEvent());
        };
        User.prototype.readUserProfile = function(profileResponse) {
            this.userId = profileResponse.userId;
            this.upn = profileResponse.upn || "";
            this.email = profileResponse.email || "";
            this.userName = profileResponse.userName;
            this.displayName = profileResponse.displayName || profileResponse.userName || profileResponse.email;
            this.isAuthenticated = true;
            this.avatarUrl = profileResponse.avatarUrl || fallbackImageUrl;
            this.profileUrl = getProfileUrl(profileResponse.userName, msDocs.data.userLocale);
            this.authenticationMode = profileResponse.authenticationMode ? profileResponse.authenticationMode.toUpperCase() : "MSA";
            this.isMicrosoftUser = profileResponse.isMicrosoftUser;
            this.hasSeenMicrosoftPrivacyNotice = profileResponse.hasSeenMicrosoftPrivacyNotice;
            this.createdOn = profileResponse.createdOn;
            this.publish(new UserChangedEvent());
        };
        User.prototype.whenAuthenticated = function() {
            var _this = this;
            if (user.isAuthenticated) {
                return Promise.resolve();
            }
            return new Promise(function(resolve) {
                return _this.subscribe(UserChangedEvent, function() {
                    if (_this.isAuthenticated) {
                        resolve();
                    }
                });
            });
        };
        return User;
    }(EventBus);
    var user = new User();
    function refreshProfileFields(container, profile) {
        Array.from(container.querySelectorAll("[data-profile-property]")).forEach(function(element) {
            var propertyName = element.getAttribute("data-profile-property");
            if (element instanceof HTMLImageElement && propertyName === "avatarUrl") {
                element.onerror = function() {
                    return element.src = fallbackImageUrl;
                };
                element.src = profile[propertyName];
            } else if (element instanceof HTMLAnchorElement && propertyName === "profileUrl") {
                element.href = profile[propertyName];
            } else if (propertyName === "isMicrosoftUser") {
                element.hidden = !profile[propertyName];
            } else if (element instanceof HTMLInputElement) {
                element.value = profile[propertyName];
            } else {
                element.textContent = profile[propertyName];
            }
        });
    }
    function getProfileUrl(username, locale) {
        return "https://" + techProfileUrl + "/" + locale + "/" + username;
    }
    var base = "https://docs.microsoft.com/api/auth";
    var claimsUrl = isProduction ? "https://docs.microsoft.com/api/profiles/me" : "https://ppe.docs.microsoft.com/api/profiles/me";
    var signInUrl = base + "/signin";
    var signOutUrl = base + "/signout";
    var returnUrlArg = "replyUrl";
    function tryLoadUser() {
        return fetch(claimsUrl, {
            mode: "cors",
            credentials: "include"
        }).then(function(response) {
            return response;
        }).then(function(response) {
            return response.ok && response.status !== 204 ? response.json().then(transformClaimsResponse).then(function(claims) {
                return user.readUserProfile(claims);
            }) : user.setAnonymous();
        }, function() {
            return user.setAnonymous();
        });
    }
    function transformClaimsResponse(response) {
        return response.claims ? {
            userId: response.claims.id,
            email: response.claims.email,
            userName: response.claims.name,
            avatarUrl: response.claims.profilePicLink,
            upn: response.claims.email,
            displayName: response.claims.name,
            authenticationMode: response.authenticationMode,
            isMicrosoftUser: response.isMicrosoftUser,
            hasSeenMicrosoftPrivacyNotice: response.hasSeenMicrosoftPrivacyNotice,
            createdOn: response.createdOn
        } : response;
    }
    function process401Response(response) {
        if (response.status === 401) {
            user.setAnonymous();
        }
        return response;
    }
    var fetchWithTimeout = function(input, init) {
        var timeout = 30 * 1e3;
        return new Promise(function(resolve, reject) {
            var timeoutHandle = setTimeout(function() {
                return trackAndReject("timeout");
            }, timeout);
            var trackAndResolve = function(response) {
                clearTimeout(timeoutHandle);
                resolve(response);
            };
            var trackAndReject = function(reason) {
                clearTimeout(timeoutHandle);
                reject(reason);
            };
            fetch(input, init).then(trackAndResolve, trackAndReject);
        });
    };
    function createRequest$1(url, init, isCredential) {
        if (isCredential === void 0) {
            isCredential = true;
        }
        init = init || {};
        init.mode = "cors";
        if (isCredential) {
            init.credentials = "include";
        }
        var request = new Request(url, init);
        if (request.method === "PUT" || request.method === "POST") {
            request.headers.set("Content-Type", "application/json");
        }
        return request;
    }
    var serverUrl = isProduction ? "https://docs.microsoft.com/api/profiles" : "https://ppe.docs.microsoft.com/api/profiles";
    var meUrl = serverUrl + "/me";
    function setAadConsent() {
        return __awaiter(this, void 0, Promise, function() {
            var url, init, response;
            return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    url = meUrl + "/acknowledgeMicrosoftPrivacyNotice";
                    init = {
                        method: "POST"
                    };
                    return [ 4, fetchWithTimeout(createRequest(url, init)) ];

                  case 1:
                    response = _a.sent();
                    process401Response(response);
                    if (!response.ok) {
                        throw new Error("Unexpected response status " + response.status + " for " + url);
                    }
                    return [ 2 ];
                }
            });
        });
    }
    function createRequest(url, init, isCredential) {
        if (isCredential === void 0) {
            isCredential = true;
        }
        init = init || {};
        init.mode = "cors";
        if (isCredential) {
            init.credentials = "include";
        }
        var request = new Request(url, init);
        if (request.method === "PUT" || request.method === "POST") {
            request.headers.set("Content-Type", "application/json");
        }
        return request;
    }
    var breakTextRegexDots = /([A-Z]\.|[a-z]\.)([A-Z]|[a-z])/g;
    var breakTextRegexCase = /([a-z])([A-Z]+[a-z])/g;
    var breakTextReplace = "$1<wbr>$2";
    var unbreakTextRegex = /\u200B/g;
    function breakText(str, dotsOnly) {
        if (dotsOnly === void 0) {
            dotsOnly = false;
        }
        if (!str || str.length === 0) {
            return str;
        }
        str = str.replace(breakTextRegexDots, breakTextReplace);
        if (dotsOnly) {
            return str;
        }
        return str.replace(breakTextRegexCase, breakTextReplace);
    }
    function unbreakText(str) {
        return str.replace(unbreakTextRegex, "");
    }
    function supportsWbrElement() {
        var testDiv = document.createElement("div");
        testDiv.style.cssText = "position:fixed;width:1px;line-height:16px;word-wrap:normal;word-break:normal;white-space:normal;border: 1px solid red;top:-1000px";
        testDiv.innerHTML = "x<wbr>x";
        document.body.appendChild(testDiv);
        var supportsWbr = testDiv.clientHeight > 16;
        document.body.removeChild(testDiv);
        return supportsWbr;
    }
    function polyfillWbrElement() {
        var style = document.createElement("style");
        style.textContent = 'wbr::after { content: "​"}';
        document.head.appendChild(style);
    }
    function ensureWbr() {
        addWbrViaClass(document.body);
        if (!supportsWbrElement()) {
            polyfillWbrElement();
        }
    }
    function addWbrViaClass(element) {
        var xrefs = Array.from(element.querySelectorAll(".break-text > .xref"));
        xrefs.forEach(function(node) {
            if (node.firstElementChild !== null) {
                return;
            }
            var dotsOnly = node.parentElement.classList.contains("dots-only");
            var replacementHTML = breakText(node.textContent.replace(/</g, "&lt;").replace(/>/g, "&gt;"), dotsOnly);
            node.innerHTML = replacementHTML;
        });
    }
    function cleanText(value) {
        if (value && value.length) {
            return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&amp;lrm;/g, "&lrm;");
        }
        return value;
    }
    var htmlEscapes = {
        "&": "&amp",
        "<": "&lt",
        ">": "&gt",
        '"': "&quot",
        "'": "&#39"
    };
    var reUnescapedHtml = /[&<>"']/g;
    var reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    function escape$1(string) {
        return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, function(chr) {
            return htmlEscapes[chr];
        }) : string;
    }
    function escapeRegExp(string) {
        return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
    var supportsInnerText = false;
    function checkInnerTextSupported() {
        document.body.insertAdjacentHTML("beforeend", "<div><span hidden>hidden</span></div>");
        var el = document.body.lastElementChild;
        supportsInnerText = el.innerText === "";
        document.body.removeChild(el);
        return supportsInnerText;
    }
    function getVisibleTextContent(elt) {
        if (supportsInnerText) {
            return elt.innerText;
        }
        var clone = elt.cloneNode(true);
        clone.hidden = true;
        document.body.appendChild(clone);
        function removeHiddenNodes(el) {
            if (el === null) {
                return;
            }
            removeHiddenNodes(el.nextElementSibling);
            if (window.getComputedStyle(el, null).getPropertyValue("display") === "none") {
                el.parentElement.removeChild(el);
            } else {
                removeHiddenNodes(el.firstElementChild);
            }
        }
        removeHiddenNodes(clone.firstElementChild);
        document.body.removeChild(clone);
        return clone.textContent;
    }
    function checkAadConsent(user) {
        var notTechProfile = location.hostname.indexOf("techprofile.microsoft.com") === -1;
        if (user.isAuthenticated && user.isMicrosoftUser && !user.hasSeenMicrosoftPrivacyNotice && notTechProfile) {
            showConsentModal(user.upn);
        }
    }
    function showConsentModal(email) {
        var modalContent = document$1.createElement("div");
        var bodyModalText = loc_microsoftEmployeePrivacyStatement.replace("{email}", escape$1(email));
        modalContent.innerHTML = '\n\t\t<div id="consentModal" class="modal-card is-shadowless-mobile fill-mobile has-padding-large has-padding-medium-mobile">\n\t\t\t<section class="modal-card-body">\n\t\t\t\t<h2 class="is-text-centered">' + loc_microsoftEmployeePrivacyNotice + "</h2>\n\t\t\t\t<p>" + bodyModalText + '</p>\n\t\t\t\t<button id="employeeConsent" class="modal-close button is-primary is-block has-margin-auto-sides has-margin-top-large">\n\t\t\t\t\t' + loc_okGotIt + '\n\t\t\t\t</button>\n\t\t\t\t<a class="is-block is-size-7 is-text-centered has-margin-top-small" href="https://techprofile.microsoft.com/' + msDocs.data.userLocale + '/edit">' + loc_manageMyProfile + "</a>\n\t\t\t</section>\n\t\t</div>\n\t";
        new Modal(modalContent).show();
        var modalButton = document$1.getElementById("employeeConsent");
        modalButton.onclick = setAadConsent;
    }
    function initDisplayClasses(user$$1, container) {
        var handler = function() {
            return container.setAttribute("data-authenticated", user$$1.isAuthenticated.toString());
        };
        handler();
        user$$1.subscribe(UserChangedEvent, handler);
    }
    var keyCodes = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        home: 36,
        end: 35,
        escape: 27,
        enter: 13
    };
    var signInClassName = "docs-sign-in";
    var signOutClassName = "docs-sign-out";
    function initSignInLinks(container) {
        initBIHandler(container);
        container.addEventListener("click", function(event) {
            if (!(event.target instanceof Element)) {
                return;
            }
            var element = event.target.closest("." + signInClassName + ", ." + signOutClassName);
            if (!element) {
                return;
            }
            var isSignIn = element.classList.contains(signInClassName);
            event.preventDefault();
            var anchorWithHref = 'a[href]:not([href=""]):not([href="#"])';
            var returnUrl = element instanceof HTMLAnchorElement && element.matches(anchorWithHref) ? element.href : location.href;
            var forceRegisterQueryParam = isSignIn ? "&forceRegistration=true" : "";
            location.href = (isSignIn ? signInUrl : signOutUrl) + "?" + returnUrlArg + "=" + encodeURIComponent(returnUrl) + forceRegisterQueryParam;
        });
    }
    function initBIHandler(container) {
        var attributeHandler = function(event) {
            if (!(event.target instanceof Element)) {
                return;
            }
            var element = event.target.closest("." + signInClassName + ", ." + signOutClassName);
            if (!element) {
                return;
            }
            var isSignIn = element.classList.contains(signInClassName);
            event.target.setAttribute("data-m", JSON.stringify({
                cN: isSignIn ? signInClassName : signOutClassName,
                bhvr: isSignIn ? 100 : 101
            }));
        };
        container.addEventListener("touchstart", attributeHandler, true);
        container.addEventListener("pointerdown", attributeHandler, true);
        container.addEventListener("keyup", function(event) {
            if (event.which === keyCodes.enter) {
                attributeHandler(event);
            }
        }, true);
    }
    var resolveAuthStatus;
    var authStatusDetermined = new Promise(function(resolve) {
        return resolveAuthStatus = resolve;
    });
    function initAuth() {
        if (!isSigninEnabled()) {
            return;
        }
        initDisplayClasses(user, document.documentElement);
        initSignInLinks(document.documentElement);
        user.subscribe(UserChangedEvent, function() {
            return refreshProfileFields(document.body, user);
        });
        tryLoadUser().then(resolveAuthStatus);
        authStatusDetermined.then(function() {
            if (user.isMicrosoftUser) {
                checkAadConsent(user);
            }
        });
    }
    function isSigninEnabled() {
        var restrictedBrands = {
            mooncake: true,
            advocates: true,
            "regional-directors": true
        };
        return !restrictedBrands[msDocs.data.brand];
    }
    function generateOptionsMap(selectorDivElement, isSingleSelector) {
        var optionsMap = {};
        getAzureSelectorAnchors(selectorDivElement).each(function() {
            if ($(this) && $(this).text()) {
                var contents = isSingleSelector ? [ $(this).text(), "default" ] : $(this).text().trim().slice(1, -1).split("|");
                if (contents.length === 2) {
                    var firstOption = contents[0].trim();
                    var secondOption = contents[1].trim();
                    var targetLink = $(this).attr("href");
                    if (firstOption && secondOption && targetLink) {
                        if (!optionsMap[firstOption]) {
                            optionsMap[firstOption] = {};
                        }
                        optionsMap[firstOption][secondOption] = targetLink;
                    }
                }
            }
        });
        return optionsMap;
    }
    function getAbsoluteURI(url) {
        var link = document.createElement("a");
        link.href = url;
        if (link.host === "") {
            link.href = link.href;
        }
        return link.protocol + "//" + link.host + link.pathname;
    }
    function getCurrentSelectedOptions(optionsMap) {
        var browserUrlString = window.location.href.toLowerCase();
        var browser = getAbsoluteURI(browserUrlString);
        for (var mainOptionValue in optionsMap) {
            for (var secondaryOptionValue in optionsMap[mainOptionValue]) {
                var targetUrlString = optionsMap[mainOptionValue][secondaryOptionValue].toLowerCase();
                if (getAbsoluteURI(targetUrlString).localeCompare(browser, undefined, {
                    sensitivity: "base"
                }) === 0) {
                    return [ mainOptionValue, secondaryOptionValue ];
                }
            }
        }
        return [ null, null ];
    }
    function createDropdowns(selectorDivElement, isSingleSelector, defaultOption) {
        function dropdownItemTemplate(key) {
            return [ key, key ];
        }
        function jumpToUrl(targetUrl) {
            window.location.href = targetUrl;
        }
        var optionsMap = generateOptionsMap(selectorDivElement, isSingleSelector);
        var selectedOptions = getCurrentSelectedOptions(optionsMap);
        var container = createAzureSelectorsContainer();
        var firstDropdown = createAzureSelectorDropdown(container, selectorDivElement.attr("title1"));
        var secondDropdown = null;
        populateDropdownOptions(firstDropdown, optionsMap, dropdownItemTemplate, false, defaultOption);
        firstDropdown.val(selectedOptions[0]);
        if (!isSingleSelector) {
            secondDropdown = createAzureSelectorDropdown(container, selectorDivElement.attr("title2"));
            firstDropdown.change(function() {
                populateDropdownOptions(secondDropdown, firstDropdown.val() ? optionsMap[firstDropdown.val()] : {}, dropdownItemTemplate, false, defaultOption);
            });
            secondDropdown.change(function() {
                if (firstDropdown.val() && secondDropdown.val()) {
                    jumpToUrl(optionsMap[firstDropdown.val()][secondDropdown.val()]);
                }
            });
            firstDropdown.change();
            secondDropdown.val(selectedOptions[1]);
        } else {
            firstDropdown.change(function() {
                if (firstDropdown.val()) {
                    jumpToUrl(optionsMap[firstDropdown.val()].default);
                }
            });
        }
        selectorDivElement.replaceWith(container);
    }
    function renderAzureSelectors() {
        var defaultOption = loc_azureSelectorPrompt;
        getSingleAzureSelectors().each(function() {
            createDropdowns($(this), true, defaultOption);
        });
        getDoubleAzureSelectors().each(function() {
            createDropdowns($(this), false, defaultOption);
        });
    }
    function getSingleAzureSelectors() {
        return $(".op_single_selector");
    }
    function getDoubleAzureSelectors() {
        return $(".op_multi_selector");
    }
    function getAzureSelectorAnchors(azureSelector) {
        return azureSelector.find("li > a");
    }
    function createAzureSelectorsContainer() {
        return $('<div class="' + cssClassNames.azureSelectorContainer + '"></div>');
    }
    var cssClassNames = {
        linkNoHref: "nohref",
        tocNodeContainer: "toc-content",
        tocNodeLevelPrefix: "toc-level-",
        tocNodeExpander: "toc-expander",
        tocNodeCollapsed: "toc-collapsed",
        azureSelectorContainer: "azureselector"
    };
    function createAzureSelectorDropdown(azureSelectorContainer, title) {
        var wrapper = $("<div></div>");
        var dropdown = $("<select></select>");
        if (title) {
            wrapper.append($("<label>" + title + "</label>"));
        }
        wrapper.append(dropdown);
        azureSelectorContainer.append(wrapper);
        return dropdown;
    }
    function populateDropdownOptions(selectElement, optionsModel, itemTemplate, noNullOption, defaultOption) {
        selectElement.empty();
        if (!noNullOption) {
            selectElement.append($('<option value="">' + defaultOption + "</option>"));
        }
        for (var key in optionsModel) {
            var item = itemTemplate(key, optionsModel[key]);
            if (item && item.length === 2) {
                selectElement.append($('<option value="' + item[1] + '">' + item[0] + "</option>"));
            }
        }
    }
    var azureSandbox = {
        value: null
    };
    var AzureSandboxChangedEvent = function() {
        function AzureSandboxChangedEvent(sandbox) {
            this.sandbox = sandbox;
        }
        return AzureSandboxChangedEvent;
    }();
    var azureSandboxActivateParameter = "activate-azure-sandbox";
    function sandboxIsExpired(sandbox) {
        return new Date(sandbox.moduleExpiresAt).getTime() <= Date.now();
    }
    var azureToken = {
        value: null
    };
    var tokenApi = {
        tryLoad: function() {
            var url = "https://token.docs.microsoft.com/accesstokens";
            var requestInit = {
                method: "POST",
                mode: "cors",
                credentials: "include"
            };
            return fetch(url, requestInit).then(function(response) {
                if (!response.ok) {
                    return Promise.reject();
                }
                return response.json().then(function(tokens) {
                    tokens.forEach(function(t) {
                        return t.tenant_id = t.tenant_id.replace("/tenants/", "");
                    });
                    return tokens;
                });
            }).catch(function() {
                return null;
            });
        }
    };
    var fiveMinutesInMs = 5 * 60 * 1e3;
    var intervalHandle = 0;
    function initTokenRenewal() {
        document.addEventListener("visibilitychange", visibilityChanged, {
            passive: true
        });
        visibilityChanged();
    }
    function visibilityChanged() {
        if (document.visibilityState === "visible") {
            intervalHandle = setInterval(tryRenew, fiveMinutesInMs);
        } else {
            clearInterval(intervalHandle);
        }
    }
    function tryRenew() {
        if (!azureToken.value) {
            return;
        }
        tokenApi.tryLoad().then(function(tokens) {
            var token = tokens.find(function(t) {
                return t.default_domain === azureToken.value.default_domain;
            });
            if (token) {
                azureToken.value = token;
            }
        });
    }
    function loadLibrary(url, globalName) {
        return new Promise(function(resolve, reject) {
            var script = document.createElement("script");
            script.src = url;
            script.async = true;
            script.defer = true;
            script.onload = resolve;
            script.onerror = function() {
                reject("Failed to load " + url);
            };
            (document.body || document.head).appendChild(script);
        }).then(function() {
            if (globalName === undefined) {
                return undefined;
            }
            if (window[globalName] === undefined) {
                throw new Error(url + " loaded successfully but " + globalName + " is undefined.");
            }
            return window[globalName];
        });
    }
    function loadUhf() {
        var isAzure = msDocs.data.brand === "azure";
        var method = isAzure ? "GetConsentBanner" : "GetUHF";
        var args = isAzure ? {
            locale: msDocs.data.userLocale
        } : {
            locale: msDocs.data.userLocale,
            headerId: getMeta("force_uhf_ppe") ? "MSDocsHeader-DocsL1" : checkIsArchived() ? "MSDocsHeader-Archive" : msDocs.data.context.uhfHeaderId || getMeta("uhfHeaderId") || "MSDocsHeader-DocsL1",
            footerId: "MSDocsFooter",
            bustCache: 0
        };
        var promise = Promise.resolve(false);
        if (!isAzure && getMeta("force_uhf_ppe") === "true") {
            promise = Promise.resolve(true);
        }
        return promise.then(function(experimentEnabled) {
            if (experimentEnabled) {
                args.usePPE = true;
            }
            var url = "https://docs.microsoft.com/api/" + method + "?" + toQueryString(args);
            return fetch(url).then(function(response) {
                return response.json();
            });
        }).then(function(uhf) {
            var htmlPrerequisites = [ contentLoaded ];
            var firstHeadElt = document$1.head.firstElementChild;
            var _loop_1 = function(url) {
                var link = document$1.createElement("link");
                link.rel = "stylesheet";
                link.href = url;
                htmlPrerequisites.push(new Promise(function(resolve) {
                    link.onload = resolve;
                }));
                document$1.head.insertBefore(link, firstHeadElt);
            };
            for (var _i = 0, _a = uhf.cssIncludes; _i < _a.length; _i++) {
                var url = _a[_i];
                _loop_1(url);
            }
            return Promise.all(htmlPrerequisites).then(function() {
                return uhf;
            });
        }).then(function(uhf) {
            var placeholderId = isAzure ? "azure-cookie-notification-holder" : "headerAreaHolder";
            var placeholder = document$1.getElementById(placeholderId);
            placeholder.innerHTML = uhf.headerHTML;
            if (!isAzure) {
                placeholder.querySelector(".c-uhfh-actions").insertAdjacentHTML("beforeend", '<div class="auth-control" aria-busy="true" aria-label="' + loc_loading + '"></div>');
            }
            notifyContentUpdated();
            var scriptPromises = [];
            var _loop_2 = function(url) {
                var script = document$1.createElement("script");
                script.src = url;
                script.defer = true;
                scriptPromises.push(new Promise(function(resolve) {
                    script.onload = resolve;
                }));
                document$1.head.appendChild(script);
            };
            for (var _i = 0, _a = uhf.javascriptIncludes; _i < _a.length; _i++) {
                var url = _a[_i];
                _loop_2(url);
            }
            return Promise.all(scriptPromises);
        });
    }
    function disableSearchSuggestions() {
        var shellOptions = {
            as: {
                callback: function() {}
            }
        };
        if (window$1.msCommonShell) {
            window$1.msCommonShell.load(shellOptions);
        } else {
            window$1.onShellReadyToLoad = function() {
                delete window$1.onShellReadyToLoad;
                window$1.msCommonShell.load(shellOptions);
            };
        }
    }
    function loadAzureHeader() {
        var azureHeaderLocale = msDocs.data.azureHeaderLocale;
        var baseUrl = "https://azurecomcdn.azureedge.net";
        var scriptUrl = baseUrl + "/" + azureHeaderLocale + "/asset/menujs/";
        var htmlUrl = baseUrl + "/" + azureHeaderLocale + "/asset/header/";
        var htmlPromise = fetch(htmlUrl, {
            mode: "cors"
        }).then(function(response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.text();
        });
        return Promise.all([ htmlPromise, contentLoaded ]).then(function(_a) {
            var html = _a[0];
            var placeholder = document$1.getElementById("headerAreaHolder");
            placeholder.lang = azureHeaderLocale;
            placeholder.dir = "ltr";
            placeholder.innerHTML = html;
            return loadLibrary(scriptUrl);
        }).catch(function() {});
    }
    var setHeaderLoaded;
    var headerLoaded = new Promise(function(resolve) {
        return setHeaderLoaded = resolve;
    });
    function initHeader() {
        var brand = msDocs.data.brand;
        if (brand === "mooncake") {
            setHeaderLoaded();
            return;
        }
        if (brand !== "azure" && brand !== "mooncake") {
            disableSearchSuggestions();
        }
        var promises = [ loadUhf() ];
        if (brand === "azure") {
            promises.push(loadAzureHeader());
        }
        Promise.all(promises).then(function() {
            return setHeaderLoaded();
        });
    }
    var consentGranted;
    var cookieConsent = new Promise(function(resolve) {
        return consentGranted = resolve;
    });
    var setInitialDisposition;
    var initialCookieConsentDisposition = new Promise(function(resolve) {
        return setInitialDisposition = resolve;
    });
    function initCookieConsent() {
        if (msDocs.data.context.chromeless) {
            consentGranted();
            return;
        }
        headerLoaded.then(function() {
            var mscc = window$1.mscc;
            var hasConsent = mscc === undefined || mscc.hasConsent();
            setInitialDisposition(hasConsent);
            if (hasConsent) {
                consentGranted();
            } else {
                var unobserve_1 = observeInteractions(mscc);
                mscc.on("consent", function() {
                    unobserve_1();
                    consentGranted();
                });
            }
        });
    }
    function observeInteractions(mscc) {
        function processInteraction(_a) {
            var isTrusted = _a.isTrusted, target = _a.target, type = _a.type;
            if (!isTrusted) {
                return;
            }
            if (/input|change/.test(type) && (target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) {
                mscc.setConsent();
                return;
            }
            if (type === "click" && target instanceof Element && $(target).closest("button").length > 0) {
                mscc.setConsent();
                return;
            }
        }
        window$1.addEventListener("input", processInteraction, {
            passive: true
        });
        window$1.addEventListener("change", processInteraction, {
            passive: true
        });
        window$1.addEventListener("click", processInteraction, {
            passive: true
        });
        return function() {
            window$1.removeEventListener("input", processInteraction);
            window$1.removeEventListener("change", processInteraction);
            window$1.removeEventListener("click", processInteraction);
        };
    }
    var isHighContrast = false;
    function detectHighContrast() {
        var div = document$1.createElement("div");
        div.style.cssText = "position:absolute;top:0;left:-2300px;background-color:#878787";
        div.textContent = "hc";
        document$1.body.appendChild(div);
        var color = window$1.getComputedStyle(div).backgroundColor.toLowerCase();
        document$1.body.removeChild(div);
        if (color !== "#878787" && color !== "rgb(135, 135, 135)") {
            document$1.documentElement.className += " highContrast";
            isHighContrast = true;
        }
    }
    var contentTags = {
        id: "id",
        name: "name",
        type: "type",
        scenario: "scn",
        scenarioStep: "scnstp",
        scenarioStepNumber: "subnm"
    };
    var contentAttrs = {
        id: "data-bi-id",
        name: "data-bi-name",
        type: "data-bi-type",
        scenario: "data-bi-scn",
        scenarioStep: "data-bi-scnstp",
        scenarioStepNumber: "data-bi-subnm",
        satisfaction: "data-bi-sat"
    };
    function nm(name) {
        return contentAttrs.name + '="' + name + '"';
    }
    var jsllUrl = "https://az725175.vo.msecnd.net/scripts/jsll-4.js";
    var tagMapping = {
        audience: "aud",
        author: "author",
        manager: "manager",
        "ms.assetid": "asst",
        "ms.author": "pgauth",
        "ms.contentsource": "pgpubl",
        "ms.custom": "custom",
        "ms.date": "date",
        depot_name: "depotname",
        "ms.devlang": "pgdevlng",
        gitcommit: "gitcommit",
        original_content_git_url: "giturl",
        updated_at: "publishtime",
        "ms.prod": "product",
        "ms.reviewer": "reviewer",
        "ms.service": "pgsrvcs",
        "ms.suite": "suite",
        "ms.technology": "technology",
        "ms.tgt_pltfrm": "pgtrgtplf",
        "ms.topic": "pgtop",
        "ms.workload": "workload",
        "ms.search.region": "searchregion",
        "ms.prod_service": "prod_service",
        "ms.component": "component",
        experimental: "experimental",
        experiment_id: "experiment_id",
        "ms.assigned_experiments": "assigned_experiments",
        translationtype: "translationtype",
        document_version_independent_id: "document_version_independent_id"
    };
    var notifyJsllReady;
    function track() {
        return Promise.all([ loadLibrary(jsllUrl, "awa"), initialCookieConsentDisposition ]).then(function(_a) {
            var awa = _a[0], hasCookieConsent = _a[1];
            trackUser(awa);
            configureJsll(awa, hasCookieConsent);
            trackSelectElementChange(awa);
            trackPageFocus(awa);
            trackPageVisibility(awa);
            trackPrint(awa);
            trackSecondaryContentScroll(awa);
            trackUnload(awa);
            trackUHFSearch(awa);
            trackCtrlF(awa);
            trackNavigation(awa);
            notifyJsllReady(awa);
        });
    }
    function setPageTagsFromMeta(pageTags) {
        var metas = document$1.querySelectorAll("meta");
        for (var i = 0; i < metas.length; i++) {
            var meta = metas.item(i);
            var awaTag = tagMapping[meta.name];
            if (awaTag) {
                pageTags[awaTag] = meta.content;
            }
        }
        pageTags.contentlocale = msDocs.data.contentLocale;
        pageTags.theme = msDocs.data.currentTheme;
        pageTags.highContrast = isHighContrast.toString();
    }
    function configureJsll(awa, hasCookieConsent) {
        var isOPSBased = msDocs.data.brand !== "techprofile";
        var jsllConfig = {
            syncMuid: hasCookieConsent,
            urlCollectHash: true,
            urlCollectQuery: true,
            autoCapture: {
                pageView: true,
                onLoad: true,
                click: true,
                scroll: true,
                resize: true,
                jsError: true,
                addin: true,
                msTags: false,
                perf: true,
                assets: false,
                lineage: true
            },
            coreData: {
                appId: {
                    "docs.microsoft.com": "Docs",
                    "techprofile.microsoft.com": "TechProfile",
                    "review.docs.microsoft.com": "DocsReview",
                    "docs.azure.cn": "DocsCN",
                    "developer.microsoft.com": "DevCenter"
                }[location.hostname] || "JsllTest",
                pageName: isOPSBased ? getMeta("document_id") || "missing document_id" : (document$1.querySelector('link[rel="canonical"]') || {
                    href: "missing canonical link"
                }).href,
                market: msDocs.data.userLocale,
                pageType: getMeta("page_type"),
                pageTags: {}
            },
            shareAuthStatus: true,
            isLoggedIn: false
        };
        if (isOPSBased) {
            setPageTagsFromMeta(jsllConfig.coreData.pageTags);
        }
        awa.consoleVerbosity = awa.verbosityLevels.WARNING;
        awa.init(jsllConfig);
    }
    var jsllReady = new Promise(function(resolve) {
        return notifyJsllReady = resolve;
    });
    function getName(element) {
        while (element && element.hasAttribute && !element.hasAttribute(contentAttrs.name)) {
            element = element.parentElement;
        }
        if (!element) {
            return "";
        }
        return element.getAttribute(contentAttrs.name);
    }
    function trackUser(awa) {
        var setUser = function() {
            var config = awa.getConfig();
            config.authMethod = user.authenticationMode === "MSA" ? 1 : 2;
            config.isLoggedIn = user.isAuthenticated;
            var id = user.isAuthenticated ? "c:" + user.userId : null;
            awa.ids.setAppUserId(id);
        };
        user.subscribe(UserChangedEvent, setUser);
        setUser();
    }
    function trackSelectElementChange(awa) {
        function handleChange(event) {
            if (!event.isTrusted || !(event.target instanceof HTMLSelectElement) || !event.target.hasAttribute(contentAttrs.name)) {
                return;
            }
            awa.ct.capturePageAction(event.target, {
                actionType: awa.actionType.OTHER,
                behavior: awa.behavior.OTHER,
                content: {
                    event: "select-value-changed",
                    name: getName(event.target),
                    value: event.target.value
                }
            });
        }
        document$1.addEventListener("change", handleChange, {
            passive: true
        });
    }
    function trackPageFocus(awa) {
        var previousType = "";
        function reportFocusChanged(event) {
            if (!event.isTrusted || previousType === event.type) {
                return;
            }
            previousType = event.type;
            awa.ct.captureContentPageAction({
                actionType: awa.actionType.OTHER,
                behavior: awa.behavior.OTHER,
                content: {
                    event: "page-focus-changed",
                    value: event.type
                }
            });
        }
        var timeout = 0;
        function handleFocusedChanged(event) {
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                return reportFocusChanged(event);
            }, 50);
        }
        window$1.addEventListener("focus", handleFocusedChanged, {
            passive: true
        });
        window$1.addEventListener("blur", handleFocusedChanged, {
            passive: true
        });
    }
    function trackPageVisibility(awa) {
        function visibilityChanged() {
            awa.ct.captureContentPageAction({
                actionType: awa.actionType.OTHER,
                behavior: awa.behavior.OTHER,
                content: {
                    event: "page-visibility-changed",
                    value: document$1.hidden ? "hidden" : "visible"
                }
            });
        }
        function attach() {
            document$1.addEventListener("visibilitychange", visibilityChanged, {
                passive: true
            });
        }
        document$1.readyState === "interactive" || document$1.readyState === "complete" ? attach() : document$1.addEventListener("DOMContentLoaded", attach);
    }
    function trackPrint(awa) {
        if (!window$1.matchMedia) {
            return;
        }
        window$1.matchMedia("print").addListener(function(m) {
            if (!m.matches) {
                return;
            }
            awa.ct.captureContentPageAction({
                actionType: awa.actionType.OTHER,
                behavior: awa.behavior.PRINT,
                content: {
                    event: "print"
                }
            });
        });
    }
    function trackSecondaryContentScroll(awa) {
        function reportScroll(event) {
            if (!event.isTrusted || !(event.target instanceof HTMLElement)) {
                return;
            }
            var _a = event.target.getBoundingClientRect(), width = _a.width, height = _a.height;
            var _b = event.target, scrollLeft = _b.scrollLeft, scrollTop = _b.scrollTop, scrollWidth = _b.scrollWidth, scrollHeight = _b.scrollHeight;
            awa.ct.capturePageAction(event.target, {
                actionType: awa.actionType.OTHER,
                behavior: awa.behavior.OTHER,
                content: {
                    event: "secondary-content-scroll",
                    name: getName(event.target),
                    viewPortWidth: Math.floor(width),
                    viewPortHeight: Math.floor(height),
                    contentWidth: Math.floor(scrollWidth),
                    contentHeight: Math.floor(scrollHeight),
                    horizontalOffset: Math.floor(scrollLeft),
                    verticalOffset: Math.floor(scrollTop)
                }
            });
        }
        function handleScroll(event) {
            if (event.target === document$1) {
                return;
            }
            var target = event.target;
            clearTimeout(target.reportScrollTimeout);
            target.reportScrollTimeout = setTimeout(function() {
                return reportScroll(event);
            }, 100);
        }
        window$1.addEventListener("scroll", handleScroll, {
            passive: true,
            capture: true
        });
    }
    function trackUnload(awa) {
        var anchor = false;
        function handleUnload() {
            awa.ct.captureContentPageAction({
                actionType: awa.actionType.OTHER,
                behavior: awa.behavior.OTHER,
                content: {
                    event: "unload",
                    anchor: anchor
                }
            });
        }
        function handleClick(event) {
            if (event.target instanceof HTMLAnchorElement) {
                anchor = true;
                setTimeout(function() {
                    return anchor = false;
                });
            }
        }
        function handleKeyDown(event) {
            if (event.target instanceof HTMLAnchorElement) {
                anchor = true;
                setTimeout(function() {
                    return anchor = false;
                });
            }
        }
        window$1.addEventListener("keydown", handleKeyDown, {
            capture: true,
            passive: true
        });
        window$1.addEventListener("click", handleClick, {
            capture: true,
            passive: true
        });
        window$1.addEventListener("beforeunload", handleUnload, {
            passive: true
        });
    }
    function trackUHFSearch(awa) {
        function handleSubmit(event) {
            var form = event.target;
            if (form.id !== "searchForm") {
                return;
            }
            var term = form.querySelector('input[name="search"]').value;
            var submitButtonIsFocused = form.querySelector("#search:focus") !== null;
            awa.ct.capturePageAction(form, {
                actionType: awa.actionType.OTHER,
                behavior: awa.behavior.SEARCH,
                content: {
                    event: "uhf-search",
                    value: term,
                    submitButton: submitButtonIsFocused
                }
            });
        }
        window$1.addEventListener("submit", handleSubmit, {
            passive: true,
            capture: true
        });
    }
    function trackCtrlF(awa) {
        function handleKeyDown(event) {
            if (event.isTrusted && event.keyCode === 70 && event.ctrlKey && !event.shiftKey && !event.altKey && !event.metaKey) {
                awa.ct.captureContentPageAction({
                    actionType: awa.actionType.OTHER,
                    behavior: awa.behavior.OTHER,
                    content: {
                        event: "ctrl-f"
                    }
                });
            }
        }
        window$1.addEventListener("keydown", handleKeyDown, {
            passive: true
        });
    }
    function trackNavigation(awa) {
        function handleNavigate(_a) {
            var detail = _a.detail;
            var overrides = {
                referrerUri: detail.referrerUrl,
                requestUri: detail.url,
                title: detail.title,
                pageName: getMeta("document_id") || "missing document_id",
                pageType: getMeta("page_type"),
                pageTags: {}
            };
            setPageTagsFromMeta(overrides.pageTags);
            awa.extendCoreData(overrides);
            awa.ct.capturePageView();
        }
        window$1.addEventListener("after-navigate", handleNavigate);
    }
    var localStorage$1 = {
        setItem: function(key, value) {
            try {
                window$1.localStorage.setItem(key, value);
            } catch (e) {}
        },
        getItem: function(key) {
            try {
                return window$1.localStorage.getItem(key);
            } catch (e) {
                return null;
            }
        },
        removeItem: function(key) {
            try {
                window$1.localStorage.removeItem(key);
            } catch (e) {}
        }
    };
    var sessionStorage = {
        setItem: function(key, value) {
            try {
                window$1.sessionStorage.setItem(key, value);
            } catch (e) {}
        },
        getItem: function(key) {
            try {
                return window$1.sessionStorage.getItem(key);
            } catch (e) {
                return null;
            }
        },
        removeItem: function(key) {
            try {
                window$1.sessionStorage.removeItem(key);
            } catch (e) {}
        }
    };
    function getPlatform() {
        var navigatorPlatforms = {
            iPhone: "ios",
            iPad: "ios",
            iPod: "ios",
            Macintosh: "macos",
            MacIntel: "macos",
            MacPPC: "macos",
            Mac68K: "macos",
            Win32: "windows",
            Win64: "windows",
            Windows: "windows",
            WinCE: "windows"
        };
        var platform = navigatorPlatforms[navigator.platform];
        if (platform !== undefined) {
            return platform;
        }
        if (/Android/.test(navigator.userAgent)) {
            return "android";
        }
        if (/Linux/.test(navigator.platform)) {
            return "linux";
        }
        return null;
    }
    function isPlatform(s) {
        return /^(?:android|ios|linux|macos|windows)$/.test(s);
    }
    var isMobileOrTablet = checkMobileOrTablet();
    function checkMobileOrTablet() {
        var check = false;
        var userAgent = navigator.userAgent || navigator.vendor;
        var mobileRegex = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
        var mobileRegex2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
        if (mobileRegex.test(userAgent) || mobileRegex2.test(userAgent.substr(0, 4))) {
            check = true;
        }
        return check;
    }
    var platform = getPlatform();
    var platformStorageKey = "preferred-platform";
    function getPreferredPlatform() {
        var raw = localStorage$1.getItem(platformStorageKey);
        if (raw !== null && isPlatform(raw)) {
            return raw;
        }
        return null;
    }
    var preferredPlatform = getPreferredPlatform();
    function setPreferredPlatform(platform) {
        localStorage$1.setItem(platformStorageKey, platform);
    }
    var h2Headings = [];
    var sectionIndicatorEnabled = false;
    var ignoreScrollOnce = false;
    var ignoreContentUpdateUntilScroll = false;
    function renderInTopicTOC() {
        var centerContainer = document$1.getElementById("center-doc-outline");
        var sideContainer = document$1.getElementById("side-doc-outline");
        var containers = [ centerContainer, sideContainer ];
        if (centerContainer === null || sideContainer === null) {
            return;
        }
        var headings = Array.from(document$1.querySelectorAll("#main h2")).filter(function(h) {
            return h.offsetParent !== null;
        });
        var minHeadings = msDocs.data.pageTemplate === "NamespaceListPage" ? 2 : 1;
        var hide = headings.length < minHeadings;
        containers.forEach(function(container) {
            container.hidden = hide;
            if (container.lastElementChild.nodeName === "OL") {
                container.removeChild(container.lastElementChild);
            }
        });
        if (hide) {
            return;
        }
        var ol = document$1.createElement("ol");
        h2Headings = [];
        for (var _i = 0, headings_1 = headings; _i < headings_1.length; _i++) {
            var heading = headings_1[_i];
            var text = getVisibleTextContent(heading).trim();
            if (heading.id.length === 0 || !heading.id) {
                heading.id = text.toLowerCase().replace(/\s+/g, "-");
            }
            var a = document$1.createElement("a");
            a.href = "#" + heading.id;
            a.textContent = text;
            var li = document$1.createElement("li");
            li.appendChild(a);
            ol.appendChild(li);
            h2Headings.push({
                element: heading,
                anchor: a
            });
        }
        sideContainer.appendChild(ol);
        centerContainer.appendChild(ol.cloneNode(true));
        if (h2Headings.length <= 1) {
            return;
        }
        if (!sectionIndicatorEnabled) {
            sideContainer.addEventListener("click", function(event) {
                var item = event.target instanceof Element && event.target.closest("a");
                if (!item) {
                    return;
                }
                ignoreScrollOnce = true;
                ignoreContentUpdateUntilScroll = true;
                selectH2ItemInSideOutline({
                    element: null,
                    anchor: item
                });
            });
            window.addEventListener("scroll", function() {
                if (ignoreScrollOnce) {
                    ignoreScrollOnce = false;
                    return;
                }
                ignoreContentUpdateUntilScroll = false;
                scheduleUpdate();
            }, {
                passive: true
            });
            window.addEventListener("content-update", function() {
                if (ignoreContentUpdateUntilScroll) {
                    return;
                }
                scheduleUpdate();
            });
            sectionIndicatorEnabled = true;
        }
        scheduleUpdate();
    }
    var animationFrame = 0;
    function scheduleUpdate() {
        cancelAnimationFrame(animationFrame);
        animationFrame = requestAnimationFrame(updateH2Selection);
    }
    function updateH2Selection() {
        var selectedHeading = findDisplayedH2Item();
        selectH2ItemInSideOutline(selectedHeading);
    }
    function findDisplayedH2Item() {
        for (var i = h2Headings.length - 1; i >= 0; i--) {
            if (h2Headings[i].element.getBoundingClientRect().top <= 20) {
                return h2Headings[i];
            }
        }
        return h2Headings[0] || null;
    }
    function selectH2ItemInSideOutline(heading) {
        if (heading === null) {
            return;
        }
        var current = document$1.querySelector("#side-doc-outline > ol > li.selected");
        if (current) {
            current.classList.remove("selected");
        }
        heading.anchor.parentElement.classList.add("selected");
    }
    var translationMeta = getMeta("ms.translationtype");
    var machineTranslated = checkMachineTranslated(translationMeta);
    var translated = machineTranslated || translationMeta === "HT";
    var sideBySideTranslation = getMeta("enable_loc_sxs") === "true" || getMeta("bilingual_type") === "hover over";
    function displayTranslations() {
        if (!translated) {
            return;
        }
        if (!sideBySideTranslation) {
            if (checkIsArchived()) {
                return;
            }
            if (machineTranslated) {
                showDisclaimer(loc_disclaimer_machineTranslatedOnly);
                return;
            }
        }
        var pageTemplate = msDocs.data.pageTemplate;
        if (!sideBySideTranslation || isMobileOrTablet || pageTemplate === "HubPage" || pageTemplate === "LandingPage") {
            return;
        }
        var stus = document.querySelectorAll("span[data-stu-id]");
        var stu;
        var ttus = document.querySelectorAll("span[data-ttu-id]");
        var ttu;
        var translations = {};
        var i;
        var id;
        for (i = 0; i < stus.length; i++) {
            stu = stus.item(i);
            id = stu.getAttribute("data-stu-id");
            translations[id] = stu.textContent;
        }
        for (i = 0; i < ttus.length; i++) {
            ttu = ttus.item(i);
            id = ttu.getAttribute("data-ttu-id");
            if (translations[id] === undefined) {
                continue;
            }
            ttu.setAttribute("translation", translations[id]);
        }
        var disclaimer = showDisclaimer(machineTranslated ? loc_disclaimer_sxs_machine : loc_disclaimer_sxs_human);
        var level = disclaimer.querySelector(".level");
        var toggleButton = document.createElement("button");
        var enableText = document.createElement("span");
        var disableText = document.createElement("span");
        var head = document.documentElement.classList;
        var levelRight = document.createElement("div");
        var levelItem = document.createElement("div");
        levelRight.classList.add("level-right");
        levelItem.classList.add("level-item");
        disclaimer.classList.add("sxs-translation");
        enableText.textContent = loc_enable;
        enableText.classList.add("translation-enable");
        disableText.textContent = loc_disable;
        disableText.classList.add("translation-disable");
        toggleButton.classList.add("button");
        toggleButton.classList.add("is-info");
        toggleButton.appendChild(enableText);
        toggleButton.appendChild(disableText);
        function toggle() {
            if (head.contains("translations-enabled")) {
                localStorage$1.setItem("translations-enabled", "0");
                head.remove("translations-enabled");
            } else {
                localStorage$1.setItem("translations-enabled", "1");
                head.add("translations-enabled");
            }
        }
        level.appendChild(levelRight);
        levelRight.appendChild(levelItem);
        levelItem.appendChild(toggleButton);
        toggleButton.addEventListener("click", toggle);
        if (localStorage$1.getItem("translations-enabled") == "1" || machineTranslated) {
            head.add("translations-enabled");
        }
    }
    function handleEngContentToggle(container) {
        var content = document.querySelector(".primary-holder main.content");
        var languageToggle = document.getElementById("language-toggle");
        if (!translated || !languageToggle) {
            return;
        }
        var english = sessionStorage.getItem("toggledToEnglish") === "true";
        setEngToggleBi(languageToggle, english);
        var languageConfig = {
            originalLang: content.lang,
            originalDir: content.dir
        };
        if (english) {
            languageToggle.checked = true;
            toggleContentLanguage(english, languageConfig);
        }
        languageToggle.addEventListener("change", function(e) {
            var target = e.target;
            var checked = target.checked;
            setEngToggleBi(languageToggle, checked);
            toggleContentLanguage(checked, languageConfig);
            renderInTopicTOC();
            notifyContentUpdated();
        });
        container.style.display = "flex";
    }
    function toggleContentLanguage(toEnglish, _a) {
        var originalLang = _a.originalLang, originalDir = _a.originalDir;
        sessionStorage.setItem("toggledToEnglish", "" + toEnglish);
        var content = document.querySelector("main.content");
        var localizedElements = Array.from(content.querySelectorAll("[data-ttu-id]"));
        var sxslookupElements = Array.from(content.querySelectorAll(".sxs-lookup"));
        var sxsDisclaimer = document.querySelector(".sxs-translation");
        if (toEnglish) {
            localizedElements.forEach(function(elt) {
                return elt.style.display = "none";
            });
            sxslookupElements.forEach(function(elt) {
                return elt.style.display = "inline";
            });
            content.lang = "en-us";
            content.dir = "ltr";
            if (sideBySideTranslation) {
                localStorage$1.setItem("translations-enabled", "0");
                if (document.documentElement.classList.contains("translations-enabled")) {
                    document.documentElement.classList.remove("translations-enabled");
                }
                if (sxsDisclaimer) {
                    sxsDisclaimer.style.display = "none";
                }
            }
        } else {
            localizedElements.forEach(function(elt) {
                return elt.style.display = "inline";
            });
            sxslookupElements.forEach(function(elt) {
                return elt.style.display = "none";
            });
            content.lang = originalLang;
            content.dir = originalDir;
            if (sideBySideTranslation) {
                if (sxsDisclaimer) {
                    sxsDisclaimer.style.display = "block";
                }
            }
        }
        notifyContentUpdated();
    }
    function setEngToggleBi(elt, english) {
        var toggleAttribute = english ? "off" : "on";
        var oppos = !english ? "off" : "on";
        var attribute = "data-bi-engtoggle-" + toggleAttribute;
        var oppAttr = "data-bi-engtoggle-" + oppos;
        if (elt.hasAttribute(oppAttr)) {
            elt.removeAttribute(oppAttr);
        }
        elt.setAttribute(attribute, "");
    }
    var cookieApi;
    (function(factory) {
        cookieApi = factory();
    })(function() {
        var extend = function() {
            var i = 0;
            var result = {};
            for (;i < arguments.length; i++) {
                var attributes = arguments[i];
                for (var key in attributes) {
                    result[key] = attributes[key];
                }
            }
            return result;
        };
        function init(converter) {
            var api = function(key, value, attributes) {
                var result;
                if (typeof document === "undefined") {
                    return;
                }
                if (arguments.length > 1) {
                    attributes = extend({
                        path: "/"
                    }, api.defaults, attributes);
                    if (typeof attributes.expires === "number") {
                        var expires = new Date();
                        expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e5);
                        attributes.expires = expires;
                    }
                    attributes.expires = attributes.expires ? attributes.expires.toUTCString() : "";
                    try {
                        result = JSON.stringify(value);
                        if (/^[\{\[]/.test(result)) {
                            value = result;
                        }
                    } catch (e) {}
                    if (!converter.write) {
                        value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                    } else {
                        value = converter.write(value, key);
                    }
                    key = encodeURIComponent(String(key));
                    key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                    key = key.replace(/[\(\)]/g, escape);
                    var stringifiedAttributes = "";
                    for (var attributeName in attributes) {
                        if (!attributes[attributeName]) {
                            continue;
                        }
                        stringifiedAttributes += "; " + attributeName;
                        if (attributes[attributeName] === true) {
                            continue;
                        }
                        stringifiedAttributes += "=" + attributes[attributeName];
                    }
                    return document.cookie = key + "=" + value + stringifiedAttributes;
                }
                if (!key) {
                    result = {};
                }
                var cookies = document.cookie ? document.cookie.split("; ") : [];
                var rdecode = /(%[0-9A-Z]{2})+/g;
                var i = 0;
                for (;i < cookies.length; i++) {
                    var parts = cookies[i].split("=");
                    var cookie = parts.slice(1).join("=");
                    if (cookie.charAt(0) === '"') {
                        cookie = cookie.slice(1, -1);
                    }
                    try {
                        var name = parts[0].replace(rdecode, decodeURIComponent);
                        cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);
                        if (this.json) {
                            try {
                                cookie = JSON.parse(cookie);
                            } catch (e) {}
                        }
                        if (key === name) {
                            result = cookie;
                            break;
                        }
                        if (!key) {
                            result[name] = cookie;
                        }
                    } catch (e) {}
                }
                return result;
            };
            api.set = api;
            api.get = function(key) {
                return api.call(api, key);
            };
            api.getJSON = function() {
                return api.apply({
                    json: true
                }, [].slice.call(arguments));
            };
            api.defaults = {};
            api.remove = function(key, attributes) {
                api(key, "", extend(attributes, {
                    expires: -1
                }));
            };
            api.withConverter = init;
            return api;
        }
        return init(function() {});
    });
    var cookies = cookieApi;
    function isDevelopment(origin) {
        var whitelist = {
            "https://review.docs.microsoft.com": true,
            "https://ppe.docs.microsoft.com": true
        };
        if (whitelist[origin]) {
            return true;
        }
        return false;
    }
    function createBranchSelectorHtml(branches) {
        var selectedBranch = parseQueryString().branch || cookies.get("CONTENT_BRANCH") || "";
        var branchesHtml = branches.sort().map(function(branchName) {
            var selected = branchName === selectedBranch ? "selected" : "";
            return '<option value="' + branchName + '" ' + selected + ">" + branchName + "</option>";
        }).join("");
        return '\n\t\t<div class="select is-small is-rounded">\n\t\t\t<select id="branch-selector">\n\t\t\t\t<option value="">Select Branch</option>\n\t\t\t\t' + branchesHtml + "\n\t\t\t</select>\n\t\t</div>";
    }
    function renderBranchSelector() {
        if (!isDevelopment(location.origin)) {
            return;
        }
        var actionList = document.querySelector(".action-bar > .action-list");
        if (actionList === null) {
            return;
        }
        var contentEditButton = document.querySelector("#contenteditbtn");
        if (contentEditButton !== null) {
            contentEditButton.hidden = false;
        }
        if (msDocs.data.context.branches) {
            var branchList = msDocs.data.context.branches.split(",");
            if (branchList.length === 0) {
                return;
            }
            var dropdownBlock = document.createElement("div");
            dropdownBlock.classList.add("control");
            dropdownBlock.innerHTML = createBranchSelectorHtml(branchList);
            var dropdownSelect_1 = dropdownBlock.querySelector("select");
            dropdownSelect_1.onchange = function() {
                var targetBranchName = dropdownSelect_1.value;
                cookies.set("CONTENT_BRANCH", targetBranchName);
                window.location.search = "?branch=" + encodeURIComponent(targetBranchName);
            };
            var branchSelector = document.createElement("li");
            branchSelector.appendChild(dropdownBlock);
            actionList.insertAdjacentElement("afterbegin", branchSelector);
        }
    }
    var clipboardCopySupported = document$1.queryCommandSupported && document$1.queryCommandSupported("copy");
    function clipboardCopy(text, owner) {
        if (!clipboardCopySupported) {
            return false;
        }
        var txt = document$1.createElement("textarea");
        txt.setAttribute(contentAttrs.name, getName(owner));
        txt.textContent = text;
        txt.classList.add("visually-hidden");
        document$1.body.appendChild(txt);
        txt.select();
        try {
            return document$1.execCommand("copy");
        } catch (ex) {
            return false;
        } finally {
            document$1.body.removeChild(txt);
        }
    }
    var unprintable = false;
    function interceptCopy() {
        function handleCopy(event) {
            var value = window$1.getSelection().toString();
            var cleanValue = unbreakText(value);
            if (clipboardCopySupported && value !== cleanValue && !unprintable) {
                unprintable = true;
                clipboardCopy(cleanValue, event.target);
                return;
            }
            jsllReady.then(function(awa) {
                return awa.ct.capturePageAction(event.target, {
                    actionType: awa.actionType.OTHER,
                    behavior: awa.behavior.COPY,
                    content: {
                        event: "copy",
                        name: getName(event.target),
                        value: value,
                        unprintable: unprintable
                    }
                });
            });
            unprintable = false;
        }
        document$1.addEventListener("copy", handleCopy, {
            passive: true
        });
    }
    if (!Element.prototype.matches) {
        var prototype = Element.prototype;
        Element.prototype.matches = prototype.msMatchesSelector || prototype.webkitMatchesSelector;
    }
    if (!Element.prototype.closest) {
        Element.prototype.closest = function(selector) {
            var el = this;
            do {
                if (el.matches(selector)) {
                    return el;
                }
                el = el.parentElement;
            } while (el !== null);
            return null;
        };
    }
    (function(arr) {
        arr.forEach(function(item) {
            if (item.hasOwnProperty("remove")) {
                return;
            }
            Object.defineProperty(item, "remove", {
                configurable: true,
                enumerable: true,
                writable: true,
                value: function remove() {
                    if (this.parentNode !== null) {
                        this.parentNode.removeChild(this);
                    }
                }
            });
        });
    })([ Element.prototype, CharacterData.prototype, DocumentType.prototype ]);
    var interactiveTypes = {};
    function registerInteractiveType(interactiveType) {
        interactiveTypes[interactiveType.name] = interactiveType;
    }
    var instantiatedComponents = {};
    function parseInteractiveType(interactiveType) {
        if (!interactiveType) {
            return null;
        }
        var raw = interactiveType.replace(/^azurecli/, "bash").replace(/^azurepowershell/, "powershell");
        var name;
        raw = raw.replace(/^(bash|csharp|http|powershell|lab-on-demand)(?:-|$)/, function(_, t) {
            name = t;
            return "";
        });
        if (name === undefined) {
            return null;
        }
        var activateButtonConfig = interactiveTypes[name] ? interactiveTypes[name].activateButtonConfig : {
            name: "unknown",
            attributes: [],
            iconClass: ""
        };
        var result = {
            name: name,
            flags: {
                isExternal: name === "lab-on-demand",
                requiresStructuredData: name === "http"
            },
            activateButtonConfig: activateButtonConfig
        };
        raw = raw.replace(/(\w+)$/g, function(_, flag) {
            result.flags[flag] = true;
            return "";
        });
        return result;
    }
    function renderInteractiveComponent(type, container) {
        var component = instantiatedComponents[type.name];
        if (!component) {
            component = instantiatedComponents[type.name] = interactiveTypes[type.name].create();
        }
        if (container.firstElementChild !== component.element) {
            container.innerHTML = "";
            component.element.remove();
            container.appendChild(component.element);
        }
        return component;
    }
    var APExpandedChangedEvent = function() {
        function APExpandedChangedEvent(expanded) {
            this.expanded = expanded;
        }
        return APExpandedChangedEvent;
    }();
    var apClasses = {
        expanded: "ap-expanded",
        collapsed: "ap-collapsed",
        expandButton: "ap-expand-behavior",
        collapseButton: "ap-collapse-behavior"
    };
    var mobileQuery = window.matchMedia("screen and (max-width: 768px)");
    function getActionPanel(expandMode) {
        var html = document.documentElement.classList;
        var actionPanel = document.querySelector(".action-panel");
        if (html.contains("ap-layout") || expandMode === "none") {
            return actionPanel;
        }
        var mainColumn = document.getElementById("main-column");
        var restoreScroll = snapshotScroll();
        html.add("ap-layout");
        if (expandMode === "animate") {
            html.add("ap-layout-animates");
        }
        setTimeout(function() {
            return html.add("ap-layout-in");
        }, 20);
        var finish = function() {
            actionPanel.removeEventListener("transitionend", finish);
            html.remove("ap-layout-animates");
            html.add("ap-layout-finished");
            notifyContentUpdated();
            restoreScroll(mainColumn);
            eventBus.publish(new APExpandedChangedEvent(true));
        };
        actionPanel.addEventListener("transitionend", finish);
        return actionPanel;
    }
    function collapseActionPanel() {
        var html = document.documentElement.classList;
        var restoreScroll = snapshotScroll();
        html.remove("ap-layout");
        html.remove("ap-layout-animates");
        html.remove("ap-layout-in");
        html.remove("ap-layout-finished");
        notifyContentUpdated();
        restoreScroll(document.documentElement);
        eventBus.publish(new APExpandedChangedEvent(false));
    }
    function snapshotScroll() {
        var children = document.querySelector(".content").children;
        var _loop_1 = function(i) {
            var element = children.item(i);
            if (element.hasAttribute("hidden")) {
                return "continue";
            }
            var top = element.getBoundingClientRect().top;
            if (top <= 5 || i === 0) {
                var width_1 = element.clientWidth;
                return {
                    value: function(scrollableParent) {
                        element.scrollIntoView(true);
                        scrollableParent.scrollTop -= top * width_1 / element.clientWidth;
                    }
                };
            }
        };
        for (var i = children.length - 1; i >= 0; i--) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object") return state_1.value;
        }
        return function() {};
    }
    function initActionPanel() {
        addEventListener("click", function(event) {
            if (!(event.target instanceof Element)) {
                return;
            }
            var element = event.target.closest("." + apClasses.expandButton + ", ." + apClasses.collapseButton);
            if (!element) {
                return;
            }
            if (element.classList.contains(apClasses.expandButton)) {
                getActionPanel("animate");
            } else {
                collapseActionPanel();
            }
        });
        mobileQuery.addListener(collapseActionPanel);
    }
    function scrollContentToTop() {
        window.scrollTo(0, 0);
        if (!msDocs.data.context.chromeless) {
            document.getElementById("main-column").scrollTop = 0;
        }
    }
    function getLanguageNameRtlHtml(displayName, contentDir) {
        if (contentDir == "rtl") {
            return escape$1(displayName).replace(/(^|\s|\>)(C#|F#|C\+\+)(\s*|[.!?;:]*)(\<|[\n\r]|$)/gi, "$1$2&lrm;$3$4");
        }
        return displayName;
    }
    function addCodeHeader(block, contentDir) {
        var header = document$1.createElement("div");
        header.classList.add("codeHeader");
        header.setAttribute(contentAttrs.name, "code-header");
        header.innerHTML = '<span class="language">' + getLanguageNameRtlHtml(block.displayName, contentDir) + "</span>";
        if (clipboardCopySupported) {
            header.insertAdjacentHTML("beforeend", '\n\t\t\t<button class="action" ' + contentAttrs.name + '="copy">\n\t\t\t\t<span class="docon docon-edit-copy" role="presentation"></span>\n\t\t\t\t<span>' + escape$1(loc_copy) + "</span>\n\t\t\t</button>");
            header.lastElementChild.addEventListener("click", function() {
                copyCodeBlockToClipboard(block.element.firstElementChild, block.language);
            });
        }
        var interactiveType = block.interactiveType;
        if (interactiveType && !(interactiveType.flags.requiresStructuredData && msDocs.data.pageTemplate === "Conceptual")) {
            var buttonConfig = interactiveType.activateButtonConfig;
            header.insertAdjacentHTML("beforeend", '\n\t\t\t<button class="action action-interactive" ' + contentAttrs.name + '="code-header-try-it-' + interactiveType.name + '">\n\t\t\t\t<span class="' + buttonConfig.iconClass + '" role="presentation"></span>\n\t\t\t\t<span>' + escape$1(buttonConfig.name) + "</span>\n\t\t\t</button>");
            var activateButton_1 = header.lastElementChild;
            for (var _i = 0, _a = buttonConfig.attributes; _i < _a.length; _i++) {
                var attr = _a[_i];
                activateButton_1.setAttribute(attr.name, attr.value);
            }
            activateButton_1.addEventListener("click", function() {
                activateButton_1.classList.add("is-loading");
                activateButton_1.disabled = true;
                var code = block.element.textContent.trim();
                var actionPanel = getActionPanel("animate");
                var component = renderInteractiveComponent(interactiveType, actionPanel);
                component.setCode(code).then(function() {
                    return component.execute();
                }).catch(function() {}).then(function() {
                    activateButton_1.classList.remove("is-loading");
                    activateButton_1.disabled = false;
                });
            });
        }
        block.element.classList.remove("loading");
        block.element.insertAdjacentElement("beforebegin", header);
        block.header = header;
    }
    function copyCodeBlockToClipboard(codeBlock, language) {
        var text = codeBlock.textContent.trim();
        if (language === "powershell") {
            text = text.replace(/\bPS [a-z]:\\>\s?/gi, "");
        }
        return clipboardCopy(text, codeBlock);
    }
    var preferenceStorageKey = "proglang";
    var languageConfig = {
        displayNameMap: {
            "aspx-csharp": "ASP.NET (C#)",
            "aspx-vb": "ASP.NET (VB)",
            vb: "VB",
            csharp: "C#",
            cs: "C#",
            cshtml: "CSHTML",
            dotnetcli: ".NET Console",
            fsharp: "F#",
            html: "HTML",
            azurecli: "Azure CLI",
            vstscli: "VSTS CLI",
            azurepowershell: "Azure PowerShell",
            http: "HTTP",
            json: "JSON",
            cpp: "C++",
            cppcx: "C++/CX",
            cppwinrt: "C++/WinRT",
            java: "Java",
            objc: "Objective-C",
            qsharp: "Q#",
            ruby: "Ruby",
            php: "PHP",
            powershell: "PowerShell",
            js: "JavaScript",
            javascript: "JavaScript",
            typescript: "TypeScript",
            azcopy: "AzCopy",
            python: "Python",
            nodejs: "NodeJS",
            xaml: "XAML",
            xml: "XML",
            sql: "SQL",
            swift: "Swift",
            md: "Markdown",
            odata: "OData",
            dax: "DAX",
            powerappsfl: "PowerApps Formula",
            go: "Go",
            rest: "HTTP",
            usql: "U-SQL",
            kusto: "Kusto"
        },
        visibilityMap: {
            "aspx-csharp": "csharp",
            "aspx-vb": "vb"
        },
        syntaxMap: {
            azurepowershell: "powershell",
            cppcx: "cpp",
            cppwinrt: "cpp",
            nodejs: "js"
        },
        unset: "",
        default: msDocs.settings.defaultDevLang || "",
        get preferred() {
            return (localStorage$1.getItem(preferenceStorageKey) || languageConfig.unset).substr(5);
        },
        set preferred(language) {
            localStorage$1.setItem(preferenceStorageKey, "lang-" + language);
        }
    };
    var globalScriptTag = document.querySelector("script[src*='global.min.js'], script[src*='chromeless.min.js']");
    function relativeToGlobal(relativePath) {
        if (globalScriptTag) {
            var replacement = relativePath.indexOf("?") === -1 ? relativePath + "?$1" : relativePath;
            return globalScriptTag.src.replace(/js\/(?:(\w+)(?:\.))?(global|chromeless)\.min.*$/, replacement);
        }
        return location.origin + "/" + relativePath;
    }
    var worker;
    var nextId$1 = 0;
    var pending = {};
    function syntaxHighlight(instructions) {
        if (worker === undefined) {
            createWorker();
        }
        var request = {
            id: nextId$1++,
            instructions: instructions
        };
        worker.postMessage(request);
        return new Promise(function(resolve) {
            return pending[request.id] = resolve;
        });
    }
    function createWorker() {
        var highlightJsUrl = relativeToGlobal("js/highlight.pack.js?v=10.11.2017");
        var blob = new Blob([ "(" + workerScript.toString() + ")('" + highlightJsUrl + "')\n//# sourceURL=syntax-highlighter.js" ], {
            type: "application/javascript"
        });
        var url = URL.createObjectURL(blob);
        worker = new Worker(url);
        worker.onmessage = function(message) {
            var response = message.data;
            pending[response.id](response.results);
        };
    }
    function workerScript(highlightJsUrl) {
        function parseHighlightLines(code, rawInstruction) {
            var instructions = [];
            if (rawInstruction === null) {
                return instructions;
            }
            var lineRegex = /\n/g;
            var lines = 1;
            while (lineRegex.exec(code)) {
                lines++;
            }
            var rangeRegex = /(\d+)(?:\s*-\s*(\d+))?/g;
            var match;
            while (match = rangeRegex.exec(rawInstruction)) {
                var start = +match[1] - 1;
                if (isNaN(start) || start >= lines) {
                    continue;
                }
                var end = match[2] === undefined ? start : +match[2] - 1;
                if (isNaN(end) || end < start) {
                    continue;
                }
                end = Math.min(end, lines - 1);
                instructions.push({
                    start: start,
                    end: end
                });
            }
            return instructions;
        }
        var rgnRegex = /<rgn>.*<\/rgn>/gi;
        var rgnPlaceholderRegex = /RGNPLACEHOLDER/g;
        var rgnPlaceholder = "RGNPLACEHOLDER";
        function removeRgns(code, removed) {
            return code.replace(rgnRegex, function(rgn) {
                removed.push(rgn);
                return rgnPlaceholder;
            });
        }
        function restoreRgns(html, removed) {
            return html.replace(rgnPlaceholderRegex, function() {
                return removed.shift();
            });
        }
        function handleMessage(event) {
            var _a = event.data, id = _a.id, instructions = _a.instructions;
            var results = [];
            for (var _i = 0, instructions_1 = instructions; _i < instructions_1.length; _i++) {
                var _b = instructions_1[_i], language = _b.language, code = _b.code, highlightLines = _b.highlightLines;
                var result = {
                    code: code,
                    html: "",
                    success: false
                };
                try {
                    var rgns = [];
                    result.html = restoreRgns(hljs.highlight(language, removeRgns(code, rgns), true).value, rgns);
                    result.success = true;
                } catch (err) {}
                if (result.success) {
                    var lineInstructions = parseHighlightLines(code, highlightLines);
                    if (lineInstructions.length) {
                        var lines = result.html.split("\n");
                        for (var _c = 0, lineInstructions_1 = lineInstructions; _c < lineInstructions_1.length; _c++) {
                            var _d = lineInstructions_1[_c], start = _d.start, end = _d.end;
                            for (var i = start; i <= end; i++) {
                                lines[i] = '<span class="line-highlight">' + lines[i] + "</span>";
                            }
                        }
                        result.html = lines.join("\n");
                    }
                }
                results.push(result);
            }
            var response = {
                id: id,
                results: results
            };
            self.postMessage(response);
        }
        self.importScripts(highlightJsUrl);
        self.addEventListener("message", handleMessage);
    }
    function getElementLanguage(element, config) {
        for (var i = 0; i < element.classList.length; i++) {
            var name = element.classList.item(i);
            if (/^lang-.+$/i.test(name)) {
                return name.substr(5);
            }
        }
        return config.unset;
    }
    function readGroupsFromContent(content, config, selectionOptions) {
        var selector = 'pre > code, span[class*="lang-"]';
        var elements = content.querySelectorAll(selector);
        var groups = [];
        var previous;
        for (var i = 0; i < elements.length; i++) {
            var element = elements.item(i);
            var language = getElementLanguage(element, config);
            var syntaxLanguage = config.syntaxMap[language] || language;
            var visibilityLanguage = config.visibilityMap[language] || language;
            var displayName = config.displayNameMap[language] || language || "";
            var code = element.querySelector("br") ? element.innerText : element.textContent;
            var authorInteractiveType = void 0;
            var interactiveType = null;
            var highlightLines = "";
            var isPreCode = element.nodeName === "CODE";
            if (isPreCode) {
                highlightLines = element.getAttribute("highlight-lines") || "";
                authorInteractiveType = element.getAttribute("data-interactive");
                element = element.parentElement;
                authorInteractiveType = authorInteractiveType || element.getAttribute("data-interactive");
                interactiveType = parseInteractiveType(authorInteractiveType);
            }
            var current = {
                type: isPreCode ? "precode" : "span",
                element: element,
                language: language,
                syntaxLanguage: syntaxLanguage,
                visibilityLanguage: visibilityLanguage,
                displayName: displayName,
                code: code,
                interactiveType: interactiveType,
                highlightLines: highlightLines,
                isEnhanced: false
            };
            var createNewGroup = !previous || previous.type !== current.type || previous.element !== current.element.previousElementSibling || selectionOptions.indexOf(visibilityLanguage) === -1 || selectionOptions.indexOf(previous.visibilityLanguage) === -1;
            if (createNewGroup) {
                var newGroup = {
                    default: current,
                    members: [ current ]
                };
                groups.push(newGroup);
            } else {
                var currentGroup = groups[groups.length - 1];
                currentGroup.members.push(current);
                if (current.visibilityLanguage === config.default) {
                    currentGroup.default = current;
                }
            }
            previous = current;
        }
        return groups;
    }
    function enhanceVisibleBlocks(groups, contentDir) {
        var toHighlight = [];
        for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
            var group = groups_1[_i];
            for (var _a = 0, _b = group.members; _a < _b.length; _a++) {
                var member = _b[_a];
                if (member.type === "precode" && !member.isEnhanced && !member.element.hidden) {
                    toHighlight.push(member);
                    member.isEnhanced = true;
                }
            }
        }
        if (toHighlight.length === 0) {
            return Promise.resolve();
        }
        var instructions = toHighlight.map(function(item) {
            return {
                language: item.syntaxLanguage,
                code: item.code,
                highlightLines: item.highlightLines
            };
        });
        return syntaxHighlight(instructions).then(function(results) {
            for (var i = 0; i < results.length; i++) {
                var _a = results[i], html = _a.html, success = _a.success;
                var item = toHighlight[i];
                addCodeHeader(item, contentDir);
                if (success) {
                    item.element.firstElementChild.innerHTML = html;
                }
            }
            notifyContentUpdated();
        });
    }
    function setVisibility(groups, language) {
        var setBlockVisibility = function(block, visible) {
            block.element.hidden = !visible;
            if (block.header) {
                block.header.hidden = !visible;
            }
        };
        for (var _i = 0, groups_2 = groups; _i < groups_2.length; _i++) {
            var group = groups_2[_i];
            var anyVisible = false;
            for (var _a = 0, _b = group.members; _a < _b.length; _a++) {
                var member = _b[_a];
                var visible = member.visibilityLanguage === language;
                setBlockVisibility(member, visible);
                anyVisible = anyVisible || visible;
            }
            if (!anyVisible) {
                setBlockVisibility(group.default, true);
            }
        }
        notifyContentUpdated();
    }
    function getInitialSelection(options, config) {
        var preferred = config.preferred;
        if (preferred !== config.unset && options.indexOf(preferred) !== -1) {
            return preferred;
        }
        if (config.default !== config.unset && options.indexOf(config.default) !== -1) {
            return config.default;
        }
        return options[0];
    }
    var codeBlockPageTemplates = [ "Conceptual", "Hub", "LandingPage", "NamespaceListPage", "Reference", "Rest", "Tutorial", "ModuleUnit" ];
    function makeCodeBlocks() {
        if (codeBlockPageTemplates.indexOf(msDocs.data.pageTemplate) === -1) {
            return Promise.resolve();
        }
        var title = document$1.getElementById("lang-title");
        var dropdownLinks = Array.from(document$1.querySelectorAll("#language-selector a"));
        var options = [];
        dropdownLinks.forEach(function(code) {
            options.push(code.dataset.biName.substr(5));
        });
        var hasSelector = dropdownLinks !== null && options.length > 0;
        var groups = readGroupsFromContent(document$1.body, languageConfig, options);
        if (hasSelector) {
            var language = getInitialSelection(options, languageConfig);
            var initialLang = document$1.querySelector('[data-bi-name="lang-' + language + '"]').innerHTML;
            setVisibility(groups, language);
            title.innerText = initialLang;
            dropdownLinks.forEach(function(link) {
                listenUntilUnload(link, "click", function() {
                    var language = link.dataset.biName.substr(5);
                    title.innerText = link.innerText;
                    languageConfig.preferred = language;
                    setVisibility(groups, language);
                    renderInTopicTOC();
                    enhanceVisibleBlocks(groups, msDocs.data.contentDir);
                });
            });
        }
        return enhanceVisibleBlocks(groups, msDocs.data.contentDir);
    }
    var ratingPageTemplates = [ "Conceptual", "LandingPage", "NamespaceListPage", "Reference", "Rest", "Tutorial" ];
    function initRating(_a) {
        var isArchived = _a.isArchived, pageTemplate = _a.pageTemplate, storage = _a.storage, container = _a.container, pathname = _a.pathname, mobile = _a.mobile;
        var storageKey = "rating" + pathname;
        if (isArchived || ratingPageTemplates.indexOf(pageTemplate) === -1 || storage.getItem(storageKey)) {
            return false;
        }
        renderRating(container, mobile, function() {
            return storage.setItem(storageKey, "true");
        });
        return true;
    }
    function renderRating(container, mobile, setRated) {
        var initialState = mobile ? "rating-mobile-feedback-active" : "rating-helpful-active";
        container.innerHTML = '\n\t\t<form class="rating has-default-focus ' + initialState + '" action="javascript:" data-bi-name="rating">\n\t\t\t<button class="rating-close has-inner-focus docon docon-navigate-close" type="button" aria-label="' + loc_close + '" data-bi-name="rating-close"></button>\n\t\t\t<button class="button is-primary rating-mobile-feedback" type="button" data-bi-name="rating-mobile-feedback">' + escape$1(loc_feedback) + '</button>\n\t\t\t<div class="rating-helpful">\n\t\t\t\t<label>' + escape$1(loc_isThisHelpful) + '</label>\n\t\t\t\t<div class="buttons">\n\t\t\t\t\t<button class="button is-primary" type="button" data-bi-name="rating-yes" data-bi-sat="1">' + escape$1(loc_yes) + '</button>\n\t\t\t\t\t<button class="button is-primary" type="button" data-bi-name="rating-no" data-bi-sat="0">' + escape$1(loc_no) + '</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="rating-verbatim">\n\t\t\t\t<label for="rating-0">' + escape$1(loc_howCanWeImprove) + '</label>\n\t\t\t\t<textarea class="rating-textarea" id="rating-0" placeholder="' + loc_ratingShareIdeas + '"></textarea>\n\t\t\t\t<button class="button is-primary" type="submit" data-bi-name="rating-verbatim" disabled>' + escape$1(loc_submit) + '</button>\n\t\t\t</div>\n\t\t\t<div class="rating-thanks1">\n\t\t\t\t<p>' + escape$1(loc_thanksForFeedback) + "</p>\n\t\t\t\t<p>" + loc_ratingCommentsPrompt + '</p>\n\t\t\t</div>\n\t\t\t<div class="rating-thanks2">\n\t\t\t\t<span>' + escape$1(loc_thanksForFeedback) + "</span>\n\t\t\t</div>\n\t\t</form>";
        var form = container.firstElementChild;
        var textarea = form.querySelector("textarea");
        var submit = form.querySelector('[data-bi-name="rating-verbatim"]');
        var timeout = 0;
        textarea.onchange = textarea.oninput = function() {
            var value = textarea.value;
            var cN = submit.getAttribute("data-bi-name");
            submit.setAttribute("data-m", JSON.stringify({
                cN: cN,
                value: value,
                vtbm: value
            }));
            submit.disabled = value.length === 0;
        };
        form.addEventListener("click", function(event) {
            var target = event.target;
            var button = target instanceof Element && target.closest("button,a");
            if (!button || button instanceof HTMLButtonElement && button.disabled) {
                return;
            }
            event.preventDefault();
            var name = button.getAttribute("data-bi-name").replace(/^rating-/, "");
            switch (name) {
              case "close":
                form.parentElement.removeChild(form);
                break;

              case "mobile-feedback":
                form.className = "rating rating-helpful-active";
                break;

              case "yes":
                form.className = "rating rating-thanks1-active";
                setRated();
                timeout = setTimeout(function() {
                    return form.remove();
                }, 1e4);
                break;

              case "no":
              case "verbatim-link":
                clearTimeout(timeout);
                form.className = "rating rating-verbatim-active";
                setRated();
                break;

              case "verbatim":
                form.className = "rating rating-thanks2-active";
                timeout = setTimeout(function() {
                    return form.remove();
                }, 3e3);
                break;

              default:
                throw new Error('Unexpected rating button name: "' + name + '".');
            }
        });
    }
    function initResourceGroupNameElements(container, eventBus, azureSandbox$$1) {
        var update = function(name) {
            return Array.from(container.querySelectorAll("rgn")).forEach(function(el) {
                return el.textContent = name;
            });
        };
        if (azureSandbox$$1.value) {
            update(azureSandbox$$1.value.resourceGroupName);
        } else {
            var unsubscribe_1 = eventBus.subscribe(AzureSandboxChangedEvent, function(event) {
                update(event.sandbox.resourceGroupName);
                unsubscribe_1();
            });
            beforeUnload(unsubscribe_1);
        }
        listenUntilUnload(window, "content-update", function() {
            if (azureSandbox$$1.value) {
                update(azureSandbox$$1.value.resourceGroupName);
            }
        });
    }
    var selectedClass = "is-primary";
    var docsetBase = location.pathname.split("/").slice(0, 3).join("/");
    function initZonePivots() {
        var groups = (getMeta("zone_pivot_groups") || "").split(",").map(function(g) {
            return g.trim();
        }).filter(function(g) {
            return g.length;
        });
        if (!groups.length) {
            return Promise.resolve();
        }
        var preferences = {
            get: function(group) {
                return localStorage$1.getItem("zone-pivot" + docsetBase + "/" + group);
            },
            set: function(group, pivot) {
                localStorage$1.setItem("zone-pivot" + docsetBase + "/" + group, pivot);
            }
        };
        return Promise.all([ getDefinitions(), contentLoaded ]).then(function(_a) {
            var definitions = _a[0];
            var insertAfter = document.querySelector(".content .top-alert");
            if (!insertAfter) {
                insertAfter = document.querySelector(".content .page-metadata");
            }
            if (!insertAfter) {
                return;
            }
            renderZonePivots(insertAfter, groups, definitions, preferences);
        });
    }
    function renderZonePivots(insertAfter, groups, definitions, preferences) {
        var pivotsArg = parseQueryString().pivots;
        var queryStringPivots = pivotsArg ? pivotsArg.split(",").map(function(x) {
            return x.trim().toLowerCase();
        }) : [];
        var selectedPivots = getInitialSelection$1(definitions, groups, queryStringPivots, preferences, preferredPlatform || platform);
        var style = document.createElement("style");
        document.head.appendChild(style);
        displaySelectedPivots(style, selectedPivots);
        var alert = createPivotAlert(insertAfter, definitions, groups, selectedPivots);
        var radios = Array.from(alert.querySelectorAll('input[type="radio"]')).map(function(input) {
            return {
                input: input,
                button: input.closest(".button")
            };
        });
        var syncChecked = function() {
            displaySelectedPivots(style, radios.filter(function(x) {
                return x.input.checked;
            }).map(function(x) {
                return x.input.value;
            }));
            radios.forEach(function(_a) {
                var input = _a.input, button = _a.button;
                if (input.checked) {
                    button.classList.add(selectedClass);
                } else {
                    button.classList.remove(selectedClass);
                }
            });
        };
        var syncFocus = function() {
            return radios.forEach(function(_a) {
                var input = _a.input, button = _a.button;
                var method = input.matches(":focus") ? "add" : "remove";
                button.classList[method]("is-focused");
            });
        };
        var storePreference = function(event) {
            var _a = event.target, group = _a.name, pivot = _a.value;
            preferences.set(group, pivot);
            if (isPlatform(pivot)) {
                setPreferredPlatform(pivot);
            }
        };
        listenUntilUnload(alert, "change", syncChecked);
        listenUntilUnload(alert, "blur", syncFocus, true);
        listenUntilUnload(alert, "focus", syncFocus, true);
        listenUntilUnload(alert, "change", storePreference);
        beforeUnload(function() {
            return style.remove();
        });
    }
    function displaySelectedPivots(style, selectedPivots) {
        style.textContent = "\n\t\t[data-pivot]" + selectedPivots.map(function(pivot) {
            return ":not([data-pivot~='" + pivot + "'])";
        }).join("") + " {\n\t\t\tdisplay: none !important;\n\t\t}";
        renderInTopicTOC();
        notifyContentUpdated();
        updateQueryString({
            pivots: selectedPivots.join()
        }, "replaceState");
    }
    function createPivotAlert(insertAfter, definitions, groups, selectedPivots) {
        var _a = msDocs.data, userDir = _a.userDir, userLocale = _a.userLocale;
        var toDisplay = groups.map(function(group) {
            return definitions.find(function(g) {
                return g.id === group;
            });
        });
        insertAfter.insertAdjacentHTML("afterend", '\n\t\t<div class="alert" dir="' + userDir + '" lang="' + userLocale + '">\n\t\t\t' + toDisplay.map(function(group) {
            return '\n\t\t\t<fieldset class="field has-padding-none has-border-none">\n\t\t\t\t<legend class="label">' + group.prompt + '</legend>\n\t\t\t\t<div class="buttons has-addons">\n\t\t\t\t\t' + group.pivots.map(function(pivot) {
                return '\n\t\t\t\t\t<label class="button ' + (selectedPivots.indexOf(pivot.id) === -1 ? "" : selectedClass) + '">\n\t\t\t\t\t\t<input class="visually-hidden" type="radio" name="' + group.id + '" value="' + pivot.id + '" ' + (selectedPivots.indexOf(pivot.id) === -1 ? "" : "checked") + ">\n\t\t\t\t\t\t<span>" + pivot.title + "</span>\n\t\t\t\t\t</label>";
            }).join("\n") + "\n\t\t\t\t</div>\n\t\t\t</fieldset>";
        }).join("\n") + "\n\t\t</div>");
        return insertAfter.nextElementSibling;
    }
    function getInitialSelection$1(definitions, groups, queryStringPivots, preferences, platform$$1) {
        var selectedPivots = [];
        var _loop_1 = function(group) {
            var definition = definitions.find(function(d) {
                return d.id === group;
            });
            if (!definition) {
                return "continue";
            }
            var preferred = preferences.get(group);
            var pivots = definition.pivots;
            var queryStringPivot = void 0;
            var preferredPivot = void 0;
            var platformPivot = void 0;
            var firstPivotInGroup = void 0;
            for (var _i = 0, pivots_1 = pivots; _i < pivots_1.length; _i++) {
                var pivot = pivots_1[_i];
                if (!firstPivotInGroup) {
                    firstPivotInGroup = pivot.id;
                }
                if (!queryStringPivot && queryStringPivots.indexOf(pivot.id) !== -1) {
                    queryStringPivot = pivot.id;
                }
                if (!preferredPivot && pivot.id === preferred) {
                    preferredPivot = pivot.id;
                }
                if (!platformPivot && pivot.id === platform$$1) {
                    platformPivot = pivot.id;
                }
            }
            selectedPivots.push(queryStringPivot || preferredPivot || platformPivot || firstPivotInGroup);
        };
        for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
            var group = groups_1[_i];
            _loop_1(group);
        }
        return selectedPivots;
    }
    function getDefinitions() {
        var branch = parseQueryString().branch;
        var queryString = branch ? "?" + toQueryString({
            branch: branch
        }) : "";
        var url = docsetBase + "/zone-pivot-groups.json" + queryString;
        return fetchWithTimeout(url, {
            credentials: "include"
        }).then(function(response) {
            return response.json();
        }).then(function(definitions) {
            return definitions.groups;
        });
    }
    function fixContent() {
        fixAlerts();
        fixDivAnchors();
    }
    function fixAlerts() {
        var alertMap = {
            TIP: {
                class: "is-success",
                docon: "lightbulb",
                title: loc_tip
            },
            NOTE: {
                class: "is-info",
                docon: "status-error-outline",
                title: loc_note
            },
            IMPORTANT: {
                class: "is-primary",
                docon: "status-info-outline",
                title: loc_important
            },
            WARNING: {
                class: "is-warning",
                docon: "status-warning-outline",
                title: loc_warning
            },
            CAUTION: {
                class: "is-danger",
                docon: "status-failure-outline",
                title: loc_caution
            }
        };
        var legacyAlerts = Array.from(document.querySelectorAll(".TIP, .NOTE, .IMPORTANT, .WARNING, .CAUTION"));
        legacyAlerts.forEach(function(alert) {
            var legacyName = /TIP|NOTE|IMPORTANT|WARNING|CAUTION/.exec(alert.className)[0];
            alert.className = "alert " + alertMap[legacyName].class;
            var firstParagraph = alert.firstElementChild;
            if (!firstParagraph || !(firstParagraph instanceof HTMLParagraphElement)) {
                return;
            }
            firstParagraph.classList.add("alert-title");
            firstParagraph.textContent = alertMap[legacyName].title;
            firstParagraph.insertAdjacentHTML("afterbegin", '<span class="docon docon-' + alertMap[legacyName].docon + '"></span> ');
        });
    }
    function fixDivAnchors() {
        Array.from(document.querySelectorAll(".content div.button a, .content div.step-by-step a, .content div.nextstepaction a")).forEach(function(anchor) {
            anchor.classList.add("button");
            anchor.classList.add("is-primary");
            var container = anchor.closest("div.button, .step-by-step");
            if (container) {
                container.className = "";
            }
        });
    }
    function handleIframeContent(element, userLocale) {
        var matches = Array.from(element.querySelectorAll('iframe[src^="https://www.microsoft.com"]'));
        matches.forEach(function(match) {
            if (match.src.indexOf("videoplayer/") > -1) {
                match.src = "https://www.microsoft.com/" + userLocale + "/videoplayer/" + match.src.split("videoplayer/")[1];
            }
        });
    }
    Promise.all([ cookieConsent, contentLoaded ]).then(function() {
        var imageList = document$1.querySelectorAll(".contributors img[data-src]");
        var _loop_1 = function(i) {
            var image = imageList[i];
            var newImage = new Image();
            newImage.onload = function() {
                image.src = newImage.src;
            };
            newImage.onerror = function() {
                var anchorEle = image.parentElement;
                var listEle = anchorEle.parentElement;
                if (anchorEle.tagName === "a") {
                    image.title = anchorEle.getAttribute("title");
                    listEle.removeChild(anchorEle);
                    listEle.appendChild(image);
                }
            };
            newImage.src = image.getAttribute("data-src");
        };
        for (var i = 0; i < imageList.length; i++) {
            _loop_1(i);
        }
    });
    if (typeof CustomEvent !== "function") {
        window$1.CustomEvent = function CustomEvent(event, params) {
            params = params || {
                bubbles: false,
                cancelable: false,
                detail: undefined
            };
            var evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        };
        window$1.CustomEvent.prototype = Event.prototype;
    }
    function dedupMain() {
        if (msDocs.data.pageTemplate !== "HubPage") {
            var mains = document.querySelectorAll("#main:not(main)");
            for (var i = 0; i < mains.length; i++) {
                mains[i].removeAttribute("id");
            }
        }
    }
    function initDropdowns(container) {
        container.addEventListener("click", function(event) {
            var trigger = event.target instanceof Element && event.target.closest(".dropdown-trigger");
            if (!trigger) {
                return;
            }
            event.preventDefault();
            var dropdown = trigger.parentElement;
            var activate = trigger.getAttribute("aria-expanded") !== "true";
            trigger.setAttribute("aria-expanded", activate.toString());
            if (activate) {
                if (dropdown.hasAttribute("auto-align")) {
                    var menu = dropdown.querySelector(".dropdown-menu");
                    alignMenu(trigger, menu);
                }
                var collapse_1 = function() {
                    container.removeEventListener("focus", checkTarget_1);
                    container.removeEventListener("click", checkTarget_1);
                    container.removeEventListener("touchstart", checkTarget_1);
                    trigger.setAttribute("aria-expanded", "false");
                };
                var checkTarget_1 = function(_a) {
                    var target = _a.target;
                    if (target instanceof Element && !dropdown.contains(target)) {
                        collapse_1();
                    }
                };
                var useCapture = true;
                container.addEventListener("focus", checkTarget_1, useCapture);
                container.addEventListener("click", checkTarget_1);
                container.addEventListener("touchstart", checkTarget_1);
                container.addEventListener("collapse-dropdown", function(event) {
                    event.stopPropagation();
                    collapse_1();
                });
            }
        });
    }
    function collapseDropdown(child) {
        child.dispatchEvent(new CustomEvent("collapse-dropdown", {
            bubbles: true
        }));
    }
    function alignMenu(trigger, menu) {
        var overflowX = function(el) {
            return window$1.getComputedStyle(el).overflowX;
        };
        var container = trigger.parentElement;
        while (container && container.nodeName !== "BODY" && overflowX(container) !== "hidden") {
            container = container.parentElement;
        }
        if (container === null) {
            return;
        }
        var _a = container.getBoundingClientRect(), containerLeft = _a.left, containerRight = _a.right;
        var _b = trigger.getBoundingClientRect(), left = _b.left, right = _b.right;
        if (left - containerLeft < containerRight - right) {
            menu.style.left = "0";
            menu.style.right = "";
        } else {
            menu.style.left = "";
            menu.style.right = "0";
        }
    }
    function editLinkRedirect() {
        if (document$1.location.host.toLowerCase() === "review.docs.microsoft.com") {
            var contenteditbtn = document$1.querySelectorAll("#contenteditbtn a");
            for (var i = 0; i < contenteditbtn.length; i++) {
                try {
                    var el = contenteditbtn[i];
                    var original_content_git_url = el.dataset.original_content_git_url;
                    if (original_content_git_url && original_content_git_url.length) {
                        el.setAttribute("href", original_content_git_url);
                    }
                } catch (e) {}
            }
        }
    }
    function detectFeatures() {
        var html = document$1.documentElement;
        var className = html.className.replace("no-js", "js");
        var w = window$1;
        if ("ontouchstart" in w || w.DocumentTouch && document$1 instanceof w.DocumentTouch) {
            className += " hasTouch";
        } else {
            className += " noTouch";
        }
        html.className = className;
    }
    function expander(controller) {
        var isExpanded = function() {
            return controller.getAttribute("aria-expanded") === "true";
        };
        var finishPendingTransition;
        var toggleInternal = function(expand) {
            if (finishPendingTransition) {
                finishPendingTransition();
            }
            controller.setAttribute("aria-expanded", expand.toString());
            var targets = controller.getAttribute("aria-controls").split(" ").map(function(id) {
                return document$1.getElementById(id);
            });
            for (var _i = 0, targets_1 = targets; _i < targets_1.length; _i++) {
                var target = targets_1[_i];
                target.style.maxHeight = expand ? "0px" : "100vh";
                target.style.opacity = expand ? "0" : "1";
                target.style.transition = "max-height 300ms ease-in-out, opacity 300ms ease-in-out";
                target.style.overflow = "hidden";
                target.hidden = false;
            }
            var pendingAnimation = requestAnimationFrame(function() {
                for (var _i = 0, targets_2 = targets; _i < targets_2.length; _i++) {
                    var target = targets_2[_i];
                    target.style.maxHeight = expand ? "100vh" : "0px";
                    target.style.opacity = expand ? "1" : "0";
                }
            });
            var finish = function() {
                cancelAnimationFrame(pendingAnimation);
                for (var _i = 0, targets_3 = targets; _i < targets_3.length; _i++) {
                    var target = targets_3[_i];
                    target.hidden = !expand;
                    target.style.transition = "";
                    target.style.maxHeight = "";
                    target.style.opacity = "";
                    target.style.overflow = "";
                }
                clearTimeout(timeout);
                finishPendingTransition = undefined;
                notifyContentUpdated();
            };
            var timeout = setTimeout(finish, 300);
            finishPendingTransition = finish;
            controller.dispatchEvent(new CustomEvent(expand ? "expand" : "collapse", {
                bubbles: true
            }));
        };
        controller.onclick = function(event) {
            event.preventDefault();
            toggleInternal(!isExpanded());
        };
        var toggle = function(expand) {
            if (expand === void 0) {
                expand = !isExpanded();
            }
            if (isExpanded() === expand) {
                return;
            }
            toggleInternal(expand);
        };
        controller.onkeydown = function(event) {
            switch (event.which) {
              case keyCodes.left:
                event.preventDefault();
                toggle(false);
                break;

              case keyCodes.right:
                event.preventDefault();
                toggle(true);
                break;
            }
        };
        return toggle;
    }
    var unitTypes = [ {
        factor: 1e3,
        singular: loc_aSecondAgo,
        plural: loc_secondsAgo
    }, {
        factor: 1e3 * 60,
        singular: loc_aMinuteAgo,
        plural: loc_minutesAgo
    }, {
        factor: 1e3 * 60 * 60,
        singular: loc_anHourAgo,
        plural: loc_hoursAgo
    }, {
        factor: 1e3 * 60 * 60 * 24,
        singular: loc_aDayAgo,
        plural: loc_daysAgo
    }, {
        factor: 1e3 * 60 * 60 * 24 * 7,
        singular: loc_aWeekAgo,
        plural: loc_weeksAgo
    }, {
        factor: 1e3 * 60 * 60 * 24 * 27,
        singular: loc_aMonthAgo,
        plural: loc_monthsAgo
    } ];
    var fuzzyFactor = 1.1;
    var formatOptions = {
        month: "short",
        day: "numeric",
        year: "numeric"
    };
    function timeAgo(now, then) {
        var elapsed = now - then.getTime();
        if (elapsed < 5e3) {
            return loc_justNow;
        }
        var i = 0;
        while (unitTypes[i + 1] && elapsed * fuzzyFactor > unitTypes[i + 1].factor) {
            i++;
        }
        var _a = unitTypes[i], factor = _a.factor, singular = _a.singular, plural = _a.plural;
        var units = Math.round(elapsed / factor);
        if (units > 3 && i === unitTypes.length - 1) {
            return loc_onSpecificDate.replace("{0}", then.toLocaleDateString(undefined, formatOptions).replace(/\u200E/g, ""));
        }
        if (units === 1) {
            return singular;
        }
        return plural.replace("{0}", units.toString());
    }
    function getAssociationBadgeHtml(association, repo) {
        var a = authorAssociation[association];
        if (a === undefined) {
            return "";
        }
        var org = repo.substr(0, repo.indexOf("/"));
        var description = a.desc.replace(/\{repo\}/g, repo).replace(/\{org\}/g, org);
        return '\n\t\t<span class="github-author-association ' + association.toLowerCase() + '" aria-label="' + description + '" title="' + description + '">\n\t\t\t' + (a.icon ? '<img aria-hidden="true" width="12" height="12" src="' + a.icon + '">' : "") + "\n\t\t\t<span>" + escape$1(a.name) + "</span>\n\t\t</span>";
    }
    var authorAssociation = {
        COLLABORATOR: {
            name: loc_collaborator,
            desc: loc_collaboratorDescription,
            icon: ""
        },
        CONTRIBUTOR: {
            name: loc_contributor,
            desc: loc_contributorDescription,
            icon: ""
        },
        MEMBER: {
            name: loc_member,
            desc: loc_memberDescription,
            icon: "https://c.s-microsoft.com/favicon.ico?v2"
        },
        OWNER: {
            name: loc_owner,
            desc: loc_ownerDescription,
            icon: "https://c.s-microsoft.com/favicon.ico?v2"
        }
    };
    function doOAuthFlow(_a) {
        var type = _a.type, signInUrl = _a.signInUrl, returnUrlArg = _a.returnUrlArg, signInArgs = _a.signInArgs, navigate = _a.navigate;
        if (navigate) {
            signInArgs[returnUrlArg] = location$1.href;
            location$1.href = signInUrl + "?" + toQueryString(signInArgs);
            return new Promise(function() {});
        }
        return new Promise(function(resolve) {
            installCrossWindowCallback();
            var authorizedEvent = type + "-authorized";
            var authorizedHandler = function() {
                window$1.removeEventListener(authorizedEvent, authorizedHandler);
                resolve();
            };
            window$1.addEventListener(authorizedEvent, authorizedHandler);
            var storageEventFallbackHandler = function(_a) {
                var key = _a.key, newValue = _a.newValue;
                if (key === authorizedEvent && newValue !== null) {
                    window$1.removeEventListener("storage", storageEventFallbackHandler);
                    authorizedHandler();
                }
            };
            window$1.addEventListener("storage", storageEventFallbackHandler);
            var returnUrl = relativeToGlobal("authorized.html?" + type);
            signInArgs[returnUrlArg] = returnUrl;
            window$1.open(signInUrl + "?" + toQueryString(signInArgs), "_blank");
        });
    }
    function installCrossWindowCallback() {
        if (window$1.notifyAuthorized === undefined) {
            window$1.notifyAuthorized = function(type) {
                return window$1.dispatchEvent(new CustomEvent(type + "-authorized"));
            };
        }
    }
    var tokenChangedEvent = "github-token-changed";
    var Token = function() {
        function Token() {
            this.storageKey = "github_token";
            this.token = localStorage$1.getItem(this.storageKey);
        }
        Object.defineProperty(Token.prototype, "value", {
            get: function() {
                return this.token;
            },
            set: function(newValue) {
                if (newValue === null) {
                    localStorage$1.removeItem(this.storageKey);
                } else {
                    localStorage$1.setItem(this.storageKey, newValue);
                }
                if (this.token !== newValue) {
                    this.token = newValue;
                    window$1.dispatchEvent(new CustomEvent(tokenChangedEvent));
                }
            },
            enumerable: true,
            configurable: true
        });
        return Token;
    }();
    var token = new Token();
    function login() {
        var baseUrl = "https://docs.microsoft.com/api/githubauth";
        var args = {
            type: "github",
            signInUrl: baseUrl + "/authorize",
            signInArgs: {},
            returnUrlArg: "redirect_uri",
            navigate: false
        };
        return doOAuthFlow(args).then(function() {
            return fetchWithTimeout(baseUrl + "/token", {
                mode: "cors",
                credentials: "include"
            });
        }).then(function(response) {
            if (response.ok) {
                return response.json();
            }
            return response.text().then(function(text) {
                return Promise.reject("Error retrieving token:\n" + text);
            });
        }).then(function(t) {
            token.value = t;
        }, function(reason) {
            token.value = null;
            throw reason;
        });
    }
    function whenSignedIn() {
        if (token.value) {
            return Promise.resolve();
        }
        return new Promise(function(resolve) {
            var handler = function() {
                if (!token.value) {
                    return;
                }
                window$1.removeEventListener(tokenChangedEvent, handler);
                resolve();
            };
            window$1.addEventListener(tokenChangedEvent, handler);
        });
    }
    var GITHUB_API = "https://api.github.com/";
    var GITHUB_ENCODING__HTML_JSON = "application/vnd.github.VERSION.html+json";
    var GITHUB_ENCODING__REACTIONS_PREVIEW = "application/vnd.github.squirrel-girl-preview";
    var PAGE_SIZE = 100;
    var rateLimitExceededEvent = "github-rate-limit-exceeded";
    var githubApiErrorEvent = "github-api-error";
    function acceptHtmlAndReactions(request) {
        var accept = GITHUB_ENCODING__HTML_JSON + "," + GITHUB_ENCODING__REACTIONS_PREVIEW;
        request.headers.set("Accept", accept);
    }
    function githubRequest(relativeUrl, init) {
        init = init || {};
        init.mode = "cors";
        init.cache = "no-cache";
        var request = new Request(GITHUB_API + relativeUrl, init);
        if (token.value !== null && !/^search/.test(relativeUrl)) {
            request.headers.set("Authorization", "token " + token.value);
        }
        return request;
    }
    var RateLimitExceededError = function() {
        function RateLimitExceededError(reset, limit, signedIn, isSearch) {
            this.limit = limit;
            this.signedIn = signedIn;
            this.isSearch = isSearch;
            this.resetDate = new Date(0);
            this.resetDate.setUTCSeconds(reset);
            this.message = "Rate limit exceeded. Rate limit resets at " + this.resetDate.toLocaleTimeString() + ".";
        }
        Object.defineProperty(RateLimitExceededError.prototype, "resetsInMinutes", {
            get: function() {
                return Math.round((this.resetDate.getTime() - new Date().getTime()) / 1e3 / 60);
            },
            enumerable: true,
            configurable: true
        });
        return RateLimitExceededError;
    }();
    var rateLimit = {
        standard: {
            limit: Number.MAX_VALUE,
            remaining: Number.MAX_VALUE,
            reset: 0
        },
        search: {
            limit: Number.MAX_VALUE,
            remaining: Number.MAX_VALUE,
            reset: 0
        }
    };
    function processRateLimit(response, isSearch) {
        var limit = +response.headers.get("X-RateLimit-Limit");
        var remaining = +response.headers.get("X-RateLimit-Remaining");
        var reset = +response.headers.get("X-RateLimit-Reset");
        var rate = isSearch ? rateLimit.search : rateLimit.standard;
        rate.limit = limit;
        rate.remaining = remaining;
        rate.reset = reset;
        if (response.status === 403 && rate.remaining === 0) {
            var error = new RateLimitExceededError(rate.reset, rate.limit, !!token.value, isSearch);
            window$1.dispatchEvent(new CustomEvent(rateLimitExceededEvent, {
                detail: error
            }));
            throw error;
        }
    }
    function readRelNext(response) {
        var link = response.headers.get("link");
        if (link === null) {
            return 0;
        }
        var match = /\?page=([2-9][0-9]*)>; rel="next"/.exec(link);
        if (match === null) {
            return 0;
        }
        return +match[1];
    }
    function githubFetch(request) {
        var isSearch = /\/search\//.test(request.url);
        return fetchWithTimeout(request).then(function(response) {
            if (response.status === 401) {
                token.value = null;
                if (request.method === "GET" && request.headers.has("Authorization")) {
                    request.headers.delete("Authorization");
                    return githubFetch(request);
                }
            }
            processRateLimit(response, isSearch);
            if (!response.ok) {
                var status_1 = response.status;
                if (status_1 !== 401 && status_1 !== 403) {
                    response.text().then(function(responseText) {
                        var detail = {
                            url: request.url,
                            status: status_1,
                            isSearch: isSearch,
                            responseText: responseText
                        };
                        window$1.dispatchEvent(new CustomEvent(githubApiErrorEvent, {
                            detail: detail
                        }));
                    });
                }
                throw new Error("Error fetching " + request.url);
            }
            return response;
        }, function(reason) {
            var detail = {
                url: request.url,
                status: 0,
                isSearch: isSearch,
                responseText: reason.toString()
            };
            window$1.dispatchEvent(new CustomEvent(githubApiErrorEvent, {
                detail: detail
            }));
            return Promise.reject(reason);
        });
    }
    function loadIssuesByTermInBody(repo, term) {
        var q = '"' + term + '" type:issue in:body repo:' + repo;
        var request = githubRequest("search/issues?q=" + encodeURIComponent(q) + "&sort=created&order=desc");
        acceptHtmlAndReactions(request);
        return githubFetch(request).then(function(response) {
            return response.json();
        });
    }
    function commentsRequest(repo, issueNumber, page) {
        var url = "repos/" + repo + "/issues/" + issueNumber + "/comments?page=" + page + "&per_page=" + PAGE_SIZE;
        var request = githubRequest(url);
        acceptHtmlAndReactions(request);
        return request;
    }
    function loadCommentsPage(repo, issueNumber, page) {
        var request = commentsRequest(repo, issueNumber, page);
        return githubFetch(request).then(function(response) {
            var nextPage = readRelNext(response);
            return response.json().then(function(items) {
                return {
                    items: items,
                    nextPage: nextPage
                };
            });
        });
    }
    function createIssue(repo, title, body) {
        var request = githubRequest("repos/" + repo + "/issues", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                body: body
            })
        });
        acceptHtmlAndReactions(request);
        return githubFetch(request).then(function(response) {
            return response.json();
        });
    }
    function postComment(repo, issueNumber, markdown) {
        var url = "repos/" + repo + "/issues/" + issueNumber + "/comments";
        var body = JSON.stringify({
            body: markdown
        });
        var request = githubRequest(url, {
            method: "POST",
            body: body
        });
        acceptHtmlAndReactions(request);
        return githubFetch(request).then(function(response) {
            return response.json();
        });
    }
    function toggleIssueReaction(repo, issueNumber, reaction) {
        var url = "repos/" + repo + "/issues/" + issueNumber + "/reactions";
        return toggleReaction(url, reaction);
    }
    function toggleCommentReaction(repo, commentId, reaction) {
        var url = "repos/" + repo + "/issues/comments/" + commentId + "/reactions";
        return toggleReaction(url, reaction);
    }
    function toggleReaction(url, content) {
        var body = JSON.stringify({
            content: content
        });
        var request = githubRequest(url, {
            method: "POST",
            body: body
        });
        request.headers.set("Accept", GITHUB_ENCODING__REACTIONS_PREVIEW);
        return githubFetch(request).then(function(response) {
            if (response.status === 201) {
                return response.json().then(function(reaction) {
                    return {
                        reaction: reaction,
                        deleted: false
                    };
                });
            }
            if (response.status !== 200) {
                throw new Error('expected "201 reaction created" or "200 reaction already exists"');
            }
            return response.json().then(function(reaction) {
                var request = githubRequest("reactions/" + reaction.id, {
                    method: "DELETE"
                });
                request.headers.set("Accept", GITHUB_ENCODING__REACTIONS_PREVIEW);
                return githubFetch(request).then(function() {
                    return reaction;
                });
            }).then(function(reaction) {
                return {
                    reaction: reaction,
                    deleted: true
                };
            });
        });
    }
    function getUser() {
        var request = githubRequest("user");
        return githubFetch(request).then(function(response) {
            return response.json();
        });
    }
    var context = {
        repo: msDocs.data.feedbackGitHubRepo,
        documentId: getMeta("document_id") || btoa(location.pathname),
        versionIndependentDocumentId: getMeta("document_version_independent_id") || btoa(location.pathname),
        documentSourceUrl: msDocs.data.contentGitUrl || getMeta("original_content_git_url") || getMeta("original_ref_skeleton_git_url") || "",
        service: getMeta("ms.service"),
        product: getMeta("ms.prod"),
        author: getMeta("author"),
        msAuthor: getMeta("ms.author"),
        contentTitle: getMeta("og:title") || document.title
    };
    function createAlert(message, info) {
        if (info === void 0) {
            info = false;
        }
        var alert = document.createElement("div");
        alert.setAttribute("role", "alert");
        alert.classList.add("feedback-alert");
        if (info) {
            alert.classList.add("is-info");
        }
        alert.innerHTML = '\n\t\t<span class="docon docon-status-error-outline" aria-hidden="true"></span>\n\t\t<span class="message">' + message + '</span>\n\t\t<button type="button" class="dismiss" aria-label="' + loc_disclaimer_dismissAlert + '">\n\t\t\t<span class="docon docon-navigate-close" aria-hidden="true"></span>\n\t\t</button>';
        var dismiss = alert.querySelector("button");
        dismiss.onclick = function() {
            dismiss.onclick = null;
            alert.style.maxHeight = "0";
            alert.style.opacity = "0";
            var finishTransition = function() {
                alert.removeEventListener("transitionend", finishTransition);
                alert.parentElement.removeChild(alert);
            };
            alert.addEventListener("transitionend", finishTransition);
        };
        return alert;
    }
    function confirmSubmit(type) {
        var message = "⚠ CAUTION: It looks like you're on an internal site. " + context.repo + " is a public repo! ⚠\n\nAre you sure you want to post this " + type + "?";
        return location$1.host === "docs.microsoft.com" || location$1.host === "docs.azure.cn" || window$1.confirm(message);
    }
    function configureValidation(form) {
        var _loop_1 = function(i) {
            var element = form.elements.item(i);
            if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
                element.onchange = function() {
                    return element.setCustomValidity(/^\s+$/.test(element.value) ? loc_pleaseFillOut : "");
                };
            }
            if (element instanceof HTMLButtonElement && element.type === "submit") {
                element.onclick = function() {
                    return form.classList.add("show-validation-status");
                };
            }
        };
        for (var i = 0; i < form.elements.length; i++) {
            _loop_1(i);
        }
    }
    function resetForm(form) {
        for (var i = 0; i < form.elements.length; i++) {
            var element = form.elements.item(i);
            if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
                element.value = "";
                element.setCustomValidity("");
            }
        }
        form.classList.remove("show-validation-status");
        clearFormAlert(form);
    }
    function showFormAlert(form, message) {
        clearFormAlert(form);
        var alert = createAlert(message);
        var firstLabel = form.querySelector("label");
        firstLabel.insertAdjacentElement("beforebegin", alert);
    }
    function clearFormAlert(form) {
        var alert = form.querySelector(".feedback-alert");
        if (alert) {
            form.removeChild(alert);
        }
    }
    var signInButtonClassName = "feedback-sign-in-button";
    function initSignInButtonHandler(container) {
        container.addEventListener("click", function(event) {
            if (event.target instanceof Element && event.target.closest("." + signInButtonClassName)) {
                event.preventDefault();
                login();
            }
        });
    }
    var anonymousAvatar = "data:image/svg+xml;base64," + btoa('<svg width="120" height="120" viewBox="0 0 120 120" fill="transparent" xmlns="http://www.w3.org/2000/svg"></svg>');
    function dimensionAvatarUrl(url) {
        return "" + url + (url.indexOf("?") ? "&" : "?") + "s=72";
    }
    var avatar = {
        alt: loc_avatar,
        src: anonymousAvatar
    };
    var username = "";
    function initUser(section) {
        var handleTokenChange = function() {
            var setAnonymous = function() {
                avatar.alt = loc_avatar;
                avatar.src = anonymousAvatar;
                username = "";
                update(section);
            };
            if (token.value) {
                getUser().then(function(_a) {
                    var avatar_url = _a.avatar_url, login$$1 = _a.login;
                    avatar.alt = login$$1;
                    avatar.src = dimensionAvatarUrl(avatar_url);
                    username = login$$1;
                    update(section);
                }, setAnonymous);
                return;
            } else {
                setAnonymous();
            }
        };
        window$1.addEventListener(tokenChangedEvent, handleTokenChange);
        handleTokenChange();
    }
    function update(container) {
        updateAvatars(container);
        updateUsername(container);
        toggleCurrentUserClass(container);
    }
    function updateUsername(container) {
        var elements = container.querySelectorAll(".current-user .username");
        for (var i = 0; i < elements.length; i++) {
            elements.item(i).textContent = username;
        }
    }
    function updateAvatars(container) {
        var images = container.querySelectorAll(".current-user img.avatar");
        for (var i = 0; i < images.length; i++) {
            var img = images.item(i);
            img.alt = avatar.alt;
            img.src = avatar.src;
        }
    }
    function toggleCurrentUserClass(container) {
        var elements = container.querySelectorAll("[data-github-user]");
        for (var i = 0; i < elements.length; i++) {
            var el = elements.item(i);
            if (el.getAttribute("data-github-user") === username) {
                el.classList.add("current-user");
            } else {
                el.classList.remove("current-user");
            }
        }
    }
    var commentCreatedEvent = "comment-created-event";
    function renderCommentForm(container, issueNumber) {
        var signInButtonContent = '<span class="icon" aria-hidden="true"><span class="docon docon-brand-github"></span></span><span>' + escape$1(loc_signInToComment) + "<span>";
        container.insertAdjacentHTML("afterbegin", '\n\t\t<div class="github-comment current-user">\n\t\t\t<img class="comment-aside avatar" src="' + avatar.src + '" alt="' + avatar.alt + '" width="36" height="36" aria-hidden="true">\n\n\t\t\t<form class="comment-main feedback-form" accept-charset="UTF-8" autocomplete="off" action="javascript:">\n\t\t\t\t<h4 class="visually-hidden">' + escape$1(loc_leaveAComment) + '</h4>\n\n\t\t\t\t<label>\n\t\t\t\t\t<span class="visually-hidden">' + escape$1(loc_leaveAComment) + '</span>\n\t\t\t\t\t<textarea name="body" placeholder="' + escape$1(loc_leaveAComment) + '" class="textarea has-margin-top-small is-radiusless" required disabled></textarea>\n\t\t\t\t</label>\n\n\t\t\t\t<div class="action-container">\n\t\t\t\t\t<button class="button is-primary ' + signInButtonClassName + '" type="button" name="sign-in" ' + nm("feedback-comment-sign-in") + ">" + signInButtonContent + '</button>\n\t\t\t\t\t<button class="button is-primary" type="submit" name="submit" hidden>' + escape$1(loc_comment) + "</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>");
        var form = container.firstElementChild.querySelector(".feedback-form");
        var body = form.elements.namedItem("body");
        var submit = form.elements.namedItem("submit");
        var signIn = form.elements.namedItem("sign-in");
        configureValidation(form);
        var enableControls = function() {
            var signedIn = !!token.value;
            signIn.hidden = signedIn;
            submit.hidden = !signedIn;
            body.disabled = !signedIn;
        };
        enableControls();
        form.onsubmit = function() {
            if (submit.disabled || !confirmSubmit("comment")) {
                return;
            }
            submit.disabled = true;
            submit.classList.add("is-loading");
            postComment(context.repo, issueNumber, body.value).then(function(comment) {
                resetForm(form);
                window$1.dispatchEvent(new CustomEvent(commentCreatedEvent, {
                    detail: {
                        issueNumber: issueNumber,
                        comment: comment,
                        bodyMarkdown: body.value
                    }
                }));
            }, function() {
                var url = "https://github.com/" + context.repo + "/issues/" + issueNumber;
                var message = loc_errorCreatingComment.replace("{0}", url);
                showFormAlert(form, message);
            }).then(function() {
                submit.disabled = false;
                submit.classList.remove("is-loading");
            });
        };
        window$1.addEventListener(tokenChangedEvent, enableControls);
        return {
            form: form,
            body: body,
            submit: submit,
            signIn: signIn
        };
    }
    var nextId$2 = 0;
    function generateElementId() {
        return "ax-" + nextId$2++;
    }
    var loadingHtml = '\n\t<div id="spinner" class="c-progress f-indeterminate-local f-progress-large" role="progressbar" tabindex="0" aria-valuetext="' + loc_loading + '" aria-label="' + loc_loading + '">\n\t\t<span></span>\n\t\t<span></span>\n\t\t<span></span>\n\t\t<span></span>\n\t\t<span></span>\n\t</div>';
    var reactionChangedEvent = "reaction-changed";
    var reactions = {
        "+1": {
            label: "+1",
            countLabel: loc_thumbsUpReactionCount,
            accessor: function(x) {
                return x.reactions["+1"];
            }
        },
        "-1": {
            label: "-1",
            countLabel: loc_thumbsDownReactionCount,
            accessor: function(x) {
                return x.reactions["-1"];
            }
        },
        laugh: {
            label: loc_laugh,
            countLabel: loc_laughReactionCount,
            accessor: function(x) {
                return x.reactions.laugh;
            }
        },
        hooray: {
            label: loc_hooray,
            countLabel: loc_hoorayReactionCount,
            accessor: function(x) {
                return x.reactions.hooray;
            }
        },
        confused: {
            label: loc_confused,
            countLabel: loc_confusedReactionCount,
            accessor: function(x) {
                return x.reactions.confused;
            }
        },
        heart: {
            label: loc_heart,
            countLabel: loc_heartReactionCount,
            accessor: function(x) {
                return x.reactions.heart;
            }
        }
    };
    function isIssue(owner) {
        return "number" in owner;
    }
    function getReactionButtonHtml(type, count, ownerId, ownerType, displayCount) {
        var labelFormat = displayCount ? reactions[type].countLabel : reactions[type].label;
        var disabled = token.value ? "" : "disabled";
        return '\n\t\t<button class="github-reaction"\n\t\t\ttype="button"\n\t\t\taria-label="' + labelFormat.replace("{0}", count.toString()) + '"\n\t\t\tdata-label-format="' + labelFormat + '"\n\t\t\tdata-reaction-type="' + type + '"\n\t\t\tdata-reaction-owner="' + ownerId + '"\n\t\t\tdata-reaction-owner-type="' + ownerType + '"\n\t\t\t' + (displayCount ? 'data-reaction-count="' + count + '"' : "") + "\n\t\t\t" + disabled + "\n\t\t\t" + nm(type) + ">\n\t\t</button>";
    }
    function getReactionsBarHtml(owner, forMenu, htmlAttrs) {
        if (forMenu === void 0) {
            forMenu = false;
        }
        if (htmlAttrs === void 0) {
            htmlAttrs = "";
        }
        var types = [ "+1", "-1", "laugh", "hooray", "confused", "heart" ];
        var ownerId = isIssue(owner) ? owner.number : owner.id;
        var ownerType = isIssue(owner) ? "issue" : "comment";
        var displayCount = !forMenu;
        var buttons = types.map(function(t) {
            return getReactionButtonHtml(t, reactions[t].accessor(owner), ownerId, ownerType, displayCount);
        });
        return '\n\t\t<div class="github-reactions ' + (forMenu ? "" : "has-divider") + '" ' + nm("reactions") + " " + htmlAttrs + ">\n\t\t\t" + buttons.join("") + "\n\t\t\t" + (forMenu ? "" : '<span class="hr"></span>' + getReactionsMenuHtml(owner)) + "\n\t\t</div>";
    }
    function getReactionsMenuHtml(owner, htmlAttrs) {
        if (htmlAttrs === void 0) {
            htmlAttrs = "";
        }
        var menuId = generateElementId();
        return '\n\t\t<div class="github-reactions-dropdown dropdown has-caret" auto-align ' + nm("reactions-menu") + " " + htmlAttrs + '>\n\t\t\t<button class="dropdown-trigger muted-link text-subtle"\n\t\t\t\t\taria-label="' + loc_chooseReaction + '"\n\t\t\t\t\taria-haspopup="true"\n\t\t\t\t\taria-controls="' + menuId + '">\n\t\t\t\t<span class="docon docon-octicon-plus-small" aria-hidden="true"></span>\n\t\t\t\t<span class="docon docon-octicon-smiley" aria-hidden="true"></span>\n\t\t\t</button>\n\t\t\t<div class="dropdown-menu" id="' + menuId + '" role="menu" aria-label="' + loc_pickReaction + '">\n\t\t\t\t<a class="feedback-sign-in-button" href="#" data-bi-name="feedback-reaction-sign-in" ' + (token.value ? "hidden" : "") + '>\n\t\t\t\t\t<span class="icon"><span class="docon docon-brand-github" aria-hidden="true"></span></span>\n\t\t\t\t\t<span>' + loc_signInToReact + '</span>\n\t\t\t\t</a>\n\t\t\t\t<div>\n\t\t\t\t\t<span class="pick-reaction">' + escape$1(loc_pickReaction) + "</span>\n\t\t\t\t\t" + getReactionsBarHtml(owner, true) + "\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>";
    }
    function incrementReactionCount(container, type, delta, ownerId, ownerType) {
        var selector = '[data-reaction-owner="' + ownerId + '"][data-reaction-owner-type="' + ownerType + '"][data-reaction-type="' + type + '"][data-reaction-count]';
        var elements = container.querySelectorAll(selector);
        for (var i = 0; i < elements.length; i++) {
            var element = elements.item(i);
            var count = parseInt(element.getAttribute("data-reaction-count")) + delta;
            element.setAttribute("data-reaction-count", count.toString());
            var format = element.getAttribute("data-label-format");
            element.setAttribute("aria-label", format.replace("{0}", count.toString()));
        }
    }
    function initReactions(container) {
        window$1.addEventListener(reactionChangedEvent, function(event) {
            var _a = event.detail, ownerId = _a.ownerId, ownerType = _a.ownerType, reaction = _a.reaction, deleted = _a.deleted;
            incrementReactionCount(container, reaction.content, deleted ? -1 : 1, ownerId, ownerType);
        });
        container.addEventListener("click", function(event) {
            var button = event.target instanceof Element && event.target.closest("button[data-reaction-type]");
            if (!button) {
                return;
            }
            event.preventDefault();
            var ownerId = +button.getAttribute("data-reaction-owner");
            var ownerType = button.getAttribute("data-reaction-owner-type");
            var type = button.getAttribute("data-reaction-type");
            if (button.disabled) {
                return;
            }
            button.disabled = true;
            button.classList.add("submitting");
            var toggleReaction = ownerType === "issue" ? toggleIssueReaction : toggleCommentReaction;
            toggleReaction(context.repo, ownerId, type).then(function(_a) {
                var reaction = _a.reaction, deleted = _a.deleted;
                var detail = {
                    ownerId: ownerId,
                    ownerType: ownerType,
                    reaction: reaction,
                    deleted: deleted
                };
                window$1.dispatchEvent(new CustomEvent(reactionChangedEvent, {
                    detail: detail
                }));
            }, function() {}).then(function() {
                button.disabled = false;
                button.classList.remove("submitting");
                collapseDropdown(button);
            });
        });
        window$1.addEventListener(tokenChangedEvent, function() {
            Array.from(container.querySelectorAll(".github-reaction")).forEach(function(el) {
                return el.disabled = !token.value;
            });
            Array.from(container.querySelectorAll(".github-reactions-dropdown .feedback-sign-in-button")).forEach(function(el) {
                return el.hidden = !!token.value;
            });
        });
    }
    function initComments(commentList, issueNumber, commentCount) {
        if (commentCount > 0) {
            loadComments(commentList, issueNumber, commentCount);
        }
        var formListItem = document.createElement("li");
        renderCommentForm(formListItem, issueNumber);
        commentList.appendChild(formListItem);
        window$1.addEventListener(commentCreatedEvent, function(event) {
            if (event.detail.issueNumber !== issueNumber) {
                return;
            }
            var comment = event.detail.comment;
            formListItem.insertAdjacentHTML("beforebegin", getCommentHtml(comment));
            notifyContentUpdated();
        });
    }
    function loadComments(commentList, issueNumber, commentCount) {
        var count = Math.min(10, commentCount);
        var placeholderComments = new Array(count + 1).join(placeholderCommentHtml);
        commentList.insertAdjacentHTML("afterbegin", placeholderComments);
        var removePlaceholderComments = function() {
            while (count--) {
                commentList.removeChild(commentList.firstElementChild);
            }
        };
        loadCommentsPage(context.repo, issueNumber, 1).then(function(page) {
            removePlaceholderComments();
            commentList.insertAdjacentHTML("afterbegin", page.items.map(getCommentHtml).join("\n"));
            notifyContentUpdated();
        }, function(err) {
            removePlaceholderComments();
            var message = err instanceof RateLimitExceededError ? loc_rateLimitedLoadingComments + " " + (err.signedIn ? "" : loc_signInToIncreaseRateLimit) : loc_errorLoadingComments;
            var alert = createAlert(message, err instanceof RateLimitExceededError);
            var errorListItem = document.createElement("li");
            errorListItem.appendChild(alert);
            commentList.insertAdjacentElement("afterbegin", errorListItem);
            notifyContentUpdated();
            if (err instanceof RateLimitExceededError && !err.signedIn) {
                whenSignedIn().then(function() {
                    commentList.removeChild(errorListItem);
                    loadComments(commentList, issueNumber, commentCount);
                });
            }
        });
    }
    function getCommentHtml(comment) {
        var relativeTime = escape$1(timeAgo(Date.now(), new Date(comment.created_at)));
        var commentWhen = escape$1(loc_commentPostedFormat).replace("{name}", '<a class="comment-author muted-link" href="' + comment.user.html_url + '" ' + nm("github-issue-comment-user") + ">" + comment.user.login + "</a>").replace("{time ago}", '\n\t\t\t<a class="comment-date muted-link" href="' + comment.html_url + '" ' + nm("github-issue-comment") + '>\n\t\t\t\t<time datetime="' + comment.created_at + '">' + relativeTime + "</time>\n\t\t\t</a>");
        return '\n\t\t<li>\n\t\t\t<div class="github-comment ' + (comment.user.login === username ? "current-user" : "") + '" data-github-user="' + comment.user.login + '">\n\t\t\t\t<img class="comment-aside avatar" src="' + dimensionAvatarUrl(comment.user.avatar_url) + '" alt="' + comment.user.login + '" width="36" height="36" aria-hidden="true">\n\n\t\t\t\t<article class="comment-main">\n\t\t\t\t\t<h4 class="comment-title">\n\t\t\t\t\t\t<span class="comment-meta">\n\t\t\t\t\t\t\t' + commentWhen + '\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class="title-aside">\n\t\t\t\t\t\t\t' + getAssociationBadgeHtml(comment.author_association, context.repo) + "\n\t\t\t\t\t\t\t" + getReactionsMenuHtml(comment) + '\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</h4>\n\t\t\t\t\t<div class="comment-body github-content" ' + nm("comment-body") + ">\n\t\t\t\t\t\t" + comment.body_html + "\n\t\t\t\t\t</div>\n\t\t\t\t\t" + getReactionsBarHtml(comment) + "\n\t\t\t\t</article>\n\t\t\t</div>\n\t\t</li>";
    }
    var placeholderCommentHtml = '\n\t<li>\n\t\t<div class="github-comment">\n\t\t\t<img class="comment-aside avatar" src="' + anonymousAvatar + '" alt="' + loc_avatar + '" width="36" height="36" aria-hidden="true">\n\n\t\t\t<article class="comment-main">\n\t\t\t\t<h4 class="comment-title">&nbsp;</h4>\n\t\t\t\t<div class="comment-body">&nbsp;</div>\n\t\t\t</article>\n\t\t</div>\n\t</li>';
    var issuesLoadedEvent = "issues-loaded";
    var issueCreatedEvent = "issue-created";
    var issueListOverflowEvent = "issue-list-overflow";
    var issueListMax = 10;
    function initIssueLists(section) {
        var tabGroupElement = section.querySelector(".feedback-tab-group");
        var tabGroup = tabGroupElement.tabGroup;
        var _a = tabGroup.tabs, openTab = _a[0], closedTab = _a[1];
        openTab.selected = true;
        closedTab.selected = false;
        var _b = Array.from(tabGroupElement.querySelectorAll('[role="tab"]')), openTabElement = _b[0], closedTabElement = _b[1];
        var _c = Array.from(tabGroupElement.querySelectorAll(".github-issues-list")), openList = _c[0], closedList = _c[1];
        var _d = Array.from(tabGroupElement.querySelectorAll(".no-issues-placeholder")), noOpen = _d[0], noClosed = _d[1];
        var updateTabs = function() {
            openTabElement.textContent = loc_numberOpenIssues.replace("{0}", openList.children.length.toString());
            closedTabElement.textContent = loc_numberClosedIssues.replace("{0}", closedList.children.length.toString());
            tabGroupElement.hidden = openList.children.length === 0 && closedList.children.length === 0;
            noOpen.hidden = openList.children.length > 0;
            noClosed.hidden = closedList.children.length > 0;
        };
        var insertIssue = function(issue, position, permitOverflow) {
            var ul = issue.state === "open" ? openList : closedList;
            if (!permitOverflow && ul.children.length >= issueListMax) {
                window$1.dispatchEvent(new CustomEvent(issueListOverflowEvent, {
                    detail: issue
                }));
                return;
            }
            var li = createIssueListItem(issue);
            ul.insertAdjacentElement(position, li);
        };
        var handleIssuesLoaded = function(event) {
            var issues = event.detail;
            for (var _i = 0, issues_1 = issues; _i < issues_1.length; _i++) {
                var issue = issues_1[_i];
                insertIssue(issue, "beforeend", false);
            }
            updateTabs();
            notifyContentUpdated();
        };
        var handleIssueCreated = function(event) {
            var issue = event.detail.issue;
            insertIssue(issue, "afterbegin", true);
            updateTabs();
            notifyContentUpdated();
        };
        var handleCommentCreated = function(event) {
            var issueNumber = event.detail.issueNumber;
            var el = document.querySelector('.comment-count[data-issue="' + issueNumber + '"]');
            var count = +el.getAttribute("data-count");
            count++;
            el.setAttribute("data-count", count.toString());
        };
        window$1.addEventListener(issuesLoadedEvent, handleIssuesLoaded);
        window$1.addEventListener(issueCreatedEvent, handleIssueCreated);
        window$1.addEventListener(commentCreatedEvent, handleCommentCreated);
        return {
            tabGroup: tabGroup,
            tabGroupElement: tabGroupElement,
            openTab: openTab,
            closedTab: closedTab,
            openTabElement: openTabElement,
            closedTabElement: closedTabElement,
            openList: openList,
            closedList: closedList
        };
    }
    function createIssueListItem(issue) {
        var relativeTime = escape$1(timeAgo(Date.now(), new Date(issue.created_at)));
        var viewAuthorTip = loc_viewUserOnGH.replace("{username}", issue.user.login);
        var openedWhenBy = escape$1(loc_issueOpenedFormat).replace("{time ago}", '<time datetime="' + issue.created_at + '">' + relativeTime + "</time>").replace("{name}", '<a class="issue-author" href="' + issue.user.html_url + '" ' + nm("github-issue-user") + ' title="' + viewAuthorTip + '">' + issue.user.login + "</a>");
        var issueListItem = document.createElement("li");
        issueListItem.innerHTML = '\n\t\t<article>\n\t\t\t<div class="github-issue ' + (issue.user.login === username ? "current-user" : "") + '" data-github-user="' + issue.user.login + '">\n\t\t\t\t<h3 class="visually-hidden">' + escape$1(issue.title) + '</h3>\n\t\t\t\t<div class="issue-title-container">\n\t\t\t\t\t<a\tclass="issue-title muted-link" href="#" ' + nm("issue-expander") + '\n\t\t\t\t\t\taria-role="button" aria-expanded="false"\n\t\t\t\t\t\taria-controls="issue-' + issue.number + "-body issue-" + issue.number + "-comments issue-" + issue.number + "-reactions issue-" + issue.number + '-reactions-menu"\n\t\t\t\t\t\taria-label="' + loc_toggleIssue + '">\n\t\t\t\t\t\t<span class="expand-indicator text-subtle docon docon-chevron-right-light" aria-hidden="true"></span>\n\t\t\t\t\t\t' + escape$1(issue.title) + '\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class="title-aside">\n\t\t\t\t\t\t' + getReactionsMenuHtml(issue, 'id="issue-' + issue.number + '-reactions-menu" hidden') + '\n\t\t\t\t\t\t<button\tclass="comment-count muted-link text-subtle"\n\t\t\t\t\t\t\t\tdata-issue="' + issue.number + '" data-count="' + issue.comments + '"\n\t\t\t\t\t\t\t\ttabindex="-1" role="button" aria-label="' + loc_toggleIssue + '">\n\t\t\t\t\t\t\t<span class="docon docon-comment-outline" aria-hidden="true"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="issue-body github-content" id="issue-' + issue.number + '-body" hidden ' + nm("issue-body") + ">\n\t\t\t\t\t" + issue.body_html + '\n\t\t\t\t</div>\n\t\t\t\t<div class="issue-footer">\n\t\t\t\t\t<div class="text-subtle">\n\t\t\t\t\t\t<a class="issue-number" href="' + issue.html_url + '" ' + nm("github-issue") + ' title="' + loc_viewIssueOnGH + '"><cite>#' + issue.number + "</cite></a>\n\t\t\t\t\t\t" + openedWhenBy + "\n\t\t\t\t\t\t" + getAssociationBadgeHtml(issue.author_association, context.repo) + "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t" + getReactionsBarHtml(issue, false, 'id="issue-' + issue.number + '-reactions" hidden') + '\n\t\t\t</div>\n\t\t\t<ul class="github-comments-list" id="issue-' + issue.number + '-comments" aria-label="' + loc_comments + '" hidden></ul>\n\t\t</article>';
        var markdownBody = issueListItem.querySelector(".github-content");
        removeDocumentDetails(markdownBody);
        var toggle = issueListItem.querySelector(".issue-title");
        var toggleExpand = expander(toggle);
        var commentCountToggle = issueListItem.querySelector(".comment-count");
        commentCountToggle.onclick = function() {
            toggleExpand();
        };
        var onFirstExpand = function() {
            toggle.removeEventListener("expand", onFirstExpand);
            var commentList = issueListItem.firstElementChild.lastElementChild;
            initComments(commentList, issue.number, issue.comments);
        };
        toggle.addEventListener("expand", onFirstExpand);
        return issueListItem;
    }
    function removeDocumentDetails(markdownBody) {
        var hr = markdownBody.querySelector("hr:last-of-type");
        if (hr) {
            while (hr.nextElementSibling) {
                markdownBody.removeChild(hr.nextElementSibling);
            }
            markdownBody.removeChild(hr);
            return;
        }
        markdownBody.removeChild(markdownBody.lastElementChild);
    }
    function formatIssueBody(body) {
        var markdown = body + "\n\n---\n#### " + loc_documentDetails + "\n\n⚠ *" + loc_doNotEditThis + "*\n\n";
        var url = location.href;
        var documentId = context.documentId, versionIndependentDocumentId = context.versionIndependentDocumentId, documentSourceUrl = context.documentSourceUrl, contentTitle = context.contentTitle;
        var documentSourceTitle = documentSourceUrl.replace(/^https:\/\/github.com\/[^/]+\/[^/]+\/blob\/[^/]+\//i, "").replace(/\[|\]/g, "\\$&");
        contentTitle = contentTitle.replace(/\[|\]/g, "\\$&");
        markdown += "* ID: " + documentId + "\n* Version Independent ID: " + versionIndependentDocumentId + "\n* Content: [" + contentTitle + "](" + url + ")\n* Content Source: [" + documentSourceTitle + "](" + documentSourceUrl + ")";
        var service = context.service, product = context.product;
        if (service !== undefined) {
            markdown += "\n* Service: **" + service.toLowerCase() + "**";
        }
        if (product !== undefined) {
            markdown += "\n* Product: **" + product.toLowerCase() + "**";
        }
        var author = context.author, msAuthor = context.msAuthor;
        if (author !== undefined) {
            if (/github\.com/.test(documentSourceUrl)) {
                markdown += "\n* GitHub Login: @" + author;
            } else {
                markdown += "\n* Git Login: **" + author + "**";
            }
        }
        if (msAuthor !== undefined) {
            markdown += "\n* Microsoft Alias: **" + msAuthor + "**";
        }
        markdown = markdown.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return markdown;
    }
    function getCreateOnGitHubUrl(title, body) {
        return "https://github.com/" + context.repo + "/issues/new?title=" + encodeURIComponent(title) + "&body=" + encodeURIComponent(formatIssueBody(body));
    }
    function initChooseFeedback(section) {
        var signIn = section.querySelector(".feedback-sign-in-button");
        var formToggle = section.querySelector(".feedback-form-toggle");
        var createOnGitHubLinks = Array.from(section.querySelectorAll(".documentation-feedback-menu a"));
        var createOnGitHubUrl = getCreateOnGitHubUrl("", "\n\n" + loc_feedbackPlaceholder + "\n");
        createOnGitHubLinks.forEach(function(a) {
            return a.href = createOnGitHubUrl;
        });
        var toggleForm = expander(formToggle);
        var setButtonVisibility = function() {
            var signedIn = !!token.value;
            var signInField = signIn.closest(".field");
            var formToggleField = formToggle.closest(".field");
            signInField.hidden = signedIn;
            formToggleField.hidden = !signedIn;
        };
        setButtonVisibility();
        signIn.onclick = function() {
            return whenSignedIn().then(function() {
                return toggleForm(true);
            });
        };
        window$1.addEventListener(tokenChangedEvent, setButtonVisibility);
        window$1.addEventListener(issueCreatedEvent, function() {
            return toggleForm(false);
        });
    }
    "use strict";
    var EventsDiscardedReason = {
        Unknown: 0,
        NonRetryableStatus: 1,
        InvalidEvent: 2,
        SizeLimitExceeded: 3,
        KillSwitch: 4,
        QueueFull: 5
    };
    "use strict";
    var CoreUtils = function() {
        function CoreUtils() {}
        CoreUtils.isNullOrUndefined = function(input) {
            return input === null || input === undefined;
        };
        CoreUtils.newGuid = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(GuidRegex, function(c) {
                var r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
                return v.toString(16);
            });
        };
        return CoreUtils;
    }();
    var GuidRegex = /[xy]/g;
    var NotificationManager = function() {
        function NotificationManager() {
            this.listeners = [];
        }
        NotificationManager.prototype.addNotificationListener = function(listener) {
            this.listeners.push(listener);
        };
        NotificationManager.prototype.removeNotificationListener = function(listener) {
            var index = this.listeners.indexOf(listener);
            while (index > -1) {
                this.listeners.splice(index, 1);
                index = this.listeners.indexOf(listener);
            }
        };
        NotificationManager.prototype.eventsSent = function(events) {
            var _this = this;
            var _loop_1 = function(i) {
                if (this_1.listeners[i].eventsSent) {
                    setTimeout(function() {
                        return _this.listeners[i].eventsSent(events);
                    }, 0);
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.listeners.length; ++i) {
                _loop_1(i);
            }
        };
        NotificationManager.prototype.eventsDiscarded = function(events, reason) {
            var _this = this;
            var _loop_2 = function(i) {
                if (this_2.listeners[i].eventsDiscarded) {
                    setTimeout(function() {
                        return _this.listeners[i].eventsDiscarded(events, reason);
                    }, 0);
                }
            };
            var this_2 = this;
            for (var i = 0; i < this.listeners.length; ++i) {
                _loop_2(i);
            }
        };
        return NotificationManager;
    }();
    var LoggingSeverity;
    (function(LoggingSeverity) {
        LoggingSeverity[LoggingSeverity["CRITICAL"] = 1] = "CRITICAL";
        LoggingSeverity[LoggingSeverity["WARNING"] = 2] = "WARNING";
    })(LoggingSeverity || (LoggingSeverity = {}));
    var _InternalMessageId = {
        BrowserDoesNotSupportLocalStorage: 0,
        BrowserCannotReadLocalStorage: 1,
        BrowserCannotReadSessionStorage: 2,
        BrowserCannotWriteLocalStorage: 3,
        BrowserCannotWriteSessionStorage: 4,
        BrowserFailedRemovalFromLocalStorage: 5,
        BrowserFailedRemovalFromSessionStorage: 6,
        CannotSendEmptyTelemetry: 7,
        ClientPerformanceMathError: 8,
        ErrorParsingAISessionCookie: 9,
        ErrorPVCalc: 10,
        ExceptionWhileLoggingError: 11,
        FailedAddingTelemetryToBuffer: 12,
        FailedMonitorAjaxAbort: 13,
        FailedMonitorAjaxDur: 14,
        FailedMonitorAjaxOpen: 15,
        FailedMonitorAjaxRSC: 16,
        FailedMonitorAjaxSend: 17,
        FailedMonitorAjaxGetCorrelationHeader: 18,
        FailedToAddHandlerForOnBeforeUnload: 19,
        FailedToSendQueuedTelemetry: 20,
        FailedToReportDataLoss: 21,
        FlushFailed: 22,
        MessageLimitPerPVExceeded: 23,
        MissingRequiredFieldSpecification: 24,
        NavigationTimingNotSupported: 25,
        OnError: 26,
        SessionRenewalDateIsZero: 27,
        SenderNotInitialized: 28,
        StartTrackEventFailed: 29,
        StopTrackEventFailed: 30,
        StartTrackFailed: 31,
        StopTrackFailed: 32,
        TelemetrySampledAndNotSent: 33,
        TrackEventFailed: 34,
        TrackExceptionFailed: 35,
        TrackMetricFailed: 36,
        TrackPVFailed: 37,
        TrackPVFailedCalc: 38,
        TrackTraceFailed: 39,
        TransmissionFailed: 40,
        FailedToSetStorageBuffer: 41,
        FailedToRestoreStorageBuffer: 42,
        InvalidBackendResponse: 43,
        FailedToFixDepricatedValues: 44,
        InvalidDurationValue: 45,
        TelemetryEnvelopeInvalid: 46,
        CreateEnvelopeError: 47,
        CannotSerializeObject: 48,
        CannotSerializeObjectNonSerializable: 49,
        CircularReferenceDetected: 50,
        ClearAuthContextFailed: 51,
        ExceptionTruncated: 52,
        IllegalCharsInName: 53,
        ItemNotInArray: 54,
        MaxAjaxPerPVExceeded: 55,
        MessageTruncated: 56,
        NameTooLong: 57,
        SampleRateOutOfRange: 58,
        SetAuthContextFailed: 59,
        SetAuthContextFailedAccountName: 60,
        StringValueTooLong: 61,
        StartCalledMoreThanOnce: 62,
        StopCalledWithoutStart: 63,
        TelemetryInitializerFailed: 64,
        TrackArgumentsNotSpecified: 65,
        UrlTooLong: 66,
        SessionStorageBufferFull: 67,
        CannotAccessCookie: 68,
        IdTooLong: 69
    };
    "use strict";
    var _InternalLogMessage = function() {
        function _InternalLogMessage(msgId, msg, isUserAct, properties) {
            if (isUserAct === void 0) {
                isUserAct = false;
            }
            this.messageId = msgId;
            this.message = (isUserAct ? _InternalLogMessage.AiUserActionablePrefix : _InternalLogMessage.AiNonUserActionablePrefix) + msgId;
            var diagnosticText = (msg ? " message:" + _InternalLogMessage.sanitizeDiagnosticText(msg) : "") + (properties ? " props:" + _InternalLogMessage.sanitizeDiagnosticText(JSON.stringify(properties)) : "");
            this.message += diagnosticText;
        }
        _InternalLogMessage.sanitizeDiagnosticText = function(text) {
            return '"' + text.replace(/\"/g, "") + '"';
        };
        _InternalLogMessage.dataType = "MessageData";
        _InternalLogMessage.AiNonUserActionablePrefix = "AI (Internal): ";
        _InternalLogMessage.AiUserActionablePrefix = "AI: ";
        return _InternalLogMessage;
    }();
    var DiagnosticLogger = function() {
        function DiagnosticLogger(config) {
            this.AIInternalMessagePrefix = "AITR_";
            this.enableDebugExceptions = function() {
                return false;
            };
            this.consoleLoggingLevel = function() {
                return 1;
            };
            this.telemetryLoggingLevel = function() {
                return 0;
            };
            this.maxInternalMessageLimit = function() {
                return 25;
            };
            this.queue = [];
            this._messageCount = 0;
            this._messageLogged = {};
            if (CoreUtils.isNullOrUndefined(config)) {
                return;
            }
            if (!CoreUtils.isNullOrUndefined(config.loggingLevelConsole)) {
                this.consoleLoggingLevel = function() {
                    return config.loggingLevelConsole;
                };
            }
            if (!CoreUtils.isNullOrUndefined(config.loggingLevelTelemetry)) {
                this.telemetryLoggingLevel = function() {
                    return config.loggingLevelTelemetry;
                };
            }
            if (!CoreUtils.isNullOrUndefined(config.maxMessageLimit)) {
                this.maxInternalMessageLimit = function() {
                    return config.maxMessageLimit;
                };
            }
            if (!CoreUtils.isNullOrUndefined(config.enableDebugExceptions)) {
                this.enableDebugExceptions = function() {
                    return config.enableDebugExceptions;
                };
            }
        }
        DiagnosticLogger.prototype.throwInternal = function(severity, msgId, msg, properties, isUserAct) {
            if (isUserAct === void 0) {
                isUserAct = false;
            }
            var message = new _InternalLogMessage(msgId, msg, isUserAct, properties);
            if (this.enableDebugExceptions()) {
                throw message;
            } else {
                if (typeof message !== "undefined" && !!message) {
                    if (typeof message.message !== "undefined") {
                        if (isUserAct) {
                            var messageKey = +message.messageId;
                            if (!this._messageLogged[messageKey] || this.consoleLoggingLevel() >= LoggingSeverity.WARNING) {
                                this.warnToConsole(message.message);
                                this._messageLogged[messageKey] = true;
                            }
                        } else {
                            if (this.consoleLoggingLevel() >= LoggingSeverity.WARNING) {
                                this.warnToConsole(message.message);
                            }
                        }
                        this.logInternalMessage(severity, message);
                    }
                }
            }
        };
        DiagnosticLogger.prototype.warnToConsole = function(message) {
            if (typeof console !== "undefined" && !!console) {
                if (typeof console.warn === "function") {
                    console.warn(message);
                } else if (typeof console.log === "function") {
                    console.log(message);
                }
            }
        };
        DiagnosticLogger.prototype.resetInternalMessageCount = function() {
            this._messageCount = 0;
            this._messageLogged = {};
        };
        DiagnosticLogger.prototype.logInternalMessage = function(severity, message) {
            if (this._areInternalMessagesThrottled()) {
                return;
            }
            var logMessage = true;
            var messageKey = this.AIInternalMessagePrefix + message.messageId;
            if (this._messageLogged[messageKey]) {
                logMessage = false;
            } else {
                this._messageLogged[messageKey] = true;
            }
            if (logMessage) {
                if (severity <= this.telemetryLoggingLevel()) {
                    this.queue.push(message);
                    this._messageCount++;
                }
                if (this._messageCount == this.maxInternalMessageLimit()) {
                    var throttleLimitMessage = "Internal events throttle limit per PageView reached for this app.";
                    var throttleMessage = new _InternalLogMessage(_InternalMessageId.MessageLimitPerPVExceeded, throttleLimitMessage, false);
                    this.queue.push(throttleMessage);
                    this.warnToConsole(throttleLimitMessage);
                }
            }
        };
        DiagnosticLogger.prototype._areInternalMessagesThrottled = function() {
            return this._messageCount >= this.maxInternalMessageLimit();
        };
        return DiagnosticLogger;
    }();
    "use strict";
    var AppInsightsCore = function() {
        function AppInsightsCore() {
            this._isInitialized = false;
            this._extensions = new Array();
            this._channelController = new ChannelController();
        }
        AppInsightsCore.prototype.initialize = function(config, extensions) {
            var _this = this;
            if (this._isInitialized) {
                throw Error("Core should not be initialized more than once");
            }
            if (!config || CoreUtils.isNullOrUndefined(config.instrumentationKey)) {
                throw Error("Please provide instrumentation key");
            }
            this.config = config;
            this._notificationManager = new NotificationManager();
            this.config.extensions = CoreUtils.isNullOrUndefined(this.config.extensions) ? [] : this.config.extensions;
            this.config.extensionConfig = CoreUtils.isNullOrUndefined(this.config.extensionConfig) ? {} : this.config.extensionConfig;
            this.config.extensionConfig.NotificationManager = this._notificationManager;
            this.logger = new DiagnosticLogger(config);
            extensions.forEach(function(extension) {
                if (CoreUtils.isNullOrUndefined(extension.initialize)) {
                    throw Error(validationError);
                }
            });
            if (this.config.extensions.length > 0) {
                var isValid_1 = true;
                this.config.extensions.forEach(function(item) {
                    if (CoreUtils.isNullOrUndefined(item)) {
                        isValid_1 = false;
                    }
                });
                if (!isValid_1) {
                    throw Error(validationError);
                }
            }
            (_a = this._extensions).push.apply(_a, [ this._channelController ].concat(extensions, this.config.extensions));
            this._extensions = this._extensions.sort(function(a, b) {
                var extA = a;
                var extB = b;
                var typeExtA = typeof extA.processTelemetry;
                var typeExtB = typeof extB.processTelemetry;
                if (typeExtA === "function" && typeExtB === "function") {
                    return extA.priority - extB.priority;
                }
                if (typeExtA === "function" && typeExtB !== "function") {
                    return 1;
                }
                if (typeExtA !== "function" && typeExtB === "function") {
                    return -1;
                }
            });
            var priority = {};
            this._extensions.forEach(function(ext) {
                var t = ext;
                if (t && t.priority) {
                    if (!CoreUtils.isNullOrUndefined(priority[t.priority])) {
                        _this.logger.warnToConsole("Two extensions have same priority" + priority[t.priority] + ", " + t.identifier);
                    } else {
                        priority[t.priority] = t.identifier;
                    }
                }
            });
            var c = -1;
            for (var idx = 0; idx < this._extensions.length - 1; idx++) {
                var curr = this._extensions[idx];
                if (curr && typeof curr.processTelemetry !== "function") {
                    continue;
                }
                if (curr.priority === ChannelControllerPriority) {
                    c = idx + 1;
                    break;
                }
                this._extensions[idx].setNextPlugin(this._extensions[idx + 1]);
            }
            this._channelController.initialize(this.config, this, this._extensions);
            this._extensions.forEach(function(ext) {
                var e = ext;
                if (e && e.priority < ChannelControllerPriority) {
                    ext.initialize(_this.config, _this, _this._extensions);
                }
            });
            if (c < this._extensions.length) {
                this._extensions.splice(c);
            }
            if (this.getTransmissionControls().length === 0) {
                throw new Error("No channels available");
            }
            this._isInitialized = true;
            var _a;
        };
        AppInsightsCore.prototype.getTransmissionControls = function() {
            return this._channelController.ChannelControls;
        };
        AppInsightsCore.prototype.track = function(telemetryItem) {
            if (telemetryItem === null) {
                this._notifiyInvalidEvent(telemetryItem);
                throw Error("Invalid telemetry item");
            }
            if (telemetryItem.baseData && !telemetryItem.baseType) {
                this._notifiyInvalidEvent(telemetryItem);
                throw Error("Provide data.baseType for data.baseData");
            }
            if (!telemetryItem.baseType) {
                telemetryItem.baseType = "EventData";
            }
            if (!telemetryItem.instrumentationKey) {
                telemetryItem.instrumentationKey = this.config.instrumentationKey;
            }
            if (!telemetryItem.timestamp) {
                telemetryItem.timestamp = new Date();
            }
            this._validateTelmetryItem(telemetryItem);
            var i = 0;
            while (i < this._extensions.length) {
                if (this._extensions[i].processTelemetry) {
                    this._extensions[i].processTelemetry(telemetryItem);
                    break;
                }
                i++;
            }
        };
        AppInsightsCore.prototype.addNotificationListener = function(listener) {
            this._notificationManager.addNotificationListener(listener);
        };
        AppInsightsCore.prototype.removeNotificationListener = function(listener) {
            this._notificationManager.removeNotificationListener(listener);
        };
        AppInsightsCore.prototype.pollInternalLogs = function() {
            var _this = this;
            var interval = this.config.diagnosticLogInterval;
            if (!(interval > 0)) {
                interval = 1e4;
            }
            return setInterval(function() {
                var queue = _this.logger.queue;
                queue.forEach(function(logMessage) {
                    var item = {
                        name: "InternalMessageId: " + logMessage.messageId,
                        instrumentationKey: _this.config.instrumentationKey,
                        timestamp: new Date(),
                        baseType: _InternalLogMessage.dataType,
                        baseData: {
                            message: logMessage.message
                        }
                    };
                    _this.track(item);
                });
                queue.length = 0;
            }, interval);
        };
        AppInsightsCore.prototype._validateTelmetryItem = function(telemetryItem) {
            if (CoreUtils.isNullOrUndefined(telemetryItem.name)) {
                this._notifiyInvalidEvent(telemetryItem);
                throw Error("telemetry name required");
            }
            if (CoreUtils.isNullOrUndefined(telemetryItem.timestamp)) {
                this._notifiyInvalidEvent(telemetryItem);
                throw Error("telemetry timestamp required");
            }
            if (CoreUtils.isNullOrUndefined(telemetryItem.instrumentationKey)) {
                this._notifiyInvalidEvent(telemetryItem);
                throw Error("telemetry instrumentationKey required");
            }
        };
        AppInsightsCore.prototype._notifiyInvalidEvent = function(telemetryItem) {
            this._notificationManager.eventsDiscarded([ telemetryItem ], EventsDiscardedReason.InvalidEvent);
        };
        return AppInsightsCore;
    }();
    var ChannelController = function() {
        function ChannelController() {
            this.identifier = "ChannelControllerPlugin";
            this.priority = ChannelControllerPriority;
        }
        ChannelController.prototype.processTelemetry = function(item) {
            this.channelQueue.forEach(function(queues) {
                if (queues.length > 0) {
                    queues[0].processTelemetry(item);
                }
            });
        };
        Object.defineProperty(ChannelController.prototype, "ChannelControls", {
            get: function() {
                return this.channelQueue;
            },
            enumerable: true,
            configurable: true
        });
        ChannelController.prototype.initialize = function(config, core, extensions) {
            var _this = this;
            this.channelQueue = new Array();
            if (config.channels) {
                config.channels.forEach(function(queue) {
                    if (queue && queue.length > 0) {
                        queue = queue.sort(function(a, b) {
                            return a.priority - b.priority;
                        });
                        queue.forEach(function(queueItem) {
                            return queueItem.initialize(config, core, extensions);
                        });
                        for (var i = 1; i < queue.length; i++) {
                            queue[i - 1].setNextPlugin(queue[i]);
                        }
                        _this.channelQueue.push(queue);
                    }
                });
            } else {
                var arr = new Array();
                for (var i = 0; i < extensions.length; i++) {
                    var plugin = extensions[i];
                    if (plugin.priority > ChannelControllerPriority) {
                        arr.push(plugin);
                    }
                }
                if (arr.length > 0) {
                    arr = arr.sort(function(a, b) {
                        return a.priority - b.priority;
                    });
                    arr.forEach(function(queueItem) {
                        return queueItem.initialize(config, core, extensions);
                    });
                    for (var i = 1; i < arr.length; i++) {
                        arr[i - 1].setNextPlugin(arr[i]);
                    }
                    this.channelQueue.push(arr);
                }
            }
        };
        return ChannelController;
    }();
    var validationError = "Extensions must provide callback to initialize";
    var ChannelControllerPriority = 200;
    var StorageType;
    (function(StorageType) {
        StorageType[StorageType["LocalStorage"] = 0] = "LocalStorage";
        StorageType[StorageType["SessionStorage"] = 1] = "SessionStorage";
    })(StorageType || (StorageType = {}));
    var FieldType;
    (function(FieldType) {
        FieldType[FieldType["Default"] = 0] = "Default";
        FieldType[FieldType["Required"] = 1] = "Required";
        FieldType[FieldType["Array"] = 2] = "Array";
        FieldType[FieldType["Hidden"] = 4] = "Hidden";
    })(FieldType || (FieldType = {}));
    var RequestHeaders = function() {
        function RequestHeaders() {}
        RequestHeaders.requestContextHeader = "Request-Context";
        RequestHeaders.requestContextTargetKey = "appId";
        RequestHeaders.requestContextAppIdFormat = "appId=cid-v1:";
        RequestHeaders.requestIdHeader = "Request-Id";
        RequestHeaders.sdkContextHeader = "Sdk-Context";
        RequestHeaders.sdkContextHeaderAppIdRequest = "appId";
        RequestHeaders.requestContextHeaderLowerCase = "request-context";
        return RequestHeaders;
    }();
    var DataSanitizer = function() {
        function DataSanitizer() {}
        DataSanitizer.sanitizeKeyAndAddUniqueness = function(logger, key, map) {
            var origLength = key.length;
            var field = DataSanitizer.sanitizeKey(logger, key);
            if (field.length !== origLength) {
                var i = 0;
                var uniqueField = field;
                while (map[uniqueField] !== undefined) {
                    i++;
                    uniqueField = field.substring(0, DataSanitizer.MAX_NAME_LENGTH - 3) + DataSanitizer.padNumber(i);
                }
                field = uniqueField;
            }
            return field;
        };
        DataSanitizer.sanitizeKey = function(logger, name) {
            if (name) {
                name = DataSanitizer.trim(name.toString());
                if (name.length > DataSanitizer.MAX_NAME_LENGTH) {
                    name = name.substring(0, DataSanitizer.MAX_NAME_LENGTH);
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.NameTooLong, "name is too long.  It has been truncated to " + DataSanitizer.MAX_NAME_LENGTH + " characters.", {
                        name: name
                    }, true);
                }
            }
            return name;
        };
        DataSanitizer.sanitizeString = function(logger, value, maxLength) {
            if (maxLength === void 0) {
                maxLength = DataSanitizer.MAX_STRING_LENGTH;
            }
            if (value) {
                maxLength = maxLength ? maxLength : DataSanitizer.MAX_STRING_LENGTH;
                value = DataSanitizer.trim(value);
                if (value.toString().length > maxLength) {
                    value = value.toString().substring(0, maxLength);
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.StringValueTooLong, "string value is too long. It has been truncated to " + maxLength + " characters.", {
                        value: value
                    }, true);
                }
            }
            return value;
        };
        DataSanitizer.sanitizeUrl = function(logger, url) {
            return DataSanitizer.sanitizeInput(logger, url, DataSanitizer.MAX_URL_LENGTH, _InternalMessageId.UrlTooLong);
        };
        DataSanitizer.sanitizeMessage = function(logger, message) {
            if (message) {
                if (message.length > DataSanitizer.MAX_MESSAGE_LENGTH) {
                    message = message.substring(0, DataSanitizer.MAX_MESSAGE_LENGTH);
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.MessageTruncated, "message is too long, it has been truncated to " + DataSanitizer.MAX_MESSAGE_LENGTH + " characters.", {
                        message: message
                    }, true);
                }
            }
            return message;
        };
        DataSanitizer.sanitizeException = function(logger, exception) {
            if (exception) {
                if (exception.length > DataSanitizer.MAX_EXCEPTION_LENGTH) {
                    exception = exception.substring(0, DataSanitizer.MAX_EXCEPTION_LENGTH);
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.ExceptionTruncated, "exception is too long, it has been truncated to " + DataSanitizer.MAX_EXCEPTION_LENGTH + " characters.", {
                        exception: exception
                    }, true);
                }
            }
            return exception;
        };
        DataSanitizer.sanitizeProperties = function(logger, properties) {
            if (properties) {
                var tempProps = {};
                for (var prop in properties) {
                    var value = DataSanitizer.sanitizeString(logger, properties[prop], DataSanitizer.MAX_PROPERTY_LENGTH);
                    prop = DataSanitizer.sanitizeKeyAndAddUniqueness(logger, prop, tempProps);
                    tempProps[prop] = value;
                }
                properties = tempProps;
            }
            return properties;
        };
        DataSanitizer.sanitizeMeasurements = function(logger, measurements) {
            if (measurements) {
                var tempMeasurements = {};
                for (var measure in measurements) {
                    var value = measurements[measure];
                    measure = DataSanitizer.sanitizeKeyAndAddUniqueness(logger, measure, tempMeasurements);
                    tempMeasurements[measure] = value;
                }
                measurements = tempMeasurements;
            }
            return measurements;
        };
        DataSanitizer.sanitizeId = function(logger, id) {
            return id ? DataSanitizer.sanitizeInput(logger, id, DataSanitizer.MAX_ID_LENGTH, _InternalMessageId.IdTooLong).toString() : id;
        };
        DataSanitizer.sanitizeInput = function(logger, input, maxLength, _msgId) {
            if (input) {
                input = DataSanitizer.trim(input);
                if (input.length > maxLength) {
                    input = input.substring(0, maxLength);
                    logger.throwInternal(LoggingSeverity.WARNING, _msgId, "input is too long, it has been truncated to " + maxLength + " characters.", {
                        data: input
                    }, true);
                }
            }
            return input;
        };
        DataSanitizer.padNumber = function(num) {
            var s = "00" + num;
            return s.substr(s.length - 3);
        };
        DataSanitizer.trim = function(str) {
            if (typeof str !== "string") return str;
            return str.replace(/^\s+|\s+$/g, "");
        };
        DataSanitizer.MAX_NAME_LENGTH = 150;
        DataSanitizer.MAX_ID_LENGTH = 128;
        DataSanitizer.MAX_PROPERTY_LENGTH = 8192;
        DataSanitizer.MAX_STRING_LENGTH = 1024;
        DataSanitizer.MAX_URL_LENGTH = 2048;
        DataSanitizer.MAX_MESSAGE_LENGTH = 32768;
        DataSanitizer.MAX_EXCEPTION_LENGTH = 32768;
        return DataSanitizer;
    }();
    var Util = function() {
        function Util() {}
        Util.disableStorage = function() {
            Util._canUseLocalStorage = false;
            Util._canUseSessionStorage = false;
        };
        Util._getLocalStorageObject = function() {
            if (Util.canUseLocalStorage()) {
                return Util._getVerifiedStorageObject(StorageType.LocalStorage);
            }
            return null;
        };
        Util._getVerifiedStorageObject = function(storageType) {
            var storage = null;
            var fail;
            var uid;
            try {
                if (typeof window === "undefined") {
                    return null;
                }
                uid = new Date();
                storage = storageType === StorageType.LocalStorage ? window.localStorage : window.sessionStorage;
                storage.setItem(uid, uid);
                fail = storage.getItem(uid) != uid;
                storage.removeItem(uid);
                if (fail) {
                    storage = null;
                }
            } catch (exception) {
                storage = null;
            }
            return storage;
        };
        Util.isInternalApplicationInsightsEndpoint = function(endpointUrl) {
            return Util._internalEndpoints.indexOf(endpointUrl.toLowerCase()) !== -1;
        };
        Util.canUseLocalStorage = function() {
            if (Util._canUseLocalStorage === undefined) {
                Util._canUseLocalStorage = !!Util._getVerifiedStorageObject(StorageType.LocalStorage);
            }
            return Util._canUseLocalStorage;
        };
        Util.getStorage = function(logger, name) {
            var storage = Util._getLocalStorageObject();
            if (storage !== null) {
                try {
                    return storage.getItem(name);
                } catch (e) {
                    Util._canUseLocalStorage = false;
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.BrowserCannotReadLocalStorage, "Browser failed read of local storage. " + Util.getExceptionName(e), {
                        exception: Util.dump(e)
                    });
                }
            }
            return null;
        };
        Util.setStorage = function(logger, name, data) {
            var storage = Util._getLocalStorageObject();
            if (storage !== null) {
                try {
                    storage.setItem(name, data);
                    return true;
                } catch (e) {
                    Util._canUseLocalStorage = false;
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.BrowserCannotWriteLocalStorage, "Browser failed write to local storage. " + Util.getExceptionName(e), {
                        exception: Util.dump(e)
                    });
                }
            }
            return false;
        };
        Util.removeStorage = function(logger, name) {
            var storage = Util._getLocalStorageObject();
            if (storage !== null) {
                try {
                    storage.removeItem(name);
                    return true;
                } catch (e) {
                    Util._canUseLocalStorage = false;
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.BrowserFailedRemovalFromLocalStorage, "Browser failed removal of local storage item. " + Util.getExceptionName(e), {
                        exception: Util.dump(e)
                    });
                }
            }
            return false;
        };
        Util._getSessionStorageObject = function() {
            if (Util.canUseSessionStorage()) {
                return Util._getVerifiedStorageObject(StorageType.SessionStorage);
            }
            return null;
        };
        Util.canUseSessionStorage = function() {
            if (Util._canUseSessionStorage === undefined) {
                Util._canUseSessionStorage = !!Util._getVerifiedStorageObject(StorageType.SessionStorage);
            }
            return Util._canUseSessionStorage;
        };
        Util.getSessionStorageKeys = function() {
            var keys = [];
            if (Util.canUseSessionStorage()) {
                for (var key in window.sessionStorage) {
                    keys.push(key);
                }
            }
            return keys;
        };
        Util.getSessionStorage = function(logger, name) {
            var storage = Util._getSessionStorageObject();
            if (storage !== null) {
                try {
                    return storage.getItem(name);
                } catch (e) {
                    Util._canUseSessionStorage = false;
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.BrowserCannotReadSessionStorage, "Browser failed read of session storage. " + Util.getExceptionName(e), {
                        exception: Util.dump(e)
                    });
                }
            }
            return null;
        };
        Util.setSessionStorage = function(logger, name, data) {
            var storage = Util._getSessionStorageObject();
            if (storage !== null) {
                try {
                    storage.setItem(name, data);
                    return true;
                } catch (e) {
                    Util._canUseSessionStorage = false;
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.BrowserCannotWriteSessionStorage, "Browser failed write to session storage. " + Util.getExceptionName(e), {
                        exception: Util.dump(e)
                    });
                }
            }
            return false;
        };
        Util.removeSessionStorage = function(logger, name) {
            var storage = Util._getSessionStorageObject();
            if (storage !== null) {
                try {
                    storage.removeItem(name);
                    return true;
                } catch (e) {
                    Util._canUseSessionStorage = false;
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.BrowserFailedRemovalFromSessionStorage, "Browser failed removal of session storage item. " + Util.getExceptionName(e), {
                        exception: Util.dump(e)
                    });
                }
            }
            return false;
        };
        Util.disableCookies = function() {
            Util._canUseCookies = false;
        };
        Util.canUseCookies = function(logger) {
            if (Util._canUseCookies === undefined) {
                Util._canUseCookies = false;
                try {
                    Util._canUseCookies = Util.document.cookie !== undefined;
                } catch (e) {
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.CannotAccessCookie, "Cannot access document.cookie - " + Util.getExceptionName(e), {
                        exception: Util.dump(e)
                    });
                }
            }
            return Util._canUseCookies;
        };
        Util.setCookie = function(logger, name, value, domain) {
            var domainAttrib = "";
            var secureAttrib = "";
            if (domain) {
                domainAttrib = ";domain=" + domain;
            }
            if (Util.document.location && Util.document.location.protocol === "https:") {
                secureAttrib = ";secure";
            }
            if (Util.canUseCookies(logger)) {
                Util.document.cookie = name + "=" + value + domainAttrib + ";path=/" + secureAttrib;
            }
        };
        Util.stringToBoolOrDefault = function(str, defaultValue) {
            if (defaultValue === void 0) {
                defaultValue = false;
            }
            if (str === undefined || str === null) {
                return defaultValue;
            }
            return str.toString().toLowerCase() === "true";
        };
        Util.getCookie = function(logger, name) {
            if (!Util.canUseCookies(logger)) {
                return;
            }
            var value = "";
            if (name && name.length) {
                var cookieName = name + "=";
                var cookies = Util.document.cookie.split(";");
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i];
                    cookie = Util.trim(cookie);
                    if (cookie && cookie.indexOf(cookieName) === 0) {
                        value = cookie.substring(cookieName.length, cookies[i].length);
                        break;
                    }
                }
            }
            return value;
        };
        Util.deleteCookie = function(logger, name) {
            if (Util.canUseCookies(logger)) {
                Util.document.cookie = name + "=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            }
        };
        Util.trim = function(str) {
            if (typeof str !== "string") return str;
            return str.replace(/^\s+|\s+$/g, "");
        };
        Util.newId = function() {
            var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            var result = "";
            var random = Math.random() * 1073741824;
            while (random > 0) {
                var char = base64chars.charAt(random % 64);
                result += char;
                random = Math.floor(random / 64);
            }
            return result;
        };
        Util.isArray = function(obj) {
            return Object.prototype.toString.call(obj) === "[object Array]";
        };
        Util.isError = function(obj) {
            return Object.prototype.toString.call(obj) === "[object Error]";
        };
        Util.isDate = function(obj) {
            return Object.prototype.toString.call(obj) === "[object Date]";
        };
        Util.toISOStringForIE8 = function(date) {
            if (Util.isDate(date)) {
                if (Date.prototype.toISOString) {
                    return date.toISOString();
                } else {
                    var pad = function(num) {
                        var r = String(num);
                        if (r.length === 1) {
                            r = "0" + r;
                        }
                        return r;
                    };
                    return date.getUTCFullYear() + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate()) + "T" + pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds()) + "." + String((date.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z";
                }
            }
        };
        Util.getIEVersion = function(userAgentStr) {
            if (userAgentStr === void 0) {
                userAgentStr = null;
            }
            var myNav = userAgentStr ? userAgentStr.toLowerCase() : navigator.userAgent.toLowerCase();
            return myNav.indexOf("msie") != -1 ? parseInt(myNav.split("msie")[1]) : null;
        };
        Util.msToTimeSpan = function(totalms) {
            if (isNaN(totalms) || totalms < 0) {
                totalms = 0;
            }
            totalms = Math.round(totalms);
            var ms = "" + totalms % 1e3;
            var sec = "" + Math.floor(totalms / 1e3) % 60;
            var min = "" + Math.floor(totalms / (1e3 * 60)) % 60;
            var hour = "" + Math.floor(totalms / (1e3 * 60 * 60)) % 24;
            var days = Math.floor(totalms / (1e3 * 60 * 60 * 24));
            ms = ms.length === 1 ? "00" + ms : ms.length === 2 ? "0" + ms : ms;
            sec = sec.length < 2 ? "0" + sec : sec;
            min = min.length < 2 ? "0" + min : min;
            hour = hour.length < 2 ? "0" + hour : hour;
            return (days > 0 ? days + "." : "") + hour + ":" + min + ":" + sec + "." + ms;
        };
        Util.isCrossOriginError = function(message, url, lineNumber, columnNumber, error) {
            return (message === "Script error." || message === "Script error") && !error;
        };
        Util.dump = function(object) {
            var objectTypeDump = Object.prototype.toString.call(object);
            var propertyValueDump = JSON.stringify(object);
            if (objectTypeDump === "[object Error]") {
                propertyValueDump = "{ stack: '" + object.stack + "', message: '" + object.message + "', name: '" + object.name + "'";
            }
            return objectTypeDump + propertyValueDump;
        };
        Util.getExceptionName = function(object) {
            var objectTypeDump = Object.prototype.toString.call(object);
            if (objectTypeDump === "[object Error]") {
                return object.name;
            }
            return "";
        };
        Util.addEventHandler = function(eventName, callback) {
            if (typeof window === "undefined" || !window || typeof eventName !== "string" || typeof callback !== "function") {
                return false;
            }
            var verbEventName = "on" + eventName;
            if (window.addEventListener) {
                window.addEventListener(eventName, callback, false);
            } else if (window["attachEvent"]) {
                window["attachEvent"](verbEventName, callback);
            } else {
                return false;
            }
            return true;
        };
        Util.IsBeaconApiSupported = function() {
            return "sendBeacon" in navigator && navigator.sendBeacon;
        };
        Util.document = typeof document !== "undefined" ? document : {};
        Util._canUseCookies = undefined;
        Util._canUseLocalStorage = undefined;
        Util._canUseSessionStorage = undefined;
        Util._internalEndpoints = [ "https://dc.services.visualstudio.com/v2/track", "https://breeze.aimon.applicationinsights.io/v2/track", "https://dc-int.services.visualstudio.com/v2/track" ];
        Util.NotSpecified = "not_specified";
        return Util;
    }();
    var UrlHelper = function() {
        function UrlHelper() {}
        UrlHelper.parseUrl = function(url) {
            if (!UrlHelper.htmlAnchorElement) {
                UrlHelper.htmlAnchorElement = !!UrlHelper.document.createElement ? UrlHelper.document.createElement("a") : {};
            }
            UrlHelper.htmlAnchorElement.href = url;
            return UrlHelper.htmlAnchorElement;
        };
        UrlHelper.getAbsoluteUrl = function(url) {
            var result;
            var a = UrlHelper.parseUrl(url);
            if (a) {
                result = a.href;
            }
            return result;
        };
        UrlHelper.getPathName = function(url) {
            var result;
            var a = UrlHelper.parseUrl(url);
            if (a) {
                result = a.pathname;
            }
            return result;
        };
        UrlHelper.getCompleteUrl = function(method, absoluteUrl) {
            if (method) {
                return method.toUpperCase() + " " + absoluteUrl;
            } else {
                return absoluteUrl;
            }
        };
        UrlHelper.document = typeof document !== "undefined" ? document : {};
        return UrlHelper;
    }();
    var CorrelationIdHelper = function() {
        function CorrelationIdHelper() {}
        CorrelationIdHelper.canIncludeCorrelationHeader = function(config, requestUrl, currentHost) {
            if (config && config.disableCorrelationHeaders) {
                return false;
            }
            if (!requestUrl) {
                return false;
            }
            var requestHost = UrlHelper.parseUrl(requestUrl).host.toLowerCase();
            if ((!config || !config.enableCorsCorrelation) && requestHost !== currentHost) {
                return false;
            }
            var excludedDomains = config && config.correlationHeaderExcludedDomains;
            if (!excludedDomains || excludedDomains.length == 0) {
                return true;
            }
            for (var i = 0; i < excludedDomains.length; i++) {
                var regex = new RegExp(excludedDomains[i].toLowerCase().replace(/\./g, ".").replace(/\*/g, ".*"));
                if (regex.test(requestHost)) {
                    return false;
                }
            }
            return true;
        };
        CorrelationIdHelper.getCorrelationContext = function(responseHeader) {
            if (responseHeader) {
                var correlationId = CorrelationIdHelper.getCorrelationContextValue(responseHeader, RequestHeaders.requestContextTargetKey);
                if (correlationId && correlationId !== CorrelationIdHelper.correlationIdPrefix) {
                    return correlationId;
                }
            }
        };
        CorrelationIdHelper.getCorrelationContextValue = function(responseHeader, key) {
            if (responseHeader) {
                var keyValues = responseHeader.split(",");
                for (var i = 0; i < keyValues.length; ++i) {
                    var keyValue = keyValues[i].split("=");
                    if (keyValue.length == 2 && keyValue[0] == key) {
                        return keyValue[1];
                    }
                }
            }
        };
        CorrelationIdHelper.correlationIdPrefix = "cid-v1:";
        return CorrelationIdHelper;
    }();
    var AjaxHelper = function() {
        function AjaxHelper() {}
        AjaxHelper.ParseDependencyPath = function(logger, absoluteUrl, method, pathName) {
            var target, name;
            if (absoluteUrl && absoluteUrl.length > 0) {
                var parsedUrl = UrlHelper.parseUrl(absoluteUrl);
                target = parsedUrl.host;
                if (parsedUrl.pathname != null) {
                    var pathName = parsedUrl.pathname.length === 0 ? "/" : parsedUrl.pathname;
                    if (pathName.charAt(0) !== "/") {
                        pathName = "/" + pathName;
                    }
                    name = DataSanitizer.sanitizeString(logger, method ? method + " " + pathName : pathName);
                } else {
                    name = DataSanitizer.sanitizeString(logger, absoluteUrl);
                }
            } else {
                target = pathName;
                name = pathName;
            }
            return {
                target: target,
                name: name
            };
        };
        return AjaxHelper;
    }();
    var DateTimeUtils = function() {
        function DateTimeUtils() {}
        DateTimeUtils.Now = typeof window === "undefined" ? function() {
            return new Date().getTime();
        } : window.performance && window.performance.now && window.performance.timing ? function() {
            return window.performance.now() + window.performance.timing.navigationStart;
        } : function() {
            return new Date().getTime();
        };
        DateTimeUtils.GetDuration = function(start, end) {
            var result = null;
            if (start !== 0 && end !== 0 && !CoreUtils.isNullOrUndefined(start) && !CoreUtils.isNullOrUndefined(end)) {
                result = end - start;
            }
            return result;
        };
        return DateTimeUtils;
    }();
    var DisabledPropertyName = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";
    var Base = function() {
        function Base() {}
        return Base;
    }();
    var Data = function(_super) {
        __extends(Data, _super);
        function Data() {
            return _super.call(this) || this;
        }
        return Data;
    }(Base);
    var Envelope$1 = function() {
        function Envelope() {
            this.ver = 1;
            this.sampleRate = 100;
            this.tags = {};
        }
        return Envelope;
    }();
    var Envelope$$1 = function(_super) {
        __extends(Envelope$$1, _super);
        function Envelope$$1(logger, data, name) {
            var _this = _super.call(this) || this;
            _this.name = DataSanitizer.sanitizeString(logger, name) || Util.NotSpecified;
            _this.data = data;
            _this.time = Util.toISOStringForIE8(new Date());
            _this.aiDataContract = {
                time: FieldType.Required,
                iKey: FieldType.Required,
                name: FieldType.Required,
                sampleRate: function() {
                    return _this.sampleRate == 100 ? FieldType.Hidden : FieldType.Required;
                },
                tags: FieldType.Required,
                data: FieldType.Required
            };
            return _this;
        }
        return Envelope$$1;
    }(Envelope$1);
    var Domain = function() {
        function Domain() {}
        return Domain;
    }();
    var EventData = function(_super) {
        __extends(EventData, _super);
        function EventData() {
            var _this = _super.call(this) || this;
            _this.ver = 2;
            _this.properties = {};
            _this.measurements = {};
            return _this;
        }
        return EventData;
    }(Domain);
    var Event$1 = function(_super) {
        __extends(Event, _super);
        function Event(logger, name, properties, measurements) {
            var _this = _super.call(this) || this;
            _this.aiDataContract = {
                ver: FieldType.Required,
                name: FieldType.Required,
                properties: FieldType.Default,
                measurements: FieldType.Default
            };
            _this.name = DataSanitizer.sanitizeString(logger, name) || Util.NotSpecified;
            _this.properties = DataSanitizer.sanitizeProperties(logger, properties);
            _this.measurements = DataSanitizer.sanitizeMeasurements(logger, measurements);
            return _this;
        }
        Event.envelopeType = "Microsoft.ApplicationInsights.{0}.Event";
        Event.dataType = "EventData";
        return Event;
    }(EventData);
    var StackFrame = function() {
        function StackFrame() {}
        return StackFrame;
    }();
    var ExceptionData = function(_super) {
        __extends(ExceptionData, _super);
        function ExceptionData() {
            var _this = _super.call(this) || this;
            _this.ver = 2;
            _this.exceptions = [];
            _this.properties = {};
            _this.measurements = {};
            return _this;
        }
        return ExceptionData;
    }(Domain);
    var ExceptionDetails = function() {
        function ExceptionDetails() {
            this.hasFullStack = true;
            this.parsedStack = [];
        }
        return ExceptionDetails;
    }();
    var Exception = function(_super) {
        __extends(Exception, _super);
        function Exception(logger, exception, properties, measurements, severityLevel) {
            var _this = _super.call(this) || this;
            _this.aiDataContract = {
                ver: FieldType.Required,
                exceptions: FieldType.Required,
                severityLevel: FieldType.Default,
                properties: FieldType.Default,
                measurements: FieldType.Default
            };
            _this.properties = DataSanitizer.sanitizeProperties(logger, properties);
            _this.measurements = DataSanitizer.sanitizeMeasurements(logger, measurements);
            _this.exceptions = [ new _ExceptionDetails(logger, exception) ];
            if (severityLevel) {
                _this.severityLevel = severityLevel;
            }
            return _this;
        }
        Exception.CreateSimpleException = function(message, typeName, assembly, fileName, details, line) {
            return {
                exceptions: [ {
                    hasFullStack: true,
                    message: message,
                    stack: details,
                    typeName: typeName
                } ]
            };
        };
        Exception.envelopeType = "Microsoft.ApplicationInsights.{0}.Exception";
        Exception.dataType = "ExceptionData";
        return Exception;
    }(ExceptionData);
    var _ExceptionDetails = function(_super) {
        __extends(_ExceptionDetails, _super);
        function _ExceptionDetails(logger, exception) {
            var _this = _super.call(this) || this;
            _this.aiDataContract = {
                id: FieldType.Default,
                outerId: FieldType.Default,
                typeName: FieldType.Required,
                message: FieldType.Required,
                hasFullStack: FieldType.Default,
                stack: FieldType.Default,
                parsedStack: FieldType.Array
            };
            _this.typeName = DataSanitizer.sanitizeString(logger, exception.name) || Util.NotSpecified;
            _this.message = DataSanitizer.sanitizeMessage(logger, exception.message) || Util.NotSpecified;
            var stack = exception["stack"];
            _this.parsedStack = _this.parseStack(stack);
            _this.stack = DataSanitizer.sanitizeException(logger, stack);
            _this.hasFullStack = Util.isArray(_this.parsedStack) && _this.parsedStack.length > 0;
            return _this;
        }
        _ExceptionDetails.prototype.parseStack = function(stack) {
            var parsedStack = undefined;
            if (typeof stack === "string") {
                var frames = stack.split("\n");
                parsedStack = [];
                var level = 0;
                var totalSizeInBytes = 0;
                for (var i = 0; i <= frames.length; i++) {
                    var frame = frames[i];
                    if (_StackFrame.regex.test(frame)) {
                        var parsedFrame = new _StackFrame(frames[i], level++);
                        totalSizeInBytes += parsedFrame.sizeInBytes;
                        parsedStack.push(parsedFrame);
                    }
                }
                var exceptionParsedStackThreshold = 32 * 1024;
                if (totalSizeInBytes > exceptionParsedStackThreshold) {
                    var left = 0;
                    var right = parsedStack.length - 1;
                    var size = 0;
                    var acceptedLeft = left;
                    var acceptedRight = right;
                    while (left < right) {
                        var lSize = parsedStack[left].sizeInBytes;
                        var rSize = parsedStack[right].sizeInBytes;
                        size += lSize + rSize;
                        if (size > exceptionParsedStackThreshold) {
                            var howMany = acceptedRight - acceptedLeft + 1;
                            parsedStack.splice(acceptedLeft, howMany);
                            break;
                        }
                        acceptedLeft = left;
                        acceptedRight = right;
                        left++;
                        right--;
                    }
                }
            }
            return parsedStack;
        };
        return _ExceptionDetails;
    }(ExceptionDetails);
    var _StackFrame = function(_super) {
        __extends(_StackFrame, _super);
        function _StackFrame(frame, level) {
            var _this = _super.call(this) || this;
            _this.sizeInBytes = 0;
            _this.aiDataContract = {
                level: FieldType.Required,
                method: FieldType.Required,
                assembly: FieldType.Default,
                fileName: FieldType.Default,
                line: FieldType.Default
            };
            _this.level = level;
            _this.method = "<no_method>";
            _this.assembly = Util.trim(frame);
            var matches = frame.match(_StackFrame.regex);
            if (matches && matches.length >= 5) {
                _this.method = Util.trim(matches[2]) || _this.method;
                _this.fileName = Util.trim(matches[4]);
                _this.line = parseInt(matches[5]) || 0;
            }
            _this.sizeInBytes += _this.method.length;
            _this.sizeInBytes += _this.fileName.length;
            _this.sizeInBytes += _this.assembly.length;
            _this.sizeInBytes += _StackFrame.baseSize;
            _this.sizeInBytes += _this.level.toString().length;
            _this.sizeInBytes += _this.line.toString().length;
            return _this;
        }
        _StackFrame.regex = /^([\s]+at)?(.*?)(\@|\s\(|\s)([^\(\@\n]+):([0-9]+):([0-9]+)(\)?)$/;
        _StackFrame.baseSize = 58;
        return _StackFrame;
    }(StackFrame);
    var MetricData = function(_super) {
        __extends(MetricData, _super);
        function MetricData() {
            var _this = _super.call(this) || this;
            _this.ver = 2;
            _this.metrics = [];
            _this.properties = {};
            return _this;
        }
        return MetricData;
    }(Domain);
    var DataPointType;
    (function(DataPointType) {
        DataPointType[DataPointType["Measurement"] = 0] = "Measurement";
        DataPointType[DataPointType["Aggregation"] = 1] = "Aggregation";
    })(DataPointType || (DataPointType = {}));
    var DataPoint$1 = function() {
        function DataPoint() {
            this.kind = DataPointType.Measurement;
        }
        return DataPoint;
    }();
    var DataPoint$$1 = function(_super) {
        __extends(DataPoint$$1, _super);
        function DataPoint$$1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.aiDataContract = {
                name: FieldType.Required,
                kind: FieldType.Default,
                value: FieldType.Required,
                count: FieldType.Default,
                min: FieldType.Default,
                max: FieldType.Default,
                stdDev: FieldType.Default
            };
            return _this;
        }
        return DataPoint$$1;
    }(DataPoint$1);
    var Metric = function(_super) {
        __extends(Metric, _super);
        function Metric(logger, name, value, count, min, max, properties) {
            var _this = _super.call(this) || this;
            _this.aiDataContract = {
                ver: FieldType.Required,
                metrics: FieldType.Required,
                properties: FieldType.Default
            };
            var dataPoint = new DataPoint$$1();
            dataPoint.count = count > 0 ? count : undefined;
            dataPoint.max = isNaN(max) || max === null ? undefined : max;
            dataPoint.min = isNaN(min) || min === null ? undefined : min;
            dataPoint.name = DataSanitizer.sanitizeString(logger, name) || Util.NotSpecified;
            dataPoint.value = value;
            _this.metrics = [ dataPoint ];
            _this.properties = DataSanitizer.sanitizeProperties(logger, properties);
            return _this;
        }
        Metric.envelopeType = "Microsoft.ApplicationInsights.{0}.Metric";
        Metric.dataType = "MetricData";
        return Metric;
    }(MetricData);
    var PageViewData = function(_super) {
        __extends(PageViewData, _super);
        function PageViewData() {
            var _this = _super.call(this) || this;
            _this.ver = 2;
            _this.properties = {};
            _this.measurements = {};
            return _this;
        }
        return PageViewData;
    }(EventData);
    var PageView = function(_super) {
        __extends(PageView, _super);
        function PageView(logger, name, url, durationMs, properties, measurements, id) {
            var _this = _super.call(this) || this;
            _this.aiDataContract = {
                ver: FieldType.Required,
                name: FieldType.Default,
                url: FieldType.Default,
                duration: FieldType.Default,
                properties: FieldType.Default,
                measurements: FieldType.Default,
                id: FieldType.Default
            };
            _this.id = DataSanitizer.sanitizeId(logger, id);
            _this.url = DataSanitizer.sanitizeUrl(logger, url);
            _this.name = DataSanitizer.sanitizeString(logger, name) || Util.NotSpecified;
            if (!isNaN(durationMs)) {
                _this.duration = Util.msToTimeSpan(durationMs);
            }
            _this.properties = DataSanitizer.sanitizeProperties(logger, properties);
            _this.measurements = DataSanitizer.sanitizeMeasurements(logger, measurements);
            return _this;
        }
        PageView.envelopeType = "Microsoft.ApplicationInsights.{0}.Pageview";
        PageView.dataType = "PageviewData";
        return PageView;
    }(PageViewData);
    var RemoteDependencyData$1 = function(_super) {
        __extends(RemoteDependencyData, _super);
        function RemoteDependencyData() {
            var _this = _super.call(this) || this;
            _this.ver = 2;
            _this.success = true;
            _this.properties = {};
            _this.measurements = {};
            return _this;
        }
        return RemoteDependencyData;
    }(Domain);
    var RemoteDependencyData$$1 = function(_super) {
        __extends(RemoteDependencyData$$1, _super);
        function RemoteDependencyData$$1(logger, id, absoluteUrl, commandName, value, success, resultCode, method, properties, measurements) {
            var _this = _super.call(this) || this;
            _this.aiDataContract = {
                id: FieldType.Required,
                ver: FieldType.Required,
                name: FieldType.Default,
                resultCode: FieldType.Default,
                duration: FieldType.Default,
                success: FieldType.Default,
                data: FieldType.Default,
                target: FieldType.Default,
                type: FieldType.Default,
                properties: FieldType.Default,
                measurements: FieldType.Default,
                kind: FieldType.Default,
                value: FieldType.Default,
                count: FieldType.Default,
                min: FieldType.Default,
                max: FieldType.Default,
                stdDev: FieldType.Default,
                dependencyKind: FieldType.Default,
                dependencySource: FieldType.Default,
                commandName: FieldType.Default,
                dependencyTypeName: FieldType.Default
            };
            _this.id = id;
            _this.duration = Util.msToTimeSpan(value);
            _this.success = success;
            _this.resultCode = resultCode + "";
            _this.type = "Ajax";
            _this.data = DataSanitizer.sanitizeUrl(logger, commandName);
            var dependencyFields = AjaxHelper.ParseDependencyPath(logger, absoluteUrl, method, commandName);
            _this.target = dependencyFields.target;
            _this.name = dependencyFields.name;
            _this.properties = DataSanitizer.sanitizeProperties(logger, properties);
            _this.measurements = DataSanitizer.sanitizeMeasurements(logger, measurements);
            return _this;
        }
        RemoteDependencyData$$1.envelopeType = "Microsoft.ApplicationInsights.{0}.RemoteDependency";
        RemoteDependencyData$$1.dataType = "RemoteDependencyData";
        return RemoteDependencyData$$1;
    }(RemoteDependencyData$1);
    var MessageData = function(_super) {
        __extends(MessageData, _super);
        function MessageData() {
            var _this = _super.call(this) || this;
            _this.ver = 2;
            _this.properties = {};
            return _this;
        }
        return MessageData;
    }(Domain);
    var Trace = function(_super) {
        __extends(Trace, _super);
        function Trace(logger, message, properties, severityLevel) {
            var _this = _super.call(this) || this;
            _this.aiDataContract = {
                ver: FieldType.Required,
                message: FieldType.Required,
                severityLevel: FieldType.Default,
                properties: FieldType.Default
            };
            message = message || Util.NotSpecified;
            _this.message = DataSanitizer.sanitizeMessage(logger, message);
            _this.properties = DataSanitizer.sanitizeProperties(logger, properties);
            if (severityLevel) {
                _this.severityLevel = severityLevel;
            }
            return _this;
        }
        Trace.envelopeType = "Microsoft.ApplicationInsights.{0}.Message";
        Trace.dataType = "MessageData";
        return Trace;
    }(MessageData);
    var PageViewPerfData = function(_super) {
        __extends(PageViewPerfData, _super);
        function PageViewPerfData() {
            var _this = _super.call(this) || this;
            _this.ver = 2;
            _this.properties = {};
            _this.measurements = {};
            return _this;
        }
        return PageViewPerfData;
    }(PageViewData);
    var PageViewPerformance = function(_super) {
        __extends(PageViewPerformance, _super);
        function PageViewPerformance(logger, name, url, unused, properties, measurements) {
            var _this = _super.call(this) || this;
            _this.aiDataContract = {
                ver: FieldType.Required,
                name: FieldType.Default,
                url: FieldType.Default,
                duration: FieldType.Default,
                perfTotal: FieldType.Default,
                networkConnect: FieldType.Default,
                sentRequest: FieldType.Default,
                receivedResponse: FieldType.Default,
                domProcessing: FieldType.Default,
                properties: FieldType.Default,
                measurements: FieldType.Default
            };
            _this.isValid = false;
            var timing = PageViewPerformance.getPerformanceTiming();
            if (timing) {
                var total = PageViewPerformance.getDuration(timing.navigationStart, timing.loadEventEnd);
                var network = PageViewPerformance.getDuration(timing.navigationStart, timing.connectEnd);
                var request = PageViewPerformance.getDuration(timing.requestStart, timing.responseStart);
                var response = PageViewPerformance.getDuration(timing.responseStart, timing.responseEnd);
                var dom = PageViewPerformance.getDuration(timing.responseEnd, timing.loadEventEnd);
                if (total == 0) {
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.ErrorPVCalc, "error calculating page view performance.", {
                        total: total,
                        network: network,
                        request: request,
                        response: response,
                        dom: dom
                    });
                } else if (!PageViewPerformance.shouldCollectDuration(total, network, request, response, dom)) {
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.InvalidDurationValue, "Invalid page load duration value. Browser perf data won't be sent.", {
                        total: total,
                        network: network,
                        request: request,
                        response: response,
                        dom: dom
                    });
                } else if (total < Math.floor(network) + Math.floor(request) + Math.floor(response) + Math.floor(dom)) {
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.ClientPerformanceMathError, "client performance math error.", {
                        total: total,
                        network: network,
                        request: request,
                        response: response,
                        dom: dom
                    });
                } else {
                    _this.durationMs = total;
                    _this.perfTotal = _this.duration = Util.msToTimeSpan(total);
                    _this.networkConnect = Util.msToTimeSpan(network);
                    _this.sentRequest = Util.msToTimeSpan(request);
                    _this.receivedResponse = Util.msToTimeSpan(response);
                    _this.domProcessing = Util.msToTimeSpan(dom);
                    _this.isValid = true;
                }
            }
            _this.url = DataSanitizer.sanitizeUrl(logger, url);
            _this.name = DataSanitizer.sanitizeString(logger, name) || Util.NotSpecified;
            _this.properties = DataSanitizer.sanitizeProperties(logger, properties);
            _this.measurements = DataSanitizer.sanitizeMeasurements(logger, measurements);
            return _this;
        }
        PageViewPerformance.prototype.getIsValid = function() {
            return this.isValid;
        };
        PageViewPerformance.prototype.getDurationMs = function() {
            return this.durationMs;
        };
        PageViewPerformance.getPerformanceTiming = function() {
            if (PageViewPerformance.isPerformanceTimingSupported()) {
                return window.performance.timing;
            }
            return null;
        };
        PageViewPerformance.isPerformanceTimingSupported = function() {
            return typeof window != "undefined" && window.performance && window.performance.timing;
        };
        PageViewPerformance.isPerformanceTimingDataReady = function() {
            var timing = window.performance.timing;
            return timing.domainLookupStart > 0 && timing.navigationStart > 0 && timing.responseStart > 0 && timing.requestStart > 0 && timing.loadEventEnd > 0 && timing.responseEnd > 0 && timing.connectEnd > 0 && timing.domLoading > 0;
        };
        PageViewPerformance.getDuration = function(start, end) {
            var duration = undefined;
            if (!(isNaN(start) || isNaN(end))) {
                duration = Math.max(end - start, 0);
            }
            return duration;
        };
        PageViewPerformance.shouldCollectDuration = function() {
            var durations = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                durations[_i] = arguments[_i];
            }
            var botAgentNames = [ "googlebot", "adsbot-google", "apis-google", "mediapartners-google" ];
            var userAgent = navigator.userAgent;
            var isGoogleBot = false;
            if (userAgent) {
                for (var i_1 = 0; i_1 < botAgentNames.length; i_1++) {
                    isGoogleBot = isGoogleBot || userAgent.toLowerCase().indexOf(botAgentNames[i_1]) !== -1;
                }
            }
            if (isGoogleBot) {
                return false;
            } else {
                for (var i = 0; i < durations.length; i++) {
                    if (durations[i] >= PageViewPerformance.MAX_DURATION_ALLOWED) {
                        return false;
                    }
                }
            }
            return true;
        };
        PageViewPerformance.envelopeType = "Microsoft.ApplicationInsights.{0}.PageviewPerformance";
        PageViewPerformance.dataType = "PageviewPerformanceData";
        PageViewPerformance.MAX_DURATION_ALLOWED = 36e5;
        return PageViewPerformance;
    }(PageViewPerfData);
    var Data$1 = function(_super) {
        __extends(Data$$1, _super);
        function Data$$1(baseType, data) {
            var _this = _super.call(this) || this;
            _this.aiDataContract = {
                baseType: FieldType.Required,
                baseData: FieldType.Required
            };
            _this.baseType = baseType;
            _this.baseData = data;
            return _this;
        }
        return Data$$1;
    }(Data);
    var SeverityLevel;
    (function(SeverityLevel) {
        SeverityLevel[SeverityLevel["Verbose"] = 0] = "Verbose";
        SeverityLevel[SeverityLevel["Information"] = 1] = "Information";
        SeverityLevel[SeverityLevel["Warning"] = 2] = "Warning";
        SeverityLevel[SeverityLevel["Error"] = 3] = "Error";
        SeverityLevel[SeverityLevel["Critical"] = 4] = "Critical";
    })(SeverityLevel || (SeverityLevel = {}));
    var ConfigurationManager = function() {
        function ConfigurationManager() {}
        ConfigurationManager.getConfig = function(config, field, identifier, defaultValue) {
            if (defaultValue === void 0) {
                defaultValue = false;
            }
            var configValue;
            if (identifier && config.extensionConfig && config.extensionConfig[identifier] && !CoreUtils.isNullOrUndefined(config.extensionConfig[identifier][field])) {
                configValue = config.extensionConfig[identifier][field];
            } else {
                configValue = config[field];
            }
            return !CoreUtils.isNullOrUndefined(configValue) ? configValue : defaultValue;
        };
        return ConfigurationManager;
    }();
    var ContextTagKeys = function() {
        function ContextTagKeys() {
            this.applicationVersion = "ai.application.ver";
            this.applicationBuild = "ai.application.build";
            this.applicationTypeId = "ai.application.typeId";
            this.applicationId = "ai.application.applicationId";
            this.applicationLayer = "ai.application.layer";
            this.deviceId = "ai.device.id";
            this.deviceIp = "ai.device.ip";
            this.deviceLanguage = "ai.device.language";
            this.deviceLocale = "ai.device.locale";
            this.deviceModel = "ai.device.model";
            this.deviceFriendlyName = "ai.device.friendlyName";
            this.deviceNetwork = "ai.device.network";
            this.deviceNetworkName = "ai.device.networkName";
            this.deviceOEMName = "ai.device.oemName";
            this.deviceOS = "ai.device.os";
            this.deviceOSVersion = "ai.device.osVersion";
            this.deviceRoleInstance = "ai.device.roleInstance";
            this.deviceRoleName = "ai.device.roleName";
            this.deviceScreenResolution = "ai.device.screenResolution";
            this.deviceType = "ai.device.type";
            this.deviceMachineName = "ai.device.machineName";
            this.deviceVMName = "ai.device.vmName";
            this.deviceBrowser = "ai.device.browser";
            this.deviceBrowserVersion = "ai.device.browserVersion";
            this.locationIp = "ai.location.ip";
            this.locationCountry = "ai.location.country";
            this.locationProvince = "ai.location.province";
            this.locationCity = "ai.location.city";
            this.operationId = "ai.operation.id";
            this.operationName = "ai.operation.name";
            this.operationParentId = "ai.operation.parentId";
            this.operationRootId = "ai.operation.rootId";
            this.operationSyntheticSource = "ai.operation.syntheticSource";
            this.operationCorrelationVector = "ai.operation.correlationVector";
            this.sessionId = "ai.session.id";
            this.sessionIsFirst = "ai.session.isFirst";
            this.sessionIsNew = "ai.session.isNew";
            this.userAccountAcquisitionDate = "ai.user.accountAcquisitionDate";
            this.userAccountId = "ai.user.accountId";
            this.userAgent = "ai.user.userAgent";
            this.userId = "ai.user.id";
            this.userStoreRegion = "ai.user.storeRegion";
            this.userAuthUserId = "ai.user.authUserId";
            this.userAnonymousUserAcquisitionDate = "ai.user.anonUserAcquisitionDate";
            this.userAuthenticatedUserAcquisitionDate = "ai.user.authUserAcquisitionDate";
            this.cloudName = "ai.cloud.name";
            this.cloudRole = "ai.cloud.role";
            this.cloudRoleVer = "ai.cloud.roleVer";
            this.cloudRoleInstance = "ai.cloud.roleInstance";
            this.cloudEnvironment = "ai.cloud.environment";
            this.cloudLocation = "ai.cloud.location";
            this.cloudDeploymentUnit = "ai.cloud.deploymentUnit";
            this.internalNodeName = "ai.internal.nodeName";
            this.internalSdkVersion = "ai.internal.sdkVersion";
            this.internalAgentVersion = "ai.internal.agentVersion";
        }
        return ContextTagKeys;
    }();
    var TelemetryItemCreator = function() {
        function TelemetryItemCreator() {}
        TelemetryItemCreator.create = function(item, baseType, envelopeName, logger, customProperties, systemProperties) {
            envelopeName = DataSanitizer.sanitizeString(logger, envelopeName) || Util.NotSpecified;
            if (CoreUtils.isNullOrUndefined(item) || CoreUtils.isNullOrUndefined(baseType) || CoreUtils.isNullOrUndefined(envelopeName)) {
                throw Error("Input doesn't contain all required fields");
            }
            var telemetryItem = {
                name: envelopeName,
                timestamp: new Date(),
                instrumentationKey: "",
                ctx: systemProperties ? systemProperties : {},
                tags: [],
                data: {},
                baseType: baseType,
                baseData: item
            };
            if (!CoreUtils.isNullOrUndefined(customProperties)) {
                for (var prop in customProperties) {
                    if (customProperties.hasOwnProperty(prop)) {
                        telemetryItem.data[prop] = customProperties[prop];
                    }
                }
            }
            return telemetryItem;
        };
        return TelemetryItemCreator;
    }();
    var PartAExtensions = function() {
        function PartAExtensions(mapTags) {
            this.UserExtensionName = "User";
            this.WebExtensionName = "Web";
            this.AppExtensionName = "App";
            this.accountIdTag = "User.AccountId";
            this.userTagsKeysMap = {};
            this.userTagsKeysMap[this.accountIdTag] = mapTags.userAccountId;
            this.ctxKeys = {
                id: "id",
                authId: "authId",
                localId: "localId"
            };
            this.userExtKeysMap = {};
            this.userExtKeysMap[this.ctxKeys.localId] = mapTags.userId;
            this.userExtKeysMap[this.ctxKeys.authId] = mapTags.userAuthUserId;
        }
        return PartAExtensions;
    }();
    var kys = new ContextTagKeys();
    var partAExtensions = new PartAExtensions(kys);
    var PageViewManager = function() {
        function PageViewManager(appInsights, overridePageViewDuration, core) {
            this.pageViewPerformanceSent = false;
            this.overridePageViewDuration = false;
            this.overridePageViewDuration = overridePageViewDuration;
            this.appInsights = appInsights;
            if (core) {
                this._channel = function() {
                    return core.getTransmissionControls();
                };
                this._logger = core.logger;
            }
        }
        PageViewManager.prototype.trackPageView = function(pageView, customProperties) {
            var _this = this;
            var name = pageView.name;
            if (CoreUtils.isNullOrUndefined(name) || typeof name !== "string") {
                pageView.name = window.document && window.document.title || "";
            }
            var uri = pageView.uri;
            if (CoreUtils.isNullOrUndefined(uri) || typeof uri !== "string") {
                pageView.uri = window.location && window.location.href || "";
            }
            if (!PageViewPerformance.isPerformanceTimingSupported()) {
                this.appInsights.sendPageViewInternal(pageView, customProperties);
                this._channel().forEach(function(queues) {
                    queues.forEach(function(q) {
                        return q.flush(true);
                    });
                });
                this._logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.NavigationTimingNotSupported, "trackPageView: navigation timing API used for calculation of page duration is not supported in this browser. This page view will be collected without duration and timing info.");
                return;
            }
            var pageViewSent = false;
            var customDuration = undefined;
            var start = PageViewPerformance.getPerformanceTiming().navigationStart;
            customDuration = PageViewPerformance.getDuration(start, +new Date());
            if (!PageViewPerformance.shouldCollectDuration(customDuration)) {
                customDuration = undefined;
            }
            var duration = undefined;
            if (!CoreUtils.isNullOrUndefined(customProperties) && !CoreUtils.isNullOrUndefined(customProperties.duration)) {
                duration = customProperties.duration;
            }
            if (this.overridePageViewDuration || !isNaN(duration)) {
                if (isNaN(duration)) {
                    if (!customProperties) {
                        customProperties = {};
                    }
                    customProperties["duration"] = customDuration;
                }
                this.appInsights.sendPageViewInternal(pageView, customProperties);
                this._channel().forEach(function(queues) {
                    queues.forEach(function(q) {
                        return q.flush(true);
                    });
                });
                pageViewSent = true;
            }
            var maxDurationLimit = 6e4;
            if (!customProperties) {
                customProperties = {};
            }
            var handle = setInterval(function() {
                try {
                    if (PageViewPerformance.isPerformanceTimingDataReady()) {
                        clearInterval(handle);
                        var pageViewPerformance = new PageViewPerformance(_this._logger, name, uri, null);
                        if (!pageViewPerformance.getIsValid() && !pageViewSent) {
                            customProperties["duration"] = customDuration;
                            _this.appInsights.sendPageViewInternal(pageView, customProperties);
                            _this._channel().forEach(function(queues) {
                                queues.forEach(function(q) {
                                    return q.flush(true);
                                });
                            });
                        } else {
                            if (!pageViewSent) {
                                customProperties["duration"] = pageViewPerformance.getDurationMs();
                                _this.appInsights.sendPageViewInternal(pageView, customProperties);
                            }
                            if (!_this.pageViewPerformanceSent) {
                                _this.appInsights.sendPageViewPerformanceInternal(pageViewPerformance, customProperties);
                                _this.pageViewPerformanceSent = true;
                            }
                            _this._channel().forEach(function(queues) {
                                queues.forEach(function(q) {
                                    return q.flush(true);
                                });
                            });
                        }
                    } else if (PageViewPerformance.getDuration(start, +new Date()) > maxDurationLimit) {
                        clearInterval(handle);
                        if (!pageViewSent) {
                            customProperties["duration"] = maxDurationLimit;
                            _this.appInsights.sendPageViewInternal(pageView, customProperties);
                            _this._channel().forEach(function(queues) {
                                queues.forEach(function(q) {
                                    return q.flush(true);
                                });
                            });
                        }
                    }
                } catch (e) {
                    _this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.TrackPVFailedCalc, "trackPageView failed on page load calculation: " + Util.getExceptionName(e), {
                        exception: Util.dump(e)
                    });
                }
            }, 100);
        };
        return PageViewManager;
    }();
    "use strict";
    var durationProperty = "duration";
    var ApplicationInsights = function() {
        function ApplicationInsights() {
            this.identifier = "ApplicationInsightsAnalytics";
            this.priority = 160;
            this._isInitialized = false;
            this._trackAjaxAttempts = 0;
            this.initialize = this._initialize.bind(this);
        }
        ApplicationInsights.getDefaultConfig = function(config) {
            if (!config) {
                config = {};
            }
            config.sessionRenewalMs = 30 * 60 * 1e3;
            config.sessionExpirationMs = 24 * 60 * 60 * 1e3;
            config.disableExceptionTracking = Util.stringToBoolOrDefault(config.disableExceptionTracking);
            config.autoTrackPageVisitTime = Util.stringToBoolOrDefault(config.autoTrackPageVisitTime);
            if (isNaN(config.samplingPercentage) || config.samplingPercentage <= 0 || config.samplingPercentage >= 100) {
                config.samplingPercentage = 100;
            }
            config.isCookieUseDisabled = Util.stringToBoolOrDefault(config.isCookieUseDisabled);
            config.isStorageUseDisabled = Util.stringToBoolOrDefault(config.isStorageUseDisabled);
            config.isBrowserLinkTrackingEnabled = Util.stringToBoolOrDefault(config.isBrowserLinkTrackingEnabled);
            return config;
        };
        ApplicationInsights.prototype.processTelemetry = function(env) {
            var doNotSendItem = false;
            try {
                var telemetryInitializersCount = this._telemetryInitializers.length;
                for (var i = 0; i < telemetryInitializersCount; ++i) {
                    var telemetryInitializer = this._telemetryInitializers[i];
                    if (telemetryInitializer) {
                        if (telemetryInitializer.apply(null, [ env ]) === false) {
                            doNotSendItem = true;
                            break;
                        }
                    }
                }
            } catch (e) {
                doNotSendItem = true;
                this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.TelemetryInitializerFailed, "One of telemetry initializers failed, telemetry item will not be sent: " + Util.getExceptionName(e), {
                    exception: Util.dump(e)
                }, true);
            }
            if (!doNotSendItem && !CoreUtils.isNullOrUndefined(this._nextPlugin)) {
                this._nextPlugin.processTelemetry(env);
            }
        };
        ApplicationInsights.prototype.setNextPlugin = function(next) {
            this._nextPlugin = next;
        };
        ApplicationInsights.prototype.trackEvent = function(event, customProperties) {
            try {
                var telemetryItem = TelemetryItemCreator.create(event, Event$1.dataType, Event$1.envelopeType, this._logger, customProperties);
                this._setTelemetryNameAndIKey(telemetryItem);
                this.core.track(telemetryItem);
            } catch (e) {
                this._logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.TrackTraceFailed, "trackTrace failed, trace will not be collected: " + Util.getExceptionName(e), {
                    exception: Util.dump(e)
                });
            }
        };
        ApplicationInsights.prototype.trackTrace = function(trace, customProperties) {
            try {
                var telemetryItem = TelemetryItemCreator.create(trace, Trace.dataType, Trace.envelopeType, this._logger, customProperties);
                this._setTelemetryNameAndIKey(telemetryItem);
                this.core.track(telemetryItem);
            } catch (e) {
                this._logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.TrackTraceFailed, "trackTrace failed, trace will not be collected: " + Util.getExceptionName(e), {
                    exception: Util.dump(e)
                });
            }
        };
        ApplicationInsights.prototype.trackMetric = function(metric, customProperties) {
            try {
                var telemetryItem = TelemetryItemCreator.create(metric, Metric.dataType, Metric.envelopeType, this._logger, customProperties);
                this._setTelemetryNameAndIKey(telemetryItem);
                this.core.track(telemetryItem);
            } catch (e) {
                this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.TrackMetricFailed, "trackMetric failed, metric will not be collected: " + Util.getExceptionName(e), {
                    exception: Util.dump(e)
                });
            }
        };
        ApplicationInsights.prototype.trackPageView = function(pageView, customProperties) {
            try {
                this._pageViewManager.trackPageView(pageView, customProperties);
                if (this.config.autoTrackPageVisitTime) {
                    this._pageVisitTimeManager.trackPreviousPageVisit(pageView.name, pageView.uri);
                }
            } catch (e) {
                this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.TrackPVFailed, "trackPageView failed, page view will not be collected: " + Util.getExceptionName(e), {
                    exception: Util.dump(e)
                });
            }
        };
        ApplicationInsights.prototype.sendPageViewInternal = function(pageView, properties, systemProperties) {
            var telemetryItem = TelemetryItemCreator.create(pageView, PageView.dataType, PageView.envelopeType, this._logger, properties, systemProperties);
            this._setTelemetryNameAndIKey(telemetryItem);
            this.core.track(telemetryItem);
            this._trackAjaxAttempts = 0;
        };
        ApplicationInsights.prototype.sendPageViewPerformanceInternal = function(pageViewPerformance, properties) {
            var telemetryItem = TelemetryItemCreator.create(pageViewPerformance, PageViewPerformance.dataType, PageViewPerformance.envelopeType, this._logger, properties);
            this._setTelemetryNameAndIKey(telemetryItem);
            this.core.track(telemetryItem);
        };
        ApplicationInsights.prototype.trackPageViewPerformance = function(pageViewPerformance, customProperties) {
            var item = new PageViewPerformance(this.core.logger, pageViewPerformance.name, pageViewPerformance.url, undefined);
            this.sendPageViewPerformanceInternal(item, customProperties);
        };
        ApplicationInsights.prototype.startTrackPage = function(name) {
            try {
                if (typeof name !== "string") {
                    name = window.document && window.document.title || "";
                }
                this._pageTracking.start(name);
            } catch (e) {
                this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.StartTrackFailed, "startTrackPage failed, page view may not be collected: " + Util.getExceptionName(e), {
                    exception: Util.dump(e)
                });
            }
        };
        ApplicationInsights.prototype.stopTrackPage = function(name, url, properties) {
            try {
                if (typeof name !== "string") {
                    name = window.document && window.document.title || "";
                }
                if (typeof url !== "string") {
                    url = window.location && window.location.href || "";
                }
                this._pageTracking.stop(name, url, properties);
                if (this.config.autoTrackPageVisitTime) {
                    this._pageVisitTimeManager.trackPreviousPageVisit(name, url);
                }
            } catch (e) {
                this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.StopTrackFailed, "stopTrackPage failed, page view will not be collected: " + Util.getExceptionName(e), {
                    exception: Util.dump(e)
                });
            }
        };
        ApplicationInsights.prototype.trackException = function(exception, customProperties) {
            try {
                var telemetryItem = TelemetryItemCreator.create(exception, Exception.dataType, Exception.envelopeType, this._logger, customProperties);
                this._setTelemetryNameAndIKey(telemetryItem);
                this.core.track(telemetryItem);
            } catch (e) {
                this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.TrackExceptionFailed, "trackException failed, exception will not be collected: " + Util.getExceptionName(e), {
                    exception: Util.dump(e)
                });
            }
        };
        ApplicationInsights.prototype._onerror = function(exception) {
            try {
                var properties = {
                    url: exception && exception.url || document.URL,
                    lineNumber: exception.lineNumber,
                    columnNumber: exception.columnNumber,
                    message: exception.message
                };
                if (Util.isCrossOriginError(exception.message, exception.url, exception.lineNumber, exception.columnNumber, exception.error)) {
                    this._sendCORSException(properties.url);
                } else {
                    if (!Util.isError(exception.error)) {
                        var stack = "window.onerror@" + properties.url + ":" + exception.lineNumber + ":" + (exception.columnNumber || 0);
                        exception.error = new Error(exception.message);
                        exception.error.stack = stack;
                    }
                    this.trackException({
                        error: exception.error,
                        severityLevel: SeverityLevel.Error
                    }, properties);
                }
            } catch (e) {
                var errorString = exception.error ? exception.error.name + ", " + exception.error.message : "null";
                this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.ExceptionWhileLoggingError, "_onError threw exception while logging error, error will not be collected: " + Util.getExceptionName(e), {
                    exception: Util.dump(e),
                    errorString: errorString
                });
            }
        };
        ApplicationInsights.prototype.addTelemetryInitializer = function(telemetryInitializer) {
            this._telemetryInitializers.push(telemetryInitializer);
        };
        ApplicationInsights.prototype._initialize = function(config, core, extensions) {
            var _this = this;
            if (this._isInitialized) {
                return;
            }
            if (CoreUtils.isNullOrUndefined(core)) {
                throw Error("Error initializing");
            }
            this.core = core;
            this._logger = core.logger;
            this._globalconfig = {
                instrumentationKey: config.instrumentationKey,
                endpointUrl: config.endpointUrl || "https://dc.services.visualstudio.com/v2/track"
            };
            this.config = config.extensionConfig && config.extensionConfig[this.identifier] ? config.extensionConfig[this.identifier] : {};
            var defaults = ApplicationInsights.getDefaultConfig();
            if (defaults !== undefined) {
                for (var field in defaults) {
                    this.config[field] = ConfigurationManager.getConfig(config, field, this.identifier, defaults[field]);
                }
                if (this._globalconfig) {
                    for (var field in defaults) {
                        if (this._globalconfig[field] === undefined) {
                            this._globalconfig[field] = defaults[field];
                        }
                    }
                }
            }
            if (this.config.isCookieUseDisabled) {
                Util.disableCookies();
            }
            if (this.config.isStorageUseDisabled) {
                Util.disableStorage();
            }
            var configGetters = {
                instrumentationKey: function() {
                    return config.instrumentationKey;
                },
                accountId: function() {
                    return _this.config.accountId || config.accountId;
                },
                sessionRenewalMs: function() {
                    return _this.config.sessionRenewalMs || config.sessionRenewalMs;
                },
                sessionExpirationMs: function() {
                    return _this.config.sessionExpirationMs || config.sessionExpirationMs;
                },
                sampleRate: function() {
                    return _this.config.samplingPercentage || config.samplingPercentage;
                },
                cookieDomain: function() {
                    return _this.config.cookieDomain || config.cookieDomain;
                },
                sdkExtension: function() {
                    return _this.config.sdkExtension || config.sdkExtension;
                },
                isBrowserLinkTrackingEnabled: function() {
                    return _this.config.isBrowserLinkTrackingEnabled || config.isBrowserLinkTrackingEnabled;
                },
                appId: function() {
                    return _this.config.appId || config.appId;
                }
            };
            this._pageViewManager = new PageViewManager(this, this.config.overridePageViewDuration, this.core);
            this._telemetryInitializers = [];
            this._addDefaultTelemetryInitializers(configGetters);
            this._pageTracking = new Timing(this._logger, "trackPageView");
            this._pageTracking.action = function(name, url, duration, properties) {
                var pageViewItem = {
                    name: name,
                    uri: url
                };
                if (CoreUtils.isNullOrUndefined(properties)) {
                    properties = {};
                }
                properties[durationProperty] = duration;
                _this.sendPageViewInternal(pageViewItem, properties);
            };
            if (this.config.disableExceptionTracking === false && !this.config.autoExceptionInstrumented) {
                var onerror_1 = "onerror";
                var originalOnError_1 = window[onerror_1];
                var instance_1 = this;
                window.onerror = function(message, url, lineNumber, columnNumber, error) {
                    var handled = originalOnError_1 && originalOnError_1(message, url, lineNumber, columnNumber, error);
                    if (handled !== true) {
                        instance_1._onerror({
                            message: message,
                            url: url,
                            lineNumber: lineNumber,
                            columnNumber: columnNumber,
                            error: error
                        });
                    }
                    return handled;
                };
                this.config.autoExceptionInstrumented = true;
            }
            this._isInitialized = true;
        };
        ApplicationInsights.prototype._addDefaultTelemetryInitializers = function(configGetters) {
            if (!configGetters.isBrowserLinkTrackingEnabled()) {
                var browserLinkPaths_1 = [ "/browserLinkSignalR/", "/__browserLink/" ];
                var dropBrowserLinkRequests = function(envelope) {
                    if (envelope.baseType === RemoteDependencyData$$1.dataType) {
                        var remoteData = envelope.baseData;
                        if (remoteData) {
                            for (var i = 0; i < browserLinkPaths_1.length; i++) {
                                if (remoteData.absoluteUrl && remoteData.absoluteUrl.indexOf(browserLinkPaths_1[i]) >= 0) {
                                    return false;
                                }
                            }
                        }
                    }
                    return true;
                };
                this._addTelemetryInitializer(dropBrowserLinkRequests);
            }
        };
        ApplicationInsights.prototype._addTelemetryInitializer = function(telemetryInitializer) {
            this._telemetryInitializers.push(telemetryInitializer);
        };
        ApplicationInsights.prototype._sendCORSException = function(url) {
            var exception = {
                message: "Script error: The browser's same-origin policy prevents us from getting the details of this exception. Consider using the 'crossorigin' attribute.",
                url: url,
                lineNumber: 0,
                columnNumber: 0,
                error: undefined
            };
            var telemetryItem = TelemetryItemCreator.create(exception, Exception.dataType, Exception.envelopeType, this._logger, {
                url: url
            });
            this.core.track(telemetryItem);
        };
        ApplicationInsights.prototype._setTelemetryNameAndIKey = function(telemetryItem) {
            telemetryItem.instrumentationKey = this._globalconfig.instrumentationKey;
            var iKeyNoDashes = this._globalconfig.instrumentationKey.replace(/-/g, "");
            telemetryItem.name = telemetryItem.name.replace("{0}", iKeyNoDashes);
        };
        ApplicationInsights.Version = "2.0.1-beta";
        return ApplicationInsights;
    }();
    var Timing = function() {
        function Timing(logger, name) {
            this._name = name;
            this._events = {};
            this._logger = logger;
        }
        Timing.prototype.start = function(name) {
            if (typeof this._events[name] !== "undefined") {
                this._logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.StartCalledMoreThanOnce, "start was called more than once for this event without calling stop.", {
                    name: this._name,
                    key: name
                }, true);
            }
            this._events[name] = +new Date();
        };
        Timing.prototype.stop = function(name, url, properties) {
            var start = this._events[name];
            if (isNaN(start)) {
                this._logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.StopCalledWithoutStart, "stop was called without a corresponding start.", {
                    name: this._name,
                    key: name
                }, true);
            } else {
                var end = +new Date();
                var duration = PageViewPerformance.getDuration(start, end);
                this.action(name, url, duration, properties);
            }
            delete this._events[name];
            this._events[name] = undefined;
        };
        return Timing;
    }();
    var ArraySendBuffer = function() {
        function ArraySendBuffer(config) {
            this._config = config;
            this._buffer = [];
        }
        ArraySendBuffer.prototype.enqueue = function(payload) {
            this._buffer.push(payload);
        };
        ArraySendBuffer.prototype.count = function() {
            return this._buffer.length;
        };
        ArraySendBuffer.prototype.clear = function() {
            this._buffer.length = 0;
        };
        ArraySendBuffer.prototype.getItems = function() {
            return this._buffer.slice(0);
        };
        ArraySendBuffer.prototype.batchPayloads = function(payload) {
            if (payload && payload.length > 0) {
                var batch = this._config.emitLineDelimitedJson() ? payload.join("\n") : "[" + payload.join(",") + "]";
                return batch;
            }
            return null;
        };
        ArraySendBuffer.prototype.markAsSent = function(payload) {
            this.clear();
        };
        ArraySendBuffer.prototype.clearSent = function(payload) {};
        return ArraySendBuffer;
    }();
    var SessionStorageSendBuffer = function() {
        function SessionStorageSendBuffer(logger, config) {
            this._bufferFullMessageSent = false;
            this._logger = logger;
            this._config = config;
            var bufferItems = this.getBuffer(SessionStorageSendBuffer.BUFFER_KEY);
            var notDeliveredItems = this.getBuffer(SessionStorageSendBuffer.SENT_BUFFER_KEY);
            this._buffer = bufferItems.concat(notDeliveredItems);
            if (this._buffer.length > SessionStorageSendBuffer.MAX_BUFFER_SIZE) {
                this._buffer.length = SessionStorageSendBuffer.MAX_BUFFER_SIZE;
            }
            this.setBuffer(SessionStorageSendBuffer.SENT_BUFFER_KEY, []);
            this.setBuffer(SessionStorageSendBuffer.BUFFER_KEY, this._buffer);
        }
        SessionStorageSendBuffer.prototype.enqueue = function(payload) {
            if (this._buffer.length >= SessionStorageSendBuffer.MAX_BUFFER_SIZE) {
                if (!this._bufferFullMessageSent) {
                    this._logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.SessionStorageBufferFull, "Maximum buffer size reached: " + this._buffer.length, true);
                    this._bufferFullMessageSent = true;
                }
                return;
            }
            this._buffer.push(payload);
            this.setBuffer(SessionStorageSendBuffer.BUFFER_KEY, this._buffer);
        };
        SessionStorageSendBuffer.prototype.count = function() {
            return this._buffer.length;
        };
        SessionStorageSendBuffer.prototype.clear = function() {
            this._buffer.length = 0;
            this.setBuffer(SessionStorageSendBuffer.BUFFER_KEY, []);
            this.setBuffer(SessionStorageSendBuffer.SENT_BUFFER_KEY, []);
            this._bufferFullMessageSent = false;
        };
        SessionStorageSendBuffer.prototype.getItems = function() {
            return this._buffer.slice(0);
        };
        SessionStorageSendBuffer.prototype.batchPayloads = function(payload) {
            if (payload && payload.length > 0) {
                var batch = this._config.emitLineDelimitedJson() ? payload.join("\n") : "[" + payload.join(",") + "]";
                return batch;
            }
            return null;
        };
        SessionStorageSendBuffer.prototype.markAsSent = function(payload) {
            this._buffer = this.removePayloadsFromBuffer(payload, this._buffer);
            this.setBuffer(SessionStorageSendBuffer.BUFFER_KEY, this._buffer);
            var sentElements = this.getBuffer(SessionStorageSendBuffer.SENT_BUFFER_KEY);
            if (sentElements instanceof Array && payload instanceof Array) {
                sentElements = sentElements.concat(payload);
                if (sentElements.length > SessionStorageSendBuffer.MAX_BUFFER_SIZE) {
                    this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.SessionStorageBufferFull, "Sent buffer reached its maximum size: " + sentElements.length, true);
                    sentElements.length = SessionStorageSendBuffer.MAX_BUFFER_SIZE;
                }
                this.setBuffer(SessionStorageSendBuffer.SENT_BUFFER_KEY, sentElements);
            }
        };
        SessionStorageSendBuffer.prototype.clearSent = function(payload) {
            var sentElements = this.getBuffer(SessionStorageSendBuffer.SENT_BUFFER_KEY);
            sentElements = this.removePayloadsFromBuffer(payload, sentElements);
            this.setBuffer(SessionStorageSendBuffer.SENT_BUFFER_KEY, sentElements);
        };
        SessionStorageSendBuffer.prototype.removePayloadsFromBuffer = function(payloads, buffer) {
            var remaining = [];
            for (var i in buffer) {
                var contains = false;
                for (var j in payloads) {
                    if (payloads[j] === buffer[i]) {
                        contains = true;
                        break;
                    }
                }
                if (!contains) {
                    remaining.push(buffer[i]);
                }
            }
            return remaining;
        };
        SessionStorageSendBuffer.prototype.getBuffer = function(key) {
            try {
                var bufferJson = Util.getSessionStorage(this._logger, key);
                if (bufferJson) {
                    var buffer = JSON.parse(bufferJson);
                    if (buffer) {
                        return buffer;
                    }
                }
            } catch (e) {
                this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.FailedToRestoreStorageBuffer, " storage key: " + key + ", " + Util.getExceptionName(e), {
                    exception: Util.dump(e)
                });
            }
            return [];
        };
        SessionStorageSendBuffer.prototype.setBuffer = function(key, buffer) {
            try {
                var bufferJson = JSON.stringify(buffer);
                Util.setSessionStorage(this._logger, key, bufferJson);
            } catch (e) {
                Util.setSessionStorage(this._logger, key, JSON.stringify([]));
                this._logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.FailedToSetStorageBuffer, " storage key: " + key + ", " + Util.getExceptionName(e) + ". Buffer cleared", {
                    exception: Util.dump(e)
                });
            }
        };
        SessionStorageSendBuffer.BUFFER_KEY = "AI_buffer";
        SessionStorageSendBuffer.SENT_BUFFER_KEY = "AI_sentBuffer";
        SessionStorageSendBuffer.MAX_BUFFER_SIZE = 2e3;
        return SessionStorageSendBuffer;
    }();
    var ContextTagKeys$1 = [ "ai.application.ver", "ai.application.build", "ai.application.typeId", "ai.application.applicationId", "ai.application.layer", "ai.device.id", "ai.device.ip", "ai.device.language", "ai.device.locale", "ai.device.model", "ai.device.friendlyName", "ai.device.network", "ai.device.networkName", "ai.device.oemName", "ai.device.os", "ai.device.osVersion", "ai.device.roleInstance", "ai.device.roleName", "ai.device.screenResolution", "ai.device.type", "ai.device.machineName", "ai.device.vmName", "ai.device.browser", "ai.device.browserVersion", "ai.location.ip", "ai.location.country", "ai.location.province", "ai.location.city", "ai.operation.id", "ai.operation.name", "ai.operation.parentId", "ai.operation.rootId", "ai.operation.syntheticSource", "ai.operation.correlationVector", "ai.session.id", "ai.session.isFirst", "ai.session.isNew", "ai.user.accountAcquisitionDate", "ai.user.accountId", "ai.user.userAgent", "ai.user.id", "ai.user.storeRegion", "ai.user.authUserId", "ai.user.anonUserAcquisitionDate", "ai.user.authUserAcquisitionDate", "ai.cloud.name", "ai.cloud.role", "ai.cloud.roleVer", "ai.cloud.roleInstance", "ai.cloud.environment", "ai.cloud.location", "ai.cloud.deploymentUnit", "ai.internal.sdkVersion", "ai.internal.agentVersion", "ai.internal.nodeName" ];
    var EnvelopeCreator = function() {
        function EnvelopeCreator() {}
        EnvelopeCreator.extractProperties = function(data) {
            var customProperties = null;
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    var value = data[key];
                    if (typeof value !== "number") {
                        if (!customProperties) {
                            customProperties = {};
                        }
                        customProperties[key] = value;
                    }
                }
            }
            return customProperties;
        };
        EnvelopeCreator.extractPropsAndMeasurements = function(data, properties, measurements) {
            if (!CoreUtils.isNullOrUndefined(data)) {
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        var value = data[key];
                        if (typeof value === "number") {
                            measurements[key] = value;
                        } else {
                            properties[key] = value;
                        }
                    }
                }
            }
        };
        EnvelopeCreator.createEnvelope = function(logger, envelopeType, telemetryItem, data) {
            var envelope = new Envelope$$1(logger, data, envelopeType);
            envelope.iKey = telemetryItem.instrumentationKey;
            var iKeyNoDashes = telemetryItem.instrumentationKey.replace(/-/g, "");
            envelope.name = envelope.name.replace("{0}", iKeyNoDashes);
            EnvelopeCreator.extractPartAExtensions(telemetryItem, envelope);
            if (!telemetryItem.tags) {
                telemetryItem.tags = [];
            }
            telemetryItem.tags.forEach(function(tag) {
                for (var key in tag) {
                    if (tag.hasOwnProperty(key)) {
                        if (ContextTagKeys$1.indexOf(key) >= 0) {
                            envelope.tags[key] = tag[key];
                        }
                    }
                }
            });
            return envelope;
        };
        EnvelopeCreator.extractPartAExtensions = function(telemetryItem, envelope) {
            var extensions = [];
            extensions.push(partAExtensions.UserExtensionName);
            extensions.forEach(function(extName) {
                var e = telemetryItem.tags[extName] || {};
                EnvelopeCreator.parseProperties(envelope, e, partAExtensions.userTagsKeysMap);
                var t = telemetryItem.ctx[extName] || {};
                EnvelopeCreator.parseProperties(envelope, t, partAExtensions.userExtKeysMap);
            });
        };
        EnvelopeCreator.parseProperties = function(env, source, map) {
            Object.keys(source).forEach(function(ky) {
                var val = source[ky];
                var envKey = map[ky];
                if (envKey && val) {
                    env.tags[envKey] = val;
                }
            });
        };
        return EnvelopeCreator;
    }();
    var DependencyEnvelopeCreator = function(_super) {
        __extends(DependencyEnvelopeCreator, _super);
        function DependencyEnvelopeCreator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DependencyEnvelopeCreator.prototype.Create = function(logger, telemetryItem) {
            this._logger = logger;
            if (CoreUtils.isNullOrUndefined(telemetryItem.baseData)) {
                this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.TelemetryEnvelopeInvalid, "telemetryItem.baseData cannot be null.");
            }
            var customMeasurements = {};
            var customProperties = {};
            EnvelopeCreator.extractPropsAndMeasurements(telemetryItem.data, customProperties, customMeasurements);
            var bd = telemetryItem.baseData;
            if (CoreUtils.isNullOrUndefined(bd)) {
                logger.warnToConsole("Invalid input for dependency data");
                return null;
            }
            var id = bd.id;
            var absoluteUrl = bd.absoluteUrl;
            var command = bd.commandName;
            var duration = bd.duration;
            var success = bd.success;
            var resultCode = bd.resultCode;
            var method = bd.method;
            var baseData = new RemoteDependencyData$$1(logger, id, absoluteUrl, command, duration, success, resultCode, method, customProperties, customMeasurements);
            var data = new Data$1(RemoteDependencyData$$1.dataType, baseData);
            return EnvelopeCreator.createEnvelope(logger, RemoteDependencyData$$1.envelopeType, telemetryItem, data);
        };
        DependencyEnvelopeCreator.DependencyEnvelopeCreator = new DependencyEnvelopeCreator();
        return DependencyEnvelopeCreator;
    }(EnvelopeCreator);
    var EventEnvelopeCreator = function(_super) {
        __extends(EventEnvelopeCreator, _super);
        function EventEnvelopeCreator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EventEnvelopeCreator.prototype.Create = function(logger, telemetryItem) {
            this._logger = logger;
            if (CoreUtils.isNullOrUndefined(telemetryItem.baseData)) {
                this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.TelemetryEnvelopeInvalid, "telemetryItem.baseData cannot be null.");
            }
            var customProperties = {};
            var customMeasurements = {};
            if (telemetryItem.baseType !== Event$1.dataType) {
                EnvelopeCreator.extractPropsAndMeasurements(telemetryItem.baseData, customProperties, customMeasurements);
            }
            EnvelopeCreator.extractPropsAndMeasurements(telemetryItem.data, customProperties, customMeasurements);
            var eventName = telemetryItem.baseData.name;
            var baseData = new Event$1(logger, eventName, customProperties, customMeasurements);
            var data = new Data$1(Event$1.dataType, baseData);
            return EnvelopeCreator.createEnvelope(logger, Event$1.envelopeType, telemetryItem, data);
        };
        EventEnvelopeCreator.EventEnvelopeCreator = new EventEnvelopeCreator();
        return EventEnvelopeCreator;
    }(EnvelopeCreator);
    var ExceptionEnvelopeCreator = function(_super) {
        __extends(ExceptionEnvelopeCreator, _super);
        function ExceptionEnvelopeCreator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ExceptionEnvelopeCreator.prototype.Create = function(logger, telemetryItem) {
            this._logger = logger;
            if (CoreUtils.isNullOrUndefined(telemetryItem.baseData)) {
                this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.TelemetryEnvelopeInvalid, "telemetryItem.baseData cannot be null.");
            }
            var customProperties = {};
            var customMeasurements = {};
            EnvelopeCreator.extractPropsAndMeasurements(telemetryItem.data, customProperties, customMeasurements);
            var exception = telemetryItem.baseData.error;
            var severityLevel = telemetryItem.baseData.severityLevel;
            var baseData = new Exception(logger, exception, customProperties, customMeasurements, severityLevel);
            var data = new Data$1(Exception.dataType, baseData);
            return EnvelopeCreator.createEnvelope(logger, Exception.envelopeType, telemetryItem, data);
        };
        ExceptionEnvelopeCreator.ExceptionEnvelopeCreator = new ExceptionEnvelopeCreator();
        return ExceptionEnvelopeCreator;
    }(EnvelopeCreator);
    var MetricEnvelopeCreator = function(_super) {
        __extends(MetricEnvelopeCreator, _super);
        function MetricEnvelopeCreator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MetricEnvelopeCreator.prototype.Create = function(logger, telemetryItem) {
            this._logger = logger;
            if (CoreUtils.isNullOrUndefined(telemetryItem.baseData)) {
                this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.TelemetryEnvelopeInvalid, "telemetryItem.baseData cannot be null.");
            }
            var customProperties = EnvelopeCreator.extractProperties(telemetryItem.data);
            var name = telemetryItem.baseData.name;
            var average = telemetryItem.baseData.average;
            var sampleCount = telemetryItem.baseData.sampleCount;
            var min = telemetryItem.baseData.min;
            var max = telemetryItem.baseData.max;
            var baseData = new Metric(logger, name, average, sampleCount, min, max, customProperties);
            var data = new Data$1(Metric.dataType, baseData);
            return EnvelopeCreator.createEnvelope(logger, Metric.envelopeType, telemetryItem, data);
        };
        MetricEnvelopeCreator.MetricEnvelopeCreator = new MetricEnvelopeCreator();
        return MetricEnvelopeCreator;
    }(EnvelopeCreator);
    var PageViewEnvelopeCreator = function(_super) {
        __extends(PageViewEnvelopeCreator, _super);
        function PageViewEnvelopeCreator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PageViewEnvelopeCreator.prototype.Create = function(logger, telemetryItem) {
            this._logger = logger;
            if (CoreUtils.isNullOrUndefined(telemetryItem.baseData)) {
                this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.TelemetryEnvelopeInvalid, "telemetryItem.baseData cannot be null.");
            }
            var duration = undefined;
            if (!CoreUtils.isNullOrUndefined(telemetryItem.data) && !CoreUtils.isNullOrUndefined(telemetryItem.data.duration)) {
                duration = telemetryItem.data.duration;
                delete telemetryItem.data.duration;
            }
            var customProperties = {};
            var customMeasurements = {};
            EnvelopeCreator.extractPropsAndMeasurements(telemetryItem.data, customProperties, customMeasurements);
            var bd = telemetryItem.baseData;
            var name = bd.name;
            var url = bd.uri;
            if (!CoreUtils.isNullOrUndefined(bd.refUri)) {
                customProperties["refUri"] = bd.refUri;
            }
            if (!CoreUtils.isNullOrUndefined(bd.pageType)) {
                customProperties["pageType"] = bd.pageType;
            }
            if (!CoreUtils.isNullOrUndefined(bd.isLoggedIn)) {
                customProperties["isLoggedIn"] = bd.isLoggedIn;
            }
            if (!CoreUtils.isNullOrUndefined(bd.properties)) {
                var pageTags = bd.properties;
                for (var key in pageTags) {
                    if (pageTags.hasOwnProperty(key)) {
                        customProperties[key] = pageTags[key];
                    }
                }
            }
            var baseData = new PageView(logger, name, url, duration, customProperties, customMeasurements);
            var data = new Data$1(PageView.dataType, baseData);
            return EnvelopeCreator.createEnvelope(logger, PageView.envelopeType, telemetryItem, data);
        };
        PageViewEnvelopeCreator.PageViewEnvelopeCreator = new PageViewEnvelopeCreator();
        return PageViewEnvelopeCreator;
    }(EnvelopeCreator);
    var PageViewPerformanceEnvelopeCreator = function(_super) {
        __extends(PageViewPerformanceEnvelopeCreator, _super);
        function PageViewPerformanceEnvelopeCreator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PageViewPerformanceEnvelopeCreator.prototype.Create = function(logger, telemetryItem) {
            this._logger = logger;
            if (CoreUtils.isNullOrUndefined(telemetryItem.baseData)) {
                this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.TelemetryEnvelopeInvalid, "telemetryItem.baseData cannot be null.");
            }
            var customProperties = {};
            var customMeasurements = {};
            EnvelopeCreator.extractPropsAndMeasurements(telemetryItem.data, customProperties, customMeasurements);
            var bd = telemetryItem.baseData;
            var name = bd.name;
            var url = bd.url;
            var baseData = new PageViewPerformance(logger, name, url, undefined, customProperties, customMeasurements);
            var data = new Data$1(PageViewPerformance.dataType, baseData);
            return EnvelopeCreator.createEnvelope(logger, PageViewPerformance.envelopeType, telemetryItem, data);
        };
        PageViewPerformanceEnvelopeCreator.PageViewPerformanceEnvelopeCreator = new PageViewPerformanceEnvelopeCreator();
        return PageViewPerformanceEnvelopeCreator;
    }(EnvelopeCreator);
    var TraceEnvelopeCreator = function(_super) {
        __extends(TraceEnvelopeCreator, _super);
        function TraceEnvelopeCreator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TraceEnvelopeCreator.prototype.Create = function(logger, telemetryItem) {
            this._logger = logger;
            if (CoreUtils.isNullOrUndefined(telemetryItem.baseData)) {
                this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.TelemetryEnvelopeInvalid, "telemetryItem.baseData cannot be null.");
            }
            var message = telemetryItem.baseData.message;
            var severityLevel = telemetryItem.baseData.severityLevel;
            var customProperties = EnvelopeCreator.extractProperties(telemetryItem.data);
            var baseData = new Trace(logger, message, customProperties, severityLevel);
            var data = new Data$1(Trace.dataType, baseData);
            return EnvelopeCreator.createEnvelope(logger, Trace.envelopeType, telemetryItem, data);
        };
        TraceEnvelopeCreator.TraceEnvelopeCreator = new TraceEnvelopeCreator();
        return TraceEnvelopeCreator;
    }(EnvelopeCreator);
    var EventValidator = function() {
        function EventValidator() {}
        EventValidator.prototype.Validate = function(item) {
            return true;
        };
        EventValidator.EventValidator = new EventValidator();
        return EventValidator;
    }();
    var TraceValidator = function() {
        function TraceValidator() {}
        TraceValidator.prototype.Validate = function(item) {
            return true;
        };
        TraceValidator.TraceValidator = new TraceValidator();
        return TraceValidator;
    }();
    var ExceptionValidator = function() {
        function ExceptionValidator() {}
        ExceptionValidator.prototype.Validate = function(item) {
            return true;
        };
        ExceptionValidator._validateExceptions = function(exceptions) {
            return true;
        };
        ExceptionValidator.ExceptionValidator = new ExceptionValidator();
        return ExceptionValidator;
    }();
    var MetricValidator = function() {
        function MetricValidator() {}
        MetricValidator.prototype.Validate = function(event) {
            return true;
        };
        MetricValidator.MetricValidator = new MetricValidator();
        return MetricValidator;
    }();
    var PageViewPerformanceValidator = function() {
        function PageViewPerformanceValidator() {}
        PageViewPerformanceValidator.prototype.Validate = function(item) {
            return true;
        };
        PageViewPerformanceValidator.PageViewPerformanceValidator = new PageViewPerformanceValidator();
        return PageViewPerformanceValidator;
    }();
    var PageViewValidator = function() {
        function PageViewValidator() {}
        PageViewValidator.prototype.Validate = function(item) {
            return true;
        };
        PageViewValidator.PageViewValidator = new PageViewValidator();
        return PageViewValidator;
    }();
    var RemoteDepdencyValidator = function() {
        function RemoteDepdencyValidator() {}
        RemoteDepdencyValidator.prototype.Validate = function(item) {
            return true;
        };
        RemoteDepdencyValidator.RemoteDepdencyValidator = new RemoteDepdencyValidator();
        return RemoteDepdencyValidator;
    }();
    var Serializer = function() {
        function Serializer(logger) {
            this._logger = logger;
        }
        Serializer.prototype.serialize = function(input) {
            var output = this._serializeObject(input, "root");
            return JSON.stringify(output);
        };
        Serializer.prototype._serializeObject = function(source, name) {
            var circularReferenceCheck = "__aiCircularRefCheck";
            var output = {};
            if (!source) {
                this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.CannotSerializeObject, "cannot serialize object because it is null or undefined", {
                    name: name
                }, true);
                return output;
            }
            if (source[circularReferenceCheck]) {
                this._logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.CircularReferenceDetected, "Circular reference detected while serializing object", {
                    name: name
                }, true);
                return output;
            }
            if (!source.aiDataContract) {
                if (name === "measurements") {
                    output = this._serializeStringMap(source, "number", name);
                } else if (name === "properties") {
                    output = this._serializeStringMap(source, "string", name);
                } else if (name === "tags") {
                    output = this._serializeStringMap(source, "string", name);
                } else if (Util.isArray(source)) {
                    output = this._serializeArray(source, name);
                } else {
                    this._logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.CannotSerializeObjectNonSerializable, "Attempting to serialize an object which does not implement ISerializable", {
                        name: name
                    }, true);
                    try {
                        output = source;
                    } catch (e) {
                        this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.CannotSerializeObject, e && typeof e.toString === "function" ? e.toString() : "Error serializing object", null, true);
                    }
                }
                return output;
            }
            source[circularReferenceCheck] = true;
            for (var field in source.aiDataContract) {
                var contract = source.aiDataContract[field];
                var isRequired = typeof contract === "function" ? contract() & FieldType.Required : contract & FieldType.Required;
                var isHidden = typeof contract === "function" ? contract() & FieldType.Hidden : contract & FieldType.Hidden;
                var isArray = contract & FieldType.Array;
                var isPresent = source[field] !== undefined;
                var isObject = typeof source[field] === "object" && source[field] !== null;
                if (isRequired && !isPresent && !isArray) {
                    this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.MissingRequiredFieldSpecification, "Missing required field specification. The field is required but not present on source", {
                        field: field,
                        name: name
                    });
                    continue;
                }
                if (isHidden) {
                    continue;
                }
                var value;
                if (isObject) {
                    if (isArray) {
                        value = this._serializeArray(source[field], field);
                    } else {
                        value = this._serializeObject(source[field], field);
                    }
                } else {
                    value = source[field];
                }
                if (value !== undefined) {
                    output[field] = value;
                }
            }
            delete source[circularReferenceCheck];
            return output;
        };
        Serializer.prototype._serializeArray = function(sources, name) {
            var output = undefined;
            if (!!sources) {
                if (!Util.isArray(sources)) {
                    this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.ItemNotInArray, "This field was specified as an array in the contract but the item is not an array.\r\n", {
                        name: name
                    }, true);
                } else {
                    output = [];
                    for (var i = 0; i < sources.length; i++) {
                        var source = sources[i];
                        var item = this._serializeObject(source, name + "[" + i + "]");
                        output.push(item);
                    }
                }
            }
            return output;
        };
        Serializer.prototype._serializeStringMap = function(map, expectedType, name) {
            var output = undefined;
            if (map) {
                output = {};
                for (var field in map) {
                    var value = map[field];
                    if (expectedType === "string") {
                        if (value === undefined) {
                            output[field] = "undefined";
                        } else if (value === null) {
                            output[field] = "null";
                        } else if (!value.toString) {
                            output[field] = "invalid field: toString() is not defined.";
                        } else {
                            output[field] = value.toString();
                        }
                    } else if (expectedType === "number") {
                        if (value === undefined) {
                            output[field] = "undefined";
                        } else if (value === null) {
                            output[field] = "null";
                        } else {
                            var num = parseFloat(value);
                            if (isNaN(num)) {
                                output[field] = "NaN";
                            } else {
                                output[field] = num;
                            }
                        }
                    } else {
                        output[field] = "invalid field: " + name + " is of unknown type.";
                        this._logger.throwInternal(LoggingSeverity.CRITICAL, output[field], null, true);
                    }
                }
            }
            return output;
        };
        return Serializer;
    }();
    var OfflineListener = function() {
        function OfflineListener() {
            this._onlineStatus = true;
            if (typeof window === "undefined") {
                this.isListening = false;
            } else if (window && window.addEventListener) {
                window.addEventListener("online", this._setOnline.bind(this), false);
                window.addEventListener("offline", this._setOffline.bind(this), false);
                this.isListening = true;
            } else if (document && document.body) {
                document.body.ononline = this._setOnline.bind(this);
                document.body.onoffline = this._setOffline.bind(this);
                this.isListening = true;
            } else if (document) {
                document.ononline = this._setOnline.bind(this);
                document.onoffline = this._setOffline.bind(this);
                this.isListening = true;
            } else {
                this.isListening = false;
            }
        }
        OfflineListener.prototype._setOnline = function() {
            this._onlineStatus = true;
        };
        OfflineListener.prototype._setOffline = function() {
            this._onlineStatus = false;
        };
        OfflineListener.prototype.isOnline = function() {
            if (this.isListening) {
                return this._onlineStatus;
            } else if (navigator) {
                return navigator.onLine;
            } else {
                return true;
            }
        };
        OfflineListener.prototype.isOffline = function() {
            return !this.isOnline();
        };
        OfflineListener.Offline = new OfflineListener();
        return OfflineListener;
    }();
    var Offline = OfflineListener.Offline;
    var Sender = function() {
        function Sender() {
            this.priority = 201;
            this._XMLHttpRequestSupported = false;
            this.identifier = "AppInsightsChannelPlugin";
        }
        Sender.prototype.pause = function() {
            throw new Error("Method not implemented.");
        };
        Sender.prototype.resume = function() {
            throw new Error("Method not implemented.");
        };
        Sender.prototype.flush = function() {
            try {
                this.triggerSend();
            } catch (e) {
                this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.FlushFailed, "flush failed, telemetry will not be collected: " + Util.getExceptionName(e), {
                    exception: Util.dump(e)
                });
            }
        };
        Sender.prototype.teardown = function() {
            throw new Error("Method not implemented.");
        };
        Sender.prototype.initialize = function(config, core, extensions) {
            var _this = this;
            this._logger = core.logger;
            this._serializer = new Serializer(core.logger);
            this._consecutiveErrors = 0;
            this._retryAt = null;
            this._lastSend = 0;
            this._sender = null;
            var defaultConfig = Sender._getDefaultAppInsightsChannelConfig();
            this._config = Sender._getEmptyAppInsightsChannelConfig();
            var _loop_1 = function(field) {
                this_1._config[field] = function() {
                    return ConfigurationManager.getConfig(config, field, _this.identifier, defaultConfig[field]());
                };
            };
            var this_1 = this;
            for (var field in defaultConfig) {
                _loop_1(field);
            }
            this._buffer = Util.canUseSessionStorage() && this._config.enableSessionStorageBuffer ? new SessionStorageSendBuffer(this._logger, this._config) : new ArraySendBuffer(this._config);
            if (!this._config.isBeaconApiDisabled() && Util.IsBeaconApiSupported()) {
                this._sender = this._beaconSender;
            } else {
                if (typeof XMLHttpRequest != "undefined") {
                    var testXhr = new XMLHttpRequest();
                    if ("withCredentials" in testXhr) {
                        this._sender = this._xhrSender;
                        this._XMLHttpRequestSupported = true;
                    } else if (typeof XDomainRequest !== "undefined") {
                        this._sender = this._xdrSender;
                    }
                }
            }
        };
        Sender.prototype.processTelemetry = function(telemetryItem) {
            try {
                if (this._config.disableTelemetry()) {
                    return;
                }
                if (!telemetryItem) {
                    this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.CannotSendEmptyTelemetry, "Cannot send empty telemetry");
                    return;
                }
                if (!this._sender) {
                    this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.SenderNotInitialized, "Sender was not initialized");
                    return;
                }
                var isValid = Sender._validate(telemetryItem);
                if (!isValid) {
                    this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.TelemetryEnvelopeInvalid, "Invalid telemetry envelope");
                    return;
                }
                var aiEnvelope = this._constructEnvelope(telemetryItem);
                if (!aiEnvelope) {
                    this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.CreateEnvelopeError, "Unable to create an AppInsights envelope");
                    return;
                }
                var payload = this._serializer.serialize(aiEnvelope);
                var bufferPayload = this._buffer.getItems();
                var batch = this._buffer.batchPayloads(bufferPayload);
                if (batch && batch.length + payload.length > this._config.maxBatchSizeInBytes()) {
                    this.triggerSend();
                }
                this._buffer.enqueue(payload);
                this._setupTimer();
            } catch (e) {
                this._logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.FailedAddingTelemetryToBuffer, "Failed adding telemetry to the sender's buffer, some telemetry will be lost: " + Util.getExceptionName(e), {
                    exception: Util.dump(e)
                });
            }
            if (!CoreUtils.isNullOrUndefined(this._nextPlugin)) {
                this._nextPlugin.processTelemetry(telemetryItem);
            }
        };
        Sender.prototype.setNextPlugin = function(next) {
            this._nextPlugin = next;
        };
        Sender.prototype._xhrReadyStateChange = function(xhr, payload, countOfItemsInPayload) {
            if (xhr.readyState === 4) {
                var response = null;
                if (!this._appId) {
                    response = this._parseResponse(xhr.responseText || xhr.response);
                    if (response && response.appId) {
                        this._appId = response.appId;
                    }
                }
                if ((xhr.status < 200 || xhr.status >= 300) && xhr.status !== 0) {
                    if (!this._config.isRetryDisabled() && this._isRetriable(xhr.status)) {
                        this._resendPayload(payload);
                        this._logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.TransmissionFailed, ". " + "Response code " + xhr.status + ". Will retry to send " + payload.length + " items.");
                    } else {
                        this._onError(payload, this._formatErrorMessageXhr(xhr));
                    }
                } else if (xhr.status === 0 || Offline.isOffline()) {
                    if (!this._config.isRetryDisabled()) {
                        var offlineBackOffMultiplier = 10;
                        this._resendPayload(payload, offlineBackOffMultiplier);
                        this._logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.TransmissionFailed, ". Offline - Response Code: " + xhr.status + ". Offline status: " + Offline.isOffline() + ". Will retry to send " + payload.length + " items.");
                    }
                } else {
                    if (xhr.status === 206) {
                        if (!response) {
                            response = this._parseResponse(xhr.responseText || xhr.response);
                        }
                        if (response && !this._config.isRetryDisabled()) {
                            this._onPartialSuccess(payload, response);
                        } else {
                            this._onError(payload, this._formatErrorMessageXhr(xhr));
                        }
                    } else {
                        this._consecutiveErrors = 0;
                        this._onSuccess(payload, countOfItemsInPayload);
                    }
                }
            }
        };
        Sender.prototype.triggerSend = function(async) {
            if (async === void 0) {
                async = true;
            }
            try {
                if (!this._config.disableTelemetry()) {
                    if (this._buffer.count() > 0) {
                        var payload = this._buffer.getItems();
                        this._sender(payload, async);
                    }
                    this._lastSend = +new Date();
                } else {
                    this._buffer.clear();
                }
                clearTimeout(this._timeoutHandle);
                this._timeoutHandle = null;
                this._retryAt = null;
            } catch (e) {
                if (!Util.getIEVersion() || Util.getIEVersion() > 9) {
                    this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.TransmissionFailed, "Telemetry transmission failed, some telemetry will be lost: " + Util.getExceptionName(e), {
                        exception: Util.dump(e)
                    });
                }
            }
        };
        Sender.prototype._onError = function(payload, message, event) {
            this._logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.OnError, "Failed to send telemetry.", {
                message: message
            });
            this._buffer.clearSent(payload);
        };
        Sender.prototype._onPartialSuccess = function(payload, results) {
            var failed = [];
            var retry = [];
            var errors = results.errors.reverse();
            for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
                var error = errors_1[_i];
                var extracted = payload.splice(error.index, 1)[0];
                if (this._isRetriable(error.statusCode)) {
                    retry.push(extracted);
                } else {
                    failed.push(extracted);
                }
            }
            if (payload.length > 0) {
                this._onSuccess(payload, results.itemsAccepted);
            }
            if (failed.length > 0) {
                this._onError(failed, this._formatErrorMessageXhr(null, [ "partial success", results.itemsAccepted, "of", results.itemsReceived ].join(" ")));
            }
            if (retry.length > 0) {
                this._resendPayload(retry);
                this._logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.TransmissionFailed, "Partial success. " + "Delivered: " + payload.length + ", Failed: " + failed.length + ". Will retry to send " + retry.length + " our of " + results.itemsReceived + " items");
            }
        };
        Sender.prototype._onSuccess = function(payload, countOfItemsInPayload) {
            this._buffer.clearSent(payload);
        };
        Sender.prototype._xdrOnLoad = function(xdr, payload) {
            if (xdr && (xdr.responseText + "" === "200" || xdr.responseText === "")) {
                this._consecutiveErrors = 0;
                this._onSuccess(payload, 0);
            } else {
                var results = this._parseResponse(xdr.responseText);
                if (results && results.itemsReceived && results.itemsReceived > results.itemsAccepted && !this._config.isRetryDisabled()) {
                    this._onPartialSuccess(payload, results);
                } else {
                    this._onError(payload, this._formatErrorMessageXdr(xdr));
                }
            }
        };
        Sender.prototype._constructEnvelope = function(envelope) {
            switch (envelope.baseType) {
              case Event$1.dataType:
                return EventEnvelopeCreator.EventEnvelopeCreator.Create(this._logger, envelope);

              case Trace.dataType:
                return TraceEnvelopeCreator.TraceEnvelopeCreator.Create(this._logger, envelope);

              case PageView.dataType:
                return PageViewEnvelopeCreator.PageViewEnvelopeCreator.Create(this._logger, envelope);

              case PageViewPerformance.dataType:
                return PageViewPerformanceEnvelopeCreator.PageViewPerformanceEnvelopeCreator.Create(this._logger, envelope);

              case Exception.dataType:
                return ExceptionEnvelopeCreator.ExceptionEnvelopeCreator.Create(this._logger, envelope);

              case Metric.dataType:
                return MetricEnvelopeCreator.MetricEnvelopeCreator.Create(this._logger, envelope);

              case RemoteDependencyData$$1.dataType:
                return DependencyEnvelopeCreator.DependencyEnvelopeCreator.Create(this._logger, envelope);

              default:
                return EventEnvelopeCreator.EventEnvelopeCreator.Create(this._logger, envelope);
            }
        };
        Sender._getDefaultAppInsightsChannelConfig = function() {
            var resultConfig = {};
            resultConfig.endpointUrl = function() {
                return "https://dc.services.visualstudio.com/v2/track";
            };
            resultConfig.emitLineDelimitedJson = function() {
                return false;
            };
            resultConfig.maxBatchInterval = function() {
                return 15e3;
            };
            resultConfig.maxBatchSizeInBytes = function() {
                return 102400;
            };
            resultConfig.disableTelemetry = function() {
                return false;
            };
            resultConfig.enableSessionStorageBuffer = function() {
                return true;
            };
            resultConfig.isRetryDisabled = function() {
                return false;
            };
            resultConfig.isBeaconApiDisabled = function() {
                return true;
            };
            return resultConfig;
        };
        Sender._getEmptyAppInsightsChannelConfig = function() {
            return {
                endpointUrl: undefined,
                emitLineDelimitedJson: undefined,
                maxBatchInterval: undefined,
                maxBatchSizeInBytes: undefined,
                disableTelemetry: undefined,
                enableSessionStorageBuffer: undefined,
                isRetryDisabled: undefined,
                isBeaconApiDisabled: undefined
            };
        };
        Sender._validate = function(envelope) {
            switch (envelope.baseType) {
              case Event$1.dataType:
                return EventValidator.EventValidator.Validate(envelope);

              case Trace.dataType:
                return TraceValidator.TraceValidator.Validate(envelope);

              case Exception.dataType:
                return ExceptionValidator.ExceptionValidator.Validate(envelope);

              case Metric.dataType:
                return MetricValidator.MetricValidator.Validate(envelope);

              case PageView.dataType:
                return PageViewValidator.PageViewValidator.Validate(envelope);

              case PageViewPerformance.dataType:
                return PageViewPerformanceValidator.PageViewPerformanceValidator.Validate(envelope);

              case RemoteDependencyData$$1.dataType:
                return RemoteDepdencyValidator.RemoteDepdencyValidator.Validate(envelope);

              default:
                return EventValidator.EventValidator.Validate(envelope);
            }
        };
        Sender.prototype._beaconSender = function(payload, isAsync) {
            var url = this._config.endpointUrl();
            var batch = this._buffer.batchPayloads(payload);
            var plainTextBatch = new Blob([ batch ], {
                type: "text/plain;charset=UTF-8"
            });
            var queued = navigator.sendBeacon(url, plainTextBatch);
            if (queued) {
                this._buffer.markAsSent(payload);
            } else {
                this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.TransmissionFailed, ". " + "Failed to send telemetry with Beacon API.");
            }
        };
        Sender.prototype._xhrSender = function(payload, isAsync) {
            var _this = this;
            var xhr = new XMLHttpRequest();
            xhr[DisabledPropertyName] = true;
            xhr.open("POST", this._config.endpointUrl(), isAsync);
            xhr.setRequestHeader("Content-type", "application/json");
            if (Util.isInternalApplicationInsightsEndpoint(this._config.endpointUrl())) {
                xhr.setRequestHeader(RequestHeaders.sdkContextHeader, RequestHeaders.sdkContextHeaderAppIdRequest);
            }
            xhr.onreadystatechange = function() {
                return _this._xhrReadyStateChange(xhr, payload, payload.length);
            };
            xhr.onerror = function(event) {
                return _this._onError(payload, _this._formatErrorMessageXhr(xhr), event);
            };
            var batch = this._buffer.batchPayloads(payload);
            xhr.send(batch);
            this._buffer.markAsSent(payload);
        };
        Sender.prototype._parseResponse = function(response) {
            try {
                if (response && response !== "") {
                    var result = JSON.parse(response);
                    if (result && result.itemsReceived && result.itemsReceived >= result.itemsAccepted && result.itemsReceived - result.itemsAccepted == result.errors.length) {
                        return result;
                    }
                }
            } catch (e) {
                this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.InvalidBackendResponse, "Cannot parse the response. " + Util.getExceptionName(e), {
                    response: response
                });
            }
            return null;
        };
        Sender.prototype._resendPayload = function(payload, linearFactor) {
            if (linearFactor === void 0) {
                linearFactor = 1;
            }
            if (!payload || payload.length === 0) {
                return;
            }
            this._buffer.clearSent(payload);
            this._consecutiveErrors++;
            for (var _i = 0, payload_1 = payload; _i < payload_1.length; _i++) {
                var item = payload_1[_i];
                this._buffer.enqueue(item);
            }
            this._setRetryTime(linearFactor);
            this._setupTimer();
        };
        Sender.prototype._setRetryTime = function(linearFactor) {
            var SlotDelayInSeconds = 10;
            var delayInSeconds;
            if (this._consecutiveErrors <= 1) {
                delayInSeconds = SlotDelayInSeconds;
            } else {
                var backOffSlot = (Math.pow(2, this._consecutiveErrors) - 1) / 2;
                var backOffDelay = Math.floor(Math.random() * backOffSlot * SlotDelayInSeconds) + 1;
                backOffDelay = linearFactor * backOffDelay;
                delayInSeconds = Math.max(Math.min(backOffDelay, 3600), SlotDelayInSeconds);
            }
            var retryAfterTimeSpan = Date.now() + delayInSeconds * 1e3;
            this._retryAt = retryAfterTimeSpan;
        };
        Sender.prototype._setupTimer = function() {
            var _this = this;
            if (!this._timeoutHandle) {
                var retryInterval = this._retryAt ? Math.max(0, this._retryAt - Date.now()) : 0;
                var timerValue = Math.max(this._config.maxBatchInterval(), retryInterval);
                this._timeoutHandle = setTimeout(function() {
                    _this.triggerSend();
                }, timerValue);
            }
        };
        Sender.prototype._isRetriable = function(statusCode) {
            return statusCode == 408 || statusCode == 429 || statusCode == 500 || statusCode == 503;
        };
        Sender.prototype._formatErrorMessageXhr = function(xhr, message) {
            if (xhr) {
                return "XMLHttpRequest,Status:" + xhr.status + ",Response:" + xhr.responseText || xhr.response || "";
            }
            return message;
        };
        Sender.prototype._xdrSender = function(payload, isAsync) {
            var _this = this;
            var xdr = new XDomainRequest();
            xdr.onload = function() {
                return _this._xdrOnLoad(xdr, payload);
            };
            xdr.onerror = function(event) {
                return _this._onError(payload, _this._formatErrorMessageXdr(xdr), event);
            };
            var hostingProtocol = window.location.protocol;
            if (this._config.endpointUrl().lastIndexOf(hostingProtocol, 0) !== 0) {
                this._logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.TransmissionFailed, ". " + "Cannot send XDomain request. The endpoint URL protocol doesn't match the hosting page protocol.");
                this._buffer.clear();
                return;
            }
            var endpointUrl = this._config.endpointUrl().replace(/^(https?:)/, "");
            xdr.open("POST", endpointUrl);
            var batch = this._buffer.batchPayloads(payload);
            xdr.send(batch);
            this._buffer.markAsSent(payload);
        };
        Sender.prototype._formatErrorMessageXdr = function(xdr, message) {
            if (xdr) {
                return "XDomainRequest,Response:" + xdr.responseText || "";
            }
            return message;
        };
        return Sender;
    }();
    var Session = function() {
        function Session() {}
        return Session;
    }();
    var _SessionManager = function() {
        function _SessionManager(config, logger) {
            if (CoreUtils.isNullOrUndefined(logger)) {
                this._logger = new DiagnosticLogger();
            } else {
                this._logger = logger;
            }
            if (!config) {
                config = {};
            }
            if (!(typeof config.sessionExpirationMs === "function")) {
                config.sessionExpirationMs = function() {
                    return _SessionManager.acquisitionSpan;
                };
            }
            if (!(typeof config.sessionRenewalMs === "function")) {
                config.sessionRenewalMs = function() {
                    return _SessionManager.renewalSpan;
                };
            }
            this.config = config;
            this.automaticSession = new Session();
        }
        _SessionManager.prototype.update = function() {
            if (!this.automaticSession.id) {
                this.initializeAutomaticSession();
            }
            var now = DateTimeUtils.Now();
            var acquisitionExpired = now - this.automaticSession.acquisitionDate > this.config.sessionExpirationMs();
            var renewalExpired = now - this.automaticSession.renewalDate > this.config.sessionRenewalMs();
            if (acquisitionExpired || renewalExpired) {
                this.automaticSession.isFirst = undefined;
                this.renew();
            } else {
                if (!this.cookieUpdatedTimestamp || now - this.cookieUpdatedTimestamp > _SessionManager.cookieUpdateInterval) {
                    this.automaticSession.renewalDate = now;
                    this.setCookie(this.automaticSession.id, this.automaticSession.acquisitionDate, this.automaticSession.renewalDate);
                }
            }
        };
        _SessionManager.prototype.backup = function() {
            this.setStorage(this.automaticSession.id, this.automaticSession.acquisitionDate, this.automaticSession.renewalDate);
        };
        _SessionManager.prototype.initializeAutomaticSession = function() {
            var cookie = Util.getCookie(this._logger, "ai_session");
            if (cookie && typeof cookie.split === "function") {
                this.initializeAutomaticSessionWithData(cookie);
            } else {
                var storage = Util.getStorage(this._logger, "ai_session");
                if (storage) {
                    this.initializeAutomaticSessionWithData(storage);
                }
            }
            if (!this.automaticSession.id) {
                this.automaticSession.isFirst = true;
                this.renew();
            }
        };
        _SessionManager.prototype.initializeAutomaticSessionWithData = function(sessionData) {
            var params = sessionData.split("|");
            if (params.length > 0) {
                this.automaticSession.id = params[0];
            }
            try {
                if (params.length > 1) {
                    var acq = +params[1];
                    this.automaticSession.acquisitionDate = +new Date(acq);
                    this.automaticSession.acquisitionDate = this.automaticSession.acquisitionDate > 0 ? this.automaticSession.acquisitionDate : 0;
                }
                if (params.length > 2) {
                    var renewal = +params[2];
                    this.automaticSession.renewalDate = +new Date(renewal);
                    this.automaticSession.renewalDate = this.automaticSession.renewalDate > 0 ? this.automaticSession.renewalDate : 0;
                }
            } catch (e) {
                this._logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.ErrorParsingAISessionCookie, "Error parsing ai_session cookie, session will be reset: " + Util.getExceptionName(e), {
                    exception: Util.dump(e)
                });
            }
            if (this.automaticSession.renewalDate == 0) {
                this._logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.SessionRenewalDateIsZero, "AI session renewal date is 0, session will be reset.");
            }
        };
        _SessionManager.prototype.renew = function() {
            var now = DateTimeUtils.Now();
            this.automaticSession.id = Util.newId();
            this.automaticSession.acquisitionDate = now;
            this.automaticSession.renewalDate = now;
            this.setCookie(this.automaticSession.id, this.automaticSession.acquisitionDate, this.automaticSession.renewalDate);
            if (!Util.canUseLocalStorage()) {
                this._logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.BrowserDoesNotSupportLocalStorage, "Browser does not support local storage. Session durations will be inaccurate.");
            }
        };
        _SessionManager.prototype.setCookie = function(guid, acq, renewal) {
            var acquisitionExpiry = acq + this.config.sessionExpirationMs();
            var renewalExpiry = renewal + this.config.sessionRenewalMs();
            var cookieExpiry = new Date();
            var cookie = [ guid, acq, renewal ];
            if (acquisitionExpiry < renewalExpiry) {
                cookieExpiry.setTime(acquisitionExpiry);
            } else {
                cookieExpiry.setTime(renewalExpiry);
            }
            var cookieDomnain = this.config.cookieDomain ? this.config.cookieDomain() : null;
            Util.setCookie(this._logger, "ai_session", cookie.join("|") + ";expires=" + cookieExpiry.toUTCString(), cookieDomnain);
            this.cookieUpdatedTimestamp = DateTimeUtils.Now();
        };
        _SessionManager.prototype.setStorage = function(guid, acq, renewal) {
            Util.setStorage(this._logger, "ai_session", [ guid, acq, renewal ].join("|"));
        };
        _SessionManager.acquisitionSpan = 864e5;
        _SessionManager.renewalSpan = 18e5;
        _SessionManager.cookieUpdateInterval = 6e4;
        return _SessionManager;
    }();
    var Application = function() {
        function Application() {}
        return Application;
    }();
    var Device = function() {
        function Device() {
            this.id = "browser";
            this.type = "Browser";
        }
        return Device;
    }();
    var Version = "2.0.1-beta";
    var Internal = function() {
        function Internal(config) {
            this.sdkVersion = (config.sdkExtension && config.sdkExtension() ? config.sdkExtension() + "_" : "") + "javascript:" + Version;
        }
        return Internal;
    }();
    var Location = function() {
        function Location() {}
        return Location;
    }();
    var Operation = function() {
        function Operation() {
            this.id = Util.newId();
            if (window && window.location && window.location.pathname) {
                this.name = window.location.pathname;
            }
        }
        return Operation;
    }();
    var User$1 = function() {
        function User(config, logger) {
            this._logger = logger;
            var cookie = Util.getCookie(this._logger, User.userCookieName);
            if (cookie) {
                var params = cookie.split(User.cookieSeparator);
                if (params.length > 0) {
                    this.id = params[0];
                }
            }
            this.config = config;
            if (!this.id) {
                this.id = Util.newId();
                var date = new Date();
                var acqStr = Util.toISOStringForIE8(date);
                this.accountAcquisitionDate = acqStr;
                date.setTime(date.getTime() + 31536e6);
                var newCookie = [ this.id, acqStr ];
                var cookieDomain = this.config.cookieDomain ? this.config.cookieDomain() : undefined;
                Util.setCookie(this._logger, User.userCookieName, newCookie.join(User.cookieSeparator) + ";expires=" + date.toUTCString(), cookieDomain);
                Util.removeStorage(this._logger, "ai_session");
            }
            this.accountId = config.accountId ? config.accountId() : undefined;
            var authCookie = Util.getCookie(this._logger, User.authUserCookieName);
            if (authCookie) {
                authCookie = decodeURI(authCookie);
                var authCookieString = authCookie.split(User.cookieSeparator);
                if (authCookieString[0]) {
                    this.authenticatedId = authCookieString[0];
                }
                if (authCookieString.length > 1 && authCookieString[1]) {
                    this.accountId = authCookieString[1];
                }
            }
        }
        User.prototype.setAuthenticatedUserContext = function(authenticatedUserId, accountId, storeInCookie) {
            if (storeInCookie === void 0) {
                storeInCookie = false;
            }
            var isInvalidInput = !this.validateUserInput(authenticatedUserId) || accountId && !this.validateUserInput(accountId);
            if (isInvalidInput) {
                this._logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.SetAuthContextFailedAccountName, "Setting auth user context failed. " + "User auth/account id should be of type string, and not contain commas, semi-colons, equal signs, spaces, or vertical-bars.", true);
                return;
            }
            this.authenticatedId = authenticatedUserId;
            var authCookie = this.authenticatedId;
            if (accountId) {
                this.accountId = accountId;
                authCookie = [ this.authenticatedId, this.accountId ].join(User.cookieSeparator);
            }
            if (storeInCookie) {
                Util.setCookie(this._logger, User.authUserCookieName, encodeURI(authCookie), this.config.cookieDomain());
            }
        };
        User.prototype.clearAuthenticatedUserContext = function() {
            this.authenticatedId = null;
            this.accountId = null;
            Util.deleteCookie(this._logger, User.authUserCookieName);
        };
        User.prototype.validateUserInput = function(id) {
            if (typeof id !== "string" || !id || id.match(/,|;|=| |\|/)) {
                return false;
            }
            return true;
        };
        User.cookieSeparator = "|";
        User.userCookieName = "ai_user";
        User.authUserCookieName = "ai_authUser";
        return User;
    }();
    var HashCodeScoreGenerator = function() {
        function HashCodeScoreGenerator() {}
        HashCodeScoreGenerator.prototype.getHashCodeScore = function(key) {
            var score = this.getHashCode(key) / HashCodeScoreGenerator.INT_MAX_VALUE;
            return score * 100;
        };
        HashCodeScoreGenerator.prototype.getHashCode = function(input) {
            if (input == "") {
                return 0;
            }
            while (input.length < HashCodeScoreGenerator.MIN_INPUT_LENGTH) {
                input = input.concat(input);
            }
            var hash = 5381;
            for (var i = 0; i < input.length; ++i) {
                hash = (hash << 5) + hash + input.charCodeAt(i);
                hash = hash & hash;
            }
            return Math.abs(hash);
        };
        HashCodeScoreGenerator.INT_MAX_VALUE = 2147483647;
        HashCodeScoreGenerator.MIN_INPUT_LENGTH = 8;
        return HashCodeScoreGenerator;
    }();
    var SamplingScoreGenerator = function() {
        function SamplingScoreGenerator() {
            this.hashCodeGeneragor = new HashCodeScoreGenerator();
        }
        SamplingScoreGenerator.prototype.getSamplingScore = function(envelope) {
            var tagKeys = new ContextTagKeys();
            var score = 0;
            if (envelope.tags[tagKeys.userId]) {
                score = this.hashCodeGeneragor.getHashCodeScore(envelope.tags[tagKeys.userId]);
            } else if (envelope.tags[tagKeys.operationId]) {
                score = this.hashCodeGeneragor.getHashCodeScore(envelope.tags[tagKeys.operationId]);
            } else {
                score = Math.random();
            }
            return score;
        };
        return SamplingScoreGenerator;
    }();
    var Sample = function() {
        function Sample(sampleRate, logger) {
            this.INT_MAX_VALUE = 2147483647;
            if (CoreUtils.isNullOrUndefined(logger)) {
                this._logger = new DiagnosticLogger();
            } else {
                this._logger = logger;
            }
            if (sampleRate > 100 || sampleRate < 0) {
                this._logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.SampleRateOutOfRange, "Sampling rate is out of range (0..100). Sampling will be disabled, you may be sending too much data which may affect your AI service level.", {
                    samplingRate: sampleRate
                }, true);
                this.sampleRate = 100;
            }
            this.sampleRate = sampleRate;
            this.samplingScoreGenerator = new SamplingScoreGenerator();
        }
        Sample.prototype.isSampledIn = function(envelope) {
            return true;
        };
        return Sample;
    }();
    var PropertiesPlugin = function() {
        function PropertiesPlugin() {
            this.priority = 170;
            this.identifier = "AppInsightsPropertiesPlugin";
        }
        PropertiesPlugin.getDefaultConfig = function() {
            var defaultConfig = {
                instrumentationKey: function() {
                    return undefined;
                },
                accountId: function() {
                    return null;
                },
                sessionRenewalMs: function() {
                    return 30 * 60 * 1e3;
                },
                samplingPercentage: function() {
                    return 100;
                },
                sessionExpirationMs: function() {
                    return 24 * 60 * 60 * 1e3;
                },
                cookieDomain: function() {
                    return null;
                },
                sdkExtension: function() {
                    return null;
                },
                isBrowserLinkTrackingEnabled: function() {
                    return false;
                },
                appId: function() {
                    return null;
                },
                enableOldTags: function() {
                    return false;
                }
            };
            return defaultConfig;
        };
        PropertiesPlugin.prototype.initialize = function(config, core, extensions) {
            var _this = this;
            var defaultConfig = PropertiesPlugin.getDefaultConfig();
            this._extensionConfig = this._extensionConfig || PropertiesPlugin.getDefaultConfig();
            var _loop_1 = function(field) {
                this_1._extensionConfig[field] = function() {
                    return ConfigurationManager.getConfig(config, field, _this.identifier, defaultConfig[field]());
                };
            };
            var this_1 = this;
            for (var field in defaultConfig) {
                _loop_1(field);
            }
            if (typeof window !== "undefined") {
                this._sessionManager = new _SessionManager(this._extensionConfig, core.logger);
                this.application = new Application();
                this.device = new Device();
                this.internal = new Internal(this._extensionConfig);
                this.location = new Location();
                this.user = new User$1(this._extensionConfig, core.logger);
                this.operation = new Operation();
                this.session = new Session();
                this.sample = new Sample(this._extensionConfig.samplingPercentage(), core.logger);
            }
        };
        PropertiesPlugin.prototype.processTelemetry = function(event) {
            if (CoreUtils.isNullOrUndefined(event)) {} else {
                if (this.sample.isSampledIn(event)) {
                    if (this.session) {
                        if (typeof this.session.id !== "string") {
                            this._sessionManager.update();
                        }
                    }
                    this._processTelemetryInternal(event);
                }
                if (!CoreUtils.isNullOrUndefined(this._nextPlugin)) {
                    this._nextPlugin.processTelemetry(event);
                }
            }
        };
        PropertiesPlugin.prototype.setNextPlugin = function(nextPlugin) {
            this._nextPlugin = nextPlugin;
        };
        PropertiesPlugin.prototype._processTelemetryInternal = function(event) {
            var tagsItem = {};
            if (this.session) {
                if (typeof this.session.id === "string") {
                    PropertiesPlugin._applySessionContext(tagsItem, this.session);
                } else {
                    PropertiesPlugin._applySessionContext(tagsItem, this._sessionManager.automaticSession);
                }
            }
            if (this._extensionConfig.enableOldTags()) {
                PropertiesPlugin._applyApplicationContext(tagsItem, this.application);
                PropertiesPlugin._applyDeviceContext(tagsItem, this.device);
                PropertiesPlugin._applyInternalContext(tagsItem, this.internal);
                PropertiesPlugin._applyLocationContext(tagsItem, this.location);
                PropertiesPlugin._applySampleContext(tagsItem, this.sample);
                PropertiesPlugin._applyOperationContext(tagsItem, this.operation);
            }
            this._applyUserContext(event, this.user);
            var tgs = [];
            Object.keys(tagsItem).forEach(function(item) {
                var p = {};
                p[item] = tagsItem[item];
                tgs.push(p);
            });
            event.tags.forEach(function(item) {
                tgs.push(item);
            });
            event.tags = tgs;
        };
        PropertiesPlugin._applySessionContext = function(tags, sessionContext) {
            if (sessionContext) {
                var tagKeys = new ContextTagKeys();
                if (typeof sessionContext.id === "string") {
                    tags[tagKeys.sessionId] = sessionContext.id;
                }
                if (typeof sessionContext.isFirst !== "undefined") {
                    tags[tagKeys.sessionIsFirst] = sessionContext.isFirst;
                }
            }
        };
        PropertiesPlugin._applyApplicationContext = function(tagsItem, appContext) {
            if (appContext) {
                var tagKeys = new ContextTagKeys();
                if (typeof appContext.ver === "string") {
                    tagsItem[tagKeys.applicationVersion] = appContext.ver;
                }
                if (typeof appContext.build === "string") {
                    tagsItem[tagKeys.applicationBuild] = appContext.build;
                }
            }
        };
        PropertiesPlugin._applyDeviceContext = function(tagsItem, deviceContext) {
            var tagKeys = new ContextTagKeys();
            if (deviceContext) {
                if (typeof deviceContext.id === "string") {
                    tagsItem[tagKeys.deviceId] = deviceContext.id;
                }
                if (typeof deviceContext.ip === "string") {
                    tagsItem[tagKeys.deviceIp] = deviceContext.ip;
                }
                if (typeof deviceContext.language === "string") {
                    tagsItem[tagKeys.deviceLanguage] = deviceContext.language;
                }
                if (typeof deviceContext.locale === "string") {
                    tagsItem[tagKeys.deviceLocale] = deviceContext.locale;
                }
                if (typeof deviceContext.model === "string") {
                    tagsItem[tagKeys.deviceModel] = deviceContext.model;
                }
                if (typeof deviceContext.network !== "undefined") {
                    tagsItem[tagKeys.deviceNetwork] = deviceContext.network;
                }
                if (typeof deviceContext.oemName === "string") {
                    tagsItem[tagKeys.deviceOEMName] = deviceContext.oemName;
                }
                if (typeof deviceContext.os === "string") {
                    tagsItem[tagKeys.deviceOS] = deviceContext.os;
                }
                if (typeof deviceContext.osversion === "string") {
                    tagsItem[tagKeys.deviceOSVersion] = deviceContext.osversion;
                }
                if (typeof deviceContext.resolution === "string") {
                    tagsItem[tagKeys.deviceScreenResolution] = deviceContext.resolution;
                }
                if (typeof deviceContext.type === "string") {
                    tagsItem[tagKeys.deviceType] = deviceContext.type;
                }
            }
        };
        PropertiesPlugin._applyInternalContext = function(tagsItem, internalContext) {
            if (internalContext) {
                var tagKeys = new ContextTagKeys();
                if (typeof internalContext.agentVersion === "string") {
                    tagsItem[tagKeys.internalAgentVersion] = internalContext.agentVersion;
                }
                if (typeof internalContext.sdkVersion === "string") {
                    tagsItem[tagKeys.internalSdkVersion] = internalContext.sdkVersion;
                }
            }
        };
        PropertiesPlugin._applyLocationContext = function(tagsItem, locationContext) {
            if (locationContext) {
                var tagKeys = new ContextTagKeys();
                if (typeof locationContext.ip === "string") {
                    tagsItem[tagKeys.locationIp] = locationContext.ip;
                }
            }
        };
        PropertiesPlugin._applySampleContext = function(tagsItem, sampleContext) {
            if (sampleContext) {
                tagsItem.sampleRate = sampleContext.sampleRate;
            }
        };
        PropertiesPlugin._applyOperationContext = function(tagsItem, operationContext) {
            if (operationContext) {
                var tagKeys = new ContextTagKeys();
                if (typeof operationContext.id === "string") {
                    tagsItem[tagKeys.operationId] = operationContext.id;
                }
                if (typeof operationContext.name === "string") {
                    tagsItem[tagKeys.operationName] = operationContext.name;
                }
                if (typeof operationContext.parentId === "string") {
                    tagsItem[tagKeys.operationParentId] = operationContext.parentId;
                }
                if (typeof operationContext.rootId === "string") {
                    tagsItem[tagKeys.operationRootId] = operationContext.rootId;
                }
                if (typeof operationContext.syntheticSource === "string") {
                    tagsItem[tagKeys.operationSyntheticSource] = operationContext.syntheticSource;
                }
            }
        };
        PropertiesPlugin.prototype._applyUserContext = function(event, userContext) {
            if (userContext) {
                if (!event.tags) {
                    event.tags = [];
                }
                var tagKeys = new ContextTagKeys();
                if (this._extensionConfig.enableOldTags()) {
                    if (typeof userContext.agent === "string") {
                        var val = userContext.agent;
                        event.tags.push({
                            ky: val
                        });
                    }
                    if (typeof userContext.storeRegion === "string") {
                        var val = userContext.storeRegion;
                        event.tags.push({
                            ky: val
                        });
                    }
                }
                if (typeof userContext.accountId === "string") {
                    var item = {};
                    item[partAExtensions.accountIdTag] = userContext.accountId;
                    event.tags.push(item);
                }
                var ctxExt = {};
                if (typeof userContext.id === "string") {
                    ctxExt.localId = userContext.id;
                }
                if (typeof userContext.authenticatedId === "string") {
                    ctxExt.authId = userContext.authenticatedId;
                }
                event.ctx[partAExtensions.UserExtensionName] = ctxExt;
            }
        };
        return PropertiesPlugin;
    }();
    var XHRMonitoringState = function() {
        function XHRMonitoringState() {
            this.openDone = false;
            this.setRequestHeaderDone = false;
            this.sendDone = false;
            this.abortDone = false;
            this.onreadystatechangeCallbackAttached = false;
        }
        return XHRMonitoringState;
    }();
    var ajaxRecord = function() {
        function ajaxRecord(id, logger) {
            this.completed = false;
            this.requestHeadersSize = null;
            this.ttfb = null;
            this.responseReceivingDuration = null;
            this.callbackDuration = null;
            this.ajaxTotalDuration = null;
            this.aborted = null;
            this.pageUrl = null;
            this.requestUrl = null;
            this.requestSize = 0;
            this.method = null;
            this.status = null;
            this.requestSentTime = null;
            this.responseStartedTime = null;
            this.responseFinishedTime = null;
            this.callbackFinishedTime = null;
            this.endTime = null;
            this.originalOnreadystatechage = null;
            this.xhrMonitoringState = new XHRMonitoringState();
            this.clientFailure = 0;
            this.CalculateMetrics = function() {
                var self = this;
                self.ajaxTotalDuration = Math.round(DateTimeUtils.GetDuration(self.requestSentTime, self.responseFinishedTime) * 1e3) / 1e3;
            };
            this.id = id;
            this._logger = logger;
        }
        ajaxRecord.prototype.getAbsoluteUrl = function() {
            return this.requestUrl ? UrlHelper.getAbsoluteUrl(this.requestUrl) : null;
        };
        ajaxRecord.prototype.getPathName = function() {
            return this.requestUrl ? DataSanitizer.sanitizeUrl(this._logger, UrlHelper.getCompleteUrl(this.method, this.requestUrl)) : null;
        };
        return ajaxRecord;
    }();
    var EventHelper = function() {
        function EventHelper() {}
        EventHelper.AttachEvent = function(obj, eventNameWithoutOn, handlerRef) {
            var result = false;
            if (!CoreUtils.isNullOrUndefined(obj)) {
                if (!CoreUtils.isNullOrUndefined(obj.attachEvent)) {
                    obj.attachEvent("on" + eventNameWithoutOn, handlerRef);
                    result = true;
                } else {
                    if (!CoreUtils.isNullOrUndefined(obj.addEventListener)) {
                        obj.addEventListener(eventNameWithoutOn, handlerRef, false);
                        result = true;
                    }
                }
            }
            return result;
        };
        EventHelper.DetachEvent = function(obj, eventNameWithoutOn, handlerRef) {
            if (!CoreUtils.isNullOrUndefined(obj)) {
                if (!CoreUtils.isNullOrUndefined(obj.detachEvent)) {
                    obj.detachEvent("on" + eventNameWithoutOn, handlerRef);
                } else {
                    if (!CoreUtils.isNullOrUndefined(obj.removeEventListener)) {
                        obj.removeEventListener(eventNameWithoutOn, handlerRef, false);
                    }
                }
            }
        };
        return EventHelper;
    }();
    var AjaxMonitor = function() {
        function AjaxMonitor() {
            this._trackAjaxAttempts = 0;
            this.identifier = AjaxMonitor.identifier;
            this.priority = 161;
            this.currentWindowHost = window && window.location.host && window.location.host.toLowerCase();
            this.initialized = false;
            this._fetchInitialized = false;
        }
        AjaxMonitor.prototype.isMonitoredInstance = function(xhr, excludeAjaxDataValidation) {
            return this.initialized && (excludeAjaxDataValidation === true || !CoreUtils.isNullOrUndefined(xhr.ajaxData)) && xhr[DisabledPropertyName] !== true;
        };
        AjaxMonitor.prototype.supportsAjaxMonitoring = function() {
            var result = true;
            if (CoreUtils.isNullOrUndefined(XMLHttpRequest) || CoreUtils.isNullOrUndefined(XMLHttpRequest.prototype) || CoreUtils.isNullOrUndefined(XMLHttpRequest.prototype.open) || CoreUtils.isNullOrUndefined(XMLHttpRequest.prototype.send) || CoreUtils.isNullOrUndefined(XMLHttpRequest.prototype.abort)) {
                result = false;
            }
            try {
                " a ".trim();
            } catch (ex) {
                result = false;
            }
            return result;
        };
        AjaxMonitor.prototype.instrumentOpen = function() {
            var originalOpen = XMLHttpRequest.prototype.open;
            var ajaxMonitorInstance = this;
            XMLHttpRequest.prototype.open = function(method, url, async) {
                try {
                    if (ajaxMonitorInstance.isMonitoredInstance(this, true) && (!this.ajaxData || !this.ajaxData.xhrMonitoringState.openDone)) {
                        ajaxMonitorInstance.openHandler(this, method, url, async);
                    }
                } catch (e) {
                    this._core.logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.FailedMonitorAjaxOpen, "Failed to monitor XMLHttpRequest.open, monitoring data for this ajax call may be incorrect.", {
                        ajaxDiagnosticsMessage: AjaxMonitor.getFailedAjaxDiagnosticsMessage(this),
                        exception: Util.dump(e)
                    });
                }
                return originalOpen.apply(this, arguments);
            };
        };
        AjaxMonitor.prototype.openHandler = function(xhr, method, url, async) {
            var id = Util.newId();
            var ajaxData = new ajaxRecord(id, this._core.logger);
            ajaxData.method = method;
            ajaxData.requestUrl = url;
            ajaxData.xhrMonitoringState.openDone = true;
            xhr.ajaxData = ajaxData;
            this.attachToOnReadyStateChange(xhr);
        };
        AjaxMonitor.getFailedAjaxDiagnosticsMessage = function(xhr) {
            var result = "";
            try {
                if (!CoreUtils.isNullOrUndefined(xhr) && !CoreUtils.isNullOrUndefined(xhr.ajaxData) && !CoreUtils.isNullOrUndefined(xhr.ajaxData.requestUrl)) {
                    result += "(url: '" + xhr.ajaxData.requestUrl + "')";
                }
            } catch (e) {}
            return result;
        };
        AjaxMonitor.prototype.instrumentSend = function() {
            var originalSend = XMLHttpRequest.prototype.send;
            var ajaxMonitorInstance = this;
            XMLHttpRequest.prototype.send = function(content) {
                try {
                    if (ajaxMonitorInstance.isMonitoredInstance(this) && !this.ajaxData.xhrMonitoringState.sendDone) {
                        ajaxMonitorInstance.sendHandler(this, content);
                    }
                } catch (e) {
                    this._core.logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.FailedMonitorAjaxSend, "Failed to monitor XMLHttpRequest, monitoring data for this ajax call may be incorrect.", {
                        ajaxDiagnosticsMessage: AjaxMonitor.getFailedAjaxDiagnosticsMessage(this),
                        exception: Util.dump(e)
                    });
                }
                return originalSend.apply(this, arguments);
            };
        };
        AjaxMonitor.prototype.sendHandler = function(xhr, content) {
            xhr.ajaxData.requestSentTime = DateTimeUtils.Now();
            xhr = this.includeCorrelationHeaders(xhr.ajaxData, undefined, undefined, xhr);
            xhr.ajaxData.xhrMonitoringState.sendDone = true;
        };
        AjaxMonitor.prototype.instrumentAbort = function() {
            var originalAbort = XMLHttpRequest.prototype.abort;
            var ajaxMonitorInstance = this;
            XMLHttpRequest.prototype.abort = function() {
                try {
                    if (ajaxMonitorInstance.isMonitoredInstance(this) && !this.ajaxData.xhrMonitoringState.abortDone) {
                        this.ajaxData.aborted = 1;
                        this.ajaxData.xhrMonitoringState.abortDone = true;
                    }
                } catch (e) {
                    this._core.logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.FailedMonitorAjaxAbort, "Failed to monitor XMLHttpRequest.abort, monitoring data for this ajax call may be incorrect.", {
                        ajaxDiagnosticsMessage: AjaxMonitor.getFailedAjaxDiagnosticsMessage(this),
                        exception: Util.dump(e)
                    });
                }
                return originalAbort.apply(this, arguments);
            };
        };
        AjaxMonitor.prototype.attachToOnReadyStateChange = function(xhr) {
            var _this = this;
            var ajaxMonitorInstance = this;
            xhr.ajaxData.xhrMonitoringState.onreadystatechangeCallbackAttached = EventHelper.AttachEvent(xhr, "readystatechange", function() {
                try {
                    if (ajaxMonitorInstance.isMonitoredInstance(xhr)) {
                        if (xhr.readyState === 4) {
                            ajaxMonitorInstance.onAjaxComplete(xhr);
                        }
                    }
                } catch (e) {
                    var exceptionText = Util.dump(e);
                    if (!exceptionText || exceptionText.toLowerCase().indexOf("c00c023f") == -1) {
                        _this._core.logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.FailedMonitorAjaxRSC, "Failed to monitor XMLHttpRequest 'readystatechange' event handler, monitoring data for this ajax call may be incorrect.", {
                            ajaxDiagnosticsMessage: AjaxMonitor.getFailedAjaxDiagnosticsMessage(xhr),
                            exception: Util.dump(e)
                        });
                    }
                }
            });
        };
        AjaxMonitor.prototype.onAjaxComplete = function(xhr) {
            xhr.ajaxData.responseFinishedTime = DateTimeUtils.Now();
            xhr.ajaxData.status = xhr.status;
            xhr.ajaxData.CalculateMetrics();
            if (xhr.ajaxData.ajaxTotalDuration < 0) {
                this._core.logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.FailedMonitorAjaxDur, "Failed to calculate the duration of the ajax call, monitoring data for this ajax call won't be sent.", {
                    ajaxDiagnosticsMessage: AjaxMonitor.getFailedAjaxDiagnosticsMessage(xhr),
                    requestSentTime: xhr.ajaxData.requestSentTime,
                    responseFinishedTime: xhr.ajaxData.responseFinishedTime
                });
            } else {
                var dependency = {
                    id: xhr.ajaxData.id,
                    absoluteUrl: xhr.ajaxData.getAbsoluteUrl(),
                    commandName: xhr.ajaxData.getPathName(),
                    duration: xhr.ajaxData.ajaxTotalDuration,
                    success: +xhr.ajaxData.status >= 200 && +xhr.ajaxData.status < 400,
                    resultCode: +xhr.ajaxData.status,
                    method: xhr.ajaxData.method
                };
                var correlationContext = this.getAjaxCorrelationContext(xhr);
                if (correlationContext) {
                    dependency.correlationContext = correlationContext;
                }
                this.trackDependencyDataInternal(dependency);
                xhr.ajaxData = null;
            }
        };
        AjaxMonitor.prototype.getAjaxCorrelationContext = function(xhr) {
            try {
                var responseHeadersString = xhr.getAllResponseHeaders();
                if (responseHeadersString !== null) {
                    var index = responseHeadersString.toLowerCase().indexOf(RequestHeaders.requestContextHeaderLowerCase);
                    if (index !== -1) {
                        var responseHeader = xhr.getResponseHeader(RequestHeaders.requestContextHeader);
                        return CorrelationIdHelper.getCorrelationContext(responseHeader);
                    }
                }
            } catch (e) {
                this._core.logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.FailedMonitorAjaxGetCorrelationHeader, "Failed to get Request-Context correlation header as it may be not included in the response or not accessible.", {
                    ajaxDiagnosticsMessage: AjaxMonitor.getFailedAjaxDiagnosticsMessage(xhr),
                    exception: Util.dump(e)
                });
            }
        };
        AjaxMonitor.prototype.trackDependencyDataInternal = function(dependency, properties, systemProperties) {
            if (this._config.maxAjaxCallsPerView === -1 || this._trackAjaxAttempts < this._config.maxAjaxCallsPerView) {
                var item = TelemetryItemCreator.create(dependency, RemoteDependencyData$$1.dataType, RemoteDependencyData$$1.envelopeType, this._core.logger, properties, systemProperties);
                this._core.track(item);
            } else if (this._trackAjaxAttempts === this._config.maxAjaxCallsPerView) {
                this._core.logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.MaxAjaxPerPVExceeded, "Maximum ajax per page view limit reached, ajax monitoring is paused until the next trackPageView(). In order to increase the limit set the maxAjaxCallsPerView configuration parameter.", true);
            }
            ++this._trackAjaxAttempts;
        };
        AjaxMonitor.prototype.trackDependencyData = function(dependency, properties) {
            this.trackDependencyDataInternal(dependency, properties);
        };
        AjaxMonitor.prototype.processTelemetry = function(item) {
            if (this._nextPlugin && this._nextPlugin.processTelemetry) {
                this._nextPlugin.processTelemetry(item);
            }
        };
        AjaxMonitor.prototype.setNextPlugin = function(next) {
            if (next) {
                this._nextPlugin = next;
            }
        };
        AjaxMonitor.prototype.instrumentFetch = function() {
            if (!this.supportsFetch() || this._fetchInitialized) {
                return;
            }
            var originalFetch = window.fetch;
            var fetchMonitorInstance = this;
            window.fetch = function fetch(input, init) {
                var fetchData;
                if (fetchMonitorInstance.isFetchInstrumented(input)) {
                    try {
                        fetchData = fetchMonitorInstance.createFetchRecord(input, init);
                        init = fetchMonitorInstance.includeCorrelationHeaders(fetchData, input, init);
                    } catch (e) {
                        fetchMonitorInstance._core.logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.FailedMonitorAjaxOpen, "Failed to monitor Window.fetch, monitoring data for this fetch call may be incorrect.", {
                            ajaxDiagnosticsMessage: this.getFailedFetchDiagnosticsMessage(input),
                            exception: Util.dump(e)
                        });
                    }
                }
                return originalFetch(input, init).then(function(response) {
                    fetchMonitorInstance.onFetchComplete(response, fetchData);
                    return response;
                }).catch(function(reason) {
                    fetchMonitorInstance.onFetchFailed(input, fetchData, reason);
                    throw reason;
                });
            };
            this._fetchInitialized = true;
        };
        AjaxMonitor.prototype.isFetchInstrumented = function(input) {
            return this._fetchInitialized && input[DisabledPropertyName] !== true;
        };
        AjaxMonitor.prototype.supportsFetch = function() {
            var result = true;
            if (!window || CoreUtils.isNullOrUndefined(window.Request) || CoreUtils.isNullOrUndefined(window.Request.prototype) || CoreUtils.isNullOrUndefined(window.fetch)) {
                result = false;
            }
            return result;
        };
        AjaxMonitor.prototype.createFetchRecord = function(input, init) {
            var id = Util.newId();
            var ajaxData = new ajaxRecord(id, this._core.logger);
            ajaxData.requestSentTime = DateTimeUtils.Now();
            if (input instanceof Request) {
                ajaxData.requestUrl = input ? input.url : "";
            } else {
                ajaxData.requestUrl = input;
            }
            if (init && init.method) {
                ajaxData.method = init.method;
            } else if (input && input instanceof Request) {
                ajaxData.method = input.method;
            } else {
                ajaxData.method = "GET";
            }
            return ajaxData;
        };
        AjaxMonitor.prototype.includeCorrelationHeaders = function(ajaxData, input, init, xhr) {
            if (input) {
                if (CorrelationIdHelper.canIncludeCorrelationHeader(this._config, ajaxData.getAbsoluteUrl(), this.currentWindowHost)) {
                    if (!init) {
                        init = {};
                    }
                    init.headers = new Headers(init.headers || (input instanceof Request ? input.headers || {} : {}));
                    init.headers.set(RequestHeaders.requestIdHeader, ajaxData.id);
                    return init;
                }
            } else if (xhr) {
                if (this.currentWindowHost && CorrelationIdHelper.canIncludeCorrelationHeader(this._config, xhr.ajaxData.getAbsoluteUrl(), this.currentWindowHost)) {
                    xhr.setRequestHeader(RequestHeaders.requestIdHeader, xhr.ajaxData.id);
                    var appId = this._config.appId;
                    if (appId) {
                        xhr.setRequestHeader(RequestHeaders.requestContextHeader, RequestHeaders.requestContextAppIdFormat + appId);
                    }
                }
                return xhr;
            }
            return undefined;
        };
        AjaxMonitor.prototype.getFailedFetchDiagnosticsMessage = function(input) {
            var result = "";
            try {
                if (!CoreUtils.isNullOrUndefined(input)) {
                    if (typeof input === "string") {
                        result += "(url: '" + input + "')";
                    } else {
                        result += "(url: '" + input.url + "')";
                    }
                }
            } catch (e) {
                this._core.logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.FailedMonitorAjaxOpen, "Failed to grab failed fetch diagnostics message", {
                    exception: Util.dump(e)
                });
            }
            return result;
        };
        AjaxMonitor.prototype.onFetchComplete = function(response, ajaxData) {
            if (!ajaxData) {
                return;
            }
            try {
                ajaxData.responseFinishedTime = DateTimeUtils.Now();
                ajaxData.CalculateMetrics();
                if (ajaxData.ajaxTotalDuration < 0) {
                    this._core.logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.FailedMonitorAjaxDur, "Failed to calculate the duration of the fetch call, monitoring data for this fetch call won't be sent.", {
                        fetchDiagnosticsMessage: this.getFailedFetchDiagnosticsMessage(response),
                        requestSentTime: ajaxData.requestSentTime,
                        responseFinishedTime: ajaxData.responseFinishedTime
                    });
                } else {
                    var dependency = {
                        id: ajaxData.id,
                        absoluteUrl: ajaxData.getAbsoluteUrl(),
                        commandName: ajaxData.getPathName(),
                        duration: ajaxData.ajaxTotalDuration,
                        success: response.status >= 200 && response.status < 400,
                        resultCode: response.status,
                        method: ajaxData.method
                    };
                    var correlationContext = this.getFetchCorrelationContext(response);
                    if (correlationContext) {
                        dependency.correlationContext = correlationContext;
                    }
                    this.trackDependencyDataInternal(dependency);
                }
            } catch (e) {
                this._core.logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.FailedMonitorAjaxGetCorrelationHeader, "Failed to calculate the duration of the fetch call, monitoring data for this fetch call won't be sent.", {
                    fetchDiagnosticsMessage: this.getFailedFetchDiagnosticsMessage(response),
                    exception: Util.dump(e)
                });
            }
        };
        AjaxMonitor.prototype.onFetchFailed = function(input, ajaxData, reason) {
            if (!ajaxData) {
                return;
            }
            try {
                ajaxData.responseFinishedTime = DateTimeUtils.Now();
                ajaxData.CalculateMetrics();
                if (ajaxData.ajaxTotalDuration < 0) {
                    this._core.logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.FailedMonitorAjaxDur, "Failed to calculate the duration of the failed fetch call, monitoring data for this fetch call won't be sent.", {
                        fetchDiagnosticsMessage: this.getFailedFetchDiagnosticsMessage(input),
                        requestSentTime: ajaxData.requestSentTime,
                        responseFinishedTime: ajaxData.responseFinishedTime
                    });
                } else {
                    var dependency = {
                        id: ajaxData.id,
                        absoluteUrl: ajaxData.getAbsoluteUrl(),
                        commandName: ajaxData.getPathName(),
                        duration: ajaxData.ajaxTotalDuration,
                        success: false,
                        resultCode: 0,
                        method: ajaxData.method
                    };
                    this.trackDependencyDataInternal(dependency, {
                        error: reason.message
                    });
                }
            } catch (e) {
                this._core.logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.FailedMonitorAjaxGetCorrelationHeader, "Failed to calculate the duration of the failed fetch call, monitoring data for this fetch call won't be sent.", {
                    fetchDiagnosticsMessage: this.getFailedFetchDiagnosticsMessage(input),
                    exception: Util.dump(e)
                });
            }
        };
        AjaxMonitor.prototype.getFetchCorrelationContext = function(response) {
            try {
                var responseHeader = response.headers.get(RequestHeaders.requestContextHeader);
                return CorrelationIdHelper.getCorrelationContext(responseHeader);
            } catch (e) {
                this._core.logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.FailedMonitorAjaxGetCorrelationHeader, "Failed to get Request-Context correlation header as it may be not included in the response or not accessible.", {
                    fetchDiagnosticsMessage: this.getFailedFetchDiagnosticsMessage(response),
                    exception: Util.dump(e)
                });
            }
        };
        AjaxMonitor.prototype.instrumentXhr = function() {
            if (this.supportsAjaxMonitoring() && !this.initialized) {
                this.instrumentOpen();
                this.instrumentSend();
                this.instrumentAbort();
                this.initialized = true;
            }
        };
        AjaxMonitor.getDefaultConfig = function() {
            var config = {
                maxAjaxCallsPerView: 500,
                disableAjaxTracking: false,
                disableFetchTracking: true,
                disableCorrelationHeaders: false,
                correlationHeaderExcludedDomains: [ "*.blob.core.windows.net", "*.blob.core.chinacloudapi.cn", "*.blob.core.cloudapi.de", "*.blob.core.usgovcloudapi.net" ],
                appId: undefined,
                enableCorsCorrelation: false
            };
            return config;
        };
        AjaxMonitor.getEmptyConfig = function() {
            return {
                maxAjaxCallsPerView: undefined,
                disableAjaxTracking: undefined,
                disableFetchTracking: undefined,
                disableCorrelationHeaders: undefined,
                correlationHeaderExcludedDomains: undefined,
                appId: undefined,
                enableCorsCorrelation: undefined
            };
        };
        AjaxMonitor.prototype.initialize = function(config, core, extensions) {
            if (!this.initialized && !this._fetchInitialized) {
                this._core = core;
                var defaultConfig = AjaxMonitor.getDefaultConfig();
                this._config = AjaxMonitor.getEmptyConfig();
                for (var field in defaultConfig) {
                    this._config[field] = ConfigurationManager.getConfig(config, field, AjaxMonitor.identifier, defaultConfig[field]);
                }
                if (this._config.disableAjaxTracking === false) {
                    this.instrumentXhr();
                }
                if (this._config.disableFetchTracking === false) {
                    this.instrumentFetch();
                }
            }
        };
        AjaxMonitor.identifier = "AjaxDependencyPlugin";
        return AjaxMonitor;
    }();
    "use strict";
    var propertiesPlugin = "AppInsightsPropertiesPlugin";
    var Initialization = function() {
        function Initialization(snippet) {
            snippet.queue = snippet.queue || [];
            var config = snippet.config || {};
            if (config && !config.instrumentationKey) {
                config = snippet;
                ApplicationInsights.Version = "2.0.0";
            }
            this.appInsights = new ApplicationInsights();
            this.properties = new PropertiesPlugin();
            this.dependencies = new AjaxMonitor();
            this.snippet = snippet;
            this.config = config;
            this.getSKUDefaults();
        }
        Initialization.prototype.trackEvent = function(event, customProperties) {
            this.appInsights.trackEvent(event, customProperties);
        };
        Initialization.prototype.trackPageView = function(pageView, customProperties) {
            this.appInsights.trackPageView(pageView, customProperties);
        };
        Initialization.prototype.trackPageViewPerformance = function(pageViewPerformance, customProperties) {
            this.appInsights.trackPageViewPerformance(pageViewPerformance, customProperties);
        };
        Initialization.prototype.trackException = function(exception, customProperties) {
            this.appInsights.trackException(exception, customProperties);
        };
        Initialization.prototype._onerror = function(exception) {
            this.appInsights._onerror(exception);
        };
        Initialization.prototype.trackTrace = function(trace, customProperties) {
            this.appInsights.trackTrace(trace, customProperties);
        };
        Initialization.prototype.trackMetric = function(metric, customProperties) {
            this.appInsights.trackMetric(metric, customProperties);
        };
        Initialization.prototype.startTrackPage = function(name) {
            this.appInsights.startTrackPage(name);
        };
        Initialization.prototype.stopTrackPage = function(name, url, customProperties) {
            this.appInsights.stopTrackPage(name, url, customProperties);
        };
        Initialization.prototype.addTelemetryInitializer = function(telemetryInitializer) {
            return this.appInsights.addTelemetryInitializer(telemetryInitializer);
        };
        Initialization.prototype.setAuthenticatedUserContext = function(authenticatedUserId, accountId, storeInCookie) {
            if (storeInCookie === void 0) {
                storeInCookie = false;
            }
            this.properties.user.setAuthenticatedUserContext(authenticatedUserId, accountId, storeInCookie);
        };
        Initialization.prototype.clearAuthenticatedUserContext = function() {
            this.properties.user.clearAuthenticatedUserContext();
        };
        Initialization.prototype.trackDependencyData = function(dependency, customProperties) {
            this.dependencies.trackDependencyData(dependency, customProperties);
        };
        Initialization.prototype.flush = function(async) {
            if (async === void 0) {
                async = true;
            }
            this.core.getTransmissionControls().forEach(function(channels) {
                channels.forEach(function(channel) {
                    channel.flush(async);
                });
            });
        };
        Initialization.prototype.loadAppInsights = function() {
            this.core = new AppInsightsCore();
            var extensions = [];
            var appInsightsChannel = new Sender();
            extensions.push(appInsightsChannel);
            extensions.push(this.properties);
            extensions.push(this.dependencies);
            extensions.push(this.appInsights);
            this.core.initialize(this.config, extensions);
            this.emptyQueue();
            this.pollInternalLogs();
            this.addHousekeepingBeforeUnload(this);
            return this;
        };
        Initialization.prototype.emptyQueue = function() {
            try {
                if (Util.isArray(this.snippet.queue)) {
                    var length = this.snippet.queue.length;
                    for (var i = 0; i < length; i++) {
                        var call = this.snippet.queue[i];
                        call();
                    }
                    this.snippet.queue = undefined;
                    delete this.snippet.queue;
                }
            } catch (exception) {
                var properties = {};
                if (exception && typeof exception.toString === "function") {
                    properties.exception = exception.toString();
                }
            }
        };
        Initialization.prototype.pollInternalLogs = function() {
            this.core.pollInternalLogs();
        };
        Initialization.prototype.addHousekeepingBeforeUnload = function(appInsightsInstance) {
            if (!appInsightsInstance.appInsights.config.disableFlushOnBeforeUnload && "onbeforeunload" in window) {
                var performHousekeeping = function() {
                    appInsightsInstance.appInsights.core.getTransmissionControls().forEach(function(queues) {
                        queues.forEach(function(channel) {
                            return channel.flush(true);
                        });
                    });
                    if (appInsightsInstance.appInsights.core["_extensions"][propertiesPlugin] && appInsightsInstance.appInsights.core["_extensions"][propertiesPlugin]._sessionManager) {
                        appInsightsInstance.appInsights.core["_extensions"][propertiesPlugin]._sessionManager.backup();
                    }
                };
                if (!Util.addEventHandler("beforeunload", performHousekeeping)) {
                    appInsightsInstance.appInsights.core.logger.throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.FailedToAddHandlerForOnBeforeUnload, "Could not add handler for beforeunload");
                }
            }
        };
        Initialization.prototype.getSKUDefaults = function() {
            var enableOldTags = ConfigurationManager.getConfig(this.config, "enableOldTags", propertiesPlugin, true);
            this.config.enableOldTags = enableOldTags;
            this.config.diagnosticLogInterval = this.config.diagnosticLogInterval && this.config.diagnosticLogInterval > 0 ? this.config.diagnosticLogInterval : 1e4;
        };
        return Initialization;
    }();
    var shim = {
        trackEvent: function() {}
    };
    var appInsights = shim;
    function initInstrumentation() {
        jsllReady.then(instrument);
    }
    function instrument(awa) {
        var repo = context.repo;
        window$1.addEventListener(issueCreatedEvent, function(event) {
            var _a = event.detail, _b = _a.issue, id = _b.id, number = _b.number, title = _b.title, user = _b.user.login, author_association = _b.author_association, body = _a.bodyMarkdown;
            awa.ct.captureContentPageAction({
                content: {
                    type: "github-issue-created",
                    repo: repo,
                    id: id,
                    number: number,
                    title: title,
                    body: body,
                    user: user,
                    author_association: author_association
                }
            });
        });
        window$1.addEventListener(commentCreatedEvent, function(event) {
            var issueNumber = event.detail.issueNumber;
            var _a = event.detail, _b = _a.comment, id = _b.id, user = _b.user.login, author_association = _b.author_association, body = _a.bodyMarkdown;
            awa.ct.captureContentPageAction({
                content: {
                    type: "github-comment-created",
                    repo: repo,
                    id: id,
                    issueNumber: issueNumber,
                    body: body,
                    user: user,
                    author_association: author_association
                }
            });
        });
        window$1.addEventListener(reactionChangedEvent, function(event) {
            var _a = event.detail, ownerId = _a.ownerId, ownerType = _a.ownerType, _b = _a.reaction, id = _b.id, user = _b.user.login, content = _b.content, deleted = _a.deleted;
            awa.ct.captureContentPageAction({
                content: {
                    type: "github-reaction-changed",
                    repo: repo,
                    id: id,
                    ownerId: ownerId,
                    ownerType: ownerType,
                    user: user,
                    content: content,
                    deleted: deleted
                }
            });
        });
        window$1.addEventListener(rateLimitExceededEvent, function(event) {
            var error = event.detail;
            var apiType = error.isSearch ? "search" : "standard";
            appInsights.trackEvent({
                name: "github-" + apiType + "-rate-limit-exceeded"
            });
            awa.ct.captureContentPageAction({
                content: {
                    type: "github-rate-limit-exceeded",
                    "api-type": apiType
                }
            });
        });
        window$1.addEventListener(githubApiErrorEvent, function(event) {
            var _a = event.detail, url = _a.url, status = _a.status, responseText = _a.responseText;
            awa.ct.captureContentPageAction({
                content: {
                    type: "github-api-error",
                    url: url,
                    status: status,
                    responseText: responseText
                }
            });
        });
    }
    function initIssueForm(section) {
        var form = section.querySelector(".feedback-form");
        var title = form.elements.namedItem("title");
        var body = form.elements.namedItem("body");
        var submitButton = form.elements.namedItem("submit");
        configureValidation(form);
        form.onsubmit = function() {
            if (submitButton.disabled || !confirmSubmit("issue")) {
                return;
            }
            submitButton.disabled = true;
            submitButton.classList.add("is-loading");
            submitIssue(title.value, body.value).then(function() {
                return resetForm(form);
            }, function() {
                var url = getCreateOnGitHubUrl(title.value, body.value);
                var message = loc_errorCreatingIssue.replace("{0}", url);
                showFormAlert(form, message);
            }).then(function() {
                submitButton.disabled = false;
                submitButton.classList.remove("is-loading");
            });
        };
    }
    function submitIssue(title, body) {
        body = formatIssueBody(body);
        return createIssue(context.repo, title, body).then(function(issue) {
            return window$1.dispatchEvent(new CustomEvent(issueCreatedEvent, {
                detail: {
                    issue: issue,
                    bodyMarkdown: body
                }
            }));
        });
    }
    function whenVisible(section) {
        return new Promise(function(resolve) {
            var inViewPort = false;
            var observer;
            var evaluate = function() {
                if (!inViewPort || document.hidden) {
                    return;
                }
                document.removeEventListener("visibilitychange", evaluate);
                if (observer) {
                    observer.disconnect();
                }
                removeEventListener("resize", fallbackCheck);
                removeEventListener("scroll", fallbackCheck);
                removeEventListener("content-updated", fallbackCheck);
                document.querySelector(".primary-holder").addEventListener("scroll", fallbackCheck);
                resolve();
            };
            var fallbackCheck = function() {
                var rect = section.getBoundingClientRect();
                var newValue = rect.top >= 0 && rect.top <= document.documentElement.clientHeight;
                if (newValue !== inViewPort) {
                    inViewPort = newValue;
                    evaluate();
                }
            };
            document.addEventListener("visibilitychange", evaluate);
            if (typeof IntersectionObserver === "undefined") {
                addEventListener("resize", fallbackCheck);
                addEventListener("scroll", fallbackCheck);
                addEventListener("content-updated", fallbackCheck);
                document.querySelector(".primary-holder").addEventListener("scroll", fallbackCheck);
                fallbackCheck();
            } else {
                var callback = function(entries) {
                    inViewPort = entries[0].intersectionRatio > 0;
                    evaluate();
                };
                observer = new IntersectionObserver(callback);
                observer.observe(section);
            }
            evaluate();
        });
    }
    var loadingFeedbackEvent = "loading-feedback-event";
    function loadFeedback(section) {
        var loadFeedback = function() {
            window$1.dispatchEvent(new CustomEvent(loadingFeedbackEvent));
            loadIssuesByTermInBody(context.repo, context.versionIndependentDocumentId).then(function(result) {
                var issues = result.items.filter(function(x) {
                    return !x.locked;
                });
                window$1.dispatchEvent(new CustomEvent(issuesLoadedEvent, {
                    detail: issues
                }));
            });
        };
        Promise.all([ cookieConsent, whenVisible(section) ]).then(loadFeedback);
    }
    function initStatusAlert(section) {
        var alert = section.querySelector(".feedback-status");
        window$1.addEventListener(loadingFeedbackEvent, function() {
            alert.hidden = false;
            alert.classList.remove("is-warning");
            alert.classList.remove("is-info");
            alert.classList.add("is-loading");
            alert.innerHTML = "<p>" + loc_loadingFeedback + "</p>";
        });
        window$1.addEventListener(issueCreatedEvent, function() {
            return alert.hidden = true;
        });
        window$1.addEventListener(issuesLoadedEvent, function(event) {
            var issues = event.detail;
            if (issues.length > 0) {
                alert.hidden = true;
            } else {
                alert.hidden = false;
                alert.textContent = loc_thereIsCurrentlyNoFeedback;
                alert.classList.remove("is-warning");
                alert.classList.remove("is-info");
                alert.classList.remove("is-loading");
            }
        });
        window$1.addEventListener(rateLimitExceededEvent, function(event) {
            var err = event.detail;
            if (!err.isSearch) {
                return;
            }
            var message = "" + loc_rateLimitedLoadingIssues;
            alert.hidden = false;
            alert.classList.remove("is-warning");
            alert.classList.add("is-info");
            alert.classList.remove("is-loading");
            alert.innerHTML = "<p>" + message + "</p>";
        });
        window$1.addEventListener(githubApiErrorEvent, function(event) {
            var details = event.detail;
            if (!details.isSearch) {
                return;
            }
            alert.hidden = false;
            alert.classList.add("is-warning");
            alert.classList.remove("is-info");
            alert.classList.remove("is-loading");
            alert.innerHTML = "<p>" + loc_errorLoadingFeedback + "</p>";
        });
    }
    function initViewOnGithub(section) {
        var viewOnGitHub = section.querySelector(".view-on-github");
        viewOnGitHub.search = toQueryString({
            utf8: "✓",
            q: '"' + context.versionIndependentDocumentId + '"',
            in: "body"
        });
        var handleOverflow = function() {
            viewOnGitHub.firstElementChild.nextElementSibling.textContent = loc_viewMoreOnGitHub;
            window$1.removeEventListener(issueListOverflowEvent, handleOverflow);
        };
        window$1.addEventListener(issueListOverflowEvent, handleOverflow);
        var handleIssues = function(_a) {
            var type = _a.type, detail = _a.detail;
            if (type === issuesLoadedEvent && detail.length === 0) {
                return;
            }
            viewOnGitHub.hidden = false;
            window$1.removeEventListener(issuesLoadedEvent, handleIssues);
            window$1.removeEventListener(issueCreatedEvent, handleIssues);
        };
        window$1.addEventListener(issuesLoadedEvent, handleIssues);
        window$1.addEventListener(issueCreatedEvent, handleIssues);
    }
    function initFeedback() {
        var section = document.body.querySelector(".feedback-section");
        initSignInButtonHandler(section);
        initChooseFeedback(section);
        initIssueForm(section);
        initUser(section);
        initIssueLists(section);
        initStatusAlert(section);
        initReactions(section);
        initInstrumentation();
        initViewOnGithub(section);
        loadFeedback(section);
        addEventListener("keydown", function(_a) {
            var keyCode = _a.keyCode, altKey = _a.altKey, ctrlKey = _a.ctrlKey;
            if (keyCode === 71 && altKey && ctrlKey && clipboardCopy(formatIssueBody(""), document.body)) {
                alert("✅ GitHub issue footer copied.");
            }
        });
    }
    if (!Array.prototype.find) {
        Object.defineProperty(Array.prototype, "find", {
            value: function(predicate) {
                if (this == null) {
                    throw new TypeError('"this" is null or not defined');
                }
                var o = Object(this);
                var len = o.length >>> 0;
                if (typeof predicate !== "function") {
                    throw new TypeError("predicate must be a function");
                }
                var thisArg = arguments[1];
                var k = 0;
                while (k < len) {
                    var kValue = o[k];
                    if (predicate.call(thisArg, kValue, k, o)) {
                        return kValue;
                    }
                    k++;
                }
                return undefined;
            }
        });
    }
    if (!Array.prototype.findIndex) {
        Object.defineProperty(Array.prototype, "findIndex", {
            value: function(predicate) {
                if (this == null) {
                    throw new TypeError('"this" is null or not defined');
                }
                var o = Object(this);
                var len = o.length >>> 0;
                if (typeof predicate !== "function") {
                    throw new TypeError("predicate must be a function");
                }
                var thisArg = arguments[1];
                var k = 0;
                while (k < len) {
                    var kValue = o[k];
                    if (predicate.call(thisArg, kValue, k, o)) {
                        return k;
                    }
                    k++;
                }
                return -1;
            },
            configurable: true,
            writable: true
        });
    }
    if (Array.from === undefined) {
        Array.from = function(x) {
            return Array.prototype.slice.call(x);
        };
    }
    function fixDate() {
        $$1("time[datetime]").each(function() {
            var originalAttr = $$1(this).attr("datetime");
            var originalText = $$1(this).text();
            var $this = $$1(this);
            try {
                var dateVal = new Date(originalAttr);
                $this.attr("datetime", dateVal.toISOString());
                $this.text(dateVal.toLocaleDateString(msDocs.data.userLocale, {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                }));
            } catch (e) {
                $this.attr("datetime", originalAttr).text(originalText);
            }
            $this.removeClass("loading").parent().removeClass("loading");
        });
    }
    function enableGoogleAnalytics() {
        if (location.hostname !== "docs.microsoft.com") {
            return;
        }
        Promise.all([ contentLoaded, cookieConsent ]).then(function() {
            (function(i, s, o, g, r, a, m) {
                i.GoogleAnalyticsObject = r;
                i[r] = i[r] || function() {
                    (i[r].q = i[r].q || []).push(arguments);
                }, i[r].l = 1 * new Date();
                a = s.createElement(o), m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m);
            })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");
            ga("create", "UA-62780441-21", "auto");
            ga("set", "anonymizeIp", true);
            ga("send", "pageview");
        });
    }
    var headingAnchorWhitelist = {
        Conceptual: true,
        ContentPage: true,
        LandingPage: true,
        Reference: true,
        Rest: true
    };
    function handleHeadings(container) {
        if (!(msDocs.data.pageTemplate in headingAnchorWhitelist)) {
            return;
        }
        var allowParents = [ ".content", ".content section", ".content [data-moniker]", ".anchor-headings" ];
        var allowHeadings = [ "h2", "h3", "h4", "h5", "h6" ];
        var headings = Array.from(container.querySelectorAll("" + allowHeadings.join(",")));
        headings.forEach(function(heading) {
            if (heading.parentElement.matches("" + allowParents.join(","))) {
                heading.classList.add("heading-with-anchor");
                var id = heading.id || getVisibleTextContent(heading).trim().toLowerCase().split(" ").join("-");
                if (!heading.id) {
                    heading.id = id;
                }
                var html = '<a class="docon docon-link heading-anchor" tabindex="-1" aria-hidden="true" href="#' + id + '"></a>';
                heading.insertAdjacentHTML("beforeend", html);
            }
        });
    }
    function ie10MobileFix() {
        if (navigator$1.userAgent.match(/IEMobile\/10\.0/)) {
            var msViewportStyle = document$1.createElement("style");
            msViewportStyle.appendChild(document$1.createTextNode("@-ms-viewport{width:auto!important}"));
            document$1.getElementsByTagName("head")[0].appendChild(msViewportStyle);
        }
    }
    function login$1(navigate) {
        var args = {
            type: "azure",
            signInUrl: "https://token.docs.microsoft.com/signin",
            returnUrlArg: "returnUrl",
            signInArgs: {},
            navigate: navigate
        };
        return doOAuthFlow(args);
    }
    function azureOAuthLogout(navigate) {
        if (navigate === void 0) {
            navigate = false;
        }
        var args = {
            type: "azure-logout",
            signInUrl: "https://token.docs.microsoft.com/signout",
            returnUrlArg: "returnUrl",
            signInArgs: {},
            navigate: navigate
        };
        return doOAuthFlow(args).then(function() {
            azureToken.value = null;
        });
    }
    var signingInHtml = "\n\t<h2>" + escape$1(loc_signingIn) + "</h2>\n\t" + loadingHtml;
    function azureOAuthLogin(container) {
        return new Promise(function(resolve) {
            container.innerHTML = '\n\t\t\t<div class="azure-auth">\n\t\t\t\t<div class="azure-auth-step">\n\t\t\t\t\t' + signingInHtml + "\n\t\t\t\t</div>\n\t\t\t</div>";
            var authContainer = container.firstElementChild.firstElementChild;
            var resolveToken = function(token) {
                container.innerHTML = "";
                azureToken.value = token;
                resolve(token);
            };
            var processTokens = function(tokens) {
                if (tokens === null) {
                    azureToken.value = null;
                    if (azureSandbox.value) {
                        var args = parseQueryString();
                        args[azureSandboxActivateParameter] = "true";
                        updateQueryString(args, "replaceState");
                        login$1(true);
                    } else {
                        renderLogin(authContainer, processTokens);
                    }
                } else if (azureSandbox.value) {
                    var token = tokens.find(function(t) {
                        return t.tenant_id === azureSandbox.value.tenantId;
                    });
                    if (token) {
                        resolveToken(token);
                    } else {
                        renderLogout(authContainer);
                    }
                } else if (tokens.length === 1) {
                    resolveToken(tokens[0]);
                } else {
                    renderTokenSelector(authContainer, resolveToken, tokens);
                }
            };
            tokenApi.tryLoad().then(processTokens);
        });
    }
    function renderLogin(container, processTokens) {
        reportLoginPrompt();
        container.innerHTML = "\n\t\t<h2>" + escape$1(loc_signIn) + "</h2>\n\t\t<p>" + escape$1(loc_signInAzure) + '</p>\n\t\t<button type="button" class="button is-primary is-radiusless" data-bi-name="azure-auth-login">\n\t\t\t' + loc_signIn + "\n\t\t</button>";
        var loginButton = container.querySelector("button");
        loginButton.onclick = function() {
            reportLogin();
            container.innerHTML = signingInHtml;
            login$1(false).then(tokenApi.tryLoad).then(function(tokens) {
                if (tokens) {
                    reportAuthorized();
                }
                processTokens(tokens);
            });
        };
    }
    function renderTokenSelector(container, resolve, tokens) {
        container.innerHTML = "\n\t\t<h2>" + loc_chooseAzureAccount + '</h2>\n\t\t<ul class="azure-auth-tokens"></ul>';
        var list = container.lastElementChild;
        var _loop_1 = function(token) {
            list.insertAdjacentHTML("beforeend", '\n\t\t\t<li>\n\t\t\t\t<button class="azure-auth-token has-inner-focus" type="button" data-bi-name="azure-auth-token">\n\t\t\t\t\t<span>' + escape$1(token.display_name) + "</span>\n\t\t\t\t\t<span>" + escape$1(token.default_domain) + "</span>\n\t\t\t\t</button>\n\t\t\t</li>");
            var button = list.lastElementChild.firstElementChild;
            button.onclick = function() {
                return resolve(token);
            };
        };
        for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
            var token = tokens_1[_i];
            _loop_1(token);
        }
    }
    function renderLogout(container) {
        container.innerHTML = "\n\t\t<p>" + escape$1(loc_signInCloudShellWithDifferentAccount) + '</p>\n\t\t<button type="button" class="button is-primary is-radiusless" data-bi-name="azure-auth-logout">\n\t\t\t' + loc_signOut + "\n\t\t</button>";
        var logoutButton = container.querySelector("button");
        logoutButton.onclick = function() {
            return azureOAuthLogout(true);
        };
    }
    function reportLoginPrompt() {
        jsllReady.then(function(awa) {
            var _a;
            return awa.ct.captureContentPageAction({
                behavior: awa.behavior.STARTPROCESS,
                actionType: awa.actionType.CLICKLEFT,
                contentTags: (_a = {}, _a[contentTags.scenario] = "azure-cli-login", _a[contentTags.scenarioStep] = "login-prompt", 
                _a)
            });
        });
    }
    function reportLogin() {
        jsllReady.then(function(awa) {
            var _a;
            return awa.ct.captureContentPageAction({
                behavior: awa.behavior.PROCESSCHECKPOINT,
                actionType: awa.actionType.CLICKLEFT,
                contentTags: (_a = {}, _a[contentTags.scenario] = "azure-cli-login", _a[contentTags.scenarioStep] = "login", 
                _a)
            });
        });
    }
    function reportAuthorized() {
        jsllReady.then(function(awa) {
            var _a;
            return awa.ct.captureContentPageAction({
                behavior: awa.behavior.COMPLETEPROCESS,
                actionType: awa.actionType.OTHER,
                contentTags: (_a = {}, _a[contentTags.scenario] = "azure-cli-login", _a[contentTags.scenarioStep] = "authorized", 
                _a)
            });
        });
    }
    function configureCloudShell(sandbox, token, isPowershell) {
        var settings = {
            properties: {
                preferredOsType: isPowershell ? "Windows" : "Linux",
                preferredLocation: "westus",
                storageProfile: {
                    storageAccountResourceId: sandbox.storageAccountId,
                    fileShareName: sandbox.fileShareName,
                    diskSizeInGB: 1
                },
                terminalSettings: {
                    fontSize: "Medium",
                    fontStyle: "Monospace"
                }
            }
        };
        var url = "https://management.azure.com/providers/Microsoft.Portal/userSettings/cloudconsole?api-version=2017-08-01-preview";
        var init = {
            method: "PUT",
            headers: {
                Accept: "application/json",
                Authorization: token.access_token_type + " " + token.access_token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(settings)
        };
        return fetchWithTimeout(url, init).then(function(response) {
            if (response.ok) {
                return;
            }
            throw new Error(response.statusText);
        });
    }
    function deleteCloudShellSession(token) {
        var url = "https://management.azure.com/providers/Microsoft.Portal/consoles/default?api-version=2017-12-01-preview";
        var init = {
            method: "DELETE",
            headers: {
                Authorization: token.access_token_type + " " + token.access_token
            }
        };
        return fetchWithTimeout(url, init).then(function(response) {
            if (response.ok) {
                return;
            }
            throw new Error(response.statusText);
        });
    }
    var cliPageOrigin = "https://ux.console.azure.com";
    var CloudShell = function() {
        function CloudShell(isPowerShell) {
            var _this = this;
            this.isPowerShell = isPowerShell;
            this.messageHandler = function(_a) {
                var _b = _a.data, signature = _b.signature, type = _b.type, audience = _b.audience, origin = _a.origin;
                if (!_this.consoleFrame.contentWindow) {
                    return;
                }
                if (origin !== cliPageOrigin || signature !== "portalConsole" || type !== "getToken") {
                    return;
                }
                _this.replyToken(audience);
            };
            window$1.addEventListener("message", this.messageHandler);
            this.element = document$1.createElement("div");
            this.element.classList.add("cloud-shell");
            this.element.setAttribute(contentAttrs.name, "azure-cli");
            this.element.cloudShell = this;
            azureOAuthLogin(this.element).then(function() {
                _this.element.classList.add("has-text-" + (isPowerShell ? "powershell" : "bash") + "-invert");
                _this.element.classList.add("has-background-" + (isPowerShell ? "powershell" : "bash"));
                if (azureSandbox.value) {
                    _this.element.innerHTML = '\n\t\t\t\t\t\t<div class="is-monospace is-size-6 has-padding-medium is-full-height is-vertically-scrollable">\n\t\t\t\t\t\t\t<p>Azure Cloud Shell</p>\n\t\t\t\t\t\t\t<p>' + loc_configuringCloudShellForSandbox + "</p>\n\t\t\t\t\t\t</div>";
                    return deleteCloudShellSession(azureToken.value).then(function() {
                        return configureCloudShell(azureSandbox.value, azureToken.value, isPowerShell);
                    });
                }
                return Promise.resolve();
            }).then(function() {
                return _this.whenPageVisible();
            }).then(function() {
                var lang = getCloudShellLanguage(msDocs.data.userLocale);
                _this.element.innerHTML = '\n\t\t\t\t\t<div class="cloud-shell-header level is-mobile has-margin-bottom-none">\n\t\t\t\t\t\t<div class="level-left">\n\t\t\t\t\t\t\t<div class="level-item">\n\t\t\t\t\t\t\t\t<button title="' + escape$1(loc_restart) + '" class="button has-border-none is-radiusless has-inner-focus has-inverted-focus" data-bi-name="restart">\n\t\t\t\t\t\t\t\t\t<span class="is-size-7 docon docon-navigate-refresh" role="presentation"></span>\n\t\t\t\t\t\t\t\t\t<span class="is-size-7 visually-hidden">' + escape$1(loc_restart) + '</span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<h2 class="is-size-7 has-text-weight-normal has-padding-left-small cloud-shell-header-title">Azure Cloud Shell</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="level-right">\n\t\t\t\t\t\t\t<div class="level-item">\n\t\t\t\t\t\t\t\t<a class="button has-border-none is-radiusless has-inner-focus has-inverted-focus" data-bi-name="feedback" href="https://aka.ms/cloudshellfeedback">\n\t\t\t\t\t\t\t\t\t<span class="is-size-7">' + escape$1(loc_feedback) + '</span>\n\t\t\t\t\t\t\t\t\t<span class="icon docon docon-navigate-external" role="presentation"></span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<iframe\tclass="cloud-shell-frame" title="' + loc_products_azure_cloud_shell + '"\n\t\t\t\t\t\t\t\t\tsrc="' + cliPageOrigin + "?trustedAuthority=" + location$1.origin + "&embed=true&feature.azureconsole.ostype=" + (isPowerShell ? "windows" : "linux") + "&l=" + lang + '"\n\t\t\t\t\t\t\t\t\tframeborder="0">\n\t\t\t\t\t</iframe>';
                var restartButton = _this.element.querySelector('button[data-bi-name="restart"]');
                restartButton.onclick = function() {
                    return _this.restart();
                };
                _this.consoleFrame = _this.element.querySelector("iframe");
            });
        }
        CloudShell.prototype.setCode = function() {
            return Promise.resolve();
        };
        CloudShell.prototype.execute = function() {
            return Promise.resolve();
        };
        CloudShell.prototype.restart = function() {
            if (this.consoleFrame.hidden) {
                return;
            }
            this.consoleFrame.contentWindow.postMessage({
                signature: "portalConsole",
                type: "restart"
            }, cliPageOrigin);
        };
        CloudShell.prototype.dispose = function() {
            this.element.cloudShell = null;
            window$1.azureCliAuthorized = null;
            window$1.removeEventListener("message", this.messageHandler);
        };
        CloudShell.prototype.replyToken = function(audience) {
            var token;
            switch (audience) {
              case "":
                token = azureToken.value.access_token;
                break;

              case "graph":
                token = azureToken.value.graph_access_token;
                break;

              case "keyvault":
                token = azureToken.value.key_vault_access_token;
                break;

              default:
                throw new Error('Unsupported token audience: "' + audience + '".');
            }
            this.consoleFrame.contentWindow.postMessage({
                signature: "portalConsole",
                type: "postToken",
                audience: audience,
                message: "Bearer " + token
            }, cliPageOrigin);
        };
        CloudShell.prototype.whenPageVisible = function() {
            if (document$1.visibilityState === "visible") {
                return Promise.resolve();
            }
            return new Promise(function(resolve) {
                return document$1.addEventListener("visibilitychange", function() {
                    if (document$1.visibilityState === "visible") {
                        resolve();
                    }
                });
            });
        };
        return CloudShell;
    }();
    var activateButtonConfig = {
        name: loc_tryIt,
        iconClass: "docon docon-terminal",
        attributes: [ {
            name: "aria-haspopup",
            value: "true"
        } ]
    };
    registerInteractiveType({
        name: "bash",
        activateButtonConfig: activateButtonConfig,
        create: function() {
            return new CloudShell(false);
        }
    });
    registerInteractiveType({
        name: "powershell",
        activateButtonConfig: activateButtonConfig,
        create: function() {
            return new CloudShell(true);
        }
    });
    function getCloudShellLanguage(locale) {
        switch (locale) {
          case "zh-cn":
            return "zh-hans";

          case "zh-hk":
            return "zh-hans";

          case "zh-tw":
            return "zh-hant";
        }
        var cloudShellSupports = [ "en", "cs", "de", "es", "fr", "hu", "it", "ja", "ko", "nl", "pl", "pt-br", "pt-pt", "ru", "sv", "tr", "zh-hans", "zh-hant" ];
        var match = cloudShellSupports.find(function(lang) {
            return locale.indexOf(lang) === 0;
        });
        return match || "en";
    }
    var dotNetOnlineOrigin = "https://try.dot.net";
    var iconClass = "docon docon-play";
    registerInteractiveType({
        name: "csharp",
        activateButtonConfig: {
            name: loc_run,
            iconClass: iconClass,
            attributes: []
        },
        create: function() {
            return new DotNetOnline();
        }
    });
    var DotNetOnline = function() {
        function DotNetOnline() {
            var _this = this;
            this.pendingMessages = {};
            this.messageHandler = function(_a) {
                var data = _a.data, origin = _a.origin, source = _a.source;
                if (origin !== dotNetOnlineOrigin || source !== _this.editor.contentWindow || !_this.pendingMessages[data.type]) {
                    return;
                }
                var pendingMessage = _this.pendingMessages[data.type];
                delete _this.pendingMessages[data.type];
                clearTimeout(pendingMessage.timeoutId);
                pendingMessage.resolve(data);
            };
            this.themeHandler = function() {
                _this.setTheme();
            };
            this.element = document$1.createElement("div");
            this.element.classList.add("dotnet-online");
            this.element.dotnetOnline = this;
            this.element.innerHTML = '\n\t\t\t<div class="dotnet-online-editor-section" hidden>\n\t\t\t\t<div class="dotnet-online-header">\n\t\t\t\t\t<h3>' + escape$1(loc_dotnetEditor) + '</h3>\n\t\t\t\t\t<button class="button is-success is-radiusless has-inner-focus" data-bi-name="tutorial-run-csharp">\n\t\t\t\t\t\t<span class="' + iconClass + '" role="presentation"></span>\n\t\t\t\t\t\t<span>' + escape$1(loc_run) + '</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<iframe title="' + loc_dotnetEditor + '" class="dotnet-online-editor" src="' + dotNetOnlineOrigin + "/v2/editor?hostOrigin=" + encodeURIComponent(location.origin) + '&waitForConfiguration=true">\n\t\t\t\t</iframe>\n\t\t\t\t<div class="dotnet-online-header">\n\t\t\t\t\t<h3>' + escape$1(loc_output) + '</h3>\n\t\t\t\t\t<a class="button is-transparent is-radiusless has-inner-focus" data-bi-name="feedback" href="https://github.com/dotnet/try">\n\t\t\t\t\t\t<span class="docon docon-feedback-positive-outline" role="presentation"></span>\n\t\t\t\t\t\t<span class="visually-hidden">' + escape$1(loc_feedback) + '</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<pre class="dotnet-online-output"></pre>\n\t\t\t</div>\n\t\t\t<div class="dotnet-online-service-unavailable" hidden>' + escape$1(loc_serviceUnavailable) + '</div>\n\t\t\t<div class="dotnet-online-loader c-progress f-indeterminate-local f-progress-large" role="progressbar" tabindex="0" aria-valuetext="' + loc_loading + '" aria-label="' + loc_loading + '">\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t</div>';
            var _a = Array.from(this.element.children).map(function(x) {
                return x;
            }), editorSection = _a[0], serviceUnavailable = _a[1], loader = _a[2];
            this.runButton = editorSection.querySelector("button");
            this.runButton.onclick = function() {
                return _this.execute();
            };
            this.editor = editorSection.querySelector("iframe");
            this.output = editorSection.querySelector("pre");
            window$1.addEventListener("message", this.messageHandler);
            window$1.addEventListener("theme-changed", this.themeHandler);
            this.ready = this.waitForMessage("HostListenerReady").then(function() {
                return Promise.all([ _this.setCodeInternal(""), _this.setTheme() ]);
            }).then(function() {
                return _this.showEditor();
            }).then(function() {
                loader.hidden = true;
                editorSection.hidden = false;
            }).catch(function(err) {
                loader.hidden = true;
                editorSection.hidden = true;
                serviceUnavailable.hidden = false;
                throw err;
            });
        }
        DotNetOnline.prototype.waitForMessage = function(type) {
            var _this = this;
            return new Promise(function(resolve, reject) {
                var timeoutId = setTimeout(function() {
                    delete _this.pendingMessages[type];
                    reject("timeout");
                }, 30 * 1e3);
                _this.pendingMessages[type] = {
                    resolve: resolve,
                    timeoutId: timeoutId
                };
            });
        };
        DotNetOnline.prototype.setTheme = function() {
            var isDark = document$1.documentElement.classList.contains("theme_night");
            var theme = isDark ? "vs-dark" : "vs-light";
            this.editor.contentWindow.postMessage({
                type: "configureMonacoEditor",
                editorOptions: {
                    theme: theme,
                    scrollBeyondLastLine: true,
                    minimap: {
                        enabled: false
                    }
                },
                theme: theme
            }, dotNetOnlineOrigin);
            return Promise.resolve();
        };
        DotNetOnline.prototype.setCodeInternal = function(code) {
            this.editor.contentWindow.postMessage({
                type: "setSourceCode",
                sourceCode: code
            }, dotNetOnlineOrigin);
            return this.waitForMessage("CodeModified");
        };
        DotNetOnline.prototype.setCode = function(code) {
            var _this = this;
            return this.ready.then(function() {
                return _this.setCodeInternal(code);
            });
        };
        DotNetOnline.prototype.showEditor = function() {
            this.editor.hidden = false;
            this.editor.contentWindow.postMessage({
                type: "showEditor"
            }, dotNetOnlineOrigin);
            return this.waitForMessage("MonacoEditorReady");
        };
        DotNetOnline.prototype.focus = function() {
            this.editor.contentWindow.postMessage({
                type: "focusEditor"
            }, dotNetOnlineOrigin);
            return Promise.resolve();
        };
        DotNetOnline.prototype.execute = function() {
            var _this = this;
            if (this.runPromise) {
                return this.runPromise;
            }
            this.runButton.classList.add("is-loading");
            this.output.classList.remove("error");
            this.output.textContent = "";
            var interval = setInterval(function() {
                _this.output.textContent += ".";
                if (_this.output.textContent.length > 3) {
                    _this.output.textContent = "";
                }
            }, 200);
            this.editor.contentWindow.postMessage({
                type: "run"
            }, dotNetOnlineOrigin);
            this.runPromise = this.waitForMessage("RunCompleted").then(function(result) {
                _this.runPromise = null;
                clearInterval(interval);
                _this.runButton.classList.remove("is-loading");
                switch (result.outcome) {
                  case "CompilationError":
                    _this.output.classList.add("error");
                    _this.output.textContent = result.output.join("\n");
                    break;

                  case "Exception":
                    _this.output.classList.add("error");
                    _this.output.textContent = result.output.join("\n") + "\n" + result.exception;
                    break;

                  case "Success":
                    _this.output.classList.remove("error");
                    var output = result.output.join("\n");
                    if (output.length === 0) {
                        output = loc_noOutput;
                    }
                    _this.output.textContent = output;
                    break;

                  default:
                    throw new Error("Unexpected run result: " + _this.output);
                }
            });
            this.runPromise.catch(function(reason) {
                clearInterval(interval);
                _this.runPromise = null;
                _this.output.classList.add("error");
                _this.output.textContent = loc_serviceUnavailable;
                console.error(reason);
            });
            return this.runPromise;
        };
        DotNetOnline.prototype.dispose = function() {
            window$1.removeEventListener("message", this.messageHandler);
            window$1.removeEventListener("theme-changed", this.themeHandler);
        };
        return DotNetOnline;
    }();
    function scrollTo(y, duration, container) {
        if (container === void 0) {
            container = window;
        }
        var startingY = container instanceof Window ? window.pageYOffset : container.scrollTop;
        var diff = y - startingY;
        var start;
        function step(timestamp) {
            if (!start) {
                start = timestamp;
            }
            var elapsed = timestamp - start;
            var targetPercentComplete = Math.min(elapsed / duration, 1);
            if (container instanceof Window) {
                container.scrollTo(0, startingY + diff * targetPercentComplete);
            } else {
                container.scrollTop = startingY + diff * targetPercentComplete;
            }
            if (elapsed < duration) {
                window.requestAnimationFrame(step);
            }
        }
        window.requestAnimationFrame(step);
    }
    function restRequest(tryitRequest, init) {
        init = init || {};
        init.mode = "cors";
        init.cache = "reload";
        init.method = tryitRequest.httpVerb;
        if (tryitRequest.body) {
            init.body = tryitRequest.body;
        }
        var url = tryitRequest.url;
        var request = new Request(url, init);
        if (azureToken.value !== null) {
            request.headers.set("Authorization", "Bearer " + azureToken.value.access_token);
        }
        if (tryitRequest.headers !== null) {
            tryitRequest.headers.forEach(function(item) {
                if (item.value !== "") {
                    request.headers.set(item.name, item.value);
                }
            });
        }
        return request;
    }
    function restFetch(request) {
        return fetch(request).then(function(response) {
            jsllReady.then(function(awa) {
                awa.ct.captureContentPageAction({
                    behavior: awa.behavior.OTHER,
                    actionType: awa.actionType.OTHER,
                    content: {
                        event: "rest-tryit-fetch-complete",
                        status: response.status,
                        method: request.method
                    }
                });
            });
            return response;
        });
    }
    function createRestTryitResponse(response) {
        var tryitResponse = {};
        tryitResponse.statusCode = response.status.toString();
        var headers = response.headers;
        tryitResponse.header = "";
        headers.forEach(function(value, key) {
            tryitResponse.header += key + ": " + value + "\n";
        });
        if (/application\/json/i.test(response.headers.get("Content-Type"))) {
            return response.json().then(function(data) {
                tryitResponse.body = JSON.stringify(data, null, 2);
                return tryitResponse;
            });
        } else {
            return response.text().then(function(text) {
                tryitResponse.body = text;
                return tryitResponse;
            });
        }
    }
    var RestRetrieveRequestData = function() {
        function RestRetrieveRequestData(restTryItRequest) {
            this.restTryItRequest = restTryItRequest;
        }
        return RestRetrieveRequestData;
    }();
    var RestRunEvent = function() {
        function RestRunEvent(restTryItRequest) {
            this.restTryItRequest = restTryItRequest;
        }
        return RestRunEvent;
    }();
    var RestRunEventDone = function() {
        function RestRunEventDone() {}
        return RestRunEventDone;
    }();
    var RestParamValueChanged = function() {
        function RestParamValueChanged() {}
        return RestParamValueChanged;
    }();
    var RestAddParamEvent = function() {
        function RestAddParamEvent(param) {
            this.param = param;
        }
        return RestAddParamEvent;
    }();
    var RestSubscriptionIdLoading = function() {
        function RestSubscriptionIdLoading() {}
        return RestSubscriptionIdLoading;
    }();
    var RestSubscriptionIdLoaded = function() {
        function RestSubscriptionIdLoaded(subscriptions) {
            this.subscriptions = subscriptions;
        }
        return RestSubscriptionIdLoaded;
    }();
    var RestRenderResponse = function() {
        function RestRenderResponse(response) {
            this.response = response;
        }
        return RestRenderResponse;
    }();
    function renderHttpRequest(container, bus, request) {
        var blockDiv = document.createElement("div");
        var heading = document.createElement("h3");
        heading.textContent = loc_requestPreview;
        blockDiv.appendChild(heading);
        var codeHeader = document.createElement("div");
        codeHeader.classList.add("codeHeader");
        var codeHeading = document.createElement("span");
        codeHeading.classList.add("language");
        codeHeading.textContent = "HTTP";
        codeHeader.appendChild(codeHeading);
        var copyButton = document.createElement("button");
        copyButton.classList.add("action");
        copyButton.classList.add("copy");
        var copySpan = document.createElement("span");
        copyButton.type = "button";
        copySpan.textContent = loc_copy;
        copyButton.appendChild(copySpan);
        codeHeader.appendChild(copyButton);
        copyButton.onclick = function(event) {
            copyCodeBlockToClipboard(codeBlock, "json");
            event.preventDefault();
        };
        var codeBlock = document.createElement("pre");
        codeBlock.setAttribute("name", "http-request");
        codeBlock.textContent = buildHttpRequestString(request);
        codeBlock.classList.add("small");
        blockDiv.appendChild(codeHeader);
        blockDiv.appendChild(codeBlock);
        container.appendChild(blockDiv);
        syntaxHighlight([ {
            code: codeBlock.textContent,
            language: "http",
            highlightLines: ""
        } ]).then(function(results) {
            codeBlock.innerHTML = results[0].html;
        });
        var handleParamValueChanged = function() {
            var requestData = {
                url: null,
                httpVerb: null,
                headers: [],
                params: [],
                body: null
            };
            bus.publish(new RestRetrieveRequestData(requestData));
            codeBlock.textContent = buildHttpRequestString(requestData);
            syntaxHighlight([ {
                code: codeBlock.textContent,
                language: "http",
                highlightLines: ""
            } ]).then(function(results) {
                codeBlock.innerHTML = results[0].html;
            });
        };
        bus.subscribe(RestParamValueChanged, handleParamValueChanged);
    }
    function buildHttpRequestString(request) {
        var httpRequest = restRequest(request);
        var httpRequestString = httpRequest.method + " " + httpRequest.url + "\n";
        var headers = httpRequest.headers;
        headers.forEach(function(value, key) {
            httpRequestString += "" + key[0].toUpperCase() + key.substring(1) + ": " + value + "\n";
        });
        return httpRequestString;
    }
    var subscriptionUrl = "https://management.azure.com/subscriptions?api-version=2016-06-01";
    function renderParam(container, bus, param, isHeaders, urlParams) {
        if (isHeaders === void 0) {
            isHeaders = true;
        }
        if (urlParams === void 0) {
            urlParams = {};
        }
        var li = document.createElement("li");
        li.classList.add("param-group");
        li.classList.add("small");
        var nameGroup = document.createElement("div");
        nameGroup.classList.add("param-name-group");
        var label = document.createElement("label");
        label.classList.add("param-name");
        label.classList.add("param-name-label");
        label.setAttribute("aria-label", "parameter name " + param.name);
        label.textContent = param.name;
        nameGroup.appendChild(label);
        li.appendChild(nameGroup);
        var valueGroup = document.createElement("div");
        valueGroup.classList.add("param-value-group");
        var valueInput = document.createElement("input");
        valueInput.classList.add("param-value");
        var selectList = [];
        var valueSelect = document.createElement("select");
        if (param.type === "boolean") {
            selectList.push("True");
            selectList.push("False");
        }
        switch (param.type) {
          case "boolean":
          case "azure-subscriptions":
          case "enum":
            if (selectList.length >= 1) {
                var defaultOption = document.createElement("option");
                defaultOption.value = "";
                defaultOption.selected = true;
                defaultOption.disabled = true;
                defaultOption.hidden = true;
                defaultOption.text = "Select";
                valueSelect.appendChild(defaultOption);
            }
            selectList.forEach(function(item) {
                var option = document.createElement("option");
                option.value = item;
                option.text = item;
                valueSelect.appendChild(option);
            });
            valueSelect.classList.add("param-select-value");
            if (param.isRequired) {
                valueSelect.setAttribute("required", "true");
            }
            valueSelect.setAttribute("aria-label", "select parameter value option for " + param.name);
            valueSelect.onchange = function() {
                bus.publish(new RestParamValueChanged());
                if (valueSelect.textContent !== valueSelect.value) {
                    subscriptionId.textContent = valueSelect.value;
                }
            };
            if (param.name === "subscriptionId") {
                valueSelect.disabled = true;
                valueSelect.innerHTML = '<option value="">Login to load...</option>';
            }
            valueGroup.appendChild(valueSelect);
            break;

          case "array":
            break;

          case "object":
            break;

          default:
            valueInput.setAttribute("value", param.value);
            if (param.isRequired) {
                valueInput.setAttribute("required", "true");
            }
            valueInput.setAttribute("aria-label", "enter parameter value for " + param.name);
            valueInput.onblur = function() {
                bus.publish(new RestParamValueChanged());
            };
            valueGroup.appendChild(valueInput);
            break;
        }
        if (param.isRequired) {
            label.insertAdjacentHTML("beforeend", '<span class="required-asterisk" aria-hidden="true">*</span>');
        }
        li.appendChild(valueGroup);
        var delButton = document.createElement("button");
        delButton.classList.add("param-button");
        delButton.classList.add("docon");
        delButton.classList.add("docon-math-multiply");
        if (param.isRequired) {
            delButton.style.visibility = "hidden";
        }
        delButton.setAttribute("aria-label", loc_deleteParameter);
        delButton.setAttribute("type", "button");
        li.appendChild(delButton);
        delButton.onclick = function(event) {
            li.parentElement.removeChild(li);
            bus.unsubscribe(RestRetrieveRequestData, handleRetrieveData);
            bus.publish(new RestParamValueChanged());
            event.preventDefault();
        };
        var subscriptionId = document.createElement("div");
        subscriptionId.classList.add("subscription-id");
        subscriptionId.textContent = "";
        var handleRetrieveData = function(event) {
            var requestData = event.restTryItRequest;
            var value = param.type === "boolean" || param.type === "azure-subscriptions" || param.type === "enum" ? valueSelect.value : valueInput.value;
            if (isHeaders) {
                requestData.headers.push({
                    name: param.name,
                    value: value,
                    type: param.type,
                    in: param.in,
                    isRequired: param.isRequired
                });
            } else {
                requestData.params.push({
                    name: param.name,
                    value: value,
                    type: param.type,
                    in: param.in,
                    isRequired: param.isRequired
                });
            }
        };
        container.appendChild(li);
        bus.subscribe(RestRetrieveRequestData, handleRetrieveData);
        if (!isHeaders) {
            if (param.name === "subscriptionId") {
                bus.subscribe(RestSubscriptionIdLoading, function() {
                    valueSelect.innerHTML = '<option value=""></option>';
                    valueSelect.disabled = false;
                });
                bus.subscribe(RestSubscriptionIdLoaded, function(event) {
                    var subscriptions = event.subscriptions;
                    if (subscriptions.length === 0) {
                        valueSelect.innerHTML = '<option value="">Error</option>';
                        valueSelect.value = null;
                    } else {
                        valueSelect.innerHTML = subscriptions.map(function(_a) {
                            var displayName = _a.displayName, subscriptionId = _a.subscriptionId;
                            return '<option value="' + subscriptionId + '">' + displayName + "</option>";
                        }).join("\n");
                        valueSelect.value = subscriptions[0].subscriptionId;
                        valueSelect.hidden = false;
                        valueSelect.disabled = false;
                    }
                    subscriptionId.textContent = subscriptions[0].subscriptionId;
                    bus.publish(new RestParamValueChanged());
                });
            }
        }
        if (param.type === "string" && param.in === "query" && urlParams[param.name] !== undefined && urlParams[param.name].indexOf(param.name) === -1) {
            valueInput.value = urlParams[param.name];
            bus.publish(new RestParamValueChanged());
        }
        if (param.name === "subscriptionId") {
            loadSubscriptions(bus);
        }
        return {
            label: label,
            valueInput: valueInput,
            delButton: delButton,
            li: li
        };
    }
    function renderEmptyParam(container, bus, isHeaders) {
        if (isHeaders === void 0) {
            isHeaders = true;
        }
        var li = document.createElement("li");
        li.classList.add("param-group");
        li.classList.add("small");
        var nameGroup = document.createElement("div");
        nameGroup.classList.add("param-name-group");
        var nameInput = document.createElement("input");
        nameInput.classList.add("param-name");
        nameInput.setAttribute("placeholder", "name");
        nameInput.setAttribute("aria-label", "add new parameter name");
        nameGroup.appendChild(nameInput);
        var errorLabel = document.createElement("div");
        errorLabel.classList.add("error-message");
        nameGroup.appendChild(errorLabel);
        li.appendChild(nameGroup);
        nameInput.onblur = function() {
            if (nameInput.value !== "" && errorLabel.textContent !== "") {
                container.removeChild(errorLabel);
            }
        };
        var valueGroup = document.createElement("div");
        valueGroup.classList.add("param-value-group");
        var valueInput = document.createElement("input");
        valueInput.classList.add("param-value");
        valueInput.setAttribute("placeholder", "value");
        valueInput.setAttribute("aria-label", "add new parameter value");
        valueGroup.appendChild(valueInput);
        li.appendChild(valueGroup);
        var addButton = document.createElement("button");
        addButton.classList.add("param-button");
        addButton.classList.add("param-plus");
        addButton.classList.add("docon");
        addButton.classList.add("docon-math-plus");
        addButton.setAttribute("aria-label", loc_addParameter);
        addButton.setAttribute("type", "button");
        li.appendChild(addButton);
        container.appendChild(li);
        var addEmptyParam = function(event) {
            var name = nameInput.value;
            var value = valueInput.value;
            if (name === "") {
                errorLabel.textContent = loc_emptyNameNotAllowed;
                nameGroup.appendChild(errorLabel);
                event.preventDefault();
                return;
            }
            var inType = null;
            if (isHeaders) {
                inType = "header";
            } else {
                var inputUrl = document.querySelector(".url-input");
                if (inputUrl.value.indexOf("{" + name + "}") !== -1) {
                    inType = "path";
                } else {
                    inType = "query";
                }
            }
            li.parentElement.removeChild(li);
            bus.publish(new RestAddParamEvent({
                name: name,
                value: value,
                type: "string",
                in: inType,
                isRequired: false
            }));
        };
        addButton.onclick = function(event) {
            addEmptyParam(event);
        };
        return {
            nameInput: nameInput,
            valueInput: valueInput,
            addButton: addButton,
            li: li
        };
    }
    var loadSubscriptions = function(bus) {
        bus.publish(new RestSubscriptionIdLoading());
        var request = new Request(subscriptionUrl, {
            mode: "cors"
        });
        if (azureToken.value === null) {
            bus.publish(new RestSubscriptionIdLoaded([]));
            throw new Error("error fetching subscription: autherization header no token");
        }
        request.headers.append("Authorization", "Bearer " + azureToken.value.access_token);
        return fetch(request).then(function(response) {
            if (!response.ok) {
                response.text().then(function(text) {
                    throw new Error("error fetching subscriptions:\n\n" + text);
                });
                bus.publish(new RestSubscriptionIdLoaded([]));
                return false;
            }
            return response.json().then(function(_a) {
                var subscriptions = _a.value;
                bus.publish(new RestSubscriptionIdLoaded(subscriptions));
                return true;
            });
        }, function() {
            return false;
        });
    };
    function renderParamList(container, bus, params, isHeaders, urlParams) {
        if (isHeaders === void 0) {
            isHeaders = true;
        }
        if (urlParams === void 0) {
            urlParams = {};
        }
        var blockDiv = document.createElement("div");
        var outerDiv = document.createElement("div");
        outerDiv.classList.add("param-group");
        outerDiv.classList.add("heading-group");
        var innerDiv = document.createElement("div");
        innerDiv.classList.add("param-name-group");
        var heading = document.createElement("h3");
        if (isHeaders) {
            heading.textContent = loc_headers;
        } else {
            heading.textContent = loc_parameters;
        }
        innerDiv.appendChild(heading);
        outerDiv.appendChild(innerDiv);
        blockDiv.appendChild(outerDiv);
        var ul = document.createElement("ul");
        for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
            var param = params_1[_i];
            renderParam(ul, bus, param, isHeaders, urlParams);
        }
        renderEmptyParam(ul, bus, isHeaders);
        blockDiv.appendChild(ul);
        container.appendChild(blockDiv);
        var handleAddParam = function(event) {
            if (event.param.in === "header" && isHeaders || event.param.in !== "header" && !isHeaders) {
                renderParam(ul, bus, event.param, isHeaders);
                renderEmptyParam(ul, bus, isHeaders);
                bus.publish(new RestParamValueChanged());
            }
        };
        bus.subscribe(RestAddParamEvent, handleAddParam);
        return ul;
    }
    var url = "";
    function renderRequest(container, bus, request) {
        var _a = parseRequestUrl(request.url), url = _a.url, urlParams = _a.urlParams;
        var blockDiv = document.createElement("div");
        blockDiv.classList.add("request-section");
        renderRequestUrl(blockDiv, bus, url, request.httpVerb);
        renderParamList(blockDiv, bus, request.params, false, urlParams);
        renderParamList(blockDiv, bus, request.headers, true);
        if (request.body !== null) {
            renderBody(blockDiv, bus, request.body);
        }
        renderHttpRequest(blockDiv, bus, request);
        var runButton = renderRunButton(blockDiv, bus);
        container.appendChild(blockDiv);
        return runButton;
    }
    function parseRequestUrl(path) {
        url = path;
        var urlParams = {};
        var index = path.indexOf("?");
        if (index !== -1) {
            var queryString = path.substr(index);
            url = path.substr(0, index);
            urlParams = parseQueryString(queryString);
        }
        return {
            url: url,
            urlParams: urlParams
        };
    }
    function renderRequestUrl(container, bus, url, httpVerb) {
        var blockDiv = document.createElement("div");
        var heading = document.createElement("h3");
        heading.textContent = loc_requestUrl;
        blockDiv.appendChild(heading);
        var urlDiv = document.createElement("div");
        urlDiv.classList.add("url-group");
        var httpVerbDiv = document.createElement("div");
        httpVerbDiv.classList.add("http-verb");
        var verbInfo = document.createElement("span");
        verbInfo.textContent = httpVerb;
        httpVerbDiv.appendChild(verbInfo);
        var inputUrl = document.createElement("input");
        inputUrl.setAttribute("name", "url");
        inputUrl.readOnly = true;
        inputUrl.classList.add("url-input");
        inputUrl.classList.add("is-short");
        inputUrl.setAttribute("aria-label", loc_requestUrl);
        inputUrl.setAttribute("value", url);
        urlDiv.appendChild(httpVerbDiv);
        urlDiv.appendChild(inputUrl);
        blockDiv.appendChild(urlDiv);
        container.appendChild(blockDiv);
        bus.subscribe(RestRetrieveRequestData, function(event) {
            var requestData = event.restTryItRequest;
            requestData.url = url;
            requestData.httpVerb = verbInfo.textContent;
        });
        var handleParamValueChanged = function() {
            var requestData = {
                url: null,
                httpVerb: null,
                headers: [],
                params: [],
                body: null
            };
            bus.publish(new RestRetrieveRequestData(requestData));
            url = inputUrl.value;
            requestData.params.forEach(function(param) {
                url = updateUrlParam(url, param);
            });
        };
        bus.subscribe(RestParamValueChanged, handleParamValueChanged);
        return {
            inputUrl: inputUrl
        };
    }
    function updateUrlParam(url, param) {
        if (param.in === "path" && param.value !== "") {
            url = url.replace("{" + param.name + "}", encodeURIComponent(param.value));
        } else if (param.in === "query" && param.value !== "") {
            if (url.indexOf("?") === -1) {
                url = url + "?" + encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
            } else {
                url = url + "&" + encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
            }
        }
        return url;
    }
    function renderBody(container, bus, body) {
        var blockDiv = document.createElement("div");
        var heading = document.createElement("h3");
        heading.textContent = loc_body;
        blockDiv.appendChild(heading);
        var bodyText = document.createElement("textarea");
        bodyText.setAttribute("name", loc_body);
        bodyText.textContent = body;
        bodyText.classList.add("textarea");
        bodyText.classList.add("request-body");
        bodyText.classList.add("tall");
        bodyText.classList.add("small");
        bodyText.setAttribute("aria-label", loc_body);
        blockDiv.appendChild(bodyText);
        container.appendChild(blockDiv);
        bus.subscribe(RestRetrieveRequestData, function(event) {
            var requestData = event.restTryItRequest;
            requestData.body = bodyText.value;
        });
        return {
            bodyText: bodyText
        };
    }
    function renderRunButton(container, bus) {
        var runButton = document.createElement("button");
        runButton.setAttribute("type", "submit");
        runButton.classList.add("button");
        runButton.classList.add("is-success");
        runButton.classList.add("is-large");
        runButton.classList.add("is-radiusless");
        runButton.setAttribute("data-bi-name", "rest-tryit-run");
        var runSpan = document.createElement("span");
        runSpan.classList.add("run-text");
        runSpan.textContent = loc_run;
        runButton.appendChild(runSpan);
        var runIconSpan = document.createElement("span");
        runIconSpan.classList.add("docon");
        runIconSpan.classList.add("docon-play");
        runIconSpan.setAttribute("aria-hidden", "true");
        runButton.appendChild(runIconSpan);
        container.insertAdjacentHTML("beforeend", '<div class="request-section"></div>');
        container.lastElementChild.appendChild(runButton);
        bus.subscribe(RestRunEventDone, function() {
            runButton.classList.remove("is-loading");
        });
        return runButton;
    }
    var displayContainer;
    function initResponse(container, bus) {
        displayContainer = container;
        var handleRenderResponse = function(event) {
            renderResponse(displayContainer, event.response);
        };
        bus.subscribe(RestRenderResponse, handleRenderResponse);
    }
    function renderResponse(container, response) {
        var responseContainer = container.querySelector(".response-section");
        if (responseContainer) {
            container.removeChild(responseContainer);
        }
        var blockDiv = document.createElement("div");
        blockDiv.classList.add("response-section");
        renderResponseCode(blockDiv, response.statusCode);
        renderResponseComponent(blockDiv, response.header, true);
        if (response.body !== null) {
            renderResponseComponent(blockDiv, response.body);
        }
        container.appendChild(blockDiv);
    }
    function renderResponseCode(container, code) {
        var heading = document.createElement("h2");
        heading.textContent = loc_responseCode + ": ";
        var codeLabel = document.createElement("span");
        codeLabel.classList.add("status-code");
        if (code.charAt(0) === "2") {
            codeLabel.classList.add("status-success");
        } else if (code.charAt(0) === "3") {
            codeLabel.classList.add("status-warning");
        } else {
            codeLabel.classList.add("status-fail");
        }
        codeLabel.textContent = code;
        heading.appendChild(codeLabel);
        container.appendChild(heading);
    }
    function renderResponseComponent(container, code, isHeader) {
        if (isHeader === void 0) {
            isHeader = false;
        }
        var blockDiv = document.createElement("div");
        var heading = document.createElement("h3");
        if (isHeader) {
            heading.textContent = loc_headers;
        } else {
            heading.textContent = loc_body;
        }
        blockDiv.appendChild(heading);
        var codeHeader = document.createElement("div");
        codeHeader.classList.add("codeHeader");
        var codeHeading = document.createElement("span");
        codeHeading.classList.add("language");
        if (isHeader) {
            codeHeading.textContent = "HTTP";
        } else {
            codeHeading.textContent = "JSON";
        }
        codeHeader.appendChild(codeHeading);
        var copyButton = document.createElement("button");
        copyButton.classList.add("action");
        copyButton.classList.add("copy");
        var copySpan = document.createElement("span");
        copySpan.textContent = loc_copy;
        copyButton.appendChild(copySpan);
        codeHeader.appendChild(copyButton);
        blockDiv.appendChild(codeHeader);
        copyButton.onclick = function(event) {
            copyCodeBlockToClipboard(codeBlock, "json");
            event.preventDefault();
        };
        var codeBlock = document.createElement("pre");
        if (isHeader) {
            codeBlock.classList.add("response-header");
        } else {
            codeBlock.classList.add("response-body");
        }
        codeBlock.classList.add("small");
        codeBlock.textContent = code;
        blockDiv.appendChild(codeBlock);
        container.appendChild(blockDiv);
        syntaxHighlight([ {
            code: codeBlock.textContent,
            language: isHeader ? "http" : "json",
            highlightLines: ""
        } ]).then(function(results) {
            codeBlock.innerHTML = results[0].html;
        });
    }
    var restTryItRequest = null;
    function initRestTryIt() {
        var rootElement = document$1.createElement("div");
        rootElement.style.height = "100%";
        restTryItRequest = buildRestTryItRequest(msDocs.data.restAPIData);
        loginAndRender(rootElement);
        return rootElement;
    }
    function loginAndRender(rootElement) {
        return azureOAuthLogin(rootElement).then(function() {
            rootElement.innerHTML = "";
            var container = document$1.createElement("form");
            container.classList.add("rest-tryit-form");
            var blockDiv = document$1.createElement("div");
            blockDiv.classList.add("signin-section");
            renderLogoutButton(blockDiv, rootElement);
            container.appendChild(blockDiv);
            rootElement.insertAdjacentElement("afterbegin", container);
            var bus = new EventBus();
            renderRestTryIt(container, bus, restTryItRequest);
            initResponse(container, bus);
        });
    }
    function buildRestTryItRequest(restApiData) {
        var restTryItRequest = {
            url: restApiData.path,
            httpVerb: restApiData.httpVerb,
            headers: [],
            params: [],
            body: restApiData.requestBody
        };
        if (restApiData.httpVerb === "PUT" || restApiData.httpVerb === "POST" || restApiData.httpVerb === "PATCH") {
            restTryItRequest.headers.push({
                name: "Content-Type",
                value: "application/json",
                type: "string",
                in: "header",
                isRequired: true
            });
        }
        restApiData.requestHeader.forEach(function(header) {
            if (header.in === "header") {
                restTryItRequest.headers.push({
                    name: header.name,
                    value: "",
                    type: header.type,
                    in: header.in,
                    isRequired: header.isRequired
                });
            }
        });
        restApiData.uriParameters.forEach(function(uriParam) {
            if (uriParam.in === "path" || uriParam.in === "query") {
                restTryItRequest.params.push({
                    name: uriParam.name,
                    value: "",
                    type: uriParam.type,
                    in: uriParam.in,
                    isRequired: uriParam.isRequired
                });
            }
        });
        return restTryItRequest;
    }
    function renderLogoutButton(container, rootElement) {
        var _this = this;
        container.innerHTML = "";
        var heading = document$1.createElement("h2");
        heading.textContent = "REST API " + loc_tryIt;
        container.appendChild(heading);
        var description = document$1.createElement("p");
        description.textContent = "" + loc_tryItDescription;
        container.appendChild(description);
        var logoutButton = document$1.createElement("button");
        logoutButton.setAttribute("type", "button");
        logoutButton.setAttribute("name", "signout");
        logoutButton.classList.add("signout");
        logoutButton.classList.add("is-light");
        logoutButton.classList.add("button");
        logoutButton.classList.add("is-radiusless");
        logoutButton.classList.add("is-small");
        logoutButton.textContent = loc_signOut;
        container.appendChild(logoutButton);
        logoutButton.onclick = function() {
            return __awaiter(_this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [ 4, azureOAuthLogout() ];

                      case 1:
                        _a.sent();
                        return [ 4, loginAndRender(rootElement) ];

                      case 2:
                        _a.sent();
                        return [ 2 ];
                    }
                });
            });
        };
    }
    function renderRestTryIt(container, bus, request) {
        var runButton = renderRequest(container, bus, request);
        configureValidation(container);
        container.onsubmit = function(event) {
            submitTryitForm(runButton, bus);
            event.preventDefault();
        };
        var handleRunRequest = function(event) {
            var restReq = event.restTryItRequest;
            var httpRequest = restRequest(restReq);
            restFetch(httpRequest).then(function(resp) {
                createRestTryitResponse(resp).then(function(tryitResponse) {
                    bus.publish(new RestRenderResponse(tryitResponse));
                    bus.publish(new RestRunEventDone());
                }).then(function() {
                    var form = document$1.querySelector(".rest-tryit-form");
                    var scrollTop = form.scrollTop;
                    var height = document$1.querySelector(".request-section").getBoundingClientRect().height;
                    if (scrollTop >= height) {
                        return;
                    }
                    scrollTo(height, 500, form);
                });
            }).catch(function(error) {
                bus.publish(new RestRunEventDone());
                throw error;
            });
        };
        bus.subscribe(RestRunEvent, handleRunRequest);
    }
    function submitTryitForm(runButton, bus) {
        runButton.classList.add("is-loading");
        var requestData = {
            url: null,
            httpVerb: null,
            headers: [],
            params: [],
            body: null
        };
        bus.publish(new RestRetrieveRequestData(requestData));
        bus.publish(new RestRunEvent(requestData));
    }
    var activateButtonConfig$1 = {
        name: loc_tryIt,
        iconClass: "docon docon-play",
        attributes: []
    };
    registerInteractiveType({
        name: "http",
        activateButtonConfig: activateButtonConfig$1,
        create: function() {
            var element = initRestTryIt();
            return {
                element: element,
                setCode: function() {
                    return Promise.resolve();
                },
                execute: function() {
                    return Promise.resolve();
                }
            };
        }
    });
    function pluginIfThen() {
        $$1.fn.extend({
            ifThen: function() {
                var args = arguments;
                if (args.length < 2) {
                    return this;
                }
                for (var i = 0; i < args.length; i = i + 2) {
                    if (args[i] && jQuery.isFunction(args[i + 1])) {
                        args[i + 1].call(this);
                        return this;
                    }
                }
                if (args.length % 2 && typeof args[args.length - 1] === "function") {
                    args[args.length - 1].call(this);
                }
                return this;
            }
        });
    }
    var gameApi = {
        baseUrl: "https://" + (isProduction || location.hostname.indexOf("techprofile.microsoft.com") !== -1 ? "" : "ppe.") + "docs.microsoft.com/api/gamestatus",
        getStatus: function() {
            var url = this.baseUrl + "/me";
            var init = {
                mode: "cors",
                credentials: "include"
            };
            return fetchWithTimeout(url, init).then(process401Response).then(function(response) {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject();
            });
        },
        getUnacknowledgedLevelStatus: function() {
            var url = this.baseUrl + "/levelstatus";
            var init = {
                mode: "cors",
                credentials: "include"
            };
            return fetchWithTimeout(url, init).then(process401Response).then(function(response) {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject();
            });
        },
        acknowledgeLevelStatus: function(items) {
            var url = this.baseUrl + "/levelstatus";
            var init = {
                method: "POST",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(items)
            };
            return fetchWithTimeout(url, init).then(process401Response).then(function(response) {
                if (response.ok) {
                    return Promise.resolve();
                }
                return Promise.reject();
            });
        },
        deleteGameStatus: function() {
            var url = this.baseUrl + "/me";
            var init = {
                method: "DELETE",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            };
            return fetchWithTimeout(url, init).then(process401Response).then(function(response) {
                if (response.ok) {
                    return Promise.resolve();
                }
                return Promise.reject();
            });
        }
    };
    var hasLevelStatus = getMeta("page_type") === "learn" || getMeta("page_type") == "Profile";
    var gameBus = new EventBus();
    var currentLevel;
    var animateProgressBar = false;
    var levelStatusText;
    var progressElt;
    var levelStatusPoints;
    var animationHandle = 0;
    var progressPoints = 0;
    var animateValue = 0;
    var animateRate = .125;
    var levelUp = false;
    function showLevelStatus() {
        if (msDocs.data.context.chromeless || !hasLevelStatus) {
            return;
        }
        var levelStatusContainer = document.querySelector(".level-status-container");
        var levelStatus = document.querySelector(".level-status");
        levelStatus.innerHTML = levelStatusTemplate;
        contentLoaded.then(function() {
            user.whenAuthenticated().then(function() {
                levelStatusText = document.querySelector(".level-status-text");
                progressElt = document.querySelector(".level-status-progress");
                levelStatusPoints = document.querySelector(".level-status-points");
                gameApi.getStatus().then(function(status) {
                    updateGameStatus(status);
                    animateProgressBar = true;
                    levelStatusContainer.classList.remove("is-hidden");
                });
            });
        });
    }
    var levelStatusTemplate = '\n<span class="level-status-text has-text-weight-semibold"></span>\n<span class="level-status-progress-container">\n\t<progress class="progress level-status-progress is-hidden-mobile is-inline-block is-relative is-success" value="1" max="100">1%</progress>\n\t<span class="level-status-square"></span>\n</span>\n<span class="level-status-points"><span class="has-text-weight-semibold"></span>';
    function setUserXp(gameStatus, levelStatusText, progressElt, levelstatusPoints) {
        if (gameStatus.level.levelNumber > currentLevel) {
            levelUp = true;
        }
        currentLevel = gameStatus.level.levelNumber;
        setLevelStatusText(levelStatusText, gameStatus.level.levelNumber);
        setLevelStatusBar(progressElt, gameStatus, animateProgressBar);
        setLevelStatusPoints(levelstatusPoints, gameStatus.level.pointsHigh - gameStatus.level.pointsLow, gameStatus.currentLevelPointsEarned);
    }
    function setLevelStatusText(elt, level) {
        elt.textContent = "" + loc_level.replace("{0}", level.toString());
    }
    function setLevelStatusBar(elt, gameStatus, animate) {
        progressPoints = getLevelPointsOutOf100(gameStatus.level.pointsHigh, gameStatus.level.pointsLow, gameStatus.currentLevelPointsEarned);
        elt.textContent = progressPoints + "%";
        if (!animate) {
            window$1.cancelAnimationFrame(animationHandle);
            elt.value = animateValue = progressPoints;
            return;
        }
        incrementLevelStatusBar(elt);
    }
    function incrementLevelStatusBar(elt) {
        if (!animationHandle) {
            animationHandle = animate(elt);
        }
    }
    function animate(elt) {
        if (levelUp || elt.value < progressPoints) {
            if (Math.floor(animateValue + animateRate) >= 100) {
                levelUp = false;
            }
            animateValue = animateValue + animateRate;
            elt.value = Math.floor(animateValue + animateRate) % 100;
            return window$1.requestAnimationFrame(function() {
                animationHandle = animate(elt);
            });
        }
        return 0;
    }
    function setLevelStatusPoints(elt, pointsHigh, totalPoints) {
        elt.innerHTML = '<span class="has-text-weight-semibold">' + totalPoints + "</span>/" + loc_xp.replace("{0}", pointsHigh.toString());
    }
    function getLevelPointsOutOf100(pointsHigh, pointsLow, currentLevelPointsEarned) {
        var levelRange = pointsHigh - pointsLow;
        var levelCompletedRange = currentLevelPointsEarned / levelRange;
        return Math.floor(levelCompletedRange * 100);
    }
    function updateGameStatus(status) {
        if (msDocs.data.context.chromeless) {
            return;
        }
        setUserXp(status, levelStatusText, progressElt, levelStatusPoints);
    }
    var imageBrowserCloseEvent = "image-browser-close-event";
    function attachEvents(imageBrowser, imageElement) {
        var scalar = 5;
        var state = {
            horizontal: 0,
            vertical: 0
        };
        imageElement.addEventListener("keypress", function(event) {
            if (event.which === keyCodes.enter) {
                event.preventDefault();
                imageBrowser.toggleExpand();
            }
        });
        imageElement.addEventListener("keydown", function(event) {
            var code = event.which || event.keyCode;
            switch (code) {
              case keyCodes.left:
                event.preventDefault();
                state.horizontal = 1;
                break;

              case keyCodes.right:
                event.preventDefault();
                state.horizontal = -1;
                break;

              case keyCodes.up:
                event.preventDefault();
                state.vertical = 1;
                break;

              case keyCodes.down:
                event.preventDefault();
                state.vertical = -1;
                break;
            }
            if ([ keyCodes.left, keyCodes.right, keyCodes.up, keyCodes.down ].indexOf(code) > -1) {
                imageBrowser.panViewport(scalar * state.horizontal, scalar * state.vertical);
            }
        });
        imageElement.addEventListener("keyup", function(event) {
            var code = event.which || event.keyCode;
            switch (code) {
              case keyCodes.left:
                event.preventDefault();
                state.horizontal = 0;
                break;

              case keyCodes.right:
                event.preventDefault();
                state.horizontal = 0;
                break;

              case keyCodes.up:
                event.preventDefault();
                state.vertical = 0;
                break;

              case keyCodes.down:
                event.preventDefault();
                state.vertical = 0;
                break;
            }
        });
    }
    var mousemoveListener = null;
    var state = {};
    function attachEvents$1(imageBrowser, imageElement) {
        mousemoveListener = mousemoveListener || function(event) {
            if (imageBrowser.state.expanded) {
                if (event.buttons % 2) {
                    event.preventDefault();
                    state.dragging = true;
                    var movementX = event.movementX || !isNaN(state.prevX) ? event.screenX - state.prevX : 0;
                    var movementY = event.movementY || !isNaN(state.prevY) ? event.screenY - state.prevY : 0;
                    imageBrowser.panViewport(movementX, movementY);
                } else {
                    setTimeout(function() {
                        state.dragging = false;
                    }, 0);
                }
            } else {
                state.dragging = false;
            }
            state.prevX = event.screenX;
            state.prevY = event.screenY;
        };
        document$1.removeEventListener("mousemove", mousemoveListener);
        document$1.addEventListener("mousemove", mousemoveListener);
        imageElement.addEventListener("click", function(event) {
            if (!state.dragging) {
                event.preventDefault();
                imageBrowser.toggleExpand(event.offsetX * -1, event.offsetY * -1, true);
            }
        });
    }
    var template = '\n\t<section class="image-browser">\n\t\t<figure>\n\t\t\t<div>\n\t\t\t\t<img tabindex="0" id="image-browser-image" src="" />\n\t\t\t</div>\n\t\t\t<figcaption id="image-browser-caption">\n\n\t\t\t</figcaption>\n\t\t</figure>\n\t</section>\n';
    function attachEvents$2(imageBrowser, imageElement) {
        var state = {
            touches: []
        };
        imageElement.addEventListener("touchstart", function(event) {
            if (imageBrowser.state.expanded) {
                event.preventDefault();
                Array.from(event.changedTouches).forEach(function(_a) {
                    var identifier = _a.identifier, screenX = _a.screenX, screenY = _a.screenY;
                    state.touches.push(Object.assign({}, {
                        identifier: identifier,
                        screenX: screenX,
                        screenY: screenY
                    }));
                });
            }
        });
        imageElement.addEventListener("touchmove", function(event) {
            if (imageBrowser.state.expanded) {
                event.preventDefault();
                var identifiers_1 = state.touches.map(function(x) {
                    return x.identifier;
                });
                var touch = Array.from(event.changedTouches).filter(function(x) {
                    return x.identifier === state.touches[0].identifier;
                });
                var deltaX = touch[0].screenX - state.touches[0].screenX;
                var deltaY = touch[0].screenY - state.touches[0].screenY;
                Array.from(event.changedTouches).forEach(function(touch) {
                    var index = identifiers_1.indexOf(touch.identifier);
                    if (index >= 0) {
                        state.touches[index] = Object.assign({}, {
                            identifier: touch.identifier,
                            screenX: touch.screenX,
                            screenY: touch.screenY
                        });
                    }
                });
                imageBrowser.panViewport(deltaX, deltaY);
            }
        });
        imageElement.addEventListener("touchend", function(event) {
            var identifiers = state.touches.map(function(x) {
                return x.identifier;
            });
            Array.from(event.changedTouches).forEach(function(_a) {
                var identifier = _a.identifier;
                state.touches.splice(identifiers.indexOf(identifier), 1);
            });
        });
    }
    var maxWidthInPixels = 1200;
    var ImageBrowser = function() {
        function ImageBrowser() {
            this.state = {
                expanded: false
            };
        }
        ImageBrowser.prototype.open = function(container, _a) {
            var _this = this;
            var url = _a.url, alt = _a.alt;
            var promise = new Promise(function(resolve) {
                container.innerHTML = template;
                _this.imageContainer = container.querySelector("div");
                _this.imageContainer.dir = "ltr";
                _this.imageContainer.style.width = maxWidthInPixels + "px";
                _this.imageContainer.style.height = maxWidthInPixels * 16 / 9 + "px";
                _this.imageElement = container.querySelector("#image-browser-image");
                _this.imageElement.style.width = maxWidthInPixels + "px";
                _this.imageElement.style.height = maxWidthInPixels * 16 / 9 + "px";
                _this.imageElement.style.opacity = "0";
                _this.captionElement = container.querySelector("#image-browser-caption");
                _this.imageElement.style.transformOrigin = "0 0";
                _this.imageElement.addEventListener("error", function() {});
                _this.imageElement.addEventListener("load", function() {
                    _this.imageElement.classList.add("expandable");
                    _this.imageElement.style.width = null;
                    _this.imageElement.style.height = null;
                    var scale = Math.min(_this.imageContainer.clientWidth / _this.imageElement.naturalWidth, 1);
                    _this.imageElement.style.transform = "scale(" + scale + ")";
                    _this.imageContainer.classList.add("transition");
                    _this.imageContainer.addEventListener("transitionend", function() {
                        _this.imageContainer.classList.remove("transition");
                    });
                    _this.imageContainer.style.height = _this.imageElement.naturalHeight * scale + "px";
                    _this.imageContainer.style.width = Math.min(maxWidthInPixels, _this.imageElement.naturalWidth) + "px";
                    _this.imageElement.style.opacity = "1";
                    attachEvents(_this, _this.imageElement);
                    attachEvents$1(_this, _this.imageElement);
                    attachEvents$2(_this, _this.imageElement);
                    window$1.addEventListener("resize", function() {
                        if (!_this.state.expanded) {
                            _this.imageElement.style.transform = "scale(" + Math.min(_this.imageContainer.clientWidth / _this.imageElement.naturalWidth, 1) + ")";
                        } else {
                            _this.panViewport(0, 0);
                        }
                        _this.imageContainer.style.height = _this.imageElement.naturalHeight * Math.min(_this.imageContainer.clientWidth / _this.imageElement.naturalWidth, 1) + "px";
                    });
                    resolve();
                });
                _this.imageElement.src = url;
                _this.captionElement.textContent = alt;
            });
            return promise;
        };
        ImageBrowser.prototype.close = function() {
            window$1.dispatchEvent(new CustomEvent(imageBrowserCloseEvent, {
                detail: {
                    image: this.imageElement.src
                }
            }));
        };
        ImageBrowser.prototype.toggleExpand = function(x, y, convertCoordinates) {
            if (convertCoordinates) {
                x = x + this.imageContainer.clientWidth / 2;
                y = y + this.imageElement.naturalHeight * Math.min(this.imageContainer.clientHeight / this.imageElement.naturalHeight, 1) / 2;
            }
            if (!this.state.expanded) {
                this.state.translationX = !isNaN(x) ? Math.min(0, Math.max(this.imageElement.naturalWidth * -1 + this.imageContainer.clientWidth, x)) : 0;
                this.state.translationY = !isNaN(y) ? Math.min(0, Math.max(this.imageElement.naturalHeight * -1 + this.imageContainer.clientHeight, y)) : 0;
            }
            this.imageElement.style.transform = this.state.expanded ? "scale(" + Math.min(this.imageContainer.clientWidth / this.imageElement.naturalWidth, 1) + ")" : "scale(1) translate(" + this.state.translationX + "px,  " + this.state.translationY + "px)";
            this.imageElement.classList.remove(this.state.expanded ? "pannable" : "expandable");
            this.imageElement.classList.add(this.state.expanded ? "expandable" : "pannable");
            this.state.expanded = !this.state.expanded;
        };
        ImageBrowser.prototype.panViewport = function(x, y) {
            if (this.state.expanded) {
                this.state.translationX = Math.min(0, Math.max(this.imageElement.naturalWidth * -1 + this.imageContainer.clientWidth, this.state.translationX + x));
                this.state.translationY = Math.min(0, Math.max(this.imageElement.naturalHeight * -1 + this.imageContainer.clientHeight, this.state.translationY + y));
                this.imageElement.style.transform = "translate(" + this.state.translationX + "px,  " + this.state.translationY + "px)";
            }
        };
        return ImageBrowser;
    }();
    function initInstrumentation$1() {
        jsllReady.then(instrument$1);
    }
    function instrument$1(awa) {
        window$1.addEventListener(imageBrowserCloseEvent, function(event) {
            var detail = event.detail;
            awa.ct.captureContentPageAction({
                behavior: awa.behavior.REDUCE,
                actionType: awa.actionType.CLICKLEFT,
                content: {
                    type: "lightbox-close",
                    image: detail.image
                }
            });
        });
    }
    function initializeLightBox(mainElement) {
        initInstrumentation$1();
        var className = "lightbox-enabled";
        var elements = Array.from(mainElement.querySelectorAll('a[href$="#lightbox"]'));
        var browser = new ImageBrowser();
        var bus = new EventBus();
        bus.subscribe(ModalCloseEvent, browser.close.bind(browser));
        elements.forEach(function(elem) {
            elem.classList.add(className);
            elem.setAttribute("data-bi-name", "lightbox");
            elem.addEventListener("click", function(event) {
                event.preventDefault();
                var element = document.createElement("div");
                element.classList.add("modal-content");
                browser.open(element, {
                    url: elem.href,
                    alt: elem.querySelector("img").alt
                });
                new Modal(element, bus).show();
                element.insertAdjacentHTML("afterend", '<button class="modal-close-button is-large is-white modal-close" aria-label="' + loc_close + '"></button>');
            });
        });
    }
    var localeNames = {
        "id-id": "Bahasa Indonesia",
        "ms-my": "Bahasa Malaysia",
        "ca-es": "Català",
        "cs-cz": "Čeština",
        "da-dk": "Dansk",
        "de-de": "Deutsch",
        "de-at": "Deutsch (Österreich)",
        "de-ch": "Deutsch (Schweiz)",
        "et-ee": "Eesti",
        "en-au": "English (Australia)",
        "en-ca": "English (Canada)",
        "en-in": "English (India)",
        "en-ie": "English (Ireland)",
        "en-my": "English (Malaysia)",
        "en-nz": "English (New Zealand)",
        "en-sg": "English (Singapore)",
        "en-za": "English (South Africa)",
        "en-gb": "English (United Kingdom)",
        "en-us": "English (United States)",
        "es-es": "Español (España)",
        "es-mx": "Español (México)",
        "eu-es": "Euskara",
        "fr-fr": "Français",
        "fr-be": "Français (Belgique)",
        "fr-ca": "Français (Canada)",
        "fr-ch": "Français (Suisse)",
        "gl-es": "Galego",
        "hr-hr": "Hrvatski",
        "is-is": "Íslenska",
        "it-it": "Italiano",
        "it-ch": "italiano (Svizzera)",
        "lv-lv": "Latviešu",
        "lt-lt": "Lietuvių",
        "hu-hu": "Magyar",
        "nl-nl": "Nederlands",
        "nl-be": "Nederlands (België)",
        "nb-no": "Norsk",
        "pl-pl": "Polski",
        "pt-br": "Português (Brasil)",
        "pt-pt": "Português (Portugal)",
        "ro-ro": "Română",
        "sk-sk": "Slovenčina",
        "sl-si": "Slovenski",
        "fi-fi": "Suomi",
        "sv-se": "Svenska",
        "vi-vn": "Tiếng Việt",
        "tr-tr": "Türkçe",
        "el-gr": "Ελληνικά",
        "bg-bg": "Български",
        "kk-kz": "Қазақ",
        "ru-ru": "Русский",
        "sr-cyrl-rs": "Српски (Србија и Црна Гора)",
        "sr-latn-rs": "Srpski (Srbija i Crna Gora)",
        "uk-ua": "Українська",
        "he-il": "עברית‏",
        "ar-sa": "العربية",
        "hi-in": "हिंदी",
        "th-th": "ไทย",
        "ko-kr": "한국어",
        "zh-tw": "中文 (台灣)",
        "zh-cn": "中文 (中华人民共和国)",
        "zh-hk": "中文 (香港特別行政區)",
        "ja-jp": "日本語",
        "bs-latn-ba": "Bosanski",
        "bs-cyrl-ba": "Босански",
        "ga-ie": "Irish (Ireland)",
        "lb-lu": "Luxembourgish (Luxembourg)",
        "mt-mt": "Maltese (Malta)"
    };
    var pathLocaleRegex = /^\/([a-z]{2}-(?:[a-z]{4}-)?[a-z]{2})(\/|$)/i;
    var localeCookieName = "MarketplaceSelectedLocale";
    function checkLocaleSupported(locale) {
        return !!localeNames[locale];
    }
    function getLocaleFromPath(path) {
        var match = pathLocaleRegex.exec(path);
        return match === null ? "en-us" : match[1];
    }
    function removeLocaleFromPath(path) {
        return path.replace(pathLocaleRegex, "/");
    }
    function replaceLocaleInPath(path, locale) {
        return path.replace(pathLocaleRegex, "/" + locale + "$2");
    }
    function setDocumentLocale() {
        var userLocale = msDocs.data.userLocale;
        var contentLocale = msDocs.data.contentLocale;
        msDocs.data.userLocaleName = localeNames[userLocale];
        $$1(function() {
            if (contentLocale !== userLocale && /^en/.test(contentLocale) && !/^en/.test(userLocale) && (msDocs.data.pageTemplate === "ContentPage" || msDocs.data.pageTemplate === "Conceptual" || msDocs.data.pageTemplate === "Module" || msDocs.data.pageTemplate === "ModuleUnit" || msDocs.data.pageTemplate === "LearningPath")) {
                showDisclaimer(loc_disclaimer_text);
            }
            setupLocaleLinks(userLocale);
        });
    }
    function setLocaleCookie(locale) {
        cookies.set(localeCookieName, locale, {
            expires: 365 * 10
        });
    }
    function setupLocaleLinks(userLocale) {
        Array.from(document.querySelectorAll(".locale-selector-link")).forEach(function(localeSelector) {
            return setupLocaleLink(localeSelector, userLocale);
        });
    }
    function setupLocaleLink(localeSelector, userLocale) {
        var textArea = localeSelector.querySelector(".local-selector-link-text");
        if (textArea) {
            textArea.textContent = localeNames[userLocale];
        } else {
            localeSelector.textContent = localeNames[userLocale];
        }
        var path = "/" + userLocale + "/locale";
        if (location.hostname.indexOf("techprofile.microsoft.com") === -1) {
            localeSelector.href = path + "?target=" + location.href;
        } else {
            var urlParams = parseQueryString();
            urlParams["set-locale-cookie"] = "true";
            var returnUrl = "" + location.origin + location.pathname + "?" + toQueryString(urlParams) + location.hash;
            localeSelector.href = "https://docs.microsoft.com/" + userLocale + "/locale?target=" + returnUrl;
        }
    }
    var platformConfig = {
        dotnet: {
            displayName: ".NET",
            validSearchTerm: /^[A-Za-z][A-Za-z0-9.<>,]{2,255}$/,
            namespaceItemType: "Namespace",
            namespacesPath: "namespaces",
            allApisLabel: loc_allapis,
            resultsHeadingTemplate: loc_apiReference,
            selectLabel: loc_selectVersion
        },
        java: {
            displayName: "Java",
            validSearchTerm: /^[A-Za-z][A-Za-z0-9.<>,]{2,255}$/,
            namespaceItemType: "Package",
            namespacesPath: "namespaces",
            allApisLabel: loc_allapis,
            resultsHeadingTemplate: loc_apiReference,
            selectLabel: loc_selectVersion
        },
        javascript: {
            displayName: "JavaScript",
            validSearchTerm: /^[A-Za-z][A-Za-z0-9.<>,\-]{2,255}$/,
            namespaceItemType: "Package",
            namespacesPath: "packages",
            allApisLabel: loc_allPackages,
            resultsHeadingTemplate: loc_packageReference,
            selectLabel: loc_selectPackage
        },
        powershell: {
            displayName: "PowerShell",
            validSearchTerm: /^[A-Za-z][A-Za-z0-9.-]{2,255}$/,
            namespaceItemType: "Module",
            namespacesPath: "modules",
            allApisLabel: loc_allPackages,
            resultsHeadingTemplate: loc_moduleReference,
            selectLabel: loc_selectPackage
        },
        python: {
            displayName: "Python",
            validSearchTerm: /^[A-Za-z][A-Za-z0-9.<>,]{2,255}$/,
            namespaceItemType: "Package",
            namespacesPath: "packages",
            allApisLabel: loc_allPackages,
            resultsHeadingTemplate: loc_packageReference,
            selectLabel: loc_selectPackage
        },
        rest: {
            displayName: "REST",
            validSearchTerm: /^[A-Za-z ]{3,255}$/,
            namespaceItemType: "",
            namespacesPath: "services",
            allApisLabel: loc_allapis,
            resultsHeadingTemplate: loc_apiReference,
            selectLabel: loc_selectVersion
        }
    };
    function findDhsApiBase() {
        var base = location.origin + "/_api/";
        var whitelist = {
            "https://docs.microsoft.com/_api/": true,
            "https://review.docs.microsoft.com/_api/": true,
            "https://ppe.docs.microsoft.com/_api/": true,
            "https://opsdocs.azurewebsites.net/_api/": true
        };
        if (whitelist[base]) {
            return base;
        } else {
            return "https://docs.microsoft.com/_api/";
        }
    }
    var restProductsPromise;
    function getRestProducts() {
        if (!restProductsPromise) {
            var url = getMeta("api") || "/en-us/rest/api/rest-products.json";
            restProductsPromise = fetchWithTimeout(url, {
                credentials: "include"
            }).then(function(response) {
                return response.json();
            });
        }
        return restProductsPromise;
    }
    var apiBase = "https://docs.microsoft.com/api/";
    var dhsApiBase = findDhsApiBase();
    function fetchPlatform(platformId) {
        return platformId === "rest" ? getRestProducts().then(function(data) {
            return mapSiteSearchToPlatform(data, platformId);
        }).catch(function() {
            return {
                platformId: platformId,
                displayName: platformId,
                families: []
            };
        }) : fetchWithTimeout(dhsApiBase + "familyTrees/byPlatform/" + encodeURIComponent(platformId)).then(function(response) {
            return response.json();
        }).then(function(dhsFamlies) {
            return mapDhsPlatformToPlatform(dhsFamlies, platformId);
        }).catch(function() {
            return {
                platformId: platformId,
                displayName: platformId,
                families: []
            };
        });
    }
    function search(platform, moniker, term, locale) {
        if (locale === void 0) {
            locale = "en-us";
        }
        if (platform === "rest") {
            return siteSearch(locale, "", moniker, term + "*", 0, 25);
        }
        var url = apiBase + "apibrowser/" + platform + "/search?api-version=0.2&search=" + encodeURIComponent(term);
        if (moniker !== "") {
            url += "&$filter=monikers/any(t: t eq '" + encodeURIComponent(moniker) + "')";
        }
        return fetchWithTimeout(url).then(function(response) {
            return response.json();
        });
    }
    function siteSearch(locale, dataSource, scope, term, skip, take) {
        var url = "https://docs.microsoft.com/api/search?locale=" + locale + "&search=" + term + "&$skip=" + skip + "&$top=" + take;
        var allScopes = scope !== "" ? [ "REST" ].concat([ scope ]) : [ "REST" ];
        var filterExpression = allScopes.map(function(x) {
            return "scopes/any(t:t eq '" + x + "')";
        }).join(" and ");
        url += "&$filter=" + encodeURIComponent(filterExpression);
        if (dataSource !== "") {
            url += "&dataSource=" + encodeURIComponent(dataSource);
        }
        return fetchWithTimeout(url).then(function(response) {
            return response.json();
        }).then(siteSearchToApiSearch);
    }
    function siteSearchToApiSearch(siteSearchResponse) {
        return {
            count: siteSearchResponse.count,
            "@nextLink": siteSearchResponse["@nextLink"],
            results: siteSearchResponse.results.map(function(y) {
                return {
                    displayName: y.title,
                    url: y.url,
                    description: y.description,
                    itemType: null,
                    itemKind: null
                };
            })
        };
    }
    function fetchNamespaces(platform, moniker) {
        if (platform === "rest") {
            return fetchRestNamespaces(moniker);
        }
        var namespacesPath = platformConfig[platform].namespacesPath;
        return fetchWithTimeout(apiBase + "apibrowser/" + encodeURIComponent(platform) + "/" + namespacesPath + "?moniker=" + encodeURIComponent(moniker) + "&api-version=0.2").then(function(response) {
            return response.json();
        });
    }
    function fetchRestNamespaces(moniker) {
        return getRestProducts().then(function(data) {
            return mapSiteSearchToNamespaceResponse(data, moniker);
        });
    }
    function fetchFamilyByMoniker(moniker) {
        return fetchWithTimeout(dhsApiBase + "familyTrees/bymoniker/" + encodeURIComponent(moniker)).then(function(response) {
            if (response.ok) {
                return response.json().then(function(dhsFamily) {
                    assertMonikerExists(moniker, dhsFamily);
                    return dhsFamily;
                });
            }
            return Promise.reject(null);
        }).then(function(family) {
            return mapDhsFamilyToFamily(family);
        }).catch(function() {
            return createFamilyFromMoniker(moniker);
        });
    }
    function createFamilyFromMoniker(moniker) {
        return {
            displayName: moniker,
            products: [ {
                displayName: moniker,
                packages: [ {
                    displayName: moniker,
                    isDefault: true,
                    moniker: moniker,
                    versionDisplayName: moniker,
                    isDeprecated: false,
                    isPrerelease: false
                } ]
            } ]
        };
    }
    function mapDhsFamilyToFamily(dhsFamily) {
        return {
            displayName: dhsFamily.familyName,
            products: dhsFamily.products.map(function(_a) {
                var productName = _a.productName, packages = _a.packages;
                return {
                    displayName: productName,
                    packages: packages.sort(function(a, b) {
                        return b.order - a.order;
                    }).filter(function(pkg) {
                        return filterDhsPackage(pkg);
                    }).map(function(p) {
                        return {
                            displayName: p.monikerDisplayName,
                            isDefault: p.isDefault,
                            moniker: p.monikerName,
                            versionDisplayName: p.versionDisplayName,
                            isDeprecated: p.isDeprecated,
                            isPrerelease: p.isPrerelease
                        };
                    })
                };
            })
        };
    }
    function filterDhsPackage(pkg) {
        if (msDocs.data.brand === "mooncake") {
            return pkg.monikerName !== "azure-cli-2017-03-09-profile";
        }
        return true;
    }
    function mapDhsPlatformToPlatform(dhsFamilies, platformId) {
        return {
            platformId: platformId,
            families: dhsFamilies.map(mapDhsFamilyToFamily)
        };
    }
    function assertMonikerExists(moniker, family) {
        if (!family.products.find(function(product) {
            return !!product.packages.find(function(pkg) {
                return pkg.monikerName === moniker;
            });
        })) {
            throw new Error('The family "' + family.familyName + '" does not contain the moniker "' + moniker + '".');
        }
    }
    function mapSiteSearchToPlatform(response, platformId) {
        return {
            platformId: platformId,
            families: [ {
                displayName: "",
                products: [ {
                    displayName: "",
                    packages: response.map(function(each) {
                        return {
                            displayName: each.name,
                            moniker: each.scope,
                            versionDisplayName: each.name,
                            isDefault: false,
                            isDeprecated: false,
                            isPrerelease: false
                        };
                    })
                } ]
            } ]
        };
    }
    function mapSiteSearchToNamespaceResponse(response, moniker) {
        var apiItems = (response.filter(function(platform) {
            return (platform.scope || "").toLowerCase() === (moniker || "").toLowerCase();
        })[0].services || []).map(function(each) {
            return {
                displayName: each.name,
                url: each.url,
                description: each.description,
                itemKind: loc_service
            };
        });
        return {
            apiItems: apiItems
        };
    }
    var monikerChangedEvent = "moniker-changed";
    var sameMonikerSelectedEvent = "same-moniker-selected";
    var readMonikerFromQuery = function() {
        var view = parseQueryString().view;
        return view === undefined ? "" : view;
    };
    var moniker = readMonikerFromQuery();
    function getMoniker() {
        return moniker;
    }
    function setMoniker(newMoniker) {
        if (newMoniker === moniker) {
            window$1.dispatchEvent(new CustomEvent(sameMonikerSelectedEvent, {
                detail: {
                    moniker: moniker
                }
            }));
            return;
        }
        moniker = newMoniker;
        window$1.dispatchEvent(new CustomEvent(monikerChangedEvent, {
            detail: {
                moniker: moniker
            }
        }));
    }
    window$1.addEventListener("popstate", function() {
        return setMoniker(readMonikerFromQuery());
    });
    var familyPromise;
    function getFamily() {
        if (familyPromise === undefined) {
            var moniker = getMoniker();
            familyPromise = fetchFamilyByMoniker(moniker);
        }
        return familyPromise;
    }
    function findPackageInFamily(family, moniker) {
        for (var _i = 0, _a = family.products; _i < _a.length; _i++) {
            var product = _a[_i];
            for (var _b = 0, _c = product.packages; _b < _c.length; _b++) {
                var pkg = _c[_b];
                if (pkg.moniker === moniker) {
                    return pkg;
                }
            }
        }
        return null;
    }
    var pageMonikers = {
        any: false
    };
    function readPageMonikers() {
        var tags = getMetas("monikers");
        pageMonikers.any = tags.length > 0;
        for (var i = 0; i < tags.length; i++) {
            pageMonikers[tags[i]] = true;
        }
    }
    readPageMonikers();
    function pageSupportsMoniker(moniker) {
        return moniker !== "" && pageMonikers[moniker] !== undefined;
    }
    function renderAppliesTo(container) {
        getFamily().then(function(family) {
            var output = "";
            var productIndex = 0;
            for (var _i = 0, _a = family.products; _i < _a.length; _i++) {
                var product = _a[_i];
                var packageLinks = [];
                for (var _b = 0, _c = product.packages; _b < _c.length; _b++) {
                    var _d = _c[_b], moniker = _d.moniker, versionDisplayName = _d.versionDisplayName;
                    if (pageSupportsMoniker(moniker) && pageMonikers[moniker]) {
                        packageLinks.push('<span class="cdl">' + escape$1(versionDisplayName) + "</span>");
                    }
                }
                if (packageLinks.length === 0) {
                    continue;
                }
                var titleClass = productIndex === 0 ? "propertyInfoTitle" : "propertyInfoTitle stack";
                output += '<h4 class="' + titleClass + '">' + escape$1(product.displayName) + '</h4>\n\n\t\t\t<div class="cdlHolder">' + packageLinks.join(" ") + "</div>\n";
                productIndex++;
            }
            container.insertAdjacentHTML("afterend", output);
        });
    }
    var fallbackDisclaimer;
    function displayMonikerFallbackMessage() {
        removeMonikerFallbackMessage();
        var fallbackFromMoniker = escape$1(parseQueryString().viewFallbackFrom);
        if (fallbackFromMoniker === undefined) {
            return Promise.resolve();
        }
        return getFamily().then(function(family) {
            var pkg = findPackageInFamily(family, fallbackFromMoniker);
            return pkg ? pkg.displayName : fallbackFromMoniker;
        }, function() {
            return fallbackFromMoniker;
        }).then(function(displayName) {
            fallbackDisclaimer = showDisclaimer(loc_monikerFallback.replace("{0}", displayName));
        });
    }
    function removeMonikerFallbackMessage() {
        if (fallbackDisclaimer) {
            fallbackDisclaimer.parentElement.removeChild(fallbackDisclaimer);
            fallbackDisclaimer = null;
            notifyContentUpdated();
        }
    }
    function filterContentByMoniker() {
        var moniker = getMoniker();
        if (!pageSupportsMoniker(moniker)) {
            return false;
        }
        processDataMoniker(moniker);
        var links = discoverLinks(document$1.documentElement, document$1.getElementById("main"));
        processLinks(links, moniker);
        renderInTopicTOC();
        notifyContentUpdated();
        return true;
    }
    var monikerStyle = document$1.createElement("style");
    document$1.head.appendChild(monikerStyle);
    function processDataMoniker(moniker) {
        monikerStyle.textContent = "\n\t\t[data-moniker]:not([data-moniker~='" + moniker + "']) {\n\t\t\tdisplay: none !important;\n\t\t}\n\t";
        var addId = document$1.querySelectorAll("[data-moniker~='" + moniker + "'] [data-id]");
        for (var i = 0; i < addId.length; i++) {
            var element = addId.item(i);
            element.id = element.getAttribute("data-id");
        }
        var removeId = document$1.querySelectorAll("[data-moniker]:not([data-moniker~='" + moniker + "']) [id]");
        for (var i = 0; i < removeId.length; i++) {
            var element = removeId.item(i);
            element.setAttribute("data-id", element.id);
            element.removeAttribute("id");
        }
    }
    function discoverLinks(containerElement, contentElement) {
        return Array.from(containerElement.querySelectorAll('a[href*="view="]:not(.preserve-view):not([data-linktype="external"])')).filter(function(element) {
            return !(contentElement.contains(element) && !element.classList.contains("xref"));
        });
    }
    function processLinks(links, moniker) {
        function processLink(a) {
            if (a.search === "") {
                return;
            }
            var query = parseQueryString(a.search);
            if (query.view === undefined) {
                return;
            }
            query.view = moniker;
            a.search = toQueryString(query);
        }
        links.forEach(processLink);
    }
    function canHandleClientSide(moniker) {
        return pageMonikers[moniker] !== undefined || msDocs.data.pageTemplate === "ApiBrowserPage";
    }
    function monikerChangedHandler() {
        var moniker = getMoniker();
        var isClientSide = canHandleClientSide(moniker);
        updateQueryString({
            view: moniker,
            viewFallbackFrom: null
        }, isClientSide ? "pushState" : "href");
        if (isClientSide) {
            removeMonikerFallbackMessage();
            filterContentByMoniker();
        }
    }
    function sameMonikerSelectedHandler() {
        updateQueryString({
            viewFallbackFrom: null
        }, "replaceState");
        removeMonikerFallbackMessage();
    }
    function handleMonikerChange() {
        window$1.addEventListener(monikerChangedEvent, monikerChangedHandler);
        window$1.addEventListener(sameMonikerSelectedEvent, sameMonikerSelectedHandler);
    }
    var platformId = getMeta("platform") || getMeta("apiPlatform") || null;
    var platformPromise;
    function getPlatform$1() {
        if (platformPromise === undefined) {
            platformPromise = fetchPlatform(platformId).then(flattenPlatform);
        }
        return platformPromise;
    }
    function flattenPlatform(platform) {
        var platformId = platform.platformId, families = platform.families;
        var packages = [];
        var packagesByMoniker = {};
        var products = [];
        for (var i = 0; i < families.length; i++) {
            var family = families[i];
            for (var j = 0; j < family.products.length; j++) {
                var product = family.products[j];
                products.push(product);
                for (var k = 0; k < product.packages.length; k++) {
                    var _a = product.packages[k], moniker = _a.moniker, displayName = _a.displayName, versionDisplayName = _a.versionDisplayName, isDefault = _a.isDefault, isDeprecated = _a.isDeprecated, isPrerelease = _a.isPrerelease;
                    var pkg = {
                        platform: platform,
                        family: family,
                        product: product,
                        moniker: moniker,
                        displayName: displayName,
                        versionDisplayName: versionDisplayName,
                        isDefault: isDefault,
                        isDeprecated: isDeprecated,
                        isPrerelease: isPrerelease
                    };
                    packages.push(pkg);
                    packagesByMoniker[pkg.moniker] = pkg;
                }
            }
        }
        return {
            platformId: platformId,
            families: families,
            products: products,
            packages: packages,
            packagesByMoniker: packagesByMoniker
        };
    }
    var bigScreenQuery = window$1.matchMedia("screen and (min-width: 768px), screen and (min-height: 1024px)");
    var singleProduct = false;
    function createMonikerPicker(allApis) {
        var _a = initialRender(), element = _a.element, button = _a.button, buttonCaption = _a.buttonCaption, productList = _a.productList;
        var checkEventTarget = function(event) {
            if (event.target instanceof Element && !element.contains(event.target)) {
                collapse();
            }
        };
        var expand = function() {
            document$1.body.removeAttribute("style");
            document$1.documentElement.classList.add("moniker-picker-expanded");
            element.classList.add("expanded");
            button.setAttribute("aria-expanded", "true");
            window$1.addEventListener("focus", checkEventTarget, {
                capture: true
            });
            window$1.addEventListener("click", checkEventTarget);
            bigScreenQuery.addListener(collapse);
        };
        var collapse = function() {
            document$1.documentElement.classList.remove("moniker-picker-expanded");
            element.classList.remove("expanded");
            button.setAttribute("aria-expanded", "false");
            window$1.removeEventListener("focus", checkEventTarget, {
                capture: true
            });
            window$1.removeEventListener("click", checkEventTarget);
            bigScreenQuery.removeListener(collapse);
        };
        var collapseAndFocusButton = function() {
            collapse();
            button.focus();
        };
        finishRenderingAsync(allApis, button, buttonCaption, productList);
        handleMainMenuButtonInteraction(button, productList, expand, collapseAndFocusButton);
        handleKeyboardInteractionInMenu(productList, collapseAndFocusButton);
        handleMenuItemClick(productList, collapseAndFocusButton);
        return element;
    }
    function initialRender() {
        var element = document$1.createElement("div");
        element.classList.add("moniker-picker");
        element.setAttribute(contentAttrs.name, "moniker-picker");
        var buttonId = generateElementId();
        var menuId = generateElementId();
        element.innerHTML = '\n\t\t<button class="products"\n\t\t\t\tid="' + buttonId + '"\n\t\t\t\taria-haspopup="true"\n\t\t\t\taria-controls="' + menuId + '"\n\t\t\t\taria-expanded="false">\n\t\t\t<span class="visually-hidden">' + escape$1(platformId ? platformConfig[platformId].selectLabel : loc_selectedVersion) + '</span>\n\t\t\t<span aria-hidden="true"></span>\n\t\t</button>\n\t\t<div\tclass="products"\n\t\t\t\tid="' + menuId + '"\n\t\t\t\trole="menu"\n\t\t\t\taria-labelledby="' + buttonId + '" style="z-index: 5000">\n\t\t\t<span aria-hidden="true">' + escape$1(loc_product) + '</span>\n\t\t\t<ul aria-label="' + escape$1(loc_product) + '"></ul>\n\t\t</div>';
        return {
            element: element,
            button: element.firstElementChild,
            buttonCaption: element.firstElementChild.lastElementChild,
            productList: element.lastElementChild.lastElementChild
        };
    }
    function finishRenderingAsync(allApis, button, buttonCaption, productList) {
        if (platformId === "rest") {
            singleProduct = true;
        }
        if (allApis) {
            return getPlatform$1().then(function(platform) {
                if (platform.packagesByMoniker[getMoniker()] === undefined) {
                    setMoniker("");
                }
                var updateCaption = function() {
                    var moniker = getMoniker();
                    if (moniker === "") {
                        buttonCaption.textContent = platformConfig[platformId].allApisLabel;
                    } else {
                        buttonCaption.innerHTML = breakText(platform.packagesByMoniker[moniker].displayName);
                    }
                };
                window$1.addEventListener(monikerChangedEvent, updateCaption);
                updateCaption();
                renderAllApis(productList);
                for (var _i = 0, _a = platform.families; _i < _a.length; _i++) {
                    var family = _a[_i];
                    renderProducts(family.products, productList);
                }
            });
        }
        return getFamily().then(function(family) {
            singleProduct = family.products.length === 1;
            if (singleProduct && family.products[0].packages.length === 1) {
                button.disabled = true;
            }
            var updateCaption = function() {
                var moniker = getMoniker();
                buttonCaption.innerHTML = breakText(findPackageInFamily(family, moniker).displayName);
            };
            window$1.addEventListener(monikerChangedEvent, updateCaption);
            updateCaption();
            renderProducts(family.products, productList);
        });
    }
    function renderAllApis(productList) {
        var displayName = platformConfig[platformId].allApisLabel;
        productList.insertAdjacentHTML("afterbegin", '<li><a class="preserve-view" role="menuitem" href="?view=" tabindex="-1">' + displayName + "</a></li>");
    }
    function renderProducts(products, productList) {
        if (singleProduct) {
            productList.previousElementSibling.textContent = platformId === "rest" ? loc_product : loc_version;
            renderPackages(products[0].packages, productList);
            return;
        }
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var _a = products_1[_i], displayName = _a.displayName, packages = _a.packages;
            var buttonId = generateElementId();
            var menuId = generateElementId();
            var dotsOnly = true;
            productList.insertAdjacentHTML("beforeend", '<li>\n\t\t\t\t<button class="versions has-inner-focus"\n\t\t\t\t\t\tid="' + buttonId + '"\n\t\t\t\t\t\trole="menuitem"\n\t\t\t\t\t\taria-haspopup="true"\n\t\t\t\t\t\taria-controls="' + menuId + '"\n\t\t\t\t\t\taria-expanded="false"\n\t\t\t\t\t\ttabindex="-1">\n\t\t\t\t\t' + breakText(displayName, dotsOnly) + '\n\t\t\t\t</button>\n\t\t\t\t<div\tclass="versions"\n\t\t\t\t\t\tid="' + menuId + '"\n\t\t\t\t\t\trole="menu"\n\t\t\t\t\t\taria-labelledby="' + buttonId + '">\n\t\t\t\t\t<span aria-hidden="true">' + escape$1(loc_version) + '</span>\n\t\t\t\t\t<ul aria-label="' + escape$1(loc_version) + '"></ul>\n\t\t\t\t</div>\n\t\t\t</li>');
            var versionsMenu = productList.lastElementChild.lastElementChild;
            var packageList = versionsMenu.lastElementChild;
            renderPackages(packages, packageList);
            versionsMenu.insertAdjacentHTML("beforeend", '<p class="moniker-auxillary-links"></p>');
            var monikerLinks = versionsMenu.lastElementChild;
            if (packages.find(function(pkg) {
                return /^azurermps/.test(pkg.moniker);
            })) {
                monikerLinks.insertAdjacentHTML("beforeend", '<a href="https://aka.ms/pshelpmechoose">' + escape$1(loc_helpMeChoose) + "</a>");
            }
            var archiveUrl = getMeta("archive_url");
            if (archiveUrl) {
                monikerLinks.insertAdjacentHTML("beforeend", '<a href="' + archiveUrl + '">' + escape$1(loc_archiveDocs) + "</a>");
            }
        }
    }
    function renderPackages(packages, packageList) {
        for (var _i = 0, packages_1 = packages; _i < packages_1.length; _i++) {
            var _a = packages_1[_i], moniker = _a.moniker, isDefault = _a.isDefault, versionDisplayName = _a.versionDisplayName, displayName = _a.displayName;
            packageList.insertAdjacentHTML("beforeend", '<li><a class="preserve-view has-inner-focus" role="menuitem" href="?view=' + moniker + '" aria-label="' + displayName + '" data-default="' + isDefault + '" tabindex="-1">' + escape$1(versionDisplayName) + "</a></li>");
        }
    }
    function expandProduct(productList, productButton) {
        var current = productList.querySelector('button[aria-expanded="true"]');
        if (current === productButton) {
            return;
        }
        if (current !== null) {
            current.setAttribute("aria-expanded", "false");
        }
        if (productButton !== null) {
            productButton.setAttribute("aria-expanded", "true");
        }
    }
    function findAnchorByMoniker(container, moniker) {
        return container.querySelector('a[href="?view=' + moniker + '"]');
    }
    function findAnchorToSelect(productButton) {
        var versionsMenu = productButton.nextElementSibling;
        var current = findAnchorByMoniker(versionsMenu, getMoniker());
        var productDefault = versionsMenu.querySelector('a[href^="?view="][data-default="true"]');
        var first = versionsMenu.querySelector('a[href^="?view="]');
        return current || productDefault || first;
    }
    function getProductButton(monikerAnchor) {
        if (monikerAnchor.search === "?view=" || singleProduct) {
            return null;
        }
        return monikerAnchor.parentElement.parentElement.parentElement.previousElementSibling;
    }
    function handleMainMenuButtonInteraction(button, productList, expand, collapse) {
        var expandAndSelectCurrent = function() {
            expand();
            var moniker = getMoniker();
            var anchor = findAnchorByMoniker(productList, moniker);
            var productButton = getProductButton(anchor);
            expandProduct(productList, productButton);
            setTimeout(function() {
                if (productButton !== null) {
                    productButton.scrollIntoView(false);
                }
                anchor.scrollIntoView(false);
                anchor.focus();
            });
        };
        button.addEventListener("click", function() {
            var expand = button.getAttribute("aria-expanded") === "false";
            if (expand) {
                expandAndSelectCurrent();
            } else {
                collapse();
            }
        });
        button.addEventListener("keydown", function(event) {
            var expanded = button.getAttribute("aria-expanded") === "true";
            if (expanded && event.keyCode === keyCodes.up) {
                event.preventDefault();
                collapse();
            } else if (!expanded && event.keyCode === keyCodes.down) {
                event.preventDefault();
                expandAndSelectCurrent();
            }
        });
    }
    function handleKeyboardInteractionInMenu(productList, collapse) {
        productList.addEventListener("keydown", function(event) {
            if (!bigScreenQuery.matches) {
                return;
            }
            var target = event.target;
            if (target.getAttribute("role") !== "menuitem") {
                return;
            }
            var keyCode = event.keyCode;
            var el;
            switch (keyCode) {
              case keyCodes.left:
                if (target instanceof HTMLAnchorElement && target.search !== "?view=") {
                    event.preventDefault();
                    getProductButton(target).focus();
                }
                break;

              case keyCodes.right:
                if (target instanceof HTMLButtonElement && target.hasAttribute("aria-controls")) {
                    event.preventDefault();
                    findAnchorToSelect(target).focus();
                }
                break;

              case keyCodes.up:
              case keyCodes.down:
                event.preventDefault();
                var nextFn = keyCode === keyCodes.up ? "previousElementSibling" : "nextElementSibling";
                var firstFn = keyCode === keyCodes.up ? "lastElementChild" : "firstElementChild";
                if (target.parentElement[nextFn] === null) {
                    el = target.parentElement.parentElement[firstFn].firstElementChild;
                } else {
                    el = target.parentElement[nextFn].firstElementChild;
                }
                el.focus();
                if (el.parentElement.parentElement === productList) {
                    expandProduct(productList, el instanceof HTMLButtonElement ? el : null);
                }
                break;

              case keyCodes.home:
              case keyCodes.end:
                event.preventDefault();
                var fn = keyCode === keyCodes.home ? "firstElementChild" : "lastElementChild";
                el = target.parentElement.parentElement[fn].firstElementChild;
                el.focus();
                if (el.parentElement.parentElement === productList) {
                    expandProduct(productList, el instanceof HTMLButtonElement ? el : null);
                }
                break;

              case keyCodes.escape:
                event.preventDefault();
                collapse();
                break;
            }
        });
    }
    function handleMenuItemClick(productList, collapse) {
        productList.addEventListener("click", function(event) {
            var target = event.target;
            if (target.getAttribute("role") !== "menuitem") {
                return;
            }
            if (target instanceof HTMLAnchorElement) {
                event.preventDefault();
                var moniker = parseQueryString(target.search).view;
                setMoniker(moniker);
                collapse();
                return;
            }
            if (target instanceof HTMLButtonElement) {
                if (!bigScreenQuery.matches && target.getAttribute("aria-expanded") === "true") {
                    target.setAttribute("aria-expanded", "false");
                } else {
                    expandProduct(productList, target);
                }
                target.focus();
            }
        });
    }
    var blockName = "api-search-quick-filter";
    function readQuickFilters() {
        return getPlatform$1().then(function(platform) {
            var packages = platform.packagesByMoniker;
            var any = false;
            var readColumn = function(name) {
                var raw = getMeta(name) || "";
                var monikers = raw.split(",").map(function(str) {
                    return str.trim();
                }).filter(function(moniker) {
                    if (packages[moniker] === undefined) {
                        console.warn('Quick Filter: no package with moniker "' + moniker + '" was found.');
                        return false;
                    }
                    any = true;
                    return true;
                });
                return monikers.map(function(moniker) {
                    return {
                        moniker: moniker,
                        displayName: packages[moniker].displayName
                    };
                });
            };
            var columns = [ readColumn("quickFilterColumn1"), readColumn("quickFilterColumn2"), readColumn("quickFilterColumn3") ];
            return {
                any: any,
                columns: columns
            };
        });
    }
    function createQuickFilter(quickFilters) {
        var blockDiv = document$1.createElement("div");
        blockDiv.classList.add(blockName);
        blockDiv.setAttribute(contentAttrs.name, blockName);
        var heading = document$1.createElement("h2");
        heading.textContent = loc_quickfilters;
        heading.classList.add("api-search-heading");
        blockDiv.appendChild(heading);
        for (var _i = 0, _a = quickFilters.columns; _i < _a.length; _i++) {
            var column = _a[_i];
            var columnDiv = document$1.createElement("div");
            blockDiv.appendChild(columnDiv);
            var _loop_1 = function(moniker, displayName) {
                var button = document$1.createElement("button");
                button.innerHTML = breakText(displayName);
                button.addEventListener("click", function() {
                    jsllReady.then(function(awa) {
                        return awa.ct.capturePageAction(button, {
                            actionType: awa.actionType.OTHER,
                            behavior: awa.behavior.OTHER,
                            content: {
                                event: "api-browser-quickfilter",
                                value: moniker,
                                platform: platformId
                            }
                        });
                    });
                    setMoniker(moniker);
                });
                columnDiv.appendChild(button);
            };
            for (var _b = 0, column_1 = column; _b < column_1.length; _b++) {
                var _c = column_1[_b], moniker = _c.moniker, displayName = _c.displayName;
                _loop_1(moniker, displayName);
            }
        }
        return blockDiv;
    }
    var config = platformConfig[platformId];
    var containers = [];
    function addResultsContainer(container, renderHeading) {
        containers.push({
            container: container,
            renderHeading: renderHeading
        });
    }
    function renderResults(platform, results, moreUrl) {
        document$1.documentElement.classList.add("api-search-has-results");
        var _loop_1 = function(container, renderHeading) {
            container.innerHTML = "";
            if (results.length === 0) {
                var noResultsMessage = platformId === "rest" ? loc_noResultsRest : loc_noResults;
                container.insertAdjacentHTML("afterbegin", '\n\t\t\t\t<div class="no-results">\n\t\t\t\t\t' + noResultsMessage + "\n\t\t\t\t</div>\n\t\t\t");
                return {
                    value: void 0
                };
            }
            if (renderHeading) {
                renderResultsHeading(container, platform);
            }
            var table = document$1.createElement("table");
            table.classList.add("api-search-results");
            table.setAttribute(contentAttrs.name, "api-search-results");
            var thead = document$1.createElement("thead");
            table.appendChild(thead);
            var theadrow = document$1.createElement("tr");
            thead.appendChild(theadrow);
            var th = document$1.createElement("th");
            th.textContent = loc_name;
            theadrow.appendChild(th);
            th = document$1.createElement("th");
            th.textContent = loc_description;
            theadrow.appendChild(th);
            var tbody = document$1.createElement("tbody");
            table.appendChild(tbody);
            appendResultsToTable(tbody, results);
            container.appendChild(table);
            if (moreUrl && renderHeading) {
                var moreButton_1 = document$1.createElement("button");
                moreButton_1.classList.add("more-button");
                moreButton_1.classList.add("button");
                moreButton_1.textContent = loc_loadMoreResults;
                moreButton_1.setAttribute(contentAttrs.name, "api-browser-load-more-results");
                moreButton_1.addEventListener("click", function() {
                    fetchWithTimeout(moreUrl).then(function(response) {
                        return response.json();
                    }).then(function(result) {
                        if (platform.platformId === "rest") {
                            result = siteSearchToApiSearch(result);
                        }
                        moreUrl = result["@nextLink"];
                        if (moreUrl === undefined) {
                            container.removeChild(moreButton_1);
                        }
                        appendResultsToTable(tbody, result.results);
                    });
                });
                container.appendChild(moreButton_1);
            }
        };
        for (var _i = 0, containers_1 = containers; _i < containers_1.length; _i++) {
            var _a = containers_1[_i], container = _a.container, renderHeading = _a.renderHeading;
            var state_1 = _loop_1(container, renderHeading);
            if (typeof state_1 === "object") return state_1.value;
        }
    }
    function appendResultsToTable(tbody, results) {
        var parser = document$1.createElement("div");
        var toText = function(html) {
            parser.innerHTML = html;
            return parser.textContent !== "null" ? parser.textContent : "";
        };
        var moniker = getMoniker();
        for (var i = 0; i < results.length; i++) {
            var result = results[i];
            var resultType = result.itemKind || result.itemType || config.namespaceItemType;
            var tr = document$1.createElement("tr");
            tbody.appendChild(tr);
            var td = document$1.createElement("td");
            var a = document$1.createElement("a");
            a.href = processUrl(result.url, moniker);
            a.innerHTML = breakText(result.displayName.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
            var s = document$1.createElement("span");
            s.textContent = " " + resultType;
            td.appendChild(a);
            td.appendChild(s);
            tr.appendChild(td);
            td = document$1.createElement("td");
            td.textContent = toText(result.description);
            tr.appendChild(td);
            tr.appendChild(td);
        }
    }
    function displayLoadingIndicator() {
        document$1.documentElement.classList.add("api-search-has-results");
        for (var _i = 0, containers_2 = containers; _i < containers_2.length; _i++) {
            var container = containers_2[_i].container;
            container.innerHTML = '\n\t\t\t<div class="c-progress f-indeterminate-regional" role="progressbar" aria-valuetext="Loading..." tabindex="0" aria-label="indeterminate regional progress bar">\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t</div>';
        }
    }
    function renderText(text) {
        document$1.documentElement.classList.add("api-search-has-results");
        for (var _i = 0, containers_3 = containers; _i < containers_3.length; _i++) {
            var container = containers_3[_i].container;
            container.textContent = text;
        }
    }
    function clearResults() {
        document$1.documentElement.classList.remove("api-search-has-results");
        for (var _i = 0, containers_4 = containers; _i < containers_4.length; _i++) {
            var container = containers_4[_i].container;
            container.innerHTML = "";
        }
    }
    function renderResultsHeading(container, platform) {
        var moniker = getMoniker();
        var displayName;
        var versionDisplayName;
        if (moniker === "") {
            displayName = platformConfig[platformId].displayName;
            versionDisplayName = null;
        } else {
            var pkg = platform.packagesByMoniker[moniker];
            displayName = pkg.product.displayName;
            versionDisplayName = pkg.versionDisplayName;
        }
        var heading = document$1.createElement("h2");
        heading.classList.add("api-search-results-heading");
        heading.innerHTML = config.resultsHeadingTemplate.replace("{0}", displayName);
        if (versionDisplayName !== null && platformId === "rest") {
            heading.innerHTML = escape$1(moniker) + " REST " + heading.innerHTML;
        } else if (versionDisplayName !== null) {
            heading.innerHTML = heading.innerHTML + ' <span class="moniker-version">version ' + escape$1(versionDisplayName) + "</span>";
        }
        container.appendChild(heading);
    }
    function processUrl(url, moniker) {
        if (moniker !== "" && !/[?&]view=/i.test(url)) {
            var _a = url.split("#"), path = _a[0], hash = _a[1];
            hash = hash === undefined ? "" : "#" + hash;
            url = platformId === "rest" ? "" + path + hash : path + "?view=" + encodeURIComponent(moniker) + hash;
        }
        if (/^https:\/\/docs.microsoft.com/.test(url)) {
            url = url.substr("https://docs.microsoft.com".length);
        }
        if (platformId !== "rest") {
            url = "/" + msDocs.data.userLocale + url;
        }
        return url;
    }
    var apiSearchTermChangedEvent = "api-search-term-changed";
    var term = "";
    function getTerm() {
        return term;
    }
    function setTerm(newTerm) {
        newTerm = newTerm.trim();
        if (newTerm === term) {
            return;
        }
        term = newTerm;
        if (msDocs.data.pageTemplate === "ApiBrowserPage") {
            updateQueryString({
                term: term
            }, "pushState");
        }
        window.dispatchEvent(new CustomEvent(apiSearchTermChangedEvent, {
            detail: {
                term: term
            }
        }));
    }
    function readTermFromQueryString() {
        var term = parseQueryString().term;
        return term === undefined ? "" : term.trim();
    }
    if (msDocs.data.pageTemplate === "ApiBrowserPage") {
        term = readTermFromQueryString();
        window.addEventListener("popstate", function() {
            return setTerm(readTermFromQueryString());
        });
    }
    function initApiSearch() {
        window$1.addEventListener(apiSearchTermChangedEvent, doApiSearch);
        window$1.addEventListener(monikerChangedEvent, doApiSearch);
        if (msDocs.data.pageTemplate === "ApiBrowserPage") {
            doApiSearch();
        }
    }
    var previousSearch = "";
    function doApiSearch() {
        var term = getTerm();
        var moniker = getMoniker();
        var currentSearch = term + "/" + moniker;
        if (currentSearch === previousSearch) {
            return Promise.resolve();
        }
        previousSearch = currentSearch;
        if (msDocs.data.pageTemplate === "ApiBrowserPage" && moniker !== "" && term === "") {
            displayLoadingIndicator();
            return Promise.all([ fetchNamespaces(platformId, moniker), getPlatform$1() ]).then(function(_a) {
                var result = _a[0], platform = _a[1];
                if (currentSearch !== previousSearch) {
                    return;
                }
                if (result.apiItems.length === 0) {
                    renderText("No namespaces");
                    return;
                }
                renderResults(platform, result.apiItems, null);
            }, function() {
                renderText(loc_apiSearchIsUnavailable);
            });
        }
        if (term.length < 3) {
            clearResults();
            return Promise.resolve();
        }
        if (!platformConfig[platformId].validSearchTerm.test(term)) {
            return getPlatform$1().then(function(platform) {
                return renderResults(platform, [], null);
            });
        }
        displayLoadingIndicator();
        return Promise.all([ search(platformId, moniker, term, msDocs.data.userLocale), getPlatform$1() ]).then(function(_a) {
            var result = _a[0], platform = _a[1];
            if (currentSearch !== previousSearch) {
                return;
            }
            bi(moniker, term, result.results.length);
            renderResults(platform, result.results, result["@nextLink"]);
        }, function() {
            renderText(loc_apiSearchIsUnavailable);
        });
    }
    function bi(moniker, term, results) {
        jsllReady.then(function(awa) {
            return awa.ct.captureContentPageAction({
                actionType: awa.actionType.OTHER,
                behavior: awa.behavior.SEARCH,
                content: {
                    event: "api-browser-search",
                    platform: platformId,
                    moniker: moniker,
                    term: term,
                    results: results
                }
            });
        });
    }
    var blockName$1 = "api-search-field";
    function createSearchField() {
        var form = document$1.createElement("form");
        form.classList.add(blockName$1);
        form.setAttribute(contentAttrs.name, blockName$1);
        form.action = "javascript:";
        form.addEventListener("submit", function(event) {
            return event.preventDefault();
        });
        var label = document$1.createElement("label");
        var labelSpan = document$1.createElement("span");
        labelSpan.classList.add("visually-hidden");
        labelSpan.textContent = loc_search;
        label.appendChild(labelSpan);
        form.appendChild(label);
        var input = document$1.createElement("input");
        input.type = "search";
        input.classList.add("input");
        input.value = getTerm();
        input.placeholder = loc_search;
        label.appendChild(input);
        var clearAnchor = document$1.createElement("a");
        clearAnchor.href = "#";
        clearAnchor.title = loc_clearterm;
        clearAnchor.classList.add("clear");
        clearAnchor.addEventListener("click", function(event) {
            event.preventDefault();
            input.value = "";
            input.dispatchEvent(new CustomEvent("change", {
                bubbles: true
            }));
        });
        label.appendChild(clearAnchor);
        var updateEmpty = function() {
            if (input.value === "") {
                input.classList.add("empty");
            } else {
                input.classList.remove("empty");
            }
        };
        updateEmpty();
        var timeout = 0;
        var handleInput = function() {
            updateEmpty();
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                return setTerm(input.value);
            }, 500);
        };
        input.addEventListener("change", handleInput);
        input.addEventListener("input", handleInput);
        window$1.addEventListener(apiSearchTermChangedEvent, function() {
            var term = getTerm();
            if (input.value.trim() === term) {
                return;
            }
            input.value = term;
            updateEmpty();
        });
        return form;
    }
    function apiBrowserPage() {
        handleMonikerChange();
        initApiSearch();
        if (platformId === "rest") {
            var h1 = document$1.querySelector("h1");
            h1.insertAdjacentHTML("beforeend", '<span class="tag top is-rounded is-large is-info">' + loc_preview + "</span>");
        }
        var contentDiv = document$1.querySelector(".content");
        var searchFieldContainer = document$1.createElement("div");
        searchFieldContainer.classList.add("api-browser-search-field-container");
        contentDiv.appendChild(searchFieldContainer);
        var allApis = true;
        searchFieldContainer.appendChild(createMonikerPicker(allApis));
        searchFieldContainer.appendChild(createSearchField());
        readQuickFilters().then(function(result) {
            if (!result.any) {
                return;
            }
            var quickFilter = createQuickFilter(result);
            searchFieldContainer.appendChild(quickFilter);
        });
        var resultsContainer = document$1.createElement("div");
        resultsContainer.classList.add("api-browser-results-container");
        contentDiv.appendChild(resultsContainer);
        var renderHeading = true;
        addResultsContainer(resultsContainer, renderHeading);
        var updateStatus = function() {
            var method = getMoniker() === "" && getTerm() === "" ? "remove" : "add";
            document$1.documentElement.classList[method]("has-moniker-or-term");
        };
        updateStatus();
        window.addEventListener(monikerChangedEvent, updateStatus);
        window.addEventListener(apiSearchTermChangedEvent, updateStatus);
    }
    var defaultBufferSize = 4;
    var pagingControlTemplate = function(currentPage, maxPages, buffer) {
        if (currentPage === void 0) {
            currentPage = 1;
        }
        if (maxPages === void 0) {
            maxPages = Infinity;
        }
        if (buffer === void 0) {
            buffer = defaultBufferSize;
        }
        var pages = Array.apply(null, Array(buffer * 2 + 1)).map(function(_, i) {
            return currentPage - buffer + i;
        }).filter(function(x) {
            return x > 0 && x <= maxPages;
        });
        return '\n\t<nav class="pagination" role="navigation" aria-label="pagination">\n\t\t<ul class="pagination-list">\n\t\t\t' + previousButtonTemplate(currentPage) + "\n\t\t\t" + pages.map(pageNumberTemplate(currentPage)).join("") + "\n\t\t\t" + nextButtonTemplate(currentPage, maxPages) + "\n\t\t</ul>\n\t</nav>\n\t";
    };
    var previousButtonTemplate = function(currentPage) {
        return currentPage > 1 ? '<li>\n\t\t\t<a class="pagination-link" data-page="' + Math.max(currentPage - 1, 1) + '" href="?page=' + (currentPage - 1) + '" aria-label="' + loc_previousPage + '">\n\t\t\t\t<span class="docon docon-arrow-left" aria-hidden="true"></span>\n\t\t\t</a>\n\t\t</li>' : "";
    };
    var pageNumberTemplate = function(currentPage) {
        return function(page) {
            return '\n\t<li>\n\t\t<a class="pagination-link ' + (page == currentPage ? "is-current" : "") + '" data-page="' + page + '" href="?page=' + page + '" aria-label="' + loc_page.replace("{0}", String(page)) + '" ' + (page == currentPage ? 'aria-current="true"' : "") + ">" + page + "</a>\n\t</li>\n";
        };
    };
    var nextButtonTemplate = function(currentPage, maxPages) {
        return currentPage < maxPages ? '<li>\n\t\t\t<a class="pagination-link" data-page="' + Math.min(currentPage + 1, maxPages) + '" href="?page=' + (currentPage + 1) + '" aria-label="' + loc_nextPage + '">\n\t\t\t\t<span class="docon docon-arrow-right" aria-hidden="true"></span>\n\t\t\t</a>\n\t\t</li>' : "";
    };
    var PagingControl = function(_super) {
        __extends(PagingControl, _super);
        function PagingControl(element, currentPage, lastPage) {
            var _this = _super.call(this) || this;
            _this.element = element;
            _this.currentPage = 1;
            _this.lastPage = 1;
            _this.currentPage = Math.max(currentPage, 1);
            _this.lastPage = lastPage ? Math.max(lastPage) : _this.lastPage;
            element.addEventListener("click", function(event) {
                var target = event.target.closest("[data-page]");
                if (!target || isNaN(parseInt(target.getAttribute("data-page")))) {
                    return;
                }
                event.preventDefault();
                var pageNumber = parseInt(target.getAttribute("data-page"));
                var pageEvent = new PageControlChangeEvent(pageNumber);
                _this.publish(pageEvent);
            });
            _this.create();
            return _this;
        }
        Object.defineProperty(PagingControl.prototype, "state", {
            get: function() {
                return {
                    currentPage: this.currentPage,
                    lastPage: this.lastPage
                };
            },
            enumerable: true,
            configurable: true
        });
        PagingControl.prototype.update = function(_a) {
            var currentPage = _a.currentPage, _b = _a.lastPage, lastPage = _b === void 0 ? Infinity : _b;
            this.currentPage = currentPage;
            this.lastPage = lastPage;
            this.create();
        };
        PagingControl.prototype.create = function() {
            this.element.innerHTML = pagingControlTemplate(this.currentPage, this.lastPage);
        };
        return PagingControl;
    }(EventBus);
    var PageControlChangeEvent = function() {
        function PageControlChangeEvent(page) {
            this.page = page;
        }
        return PageControlChangeEvent;
    }();
    function populateBreadcrumb(breadcrumbHolder, title, module) {
        if (msDocs.data.context.chromeless) {
            return;
        }
        var userLocale = msDocs.data.userLocale;
        var pageKind = getMeta("page_kind");
        var singleLearningPath = module && module.parents.length === 1 ? template$1(module.parents[0].title, "/" + userLocale + module.parents[0].url) : "";
        switch (pageKind) {
          case "product":
            breadcrumbHolder.innerHTML = template$1("Docs", "/" + userLocale + "/") + template$1("Learn");
            break;

          case "browse":
            breadcrumbHolder.innerHTML = template$1("Docs", "/" + userLocale + "/") + template$1("Learn", "/" + userLocale + "/learn/") + template$1(loc_browse);
            break;

          case "path":
            breadcrumbHolder.innerHTML = template$1("Docs", "/" + userLocale + "/") + template$1("Learn", "/" + userLocale + "/learn/") + template$1(loc_browse, "/" + userLocale + "/learn/browse/") + template$1(title);
            break;

          case "module":
            breadcrumbHolder.innerHTML = template$1("Docs", "/" + userLocale + "/") + template$1("Learn", "/" + userLocale + "/learn/") + template$1(loc_browse, "/" + userLocale + "/learn/browse/") + singleLearningPath + template$1(title);
            break;

          case "unit":
            breadcrumbHolder.innerHTML = template$1("Docs", "/" + userLocale + "/") + template$1("Learn", "/" + userLocale + "/learn/") + template$1(loc_browse, "/" + userLocale + "/learn/browse/") + singleLearningPath + template$1(module.title, "/" + userLocale + module.url) + template$1(title);
            break;

          default:
            throw new Error('Unsupported page_kind "' + pageKind + '".');
        }
        breadcrumbHolder.lastElementChild.previousElementSibling.classList.add("mobile-breadcrumb");
    }
    function template$1(title, link) {
        var crumb;
        if (link) {
            link = link.replace(/\/index$/i, "/");
            crumb = '<a href="' + link + '" itemprop="name">' + title + "</a>";
        } else {
            crumb = '<span itemprop="name">' + title + "</span>";
        }
        return "\n\t\t<li>\n\t\t\t" + crumb + "\n\t\t</li>";
    }
    function debounceScheduler(scheduler, clearScheduler, handler, timeout) {
        if (timeout === void 0) {
            timeout = 500;
        }
        var scheduleId = 0;
        var caller = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            clearScheduler(scheduleId);
            scheduleId = scheduler.apply(null, [ handler.bind.apply(handler, [ null ].concat(args)), timeout ]);
        };
        caller.cancel = function() {
            return clearScheduler(scheduleId);
        };
        return caller;
    }
    var debounce = {
        timeout: debounceScheduler.bind(null, setTimeout, clearTimeout),
        animationFrame: debounceScheduler.bind(null, window$1.requestAnimationFrame, window$1.cancelAnimationFrame)
    };
    var developServerUrl = "https://ppe.docs.microsoft.com/api/contentbrowser";
    var prodServerUrl = "https://docs.microsoft.com/api/contentbrowser";
    var branch = getBranch();
    var browseDefaults = {
        pagesize: 30
    };
    function getBrowseContent(criteria) {
        var query = {
            branch: branch,
            environment: getEnvironment(),
            locale: criteria.locale,
            terms: criteria.terms,
            facet: criteria.facets || [ "roles", "levels", "products", "resource_type" ],
            $filter: createODataFilterOptions(criteria.filter),
            $orderBy: criteria.order,
            $skip: criteria.skip,
            $top: criteria.top || browseDefaults.pagesize
        };
        var url = getServerUrl() + "/search?" + toQueryString(query, true);
        var init = {
            method: "GET"
        };
        return fetchWithTimeout(createRequest$1(url, init)).then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw {
                error: response.json()
            };
        });
    }
    function createODataFilterOptions(filterObject) {
        return Object.keys(filterObject).map(function(facet) {
            var query = (filterObject[facet] || []).map(function(value) {
                return facet != "resource_type" ? "(" + facet + "/any(t: t eq '" + value + "'))" : "(" + facet + " eq '" + value.replace("_", " ") + "')";
            }).join(" or ");
            return query.length ? "(" + query + ")" : "";
        }).filter(function(x) {
            return !!x;
        }).join(" and ");
    }
    function getBranch() {
        if (location.hostname === "localhost") {
            return "master";
        }
        var params = parseQueryString(location.search);
        return params.branch !== undefined ? params.branch : "";
    }
    function getEnvironment() {
        var hostname = location.hostname;
        return hostname === "localhost" || hostname === "ppe.docs.microsoft.com" ? "ppe" : "prod";
    }
    function getServerUrl() {
        var hostname = location.hostname;
        if (hostname === "localhost" || hostname === "ppe.docs.microsoft.com") {
            return developServerUrl;
        }
        return prodServerUrl;
    }
    function trackSearchEvent(event) {
        jsllReady.then(function(awa) {
            var action = {
                actionType: awa.actionType.OTHER,
                behavior: awa.behavior.OTHER,
                content: {
                    event: "content-browser-search",
                    term: event.criteria.terms,
                    results: event.result.count,
                    skip: event.criteria.skip || 0
                }
            };
            Object.keys(event.criteria.filter).forEach(function(facet) {
                action.content[facet] = event.criteria.filter[facet] || [];
            });
            awa.ct.captureContentPageAction(action);
        });
    }
    var facetMap = {
        roles: {
            administrator: loc_administrator,
            "business-analyst": loc_business_analyst,
            "business-user": loc_business_user,
            developer: loc_developer,
            "functional-consultant": loc_functional_consultant,
            "solution-architect": loc_solution_architect
        },
        levels: {
            advanced: loc_advanced,
            beginner: loc_beginner,
            intermediate: loc_intermediate
        },
        products: {
            "azure-active-directory": loc_products_azure_active_directory,
            "azure-advisor": loc_products_azure_advisor,
            "azure-application-insights": loc_products_azure_application_insights,
            "azure-cdn": loc_products_azure_cdn,
            "azure-clis": loc_products_azure_clis,
            "azure-cloud-shell": loc_products_azure_cloud_shell,
            "azure-container-instances": loc_products_azure_container_instances,
            "azure-container-registry": loc_products_azure_container_registry,
            "azure-cosmos-db": loc_products_azure_cosmos_db,
            "azure-cost-management": loc_products_azure_cost_management,
            "azure-event-grid": loc_products_azure_event_grid,
            "azure-event-hubs": loc_products_azure_event_hubs,
            "azure-functions": loc_products_azure_functions,
            "azure-iot-central": loc_products_azure_iot_central,
            "azure-key-vault": loc_products_azure_key_vault,
            "azure-log-analytics": loc_products_azure_log_analytics,
            "azure-monitor": loc_products_azure_monitor,
            "azure-portal": loc_products_azure_portal,
            "azure-redis-cache": loc_products_azure_redis_cache,
            "azure-resource-manager": loc_products_azure_resource_manager,
            "azure-sdks": loc_products_azure_sdks,
            "azure-service-bus": loc_products_azure_service_bus,
            "azure-sql-database": loc_products_azure_sql_database,
            "azure-storage": loc_products_azure_storage,
            "azure-virtual-machines": loc_products_azure_virtual_machines,
            "bizapps-d365": loc_products_bizapps_d365,
            "bizapps-power-apps": loc_products_bizapps_power_apps,
            "bizapps-flow": loc_products_bizapps_flow,
            "bizapps-power-bi": loc_products_bizapps_power_bi,
            "common-data-service": loc_products_common_data_service,
            "dynamics-ai-customer-service": loc_products_dynamics_ai_market_insights,
            "dynamics-ai-market-insights": loc_products_dynamics_ai_customer_service,
            "dynamics-ai-sales": loc_products_dynamics_ai_sales,
            "dynamics-business-central": loc_products_dynamics_business_central,
            "dynamics-customer-engagement": loc_products_dynamics_customer_engagement,
            "dynamics-customer-service": loc_products_dynamics_customer_service,
            "dynamics-field-service": loc_products_dynamics_field_service,
            "dynamics-finance-operations": loc_products_dynamics_finance_operations,
            "dynamics-layout": loc_products_dynamics_layout,
            "dynamics-marketing`": loc_products_dynamics_marketing,
            "dynamics-operations": loc_products_dynamics_operations,
            "dynamics-project-service": loc_products_dynamics_project_service,
            "dynamics-remote-assist": loc_products_dynamics_remote_assist,
            "dynamics-retail": loc_products_dynamics_retail,
            "dynamics-sales": loc_products_dynamics_sales,
            "dynamics-talent": loc_products_dynamics_talent,
            flow: loc_products_flow,
            "power-bi": loc_products_power_bi,
            powerapps: loc_products_powerapps,
            "vs-code": loc_products_vs_code
        },
        productFamilies: {
            azure: loc_products_azure,
            bizapps: loc_products_bizapps,
            dynamics: loc_products_dynamics,
            "power-platform": loc_products_power_platform,
            vs: loc_products_vs,
            windows: loc_products_windows
        },
        resourceTypes: {
            module: loc_module,
            "learning path": loc_learningpath
        },
        facetTypes: {
            roles: loc_roles,
            levels: loc_levels,
            products: loc_products,
            resource_type: loc_resource_type
        }
    };
    var flatFacetMap = __assign({}, facetMap.levels, facetMap.products, facetMap.productFamilies, facetMap.resourceTypes, facetMap.roles, facetMap.facetTypes);
    function convertMinsToHrsMins(mins) {
        var h = Math.floor(mins / 60);
        var m = mins % 60;
        if (h === 0) {
            return loc_minFormat.replace("{0}", m.toString());
        } else {
            return loc_hrMin.replace("{0}", h.toString()).replace("{1}", m.toString());
        }
    }
    var facetListTemplate = function(facets, filterCriteria) {
        var sorted = sortFacets(facets);
        var keys = Object.keys(sorted);
        return keys.map(function(key) {
            var startExpanded = filterCriteria[key] !== null;
            return '\n\t\t\t<div data-bi-name="' + key + '_facet" class="has-border-top">\n\t\t\t\t<button data-bi-name="expander" class="button level is-mobile is-text is-undecorated is-fullwidth has-border-none has-margin-none is-large has-padding-left-medium " aria-expanded="' + (startExpanded ? "true" : "false") + '" aria-controls="facet_' + key + '">\n\t\t\t\t\t<span class="has-text-weight-semibold is-size-7">' + (flatFacetMap[key] || key) + '</span>\n\t\t\t\t\t<span class="icon docon expanded-indicator docon-chevron-down-light"></span>\n\t\t\t\t</button>\n\t\t\t\t<div id="facet_' + key + '" class="panel-body" ' + (startExpanded ? "" : "hidden") + ">\n\t\t\t\t\t" + facetTemplate(key, sorted[key], filterCriteria) + "\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t";
        }).join("");
    };
    var facetTemplate = function(facetName, facet, filterCriteria, parent) {
        var list = filterCriteria[facetName];
        return '\n\t\t<ul class="has-margin-none has-padding-top-none has-padding-bottom-small has-padding-left-medium">\n\t\t\t' + facet.map(function(f) {
            return '\n\t\t\t\t<li class="is-unstyled">\n\t\t\t\t\t<label class="checkbox is-size-7">\n\t\t\t\t\t\t<input id="cb-' + f.value + '" ' + (parent ? 'data-parent="' + parent + '"' : "") + " " + (f.children && f.children.length ? 'data-children="true"' : "") + " " + (list && list.indexOf(f.value) > -1 ? 'checked="checked"' : "") + ' name="' + facetName + '" value="' + f.value + '" type="checkbox"> ' + (flatFacetMap[f.value] || f.value) + "\n\t\t\t\t\t</label>\n\t\t\t\t\t" + (f.children && f.children.length ? facetTemplate(facetName, f.children, filterCriteria, f.value) : "") + "\n\t\t\t\t</li>\n\t\t\t";
        }).join("") + "\n\t\t</ul>\n\t";
    };
    var listTemplate = function(items, count) {
        return '\n\t<div class="level">\n\t\t<div class="level-left">\n\t\t\t<div class="level-item">\n\t\t\t\t<span class="has-text-weight-semibold">' + loc_resultsFound.replace("{0}", String(count)) + '</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="level-right">\n\n\t\t</div>\n\t</div>\n\t<div class="columns is-multiline has-margin-bottom-large has-small-gaps">\n\t\t' + items.map(listItemTemplate).join("") + "\n\t</div>\n\t";
    };
    var errorTemplate = "<p>" + loc_errorLoadingBrowseContent + "</p>";
    var listItemTemplate = function(item) {
        var childrenString = item.number_of_children == 1 ? item.resource_type == "module" ? loc_oneUnit : loc_oneModule : item.resource_type == "module" ? loc_multipleUnits.replace("{numberOf}", item.number_of_children.toString()) : loc_multipleModules.replace("{numberOf}", item.number_of_children.toString());
        return '\n\t<div data-bi-name="card" class="column is-4-desktop is-6">\n\t\t<a href="/' + msDocs.data.userLocale + item.url + '" class="has-text-black is-inline-block is-undecorated content-browser-card-link">\n\t\t\t<article class="card is-height-300-tablet overflow-fade">\n\t\t\t\t<header class="card-header is-shadowless">\n\t\t\t\t\t<div class="has-padding-large has-padding-bottom-none">\n\t\t\t\t\t\t<figure class="has-margin-none image is-64x64">\n\t\t\t\t\t\t\t<img role="presentation" src="' + item.icon_url + '" alt="" />\n\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t<h3 class="is-size-5 has-margin-top-medium has-margin-bottom-none">' + item.title + '</h3>\n\t\t\t\t\t\t<ul class="metadata page-metadata">\n\t\t\t\t\t\t\t<li>' + convertMinsToHrsMins(item.duration_in_minutes) + "</li>\n\t\t\t\t\t\t\t<li>" + (facetMap.resourceTypes[item.resource_type] || item.resource_type) + "</li>\n\t\t\t\t\t\t\t<li>" + childrenString + '</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</header>\n\t\t\t\t<div class="card-content has-padding-top-none">\n\t\t\t\t\t' + (item.summary.replace("<p ", '<p class="has-line-height-reset has-margin-top-extra-small is-size-7"') || "") + '\n\t\t\t\t</div>\n\t\t\t\t<div class="bottom-to-top-fade is-hidden-mobile"></div>\n\t\t\t</article>\n\t\t</a>\n\t</div>';
    };
    function sortFacets(facets) {
        var sorted = {};
        var _loop_1 = function(key) {
            var localeSort = function(a, b) {
                return (flatFacetMap[a.value] || a.value).localeCompare(flatFacetMap[b.value] || b.value, msDocs.data.userLocale, {
                    sensitivity: "base"
                });
            };
            if (key === "levels") {
                sorted[key] = [];
                facets[key].forEach(function(levelItem) {
                    if (levelItem.value === "beginner") {
                        sorted[key][0] = levelItem;
                    }
                    if (levelItem.value === "intermediate") {
                        sorted[key][1] = levelItem;
                    }
                    if (levelItem.value === "advanced") {
                        sorted[key][2] = levelItem;
                    }
                });
            } else {
                sorted[key] = facets[key].sort(localeSort).map(function(x) {
                    if (x.children && x.children.length) {
                        x.children.sort(localeSort);
                    }
                    return x;
                });
            }
        };
        for (var key in facets) {
            _loop_1(key);
        }
        return sorted;
    }
    var FacetList = function(_super) {
        __extends(FacetList, _super);
        function FacetList(facetContainer, tagContainer, filterCriteria) {
            if (filterCriteria === void 0) {
                filterCriteria = {
                    roles: [],
                    levels: [],
                    products: [],
                    resource_type: []
                };
            }
            var _this = _super.call(this) || this;
            _this.facetContainer = facetContainer;
            _this.tagContainer = tagContainer;
            _this.filterCriteria = filterCriteria;
            facetContainer.addEventListener("click", function(event) {
                if (event.target instanceof HTMLInputElement && event.target.type === "checkbox") {
                    var target_1 = event.target;
                    var valuesToRemove_1 = [];
                    var valuesToAdd = [];
                    if (target_1.checked) {
                        valuesToAdd.push(target_1.value);
                        if (target_1.hasAttribute("data-children")) {
                            Array.from(target_1.parentElement.parentElement.querySelectorAll("input[type=checkbox]:not([data-children])")).forEach(function(x) {
                                x.checked = !target_1.checked;
                                valuesToRemove_1.push(x.value);
                            });
                        }
                        if (target_1.hasAttribute("data-parent")) {
                            var parent = target_1.getAttribute("data-parent");
                            Array.from(facetContainer.querySelectorAll('input[value="' + parent + '"][data-children]')).forEach(function(x) {
                                x.checked = !target_1.checked;
                                valuesToRemove_1.push(x.value);
                            });
                        }
                    } else {
                        valuesToRemove_1.push(target_1.value);
                    }
                    var list = _this.filterCriteria[event.target.name] || [];
                    _this.publish(new FacetSelectedEvent(event.target.name, list.filter(function(x) {
                        return valuesToRemove_1.indexOf(x) == -1;
                    }).concat(valuesToAdd)));
                }
            });
            return _this;
        }
        FacetList.prototype.update = function(_a) {
            var filterCriteria = _a.filterCriteria, facets = _a.facets;
            this.filterCriteria = filterCriteria;
            this.facetContainer.innerHTML = facetListTemplate(facets, filterCriteria);
            addFacetTag(this.tagContainer, getTermsFromFilters$1(filterCriteria));
            Array.from(this.facetContainer.querySelectorAll("button[aria-controls]")).forEach(function(element) {
                expander(element);
            });
        };
        return FacetList;
    }(EventBus);
    function addFacetTag(container, filters) {
        if (!filters && filters.length > 0) {
            return;
        }
        var tags = filters.map(function(term) {
            var label = flatFacetMap[term] || term;
            return '<span class="tag is-rounded">\n\t\t\t\t\t' + label + '\n\t\t\t\t\t<label aria-label="' + loc_removeItem.replace("{0}", label) + '" for="cb-' + term + '" class="delete has-background-secondary is-white"></label>\n\t\t\t\t</span>';
        }).join("");
        var tagContainer = container.querySelector(".facet-tags");
        if (tagContainer) {
            tagContainer.parentElement.removeChild(tagContainer);
        }
        container.insertAdjacentHTML("beforeend", '<p data-bi-name="facet-tags" class="tags facet-tags">' + tags + "</p>");
    }
    function getTermsFromFilters$1(filter) {
        var terms = [];
        for (var key in filter) {
            if (filter[key]) {
                filter[key].forEach(function(term) {
                    return terms.push(term);
                });
            }
        }
        return terms;
    }
    var FacetSelectedEvent = function() {
        function FacetSelectedEvent(facetName, filters) {
            this.facetName = facetName;
            this.filters = filters;
        }
        return FacetSelectedEvent;
    }();
    var filterCriteria = {
        roles: [],
        levels: [],
        products: [],
        resource_type: []
    };
    var container;
    var control;
    var facetListComponent;
    var defaultPageSize = 30;
    function contentBrowserPage(containerElement) {
        container = containerElement;
        var query = parseQueryString();
        var startingTerm = query.term && query.term.length ? query.term.trim() : null;
        var startingPage = parseInt(query.page, 10) || 1;
        filterCriteria = convertQueryToFilterCriteria(query);
        eventBus.subscribe(SearchRequestEvent, handleSearchRequestEvent);
        eventBus.subscribe(SearchResponseEvent, handleSearchResponseEvent);
        eventBus.subscribe(SearchResponseEvent, trackSearchEvent);
        window$1.addEventListener("popstate", function(event) {
            event.preventDefault();
            var query = parseQueryString();
            var terms = query.term && query.term.length ? query.term.trim() : null;
            var page = parseInt(query.page, 10) || 1;
            eventBus.publish(new SearchRequestEvent({
                terms: terms,
                page: page,
                filter: filterCriteria,
                order: terms && terms.length ? null : "last_modified desc"
            }));
        });
        eventBus.publish(new SearchRequestEvent({
            terms: startingTerm,
            page: startingPage,
            filter: filterCriteria,
            order: startingTerm && startingTerm.length ? null : "last_modified desc"
        }));
        contentLoaded.then(function() {
            var breadcrumbs = document$1.querySelector(".breadcrumbs");
            populateBreadcrumb(breadcrumbs, loc_browse);
            var form = container.querySelector("#search-content-form");
            var input = container.querySelector("#search-content");
            var facetList = container.querySelector("#refine-content");
            var pagingElement = container.querySelector("#results-paging");
            input.value = startingTerm || "";
            control = new PagingControl(pagingElement, startingPage);
            control.subscribe(PageControlChangeEvent, function(_a) {
                var page = _a.page;
                updateQueryString({
                    page: page
                }, "pushState");
                var query = parseQueryString();
                var terms = query.term && query.term.length ? query.term.trim() : null;
                eventBus.publish(new SearchRequestEvent({
                    terms: terms,
                    page: page,
                    filter: filterCriteria,
                    order: terms && terms.length ? null : "last_modified desc"
                }));
                scrollTo(window$1.pageYOffset + container.querySelector("#search-content-form").getBoundingClientRect().top - 24, 100);
            });
            facetListComponent = new FacetList(facetList, form, filterCriteria);
            facetListComponent.subscribe(FacetSelectedEvent, function(event) {
                var _a;
                filterCriteria[event.facetName] = event.filters;
                updateQueryString((_a = {}, _a[event.facetName] = event.filters.join(","), _a.page = null, 
                _a), "pushState");
            });
            facetListComponent.subscribe(FacetSelectedEvent, debounce.timeout(function() {
                var query = parseQueryString();
                var terms = query.term && query.term.length ? query.term.trim() : null;
                eventBus.publish(new SearchRequestEvent({
                    terms: terms,
                    filter: filterCriteria,
                    order: terms && terms.length ? null : "last_modified desc"
                }));
            }));
            input.addEventListener("input", debounce.timeout(function(event) {
                var terms = event.target.value.trim();
                updateQueryString({
                    term: terms
                }, "pushState");
                eventBus.publish(new SearchRequestEvent({
                    terms: terms,
                    filter: filterCriteria,
                    order: terms && terms.length ? null : "last_modified desc"
                }));
            }));
            form.addEventListener("submit", function(event) {
                event.preventDefault();
            });
        });
    }
    function handleSearchRequestEvent(event) {
        getBrowseContent(event.criteria).then(function(result) {
            eventBus.publish(new SearchResponseEvent(event.criteria, result));
        }).catch(handleSearchErrorEvent);
    }
    function handleSearchResponseEvent(_a) {
        var result = _a.result;
        contentLoaded.then(function() {
            var resultsElement = container.querySelector("#results");
            var pagingElement = container.querySelector("#results-paging");
            control.update({
                currentPage: parseInt(parseQueryString().page, 10) || 1,
                lastPage: Math.ceil(result.count / defaultPageSize)
            });
            facetListComponent.update({
                facets: result.count ? result.facets : convertFilterCriteriaToFalseFacets(filterCriteria),
                filterCriteria: filterCriteria
            });
            resultsElement.innerHTML = result.count ? listTemplate(result.results, result.count) : "<p>" + loc_noResults + "</p>";
            if (result.count) {
                pagingElement.classList.remove("is-hidden");
            } else {
                pagingElement.classList.add("is-hidden");
            }
        });
    }
    function handleSearchErrorEvent() {
        contentLoaded.then(function() {
            container.querySelector("#refine-content").innerHTML = "";
            container.querySelector("#results").innerHTML = errorTemplate;
            container.querySelector("#results-paging").classList.add("is-hidden");
        });
    }
    var SearchRequestEvent = function() {
        function SearchRequestEvent(_a) {
            var _b = _a.terms, terms = _b === void 0 ? "" : _b, _c = _a.filter, filter = _c === void 0 ? {} : _c, order = _a.order, _d = _a.page, page = _d === void 0 ? 1 : _d;
            this.criteria = {
                locale: msDocs.data.contentLocale,
                terms: terms,
                filter: filter,
                order: order,
                skip: Math.max(0, page - 1) * defaultPageSize,
                top: defaultPageSize
            };
        }
        return SearchRequestEvent;
    }();
    var SearchResponseEvent = function() {
        function SearchResponseEvent(criteria, result) {
            this.criteria = criteria;
            this.result = result;
        }
        return SearchResponseEvent;
    }();
    function convertFilterCriteriaToFalseFacets(filterCriteria) {
        return Object.keys(filterCriteria).reduce(function(state, current) {
            state[current] = (filterCriteria[current] || []).map(function(f) {
                return {
                    count: 0,
                    type: "Value",
                    value: f
                };
            });
            return state;
        }, {});
    }
    function convertQueryToFilterCriteria(query) {
        function transformQueryToFilterValue(value) {
            return value ? decodeURIComponent(value.trim()).split(",").map(function(x) {
                return x.trim();
            }) : null;
        }
        return {
            roles: transformQueryToFilterValue(query.roles),
            products: transformQueryToFilterValue(query.products),
            levels: transformQueryToFilterValue(query.levels),
            resource_type: transformQueryToFilterValue(query.resource_type)
        };
    }
    function profileListPage() {
        var filter = document.querySelector(".filter-list");
        if (!filter) {
            return;
        }
        var profilesRaw = Array.from(document.querySelectorAll(".profile-component"));
        var timeout;
        var handleSearch = function() {
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                searchToFilter(escapeRegExp(filter.value), profilesRaw);
            }, 250);
        };
        filter.addEventListener("input", handleSearch);
        filter.addEventListener("change", handleSearch);
    }
    function searchToFilter(searchTerm, arr) {
        var noResults = document.querySelector(".no-results");
        var regex = new RegExp(searchTerm, "gi");
        noResults.hidden = true;
        var filtered = arr.filter(function(el) {
            el.hidden = !el.textContent.match(regex);
            if (!el.hidden) {
                return el;
            }
            return false;
        });
        if (filtered.length === 0) {
            noResults.hidden = false;
        }
        return filtered;
    }
    function homePage() {
        var dirLink = document$1.querySelector(".home-greeting-container a[href='#docs-directory']");
        if (dirLink === null) {
            return;
        }
        dirLink.addEventListener("click", function(e) {
            e.preventDefault();
            var directoryOffset = document$1.querySelector("#docs-directory").getBoundingClientRect().top;
            scrollTo(directoryOffset, 500);
        });
    }
    var hoverImgUrls = [];
    var hoverImgEls = [];
    function loadHoverImages() {
        if ($("html.hasTouch").length || $("html.highContrast").length) {
            return;
        }
        setTimeout(function() {
            $("img[data-hoverimage]").each(function() {
                var $this = $(this);
                hoverImgUrls.push($this.attr("data-hoverimage"));
                hoverImgEls.push(this);
            });
            loadHoverImg();
        }, 20);
    }
    var loadHoverImg = function() {
        if (hoverImgUrls.length > 0) {
            var imgUrl = hoverImgUrls[0];
            var img = new Image();
            img.onload = setHoverImage;
            img.src = imgUrl;
        }
    };
    var setHoverImage = function() {
        var imgUrl = hoverImgUrls.shift();
        var imgEl = hoverImgEls.shift();
        var $this = $(imgEl);
        var $card = $this.parent();
        $card.css({
            "background-image": "url(" + imgUrl + ")",
            "background-size": "cover"
        });
        $this.parents(".card").mouseover(function() {
            var $img = $(this).find(".cardImage");
            $img.css("background-position", "-" + $card.width() + "px 0");
        }).mouseout(function() {
            resetHover(this);
        }).click(function() {
            resetHover(this);
        });
        setTimeout(function() {
            $card.parent().parent().addClass("ready");
            $this.fadeOut("fast");
        }, 20);
        loadHoverImg();
    };
    var resetHover = function(el) {
        var $img = $(el).find(".cardImage");
        $img.css("background-position", "0 0");
    };
    function loadScaleImages() {
        if ($("html.highContrast").length) {
            return;
        }
        $("img[data-scaleimage]").each(function() {
            var $this = $(this);
            var $card = $this.parent();
            $this.attr("role", "presentation");
            $card.css("background-image", "url(" + $this.attr("data-scaleimage") + ")").addClass("cardScaleImage");
            $this.hide();
        });
    }
    function hubPage() {
        loadScaleImages();
        loadHoverImages();
    }
    function hubPagePage() {
        var hash = parseQueryString(location.hash);
        var selectedPivotID = hash.pivot;
        var selectedPanelID = hash.panel;
        var panelItemNavOffsets = [];
        var pivotSelectorClassName = "pivotSelector";
        var isPivotMenuVisible = false;
        var savedPanelNavItem;
        var init = function() {
            var hasPivotBeenSelected = false;
            if (selectedPivotID !== undefined) {
                selectedPivotID = "#" + selectedPivotID;
            }
            if (selectedPanelID !== undefined) {
                selectedPanelID = "#" + selectedPanelID;
            }
            var pivotsNavUl = $("<ul>");
            var pivotLinks = $("ul.pivots>li>a");
            var pivotCount = pivotLinks.length;
            pivotLinks.each(function() {
                pivotsNavUl.append($("<li>").append($(this).clone()));
                $(this).parent().attr("data-id", $(this).attr("href")).addClass("pivotItem");
                var hrefAttr = $(this).attr("href");
                if (typeof hrefAttr !== "undefined" && hrefAttr.substring(0, 1) === "#") {
                    $(this).on("click", function(e) {
                        e.preventDefault();
                        hidePivotMenu();
                        selectPivot($(this), false);
                    });
                }
            });
            $(".pivotItem>ul").each(function() {
                $(this).css({
                    position: "relative"
                });
            });
            $(".pivotItem>ul>li").each(function() {
                $(this).addClass("panelItem");
            });
            $(".panelItem>ul").each(function() {
                $(this).addClass("panelContent");
            });
            $("ul.panelContent > li > div.container").each(function() {
                $(this).parent().addClass("fullSpan");
            });
            var $pivotsNav = $("<nav>").addClass("pivotTabs").append(pivotsNavUl);
            var $pivots = $("ul.pivots");
            if (pivotCount === 1) {
                $pivotsNav.addClass("singlePivot");
                $pivots.addClass("tabLess");
            }
            $pivots.before($pivotsNav);
            if (pivotCount > 1) {
                $pivots.before($("<button>").addClass(pivotSelectorClassName).on("click", togglePivotMenu));
            }
            $(".panelItem>a").each(function() {
                if ($(this).attr("href").substring(0, 1) === "#") {
                    $(this).on("click", function(e) {
                        e.preventDefault();
                    });
                    $(this).parent().on("click", function() {
                        hidePivotMenu();
                        selectPanel($(this));
                    });
                }
            });
            $("nav.pivotTabs a").each(function() {
                var hrefAttr = $(this).attr("href");
                if (typeof hrefAttr !== "undefined" && hrefAttr.substring(0, 1) === "#") {
                    if (selectedPivotID !== undefined && $(this).attr("href").toLowerCase() === selectedPivotID.toLowerCase()) {
                        hasPivotBeenSelected = true;
                        selectPivot($(this), false);
                    }
                    $(this).on("click", function(e) {
                        selectPivot($(this), true);
                        e.stopPropagation();
                        e.preventDefault();
                    });
                }
            });
            if (pivotCount > 0 && !hasPivotBeenSelected) {
                var defaultLinks = $("nav.pivotTabs a[data-default='true']");
                if (defaultLinks.length > 0) {
                    selectPivot($(defaultLinks[0]), false);
                } else {
                    selectPivot($("nav.pivotTabs a:first"), false);
                }
            }
            loadScaleImages();
            loadHoverImages();
        };
        var selectPivot = function($this, isUrlUpdated) {
            selectedPivotID = $this.attr("href");
            if (isUrlUpdated) {
                selectedPanelID = undefined;
                updateHash();
            }
            $("nav.pivotTabs li").removeClass("selected");
            $this.parent().addClass("selected");
            $(".pivotItem").hide();
            var $selectedPivot = $(".pivotItem[data-id='" + selectedPivotID + "']");
            $selectedPivot.show();
            panelItemNavOffsets = [];
            $selectedPivot.find(".panelItem>a").each(function(index) {
                $(this).parent().attr("data-index", index);
                panelItemNavOffsets.push(this.offsetTop);
            });
            $("." + pivotSelectorClassName).text($this.text());
            $(".pivotItem>ul>li>a").removeClass("selected");
            selectPanel(savedPanelNavItem);
            savedPanelNavItem = undefined;
        };
        var selectPanel = function($this) {
            if ($this === undefined) {
                var hasPanelBeenSelected_1 = false;
                var panelCount_1 = 0;
                var $selectedPivot = $("ul.pivots").find(selectedPivotID);
                $selectedPivot.children("li").each(function() {
                    panelCount_1 += 1;
                    if (selectedPanelID !== undefined && $(this).children("a").attr("href").toLowerCase() === selectedPanelID.toLowerCase()) {
                        hasPanelBeenSelected_1 = true;
                        selectPanelNavItem($(this), false);
                    }
                });
                if (panelCount_1 > 0 && !hasPanelBeenSelected_1) {
                    var defaultLinks = $selectedPivot.find("li > a[data-default='true']");
                    if (defaultLinks.length > 0) {
                        selectPanelNavItem($(defaultLinks[0]).parent(), false);
                    } else {
                        selectPanelNavItem($selectedPivot.children("li:first"), false);
                    }
                }
            } else {
                var thisParentID = $this.parent().parent().attr("data-id");
                if (selectedPivotID !== thisParentID) {
                    savedPanelNavItem = $this;
                    selectPivot($("nav.pivotTabs a[href='" + thisParentID + "']"), true);
                } else {
                    selectPanelNavItem($this, true);
                }
            }
        };
        var selectPanelNavItem = function($this, isUrlUpdated) {
            var $link = $($this.children("a")[0]);
            selectedPanelID = $link.attr("href");
            var $selectedPivot = $("ul.pivots").find(selectedPivotID);
            if (isUrlUpdated) {
                updateHash();
            }
            var panelNavIndex = $this.attr("data-index");
            var topOffset = "0";
            if (panelNavIndex > 0) {
                topOffset = "-" + panelItemNavOffsets[panelNavIndex] + "px";
            } else {
                if ($link.parent().siblings().length == 0 && !$link.hasClass("singlePanelNavItem")) {
                    $selectedPivot.find(selectedPanelID).addClass("singlePanelContent");
                    $link.addClass("singlePanelNavItem");
                }
            }
            $(selectedPivotID).find("li>a").removeClass("selected");
            $link.addClass("selected");
            $selectedPivot.find(".panelContent").not(".panelContent .panelContent").hide();
            $selectedPivot.find(selectedPanelID).css({
                "margin-top": topOffset,
                display: "flex"
            });
        };
        var hidePivotMenu = function() {
            if (isPivotMenuVisible) {
                $(".pivots").parent().removeClass("pivotMenu");
            }
            isPivotMenuVisible = false;
        };
        var togglePivotMenu = function() {
            if (isPivotMenuVisible) {
                hidePivotMenu();
            } else {
                $(".pivots").parent().addClass("pivotMenu");
                isPivotMenuVisible = true;
            }
        };
        var handlingHashChange = false;
        var updateHash = function() {
            if (handlingHashChange) {
                return;
            }
            var hsh = "";
            if (selectedPivotID !== undefined) {
                hsh = "pivot=" + selectedPivotID.substring(1);
                if (selectedPanelID !== undefined) {
                    hsh += "&panel=" + selectedPanelID.substring(1);
                }
                removeEventListener("hashchange", handleHashChange);
                parent.location.hash = hsh;
                setTimeout(function() {
                    addEventListener("hashchange", handleHashChange);
                });
            }
        };
        function handleHashChange() {
            var hash = parseQueryString(location.hash);
            handlingHashChange = true;
            var tabs = document.querySelector("nav.pivotTabs");
            var el = tabs.querySelector('a[href$="#' + hash.pivot + '"]') || tabs.querySelector('a[data-default="true"]') || tabs.querySelector("a");
            $(el).trigger("click");
            el = document.querySelector('a[href$="#' + hash.panel + '"]');
            if (el) {
                $(el).trigger("click");
            }
            setTimeout(function() {
                handlingHashChange = false;
            }, 100);
        }
        addEventListener("hashchange", handleHashChange);
        init();
    }
    function landingPage() {
        loadScaleImages();
        loadHoverImages();
    }
    function handelLinkSelects() {
        var selects = Array.from(document.querySelectorAll("select.link-select"));
        selects.forEach(function(select) {
            select.addEventListener("change", function(e) {
                window.location.href = e.target.value;
            });
        });
    }
    function handleSimpleTabs(container) {
        var tabs = Array.from(container.querySelectorAll(".tabs [data-tab-selector]"));
        var tabsContent = Array.from(container.querySelectorAll("[data-tab-content]"));
        tabs.forEach(function(tab) {
            tab.onclick = function() {
                tabs.forEach(function(tab) {
                    return tab.classList.remove("is-active");
                });
                tab.classList.add("is-active");
                filterTabs(tab.dataset.tabSelector, tabsContent);
            };
        });
    }
    function filterTabs(tabId, tabsContent) {
        tabsContent.forEach(function(elt) {
            if (elt.dataset.tabContent === tabId) {
                elt.hidden = false;
                elt.setAttribute("aria-hidden", "false");
            } else {
                elt.hidden = true;
                elt.setAttribute("aria-hidden", "true");
            }
        });
    }
    function learnProduct() {
        handelLinkSelects();
        handleSimpleTabs(document.getElementById("main"));
        contentLoaded.then(function() {
            var breadcrumbs = document.querySelector(".breadcrumbs");
            populateBreadcrumb(breadcrumbs, "Learn");
        });
    }
    var prodServerUrl$1 = "https://docs.microsoft.com/api/learn";
    var developServerUrl$1 = "https://ppe.docs.microsoft.com/api/learn";
    var branch$1 = getBranch$1();
    var locale = msDocs.data.userLocale;
    function getModule(locale, moduleId) {
        var query = {
            locale: locale,
            branch: branch$1
        };
        var url = getServerUrl$1() + "/modules/" + moduleId + "?" + toQueryString(query);
        var init = {
            method: "GET"
        };
        return fetchWithTimeout(createRequest$1(url, init)).then(function(response) {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject();
        });
    }
    function getModuleByUnit(locale, unitId) {
        var query = {
            unitId: unitId,
            locale: locale,
            branch: branch$1
        };
        var url = getServerUrl$1() + "/modules?" + toQueryString(query);
        var init = {
            method: "GET"
        };
        return fetchWithTimeout(createRequest$1(url, init)).then(function(response) {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject();
        });
    }
    function getLearningPath(locale, pathId) {
        var query = {
            locale: locale,
            branch: branch$1
        };
        var url = getServerUrl$1() + "/paths/" + pathId + "?" + toQueryString(query);
        var init = {
            method: "GET"
        };
        return fetchWithTimeout(createRequest$1(url, init)).then(function(response) {
            return response.json();
        });
    }
    function getServerUrl$1() {
        var hostname = location.hostname;
        if (hostname === "localhost" || hostname === "ppe.docs.microsoft.com") {
            return developServerUrl$1;
        }
        return prodServerUrl$1;
    }
    function getBranch$1() {
        if (location.hostname === "localhost") {
            return "master";
        }
        var params = parseQueryString(location.search);
        return params.branch !== undefined ? params.branch : "";
    }
    function getUserProgress() {
        var url = getServerUrl$1() + "/progress";
        var init = {
            method: "GET",
            credentials: "include"
        };
        return fetchWithTimeout(createRequest$1(url, init)).then(function(response) {
            return process401Response(response);
        }).then(function(response) {
            if (response.status === 204) {
                return [];
            } else if (response.ok) {
                return response.json();
            }
            return [];
        });
    }
    function getUserProgressByUids(uids) {
        var query = {
            branch: branch$1,
            uids: uids.join(";"),
            locale: locale
        };
        var url = getServerUrl$1() + "/progress?" + toQueryString(query);
        var init = {
            method: "GET",
            credentials: "include"
        };
        return fetchWithTimeout(createRequest$1(url, init)).then(function(response) {
            return process401Response(response);
        }).then(function(response) {
            if (response.status === 204) {
                return [];
            } else if (response.ok) {
                return response.json();
            }
            return [];
        });
    }
    function putUnitProgress(unitId, details) {
        var query = {
            branch: branch$1,
            locale: locale
        };
        var url = getServerUrl$1() + "/units/" + unitId + "/progress?" + toQueryString(query);
        var body = JSON.stringify(details);
        var init = {
            method: "PUT",
            credentials: "include",
            body: body
        };
        return fetchWithTimeout(createRequest$1(url, init)).then(function(response) {
            return process401Response(response);
        }).then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                return response.text();
            }
        });
    }
    function putBatchProgress(payload) {
        var query = {
            branch: branch$1,
            locale: locale
        };
        var url = getServerUrl$1() + "/units/progress?" + toQueryString(query);
        var body = JSON.stringify(payload);
        var init = {
            method: "PUT",
            credentials: "include",
            body: body
        };
        return fetchWithTimeout(createRequest$1(url, init)).then(function(response) {
            return process401Response(response);
        }).then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                return response.text();
            }
        });
    }
    function deleteUserProgress() {
        localStorage$1.removeItem("ModuleProgress");
        var url = getServerUrl$1() + "/progress";
        var init = {
            method: "DELETE",
            credentials: "include"
        };
        return fetchWithTimeout(createRequest$1(url, init)).then(function(response) {
            return process401Response(response);
        }).then(function(response) {
            return response.ok;
        });
    }
    function getUnitProgress(unitId) {
        var query = {
            branch: branch$1
        };
        var url = getServerUrl$1() + "/progress/units/" + unitId + "?" + toQueryString(query);
        var init = {
            method: "GET",
            credentials: "include"
        };
        return fetchWithTimeout(createRequest$1(url, init)).then(function(response) {
            return process401Response(response);
        }).then(function(response) {
            if (response.status === 204) {
                return null;
            }
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(undefined);
        });
    }
    var moduleLoaded;
    function getCurrentModule() {
        if (!moduleLoaded) {
            var unitId = getMeta("uid");
            moduleLoaded = getModuleByUnit(msDocs.data.userLocale, unitId);
        }
        return moduleLoaded;
    }
    var QuizValidationRequestEvent = function() {
        function QuizValidationRequestEvent(answers) {
            this.answers = answers;
        }
        return QuizValidationRequestEvent;
    }();
    var QuizValidatedEvent = function() {
        function QuizValidatedEvent(response) {
            this.updated = response.updated;
            this.passed = response.passed;
            this.details = response.details;
            this.answers = response.answers;
            this.achievements = response.achievements;
        }
        return QuizValidatedEvent;
    }();
    var CombinedProgressService = function() {
        function CombinedProgressService(user$$1, bus) {
            this.user = user$$1;
            this.bus = bus;
            this.remote = new RemoteValidationService();
            this.local = new LocalProgressService(localStorage$1);
        }
        CombinedProgressService.prototype.getProgress = function() {
            var _this = this;
            return authStatusDetermined.then(function() {
                return _this.user.isAuthenticated && _this.remote ? _this.remote.getProgress() : _this.local.getProgress();
            });
        };
        CombinedProgressService.prototype.getProgressByUid = function(uid) {
            var _this = this;
            return authStatusDetermined.then(function() {
                return _this.user.isAuthenticated && _this.remote ? _this.remote.getProgressByUid(uid) : _this.local.getProgress();
            });
        };
        CombinedProgressService.prototype.completeViewUnit = function(unitUid) {
            var _this = this;
            return authStatusDetermined.then(function() {
                return _this.user.isAuthenticated && _this.remote ? _this.remote.completeViewUnit(unitUid) : _this.local.completeViewUnit(unitUid);
            }).then(function(response) {
                return _this.processUnitProgressPutResponse(unitUid, response);
            });
        };
        CombinedProgressService.prototype.validateQuiz = function(unitUid, answerData) {
            var _this = this;
            return authStatusDetermined.then(function() {
                return _this.user.isAuthenticated && _this.remote ? _this.remote.validateQuiz(unitUid, answerData) : _this.local.validateQuiz(unitUid, answerData);
            }).then(function(response) {
                _this.bus.publish(new QuizValidatedEvent(response));
                return _this.processUnitProgressPutResponse(unitUid, response);
            });
        };
        CombinedProgressService.prototype.validateTask = function(unitUid, taskValidations) {
            var _this = this;
            return authStatusDetermined.then(function() {
                return _this.remote.validateTask(unitUid, taskValidations);
            }).then(function(response) {
                var validateMessage = document$1.getElementById("task-validation-message");
                validateMessage.classList.remove("is-hidden");
                return _this.processUnitProgressPutResponse(unitUid, response);
            });
        };
        CombinedProgressService.prototype.syncUserProgress = function() {
            var _this = this;
            return Promise.all([ authStatusDetermined, this.local.getRawProgress() ]).then(function(_a) {
                var _ = _a[0], progress = _a[1];
                if (!_this.user.isAuthenticated || !_this.remote || !progress) {
                    return undefined;
                }
                var sync = progress.progress.reduce(function(state, current) {
                    state[current.unitUid] = current.detail || {};
                    return state;
                }, {});
                return _this.remote.syncUserProgress(sync).then(function() {
                    _this.local.deleteProgress();
                });
            });
        };
        CombinedProgressService.prototype.processUnitProgressPutResponse = function(uid, response) {
            return __awaiter(this, void 0, Promise, function() {
                var module, uids, progress, _a, unit, unitProgress, moduleProgress, paths, event;
                var _this = this;
                return __generator(this, function(_b) {
                    switch (_b.label) {
                      case 0:
                        return [ 4, getCurrentModule() ];

                      case 1:
                        module = _b.sent();
                        uids = module.parents.length ? module.parents.map(function(p) {
                            return p.uid;
                        }) : [ module.uid ];
                        if (!user.isAuthenticated) return [ 3, 3 ];
                        return [ 4, getUserProgressByUids(uids) ];

                      case 2:
                        _a = _b.sent();
                        return [ 3, 5 ];

                      case 3:
                        return [ 4, this.local.getProgress() ];

                      case 4:
                        _a = _b.sent();
                        _b.label = 5;

                      case 5:
                        progress = _a;
                        unit = module.units.find(function(u) {
                            return u.uid === uid;
                        });
                        unitProgress = progress.find(function(p) {
                            return p.type === "unit" && p.uid === uid;
                        });
                        moduleProgress = progress.find(function(p) {
                            return p.type === "module" && p.uid === module.uid;
                        });
                        paths = module.parents.map(function(path) {
                            return {
                                item: path,
                                progress: progress.find(function(p) {
                                    return p.type === "learningPath" && p.uid === path.uid;
                                })
                            };
                        });
                        event = new UnitProgressCheckedEvent(response.passed, response.updated, response.details || [], {
                            item: unit,
                            progress: unitProgress
                        }, {
                            item: module,
                            progress: moduleProgress
                        }, paths, response.achievements || []);
                        this.bus.publish(event);
                        this.syncUserProgress().then(function() {
                            _this.getProgressByUid(module.uid).then(function(data) {
                                _this.bus.publish(new ProgressUpdatedEvent(data, response.updated));
                            });
                        });
                        return [ 2, event ];
                    }
                });
            });
        };
        return CombinedProgressService;
    }();
    var RemoteValidationService = function() {
        function RemoteValidationService() {}
        RemoteValidationService.prototype.getProgress = function() {
            return getUserProgress();
        };
        RemoteValidationService.prototype.getProgressByUid = function(uid) {
            return getUserProgressByUids([ uid ]);
        };
        RemoteValidationService.prototype.completeViewUnit = function(unitUid) {
            return putUnitProgress(unitUid);
        };
        RemoteValidationService.prototype.validateQuiz = function(unitUid, answerData) {
            return putUnitProgress(unitUid, answerData);
        };
        RemoteValidationService.prototype.validateTask = function(unitUid, taskValidations) {
            return putUnitProgress(unitUid, taskValidations);
        };
        RemoteValidationService.prototype.syncUserProgress = function(progress) {
            return putBatchProgress(progress);
        };
        return RemoteValidationService;
    }();
    var LocalProgressService = function() {
        function LocalProgressService(localStorage$$1) {
            this.localStorage = localStorage$$1;
            this.key = "ModuleProgress";
            this.moduleUidLoaded = getCurrentModule().then(function(module) {
                return module;
            });
        }
        LocalProgressService.prototype.getProgress = function() {
            var _this = this;
            return this.moduleUidLoaded.then(function(module) {
                var data = _this.getFromStorage();
                if (data && data.moduleUid === module.uid) {
                    return convertToStandardProgress(data);
                }
                return [];
            });
        };
        LocalProgressService.prototype.validateQuiz = function(unitUid, answerData) {
            var _this = this;
            return putUnitProgress(unitUid, answerData).then(function(quizResponse) {
                var data = _this.getFromStorage();
                return _this.moduleUidLoaded.then(function(module) {
                    var moduleUid = module.uid;
                    var unitInfo = {
                        unitUid: unitUid,
                        type: "unit",
                        detail: answerData
                    };
                    var moduleInfo = {
                        unitUid: module.uid,
                        type: "module"
                    };
                    var freshStart = {
                        moduleUid: moduleUid,
                        progress: [ unitInfo ]
                    };
                    if (quizResponse.passed) {
                        if (!data || data.moduleUid !== moduleUid || data.progress.length === 0) {
                            data = freshStart;
                        } else {
                            if (data.progress.map(function(item) {
                                return item.unitUid;
                            }).indexOf(unitUid) === -1) {
                                data.progress.push(unitInfo);
                            }
                            if (data.progress[data.progress.length - 1].unitUid !== module.uid && data.progress.length === module.units.length) {
                                data.progress.push(moduleInfo);
                            }
                        }
                        _this.localStorage.setItem(_this.key, JSON.stringify(data));
                    }
                    var details = quizResponse.details;
                    return convertToQuizUpdatedResponse(answerData, details, quizResponse.passed);
                });
            });
        };
        LocalProgressService.prototype.getRawProgress = function() {
            var _this = this;
            return this.moduleUidLoaded.then(function(module) {
                var data = _this.getFromStorage();
                if (data && data.moduleUid === module.uid) {
                    return data;
                }
                return undefined;
            });
        };
        LocalProgressService.prototype.deleteProgress = function() {
            this.localStorage.removeItem(this.key);
        };
        LocalProgressService.prototype.getFromStorage = function() {
            {
                var serialized = this.localStorage.getItem(this.key);
                if (serialized === null) {
                    return null;
                }
                var data = null;
                try {
                    data = JSON.parse(serialized);
                } catch (e) {}
                return data;
            }
        };
        LocalProgressService.prototype.completeViewUnit = function(unitUid) {
            var _this = this;
            var data = this.getFromStorage();
            return this.moduleUidLoaded.then(function(module) {
                var moduleUid = module.uid;
                var unitInfo = {
                    unitUid: unitUid,
                    type: "unit"
                };
                var moduleInfo = {
                    unitUid: module.uid,
                    type: "module"
                };
                var freshStart = {
                    moduleUid: moduleUid,
                    progress: [ unitInfo ]
                };
                if (!data || data.moduleUid !== moduleUid || data.progress.length === 0) {
                    data = freshStart;
                } else {
                    if (data.progress.map(function(item) {
                        return item.unitUid;
                    }).indexOf(unitUid) === -1) {
                        data.progress.push(unitInfo);
                    }
                    if (data.progress[data.progress.length - 1].unitUid !== module.uid && data.progress.length === module.units.length) {
                        data.progress.push(moduleInfo);
                    }
                }
                _this.localStorage.setItem(_this.key, JSON.stringify(data));
                return convertToViewCompleteResponse(unitUid);
            });
        };
        return LocalProgressService;
    }();
    function renderStartContinueUnitButton(insertAfter, url, text, biValue) {
        if (!insertAfter) {
            return;
        }
        var biAttr = biValue ? 'data-bi-name="' + biValue + '"' : "";
        removeStartUnitButton();
        var html = '<p class="is-hidden-mobile has-margin-bottom-medium"><a href="' + url + '" id="start-unit" class="button is-primary centered-with-icon is-hidden-mobile" ' + biAttr + '><span class="is-size-6">' + text + '</span><span class="icon docon docon-chevron-right-light"></span></a></p>';
        insertAfter.insertAdjacentHTML("afterend", html);
        var startUnitMobile = document$1.getElementById("start-unit-mobile");
        if (startUnitMobile) {
            startUnitMobile.href = url;
            var startUnitMobileText = startUnitMobile.children[0];
            if (startUnitMobileText) {
                startUnitMobileText.textContent = text;
            }
        }
    }
    function removeStartUnitButton(removeMobile) {
        if (removeMobile === void 0) {
            removeMobile = false;
        }
        var startUnit = document$1.getElementById("start-unit");
        if (startUnit) {
            startUnit.parentElement.remove();
        }
        if (removeMobile) {
            var startUnitMobile = document$1.getElementById("start-unit-mobile");
            if (startUnitMobile) {
                startUnitMobile.parentElement.remove();
            }
        }
    }
    function convertToLearnItemsToProgressItems(items) {
        return items.map(function(item) {
            return {
                uid: item.uid,
                status: item.status,
                type: item.type,
                remainingTime: item.remainingTime
            };
        });
    }
    function convertToStandardProgress(localProgress) {
        return localProgress.progress.map(function(item) {
            return {
                uid: item.unitUid,
                status: "completed",
                type: item.type,
                remainingTime: 0
            };
        });
    }
    function convertToViewCompleteResponse(unitUid) {
        return {
            updated: true,
            passed: true,
            achievements: [ {
                uid: unitUid,
                type: "unit",
                points: []
            } ]
        };
    }
    function convertToQuizUpdatedResponse(gradedQuestions, correctQuestions, passed) {
        return {
            updated: true,
            passed: passed,
            achievements: [],
            details: gradedQuestions,
            answers: correctQuestions
        };
    }
    var ProgressUpdatedEvent = function() {
        function ProgressUpdatedEvent(standardProgress, isUpdated) {
            if (isUpdated === void 0) {
                isUpdated = false;
            }
            this.standardProgress = standardProgress;
            this.isUpdated = isUpdated;
            this.standardProgress = standardProgress;
        }
        return ProgressUpdatedEvent;
    }();
    function handleXpTag(xpTags, learnItems, totalUid) {
        if (totalUid === void 0) {
            totalUid = null;
        }
        var lookup = createPointsLookup(learnItems);
        var totalPoints = 0;
        for (var uid in lookup) {
            if (uid != totalUid) {
                totalPoints += lookup[uid].points;
            }
        }
        xpTags.forEach(function(tag) {
            var uid = tag.dataset.progressUid;
            var xp = tag.querySelector(".xp-tag-xp");
            if (uid in lookup) {
                if (lookup[uid].points) {
                    if (uid === totalUid) {
                        xp.textContent = loc_xp.replace("{0}", totalPoints.toString());
                    } else {
                        xp.textContent = loc_xp.replace("{0}", lookup[uid].points.toString());
                    }
                    tag.classList.remove("is-hidden");
                }
                if (lookup[uid].status === "completed") {
                    tag.classList.add("is-complete");
                }
            }
        });
    }
    function createProgressLookup(array) {
        return array.reduce(function(lookup, item) {
            if (item.status === "completed") {
                lookup[item.uid] = true;
            }
            return lookup;
        }, {});
    }
    function createPointsLookup(array) {
        return array.reduce(function(lookup, item) {
            lookup[item.uid] = {
                points: item.points,
                status: item.status
            };
            return lookup;
        }, {});
    }
    function updateProgressElements(progressElements, progress) {
        var lookup = createProgressLookup(progress);
        progressElements.forEach(function(elt) {
            var uid = elt.dataset.progressUid;
            if (lookup[uid]) {
                elt.classList.add("is-complete");
            }
        });
        return progressElements;
    }
    var UnitProgressCheckedEvent = function() {
        function UnitProgressCheckedEvent(passed, updated, details, unit, module, paths, achievements) {
            this.passed = passed;
            this.updated = updated;
            this.details = details;
            this.unit = unit;
            this.module = module;
            this.paths = paths;
            this.achievements = achievements;
        }
        return UnitProgressCheckedEvent;
    }();
    function learningPathPage(container, breadcrumbElement) {
        return __awaiter(this, void 0, void 0, function() {
            var pathId, userLocale, learningPath, xpTags, moduleSummaries, expanderToggles, _i, _a, module, moduleContainer, _b, _c, module, moduleContainer, units, completedCount, _d, _e, module, unitCount, moduleContainer, args, progressElements;
            return __generator(this, function(_f) {
                switch (_f.label) {
                  case 0:
                    pathId = getMeta("uid");
                    userLocale = msDocs.data.userLocale;
                    return [ 4, Promise.all([ loadLearningPathInformation(pathId), contentLoaded ]) ];

                  case 1:
                    learningPath = _f.sent()[0];
                    populateBreadcrumb(breadcrumbElement, learningPath.title);
                    xpTags = Array.from(container.querySelectorAll(".xp-tag"));
                    totalModulePoints(learningPath.modules);
                    handleXpTag(xpTags, [ learningPath ].concat(learningPath.modules), learningPath.uid);
                    moduleSummaries = Array.from(container.querySelectorAll(".module-summary"));
                    expanderToggles = initExpanders(container);
                    expanderToggles.forEach(function(toggle) {
                        return toggle(false);
                    });
                    for (_i = 0, _a = learningPath.modules; _i < _a.length; _i++) {
                        module = _a[_i];
                        moduleContainer = container.querySelector("#" + module.uid.replace(".", "\\.") + " .module-units");
                        moduleContainer.innerHTML = populateModuleCard(module.units);
                    }
                    if (!user.isAuthenticated) {
                        container.querySelector("#time-remaining").textContent = displayTimeRemaining(learningPath.durationInMinutes);
                        for (_b = 0, _c = learningPath.modules; _b < _c.length; _b++) {
                            module = _c[_b];
                            moduleContainer = container.querySelector("#" + module.uid.replace(".", "\\."));
                            displayModuleCardDetails(moduleContainer, module.units.length, module.durationInMinutes);
                        }
                        renderStartContinueUnitButton(moduleSummaries[0], "/" + userLocale + learningPath.modules[0].units[0].url, loc_start, "start");
                        expanderToggles[0](true);
                    }
                    checkForInteractiveDisclaimer(learningPath.modules);
                    return [ 4, user.whenAuthenticated() ];

                  case 2:
                    _f.sent();
                    container.querySelector("#modules-remaining").textContent = displayRemainingModules(learningPath.modules);
                    container.querySelector("#time-remaining").textContent = displayTimeRemaining(learningPath.remainingTime);
                    units = learningPath.modules.reduce(function(state, module) {
                        return state.concat(convertToLearnItemsToProgressItems(module.units));
                    }, []);
                    completedCount = learningPath.modules.filter(function(x) {
                        return x.status == "completed";
                    }).length;
                    for (_d = 0, _e = learningPath.modules; _d < _e.length; _d++) {
                        module = _e[_d];
                        unitCount = countIncomplete(module.units);
                        moduleContainer = container.querySelector("#" + module.uid.replace(".", "\\."));
                        displayModuleCardDetails(moduleContainer, unitCount, module.remainingTime);
                    }
                    if (completedCount === learningPath.modules.length) {
                        removeStartUnitButton(true);
                        expanderToggles.forEach(function(toggle) {
                            return toggle(false);
                        });
                    } else {
                        args = determineStartingModule(learningPath.modules);
                        renderStartContinueUnitButton(moduleSummaries[args.moduleIndex], "/" + userLocale + args.url, args.title, args.type);
                        expanderToggles[args.moduleIndex](true);
                    }
                    progressElements = Array.from(container.querySelectorAll("[data-progress-uid]"));
                    updateProgressElements(progressElements, units);
                    return [ 2 ];
                }
            });
        });
    }
    function determineStartingModule(modules) {
        var currentModuleIndex = 0;
        var startUnitUrl = "";
        var startModuleIndex = 0;
        var continueUnitUrl = "";
        var continueModuleIndex = 0;
        for (var _i = 0, modules_1 = modules; _i < modules_1.length; _i++) {
            var module = modules_1[_i];
            if (startUnitUrl === "" && module.status === "notStarted") {
                startUnitUrl = module.units[0].url;
                startModuleIndex = currentModuleIndex;
            }
            if (continueUnitUrl === "" && module.status === "inProgress") {
                for (var _a = 0, _b = module.units; _a < _b.length; _a++) {
                    var unit = _b[_a];
                    if (unit.status !== "completed") {
                        continueUnitUrl = unit.url;
                        continueModuleIndex = currentModuleIndex;
                        break;
                    }
                }
            }
            currentModuleIndex++;
        }
        return {
            moduleIndex: continueUnitUrl ? continueModuleIndex : startModuleIndex,
            url: continueUnitUrl || startUnitUrl || "",
            type: continueUnitUrl ? "continue" : "start",
            title: continueUnitUrl ? loc_continue : loc_start
        };
    }
    function checkForInteractiveDisclaimer(modules) {
        for (var _i = 0, modules_2 = modules; _i < modules_2.length; _i++) {
            var module = modules_2[_i];
            for (var _a = 0, _b = module.units; _a < _b.length; _a++) {
                var unit = _b[_a];
                if (unit.interactive !== null && unit.interactive !== "lab-on-demand") {
                    showDisclaimer(loc_disclaimer_learnMobileInteractive, null, "is-hidden-tablet");
                    return;
                }
            }
        }
    }
    function loadLearningPathInformation(pathId) {
        return getLearningPath(msDocs.data.userLocale, pathId);
    }
    function populateModuleCard(units) {
        return '\n\t\t<ul class="has-margin-left-none is-unstyled">\n\t\t\t' + units.map(function(_a) {
            var uid = _a.uid, title = _a.title, url = _a.url, durationInMinutes = _a.durationInMinutes;
            return '\n\t\t\t\t<li data-progress-uid="' + uid + '" class="barLink is-unit-list-item has-margin-bottom-medium completable">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<a class="unit-title is-size-5 is-size-6-mobile is-flex has-flex-align-self-start" href="/' + msDocs.data.userLocale + url + '">' + title + '</a>\n\t\t\t\t\t\t<span class="unit-duration is-size-8 has-margin-top-small is-flex has-flex-align-self-end has-text-subtle">' + loc_minFormat.replace("{0}", durationInMinutes.toString()) + '</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span class="is-shown-complete has-text-success docon docon-check"></span>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t';
        }).join("") + "\n\t\t</ul>\n\t";
    }
    function displayTimeRemaining(timeRemaining) {
        return convertMinsToHrsMins(timeRemaining) + " " + loc_remaining;
    }
    function displayRemainingModules(modules) {
        var remainingModules = countIncomplete(modules);
        var totalModules = remainingModules !== 1 ? loc_multipleModules.replace("{numberOf}", remainingModules.toString()) : loc_oneModule;
        return totalModules;
    }
    function displayModuleCardDetails(container, unitCount, timeRemaining) {
        var units = container.querySelector(".module-units-remaining");
        var resourceType = container.querySelector(".module-type");
        var overview = container.querySelector(".module-overview");
        var time = container.querySelector(".module-time-remaining");
        var link = container.querySelector(".module-link");
        var summary = container.querySelector(".module-summary");
        var unitsExpander = container.querySelector("button.unit-expander");
        var totalUnits = unitCount !== 1 ? loc_multipleUnits.replace("{numberOf}", unitCount.toString()) : loc_oneUnit;
        units.textContent = totalUnits;
        resourceType.textContent = loc_module;
        time.textContent = convertMinsToHrsMins(timeRemaining) + " " + loc_remaining;
        overview.textContent = loc_overview;
        unitsExpander.setAttribute("aria-label", loc_toggleUnits);
        if (!summary.querySelectorAll("a.more-info").length) {
            var html = ' <a class="more-info" href="' + link.href + '">' + loc_moreInfo + "</a>";
            var summaryChildren = summary.children;
            summaryChildren[summaryChildren.length - 1].insertAdjacentHTML("beforeend", html);
        }
    }
    function countIncomplete(items) {
        return items.filter(function(i) {
            return i.status !== "complete";
        }).length;
    }
    function initExpanders(container) {
        var expanders = Array.from(container.querySelectorAll("button.unit-expander"));
        return expanders.map(function(expandButton) {
            return expander(expandButton);
        });
    }
    function totalModulePoints(modules) {
        var totalPoints = 0;
        modules.forEach(function(module) {
            totalPoints = 0;
            module.units.forEach(function(unit) {
                totalPoints += unit.points;
            });
            module.points = totalPoints;
        });
    }
    function localePage() {
        var contentElements = document.querySelectorAll(".content h2, .content ul > li > a");
        var form = document.querySelector(".select-locale form");
        var headlineCurrentLocaleElement = document.querySelector(".select-locale .headline strong");
        var regions = [];
        var localeInfo;
        var regionIndexes = {
            americas: 0,
            europeMiddleEastAfrica: 1,
            asiaPacific: 2
        };
        var targetUrl;
        function readTargetUrl() {
            targetUrl = parseQueryString().target || location.origin + location.pathname;
            var a = document.createElement("a");
            a.href = targetUrl;
            if (a.hostname !== location.hostname && a.hostname.indexOf("techprofile.microsoft.com") === -1) {
                targetUrl = location.origin + location.pathname;
                return;
            }
        }
        readTargetUrl();
        headlineCurrentLocaleElement.textContent = msDocs.data.userLocaleName;
        if (msDocs.data.contentDir === "rtl" && /\)$/.test(headlineCurrentLocaleElement.textContent)) {
            headlineCurrentLocaleElement.appendChild(document.createTextNode("‎"));
        }
        for (var i = 0; i < contentElements.length; i++) {
            var element = contentElements.item(i);
            if (element instanceof HTMLHeadingElement) {
                regions.push({
                    h2: element,
                    locales: []
                });
            } else if (element instanceof HTMLAnchorElement) {
                localeInfo = {
                    a: element,
                    locale: element.search.substr(1).toLocaleLowerCase(),
                    name: element.title.toLocaleLowerCase(),
                    displayName: element.textContent.toLocaleLowerCase()
                };
                regions[regions.length - 1].locales.push(localeInfo);
                localeInfo.a.href = targetUrl;
                localeInfo.a.pathname = replaceLocaleInPath(localeInfo.a.pathname, localeInfo.locale);
                element.setAttribute("data-locale", localeInfo.locale);
                element.setAttribute("data-bi-name", localeInfo.locale);
                if (localeInfo.locale === msDocs.data.userLocale) {
                    element.parentElement.classList.add("selected");
                }
                if (msDocs.data.contentDir === "rtl" && /\)$/.test(element.textContent)) {
                    element.appendChild(document.createTextNode("‎"));
                }
            }
        }
        function filterLocales(event) {
            var selectedRegion = form.querySelector(":checked").value;
            var term = form.querySelector('[type="search"]').value.trim().toLocaleLowerCase();
            var region;
            var regionHidden;
            var locale;
            var localeHidden;
            var visibleLocalesInRegion;
            var visibleLocales = 0;
            for (var i = 0; i < regions.length; i++) {
                region = regions[i];
                regionHidden = selectedRegion !== "worldwide" && i !== regionIndexes[selectedRegion];
                visibleLocalesInRegion = 0;
                for (var j = 0; j < region.locales.length; j++) {
                    locale = region.locales[j];
                    localeHidden = regionHidden || term.length && locale.locale.indexOf(term) === -1 && locale.name.indexOf(term) === -1 && locale.displayName.indexOf(term) === -1;
                    locale.a.parentElement.hidden = localeHidden;
                    if (!localeHidden) {
                        visibleLocalesInRegion++;
                        visibleLocales++;
                    }
                }
                region.h2.hidden = regionHidden || visibleLocalesInRegion === 0;
            }
            msDocs.data.jsllReady.then(function(awa) {
                awa.ct.capturePageAction(event.target, {
                    behavior: awa.behavior.OTHER,
                    actionType: awa.actionType.OTHER,
                    content: {
                        type: "localesearch",
                        region: selectedRegion,
                        term: term,
                        results: visibleLocales
                    }
                });
            });
        }
        var filterTimeout = 0;
        function throttleInput(event) {
            clearTimeout(filterTimeout);
            filterTimeout = setTimeout(function() {
                filterLocales(event);
            }, 300);
        }
        form.addEventListener("input", throttleInput);
        form.addEventListener("change", filterLocales);
        document.querySelector(".content").addEventListener("click", function(event) {
            if (event.target instanceof HTMLAnchorElement) {
                var locale = event.target.getAttribute("data-locale");
                if (locale) {
                    setLocaleCookie(locale);
                }
            }
        });
    }
    var progressElements;
    function modulePage(container) {
        var moduleId = getMeta("uid");
        var userLocale = msDocs.data.userLocale;
        Promise.all([ loadModuleInformation(moduleId), contentLoaded ]).then(function(_a) {
            var module = _a[0];
            var breadcrumbs = container.querySelector(".breadcrumbs");
            var xpTags = Array.from(container.querySelectorAll(".xp-tag"));
            var hasRemaining = module.remainingTime !== null && module.remainingTime !== undefined;
            var mintuesRemaining = hasRemaining ? module.remainingTime : module.durationInMinutes;
            var moduleTimeHolder = container.querySelector(".module-duration-minutes");
            var unitList = container.querySelector("#unit-list");
            var learningPathList = container.querySelector("#parent-learning-paths");
            populateBreadcrumb(breadcrumbs, module.title, module);
            handleXpTag(xpTags, [ module ].concat(module.units), module.uid);
            displayModuleDuration(moduleTimeHolder, mintuesRemaining, hasRemaining);
            displayModuleUnitDuration(unitList, module.units);
            displayRelatedLearningPaths(learningPathList, module.parents);
            if (!user.isAuthenticated) {
                renderStartContinueUnitButton(container.querySelector(".abstract"), "/" + userLocale + module.units[0].url, loc_start, "start");
            }
            user.whenAuthenticated().then(function() {
                if (module.status === "notStarted") {
                    renderStartContinueUnitButton(container.querySelector(".abstract"), "/" + userLocale + module.units[0].url, loc_start, "start");
                } else {
                    var units = convertToLearnItemsToProgressItems(module.units);
                    progressElements = Array.from(container.querySelectorAll("[data-progress-uid]"));
                    updateProgressElements(progressElements, units);
                    if (module.status === "inProgress") {
                        for (var _i = 0, _a = module.units; _i < _a.length; _i++) {
                            var unit = _a[_i];
                            if (unit.status !== "completed") {
                                renderStartContinueUnitButton(container.querySelector(".abstract"), "/" + userLocale + unit.url, loc_continue, "continue");
                                break;
                            }
                        }
                    } else {
                        removeStartUnitButton(true);
                    }
                }
            });
            for (var _i = 0, _b = module.units; _i < _b.length; _i++) {
                var unit = _b[_i];
                if (unit.interactive !== null && unit.interactive !== "lab-on-demand") {
                    showDisclaimer(loc_disclaimer_learnMobileInteractive, null, "is-hidden-tablet");
                    break;
                }
            }
        });
    }
    function loadModuleInformation(moduleId) {
        return getModule(msDocs.data.userLocale, moduleId);
    }
    function displayRelatedLearningPaths(learningPathList, parents) {
        var template = function(paths) {
            return '\n\t<h2 class="title is-size-6 has-margin-top-medium has-margin-bottom-none">' + loc_relatedLearningPaths + '</h2>\n\t<ul class="has-margin-top-none has-margin-left-none has-margin-right-none">\n\t\t' + paths.map(function(path) {
                return '<li class="is-unstyled is-size-7"><a href="' + path.url + '">' + path.title + "</a></li>";
            }).join("") + "\n\t</ul>\n\t";
        };
        if (parents.length > 0) {
            learningPathList.innerHTML = template(parents);
        } else {
            learningPathList.innerHTML = "";
        }
    }
    function displayModuleDuration(moduleTimeHolder, timeInMinutes, hasRemaining) {
        if (hasRemaining === void 0) {
            hasRemaining = false;
        }
        var appendedText = hasRemaining ? " " + loc_remaining : "";
        moduleTimeHolder.innerHTML = "" + convertMinsToHrsMins(timeInMinutes) + appendedText;
    }
    function displayModuleUnitDuration(unitList, units) {
        units.forEach(function(unit) {
            unitList.querySelector("div[data-unit-uid='" + unit.uid + "'] span").innerHTML = convertMinsToHrsMins(unit.durationInMinutes);
        });
    }
    function transformAzurePortalLinks(element) {
        Array.from(element.querySelectorAll('a[href*="azure-portal=true"]')).forEach(function(link) {
            var parameters = parseQueryString(link.search);
            delete parameters["azure-portal"];
            link.search = toQueryString(parameters);
            link.target = "az-portal";
            link.insertAdjacentHTML("beforeend", ' <span class="docon docon-navigate-external" aria-hidden="true"></span>');
        });
    }
    var aadDelay = 5e3;
    var stateAttr = "data-ux-state";
    var state$1 = {
        spinner: "spinner",
        signInPrompt: "sign-in",
        activatePrompt: "activate-prompt",
        releasePrompt: "release-prompt",
        invitationPrompt: "invitation-prompt",
        loginExpiredPrompt: "login-expired-prompt",
        retryPrompt: "retry-prompt",
        finished: "finished",
        disabled: "disabled",
        error: "error"
    };
    function promptAzureSandbox(container, prompt) {
        if (prompt === void 0) {
            prompt = true;
        }
        return __awaiter(this, void 0, Promise, function() {
            var targetModule, result, sandbox, err_1;
            return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    container.setAttribute("data-bi-name", "sandbox-prompt");
                    if (getMeta("sandbox-disabled") === "true") {
                        return [ 2, renderSandboxDisabled(container) ];
                    }
                    prompt = prompt && !shouldSkipActivatePrompt();
                    renderSpinner(container);
                    _a.label = 1;

                  case 1:
                    _a.trys.push([ 1, 8, , 16 ]);
                    return [ 4, authStatusDetermined ];

                  case 2:
                    _a.sent();
                    if (!!user.isAuthenticated) return [ 3, 4 ];
                    return [ 4, promptToSignIn(container) ];

                  case 3:
                    _a.sent();
                    prompt = false;
                    _a.label = 4;

                  case 4:
                    renderSpinner(container);
                    return [ 4, getCurrentModule() ];

                  case 5:
                    targetModule = _a.sent();
                    return [ 4, sandboxApi.get(targetModule.uid) ];

                  case 6:
                    result = _a.sent();
                    return [ 4, processApiResult({
                        result: result,
                        targetModule: targetModule,
                        container: container,
                        prompt: prompt
                    }) ];

                  case 7:
                    sandbox = _a.sent();
                    return [ 2, sandbox ];

                  case 8:
                    err_1 = _a.sent();
                    if (!(err_1 instanceof Response && err_1.status === 401)) return [ 3, 13 ];
                    if (!(err_1.method === "GET")) return [ 3, 10 ];
                    return [ 4, promptToSignIn(container) ];

                  case 9:
                    _a.sent();
                    return [ 3, 12 ];

                  case 10:
                    return [ 4, promptLoginExpired(container) ];

                  case 11:
                    _a.sent();
                    _a.label = 12;

                  case 12:
                    return [ 3, 15 ];

                  case 13:
                    return [ 4, promptToRetry(container) ];

                  case 14:
                    _a.sent();
                    _a.label = 15;

                  case 15:
                    return [ 2, promptAzureSandbox(container, false) ];

                  case 16:
                    return [ 2 ];
                }
            });
        });
    }
    function isReferredByTenantInvite() {
        return document$1.referrer.indexOf("https://invitations.microsoft.com/redeem/redeeming") === 0;
    }
    function processApiResult(_a) {
        var result = _a.result, targetModule = _a.targetModule, container = _a.container, prompt = _a.prompt;
        return __awaiter(this, void 0, Promise, function() {
            var provisionSandbox, sandbox, _b, subscriptionId, resourceGroupName, currentModule, err_2;
            var _this = this;
            return __generator(this, function(_c) {
                switch (_c.label) {
                  case 0:
                    provisionSandbox = function() {
                        return __awaiter(_this, void 0, void 0, function() {
                            var result;
                            return __generator(this, function(_a) {
                                switch (_a.label) {
                                  case 0:
                                    if (!prompt) return [ 3, 2 ];
                                    return [ 4, promptToActivate(container) ];

                                  case 1:
                                    _a.sent();
                                    _a.label = 2;

                                  case 2:
                                    renderSpinner(container);
                                    if (!isReferredByTenantInvite()) return [ 3, 4 ];
                                    return [ 4, new Promise(function(resolve) {
                                        return setTimeout(resolve, aadDelay);
                                    }) ];

                                  case 3:
                                    _a.sent();
                                    _a.label = 4;

                                  case 4:
                                    return [ 4, sandboxApi.post(targetModule.uid, createReturnUrl()) ];

                                  case 5:
                                    result = _a.sent();
                                    return [ 2, processApiResult({
                                        result: result,
                                        targetModule: targetModule,
                                        container: container,
                                        prompt: false
                                    }) ];
                                }
                            });
                        });
                    };
                    if (!(result.hasError === true)) return [ 3, 2 ];
                    return [ 4, renderKnownError(container, result.error) ];

                  case 1:
                    _c.sent();
                    return [ 2, promptAzureSandbox(container, false) ];

                  case 2:
                    sandbox = result.sandbox;
                    if (!sandbox.resourceGroupId) {
                        if (result.requestVerb === "GET") {
                            return [ 2, provisionSandbox() ];
                        } else {
                            if (isReferredByTenantInvite()) {
                                appInsights.trackEvent({
                                    name: "tenant-invite-failed"
                                });
                                jsllReady.then(function(awa) {
                                    return awa.ct.captureContentPageAction({
                                        content: {
                                            event: "tenant-invite-failed"
                                        }
                                    });
                                });
                            }
                            return [ 2, inviteToTenant(container, sandbox.invitationUrl) ];
                        }
                    }
                    if (!sandboxIsExpired(sandbox)) return [ 3, 4 ];
                    renderSpinner(container);
                    return [ 4, sandboxApi.delete(sandbox.moduleId) ];

                  case 3:
                    _c.sent();
                    return [ 2, provisionSandbox() ];

                  case 4:
                    _b = /^\/subscriptions\/([a-f0-9\-]{36})\/resourceGroups\/([\w\-]+)$/i.exec(sandbox.resourceGroupId), 
                    subscriptionId = _b[1], resourceGroupName = _b[2];
                    sandbox.subscriptionId = subscriptionId;
                    sandbox.resourceGroupName = resourceGroupName;
                    if (!(sandbox.moduleId !== targetModule.uid)) return [ 3, 11 ];
                    currentModule = void 0;
                    _c.label = 5;

                  case 5:
                    _c.trys.push([ 5, 7, , 8 ]);
                    return [ 4, getModule(msDocs.data.userLocale, sandbox.moduleId) ];

                  case 6:
                    currentModule = _c.sent();
                    return [ 3, 8 ];

                  case 7:
                    err_2 = _c.sent();
                    currentModule = {
                        title: sandbox.moduleId,
                        url: ""
                    };
                    return [ 3, 8 ];

                  case 8:
                    return [ 4, promptToReleaseAzureSandbox(container, currentModule, targetModule) ];

                  case 9:
                    _c.sent();
                    prompt = false;
                    renderSpinner(container);
                    return [ 4, sandboxApi.delete(sandbox.moduleId) ];

                  case 10:
                    _c.sent();
                    return [ 2, provisionSandbox() ];

                  case 11:
                    container.setAttribute(stateAttr, state$1.finished);
                    container.innerHTML = "";
                    azureSandbox.value = sandbox;
                    eventBus.publish(new AzureSandboxChangedEvent(sandbox));
                    jsllReady.then(function(awa) {
                        return awa.ct.captureContentPageAction({
                            content: {
                                event: "azure-sandbox-activated",
                                sandbox: sandbox,
                                isNew: result.requestVerb === "POST"
                            }
                        });
                    });
                    return [ 2, sandbox ];
                }
            });
        });
    }
    function shouldSkipActivatePrompt() {
        var args = parseQueryString(location$1.search);
        if (args[azureSandboxActivateParameter] === "true") {
            args[azureSandboxActivateParameter] = null;
            updateQueryString(args, "replaceState");
            return true;
        }
        return false;
    }
    function createReturnUrl() {
        var args = parseQueryString(location$1.search);
        args[azureSandboxActivateParameter] = "true";
        return location$1.protocol + "//" + location$1.hostname + location$1.pathname + "?" + toQueryString(args) + location$1.hash;
    }
    function renderSpinner(container, message) {
        if (message === void 0) {
            message = null;
        }
        if (message === null) {
            message = loc_loadingSandboxInformation;
        }
        container.setAttribute(stateAttr, state$1.spinner);
        container.innerHTML = '\n\t\t<p>\n\t\t\t<span class="loader"></span>\n\t\t\t<span class="has-padding-left-small has-padding-right-small">' + message + "</span>\n\t\t</p>";
    }
    function renderSandboxDisabled(container) {
        var taskButtons = document$1.getElementById("task-button-group");
        if (taskButtons) {
            taskButtons.classList.add("is-hidden");
        }
        container.setAttribute(stateAttr, state$1.disabled);
        container.innerHTML = "\n\t\t\t<p>" + loc_sandboxTemporaryDisabled + "</p>";
        return new Promise(function() {});
    }
    function promptToSignIn(container) {
        container.setAttribute(stateAttr, state$1.signInPrompt);
        container.innerHTML = "<p>" + loc_unitRequiresSandbox + "</p>\n\t\t<p>" + loc_sandboxExplanation + '</p>\n\t\t<div class="has-padding-top-medium has-padding-right-none has-padding-bottom-none has-padding-left-none">\n\t\t\t<a class="button ' + signInClassName + '" href="' + createReturnUrl() + '">' + loc_signInToActivateSandbox + "</a>\n\t\t</div>";
        return user.whenAuthenticated();
    }
    function promptLoginExpired(container) {
        container.setAttribute(stateAttr, state$1.loginExpiredPrompt);
        container.innerHTML = "<p>" + loc_sandboxLoginExpired + '</p>\n\t\t<div class="has-padding-top-medium has-padding-right-none has-padding-bottom-none has-padding-left-none">\n\t\t\t<a class="button ' + signInClassName + '" href="' + createReturnUrl() + '">' + loc_signInToActivateSandbox + "</a>\n\t\t</div>";
        return user.whenAuthenticated();
    }
    function promptToActivate(container) {
        container.setAttribute(stateAttr, state$1.activatePrompt);
        container.innerHTML = "<p>" + loc_unitRequiresSandbox + "</p>\n\t\t<p>" + loc_sandboxExplanation + '</p>\n\t\t<div class="has-padding-top-medium has-padding-right-none has-padding-bottom-none has-padding-left-none">\n\t\t\t<button type="button" class="button" data-bi-name="activate">' + loc_activateSandbox + "</button>\n\t\t</div>";
        return new Promise(function(resolve) {
            return container.querySelector("button").onclick = function() {
                return resolve();
            };
        });
    }
    function inviteToTenant(container, invitationUrl) {
        container.setAttribute(stateAttr, state$1.invitationPrompt);
        container.innerHTML = "<p>" + loc_sandboxRequiresInvite + '</p>\n\t\t<div class="has-padding-top-medium has-padding-right-none has-padding-bottom-none has-padding-left-none">\n\t\t\t<a class="button" href="' + invitationUrl + '" data-bi-name="tenant-invite">' + loc_acceptInvite + "</a>\n\t\t</div>";
        return new Promise(function() {});
    }
    function promptToReleaseAzureSandbox(container, currentModule, targetModule) {
        container.setAttribute(stateAttr, state$1.releasePrompt);
        var message = loc_differentSandboxAlreadyActiveExplanation.replace("{0}", currentModule.url).replace("{1}", escape$1(currentModule.title)).replace("{2}", escape$1(targetModule.title));
        container.innerHTML = "\n\t\t<p>" + loc_differentSandboxAlreadyActive + "</p>\n\t\t<p>" + message + '</p>\n\t\t<div class="has-padding-top-medium has-padding-right-none has-padding-bottom-none has-padding-left-none">\n\t\t\t<button type="button" class="button" data-bi-name="release">' + loc_activateNewSandbox + "</button>\n\t\t</div>";
        return new Promise(function(resolve) {
            return container.querySelector("button").onclick = function() {
                return resolve();
            };
        });
    }
    function promptToRetry(container, errorMessage) {
        container.innerHTML = "\n\t\t<p>" + (errorMessage ? escape$1(errorMessage) : loc_somethingWentWrong) + '</p>\n\t\t<div class="has-padding-top-medium has-padding-right-none has-padding-bottom-none has-padding-left-none">\n\t\t\t<button type="button" class="button" data-bi-name="retry">' + loc_retryActivatingSandbox + "</button>\n\t\t</div>";
        return new Promise(function(resolve) {
            return container.querySelector("button").onclick = function() {
                return resolve();
            };
        });
    }
    function renderKnownError(container, error) {
        container.setAttribute(stateAttr, state$1.error);
        switch (error.errorCode) {
          case "MissingEmail":
            container.innerHTML = "\n\t\t\t\t<p>" + loc_emailIsRequired + "</p>\n\t\t\t\t<p>" + loc_emailIsRequiredExplanation + '</p>\n\t\t\t\t<div class="has-padding-top-medium has-padding-right-none has-padding-bottom-none has-padding-left-none">\n\t\t\t\t\t<button type="button" class="button" data-bi-name="retry">' + loc_retryActivatingSandbox + "</button>\n\t\t\t\t</div>";
            return new Promise(function(resolve) {
                return container.querySelector("button").onclick = function() {
                    return resolve();
                };
            });

          case "RestrictedCloud":
            container.innerHTML = "\n\t\t\t<p>" + loc_restrictedCloud + "</p>";
            return new Promise(function() {});

          case "OperationFailed":
            container.innerHTML = "<p>" + (error.message ? escape$1(error.message) : loc_somethingWentWrong) + "</p>";
            return new Promise(function() {});

          default:
            return promptToRetry(container, error.message);
        }
    }
    var sandboxApi = {
        base: "https://" + (isProduction ? "" : "ppe.") + "docs.microsoft.com/api/resources/sandbox",
        get: function(moduleUid) {
            return __awaiter(this, void 0, Promise, function() {
                var init, response, data;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        init = {
                            method: "GET",
                            credentials: "include",
                            mode: "cors"
                        };
                        return [ 4, fetchWithTimeout(sandboxApi.base + "/" + moduleUid, init) ];

                      case 1:
                        response = _a.sent();
                        process401Response(response);
                        if (!(response.ok || response.status === 400)) return [ 3, 3 ];
                        return [ 4, response.json() ];

                      case 2:
                        data = _a.sent();
                        return [ 2, response.ok ? {
                            requestVerb: "GET",
                            hasError: false,
                            sandbox: data
                        } : {
                            requestVerb: "GET",
                            hasError: true,
                            error: data
                        } ];

                      case 3:
                        response.method = init.method;
                        return [ 2, Promise.reject(response) ];
                    }
                });
            });
        },
        post: function(moduleUid, returnUrl) {
            return __awaiter(this, void 0, Promise, function() {
                var init, response, data;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        init = {
                            method: "POST",
                            credentials: "include",
                            mode: "cors",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                returnUrl: returnUrl
                            })
                        };
                        return [ 4, fetch(sandboxApi.base + "/" + moduleUid, init) ];

                      case 1:
                        response = _a.sent();
                        process401Response(response);
                        if (!(response.ok || response.status === 400)) return [ 3, 3 ];
                        return [ 4, response.json() ];

                      case 2:
                        data = _a.sent();
                        return [ 2, response.ok ? {
                            requestVerb: "POST",
                            hasError: false,
                            sandbox: data
                        } : {
                            requestVerb: "POST",
                            hasError: true,
                            error: data
                        } ];

                      case 3:
                        response.method = init.method;
                        return [ 2, Promise.reject(response) ];
                    }
                });
            });
        },
        delete: function(moduleUid) {
            return __awaiter(this, void 0, Promise, function() {
                var init, response;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        init = {
                            method: "DELETE",
                            credentials: "include",
                            mode: "cors"
                        };
                        return [ 4, fetchWithTimeout(sandboxApi.base + "/" + moduleUid, init) ];

                      case 1:
                        response = _a.sent();
                        process401Response(response);
                        if (response.ok) {
                            return [ 2 ];
                        }
                        response.method = init.method;
                        return [ 2, Promise.reject(response) ];
                    }
                });
            });
        }
    };
    function renderSandboxTimer(container, sandbox, whenExpired) {
        container.setAttribute("data-bi-name", "sandbox-prompt");
        var renderCountdown = function() {
            var remainingInMilliSec = new Date(sandbox.moduleExpiresAt).getTime() - Date.now();
            var remainingInMin = Math.round(remainingInMilliSec / 6e4);
            if (remainingInMin <= 0) {
                clearInterval(interval);
                container.innerHTML = "\n\t\t\t\t<p>" + loc_sandboxAccessExpired + "</p>\n\t\t\t\t<p>" + loc_sandboxExpiredExplanation + '</p>\n\t\t\t\t<div class="has-padding-top-medium has-padding-right-none has-padding-bottom-none has-padding-left-none">\n\t\t\t\t\t<button type="button" class="button" data-bi-name="activate">' + loc_activateSandbox + "</button>\n\t\t\t\t</div>";
                container.querySelector("button").onclick = whenExpired;
            } else {
                container.innerHTML = "\n\t\t\t\t<p>" + loc_sandboxAccessAvailable + "</p>";
            }
        };
        renderCountdown();
        var interval = setInterval(renderCountdown, 60 * 1e3);
        beforeUnload(function() {
            return clearInterval(interval);
        });
    }
    var sharing = {
        facebook: function(url) {
            return "https://www.facebook.com/sharer/sharer.php?u=" + url;
        },
        twitter: function(url, title) {
            return "https://twitter.com/intent/tweet?original_referer=" + url + "&text=" + title + "&tw_p=tweetbutton&url=" + url;
        },
        linkedin: function(url) {
            return "https://www.linkedin.com/cws/share?url=" + url;
        },
        email: function(url, title) {
            var subject = encodeURIComponent(loc_sharedArticleSubject).replace(encodeURIComponent("{0}"), title);
            var body = "" + title + encodeURIComponent("\n\n") + url;
            return "mailto:?subject=" + subject + "&body=" + body;
        },
        weibo: function(url, title) {
            return "http://service.weibo.com/share/share.php?title=" + title + "&url=" + url;
        }
    };
    function initSharingLinks(container, url, title, newWindow) {
        if (newWindow === void 0) {
            newWindow = false;
        }
        var encodedTitle = encodeURIComponent(title);
        var campaignUrl = url += (url.indexOf("?") !== -1 ? "&" : "?") + "WT.mc_id=";
        for (var _i = 0, _a = Object.keys(sharing); _i < _a.length; _i++) {
            var platform = _a[_i];
            var anchor = container.querySelector(".share-" + platform);
            if (anchor === null) {
                continue;
            }
            var encodedUrl = encodeURIComponent(campaignUrl + platform);
            var hrefFunc = sharing[platform];
            anchor.href = hrefFunc(encodedUrl, encodedTitle);
            if (newWindow) {
                anchor.target = "_blank";
            }
        }
    }
    function buildModuleComplete(module, modalContent) {
        modalContent.innerHTML = '\n\t<div class="modal-card modal-completed fill-mobile" aria-describedby="modalText" aria-labelledby="modalTitle">\n\t\t<header id="closeSection" class="modal-card-head has-padding-small has-background-primary">\n\t\t\t<button class="modal-close modal-card-close-button is-large is-white" data-bi-name="close" aria-label="' + loc_close + '"></button>\n\t\t</header>\n\t\t<section class="module-completed-hero has-background-primary is-flex has-flex-justify-content-center has-padding-top-medium">\n\t\t\t<div class="animation-holder is-relative has-margin-bottom-large">\n\t\t\t\t<img class="achievementImage" id="achievementSrc" src="" />\n\t\t\t\t<div id="achievementUid" data-progress-uid="" class="xp-tag path-tag is-complete">\n\t\t\t\t\t<div class="xp-tag-hexagon">\n\t\t\t\t\t\t<span class="xp-tag-icon is-shown-complete docon docon-check"></span>\n\t\t\t\t\t\t<span aria-hidden="true" class="xp-tag-xp"></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t\t<section class="modal-card-body has-padding-top-none has-flex-justify-content-center has-text-centered has-padding-top-large">\n\t\t\t<p id="modalTitle" class="title is-size-2 has-margin-bottom-medium"></p>\n\t\t\t<p id="modalText"></p>\n\t\t\t<p id="achievementTitle" class="title is-size-4 has-margin-bottom-medium"></p>\n\t\t\t<div class="continue-action">\n\t\t\t</div>\n\t\t</section>\n\t\t<footer class="modal-card-foot has-flex-justify-content-center">\n\t\t\t<div data-bi-name="share-links">\n\t\t\t\t<p class="has-margin-none has-text-weight-semibold is-inline-desktop">' + loc_shareYourAchievement + '</p>\n\t\t\t\t<p class="has-margin-none is-text-centered is-inline-desktop">\n\t\t\t\t\t<a title="' + loc_facebook + '" class="share-facebook is-undecorated is-inline-block  has-padding-none has-padding-small-mobile" data-bi-name="facebook">\n\t\t\t\t\t\t<span class="has-text-subtle icon docon docon-brand-facebook" aria-hidden="true"></span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a title="' + loc_twitter + '" class="share-twitter is-undecorated is-inline-block  has-padding-none has-padding-small-mobile" data-bi-name="twitter">\n\t\t\t\t\t\t<span class="has-text-subtle icon docon docon-brand-twitter" aria-hidden="true"></span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a title="' + loc_linkedin + '" class="share-linkedin is-undecorated is-inline-block  has-padding-none has-padding-small-mobile" data-bi-name="linkedin">\n\t\t\t\t\t\t<span class="has-text-subtle icon docon docon-brand-linkedin" aria-hidden="true"></span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a title="' + loc_email + '" class="share-email is-undecorated is-inline-block  has-padding-none has-padding-small-mobile" data-bi-name="email">\n\t\t\t\t\t\t<span class="has-text-subtle icon docon docon-mail-message-fill" aria-hidden="true"></span>\n\t\t\t\t\t</a>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</footer>\n\t</div>\n\t';
        var completedModal = new Modal(modalContent);
        var achievementImage = modalContent.querySelector("#achievementSrc");
        achievementImage.onload = function() {
            completedModal.show();
        };
        var continueHolder = modalContent.querySelector(".continue-action");
        completeButtonLogic(module, continueHolder, true);
        signInNudge(continueHolder);
        initSharingLinks(document$1.body, location.origin + module.url, module.title, true);
    }
    function completeButtonLogic(module, buttonHolder, buildModal) {
        var nextModuleUrl = "/learn/browse/";
        var ctaText = loc_exploreOtherModules;
        if (module.parents.length === 1) {
            Promise.all([ loadLearningPathInformation$1(module.parents[0].uid), contentLoaded ]).then(function(_a) {
                var learningPath = _a[0];
                if (learningPath.status === "completed") {
                    buildPathContinueButton(learningPath, buttonHolder);
                    if (buildModal) {
                        populateModal(learningPath, learningPath.achievement.iconUrl, learningPath.uid, loc_congratulations, loc_trophyEarnedFor, learningPath.title);
                        attachModuleBadge(module.iconUrl);
                    }
                } else {
                    var incompleteModules = learningPath.modules.filter(function(x) {
                        return x.status !== "completed";
                    });
                    buttonHolder.innerHTML = createModalButton(incompleteModules[0].url, loc_continueToNextModule, "continue");
                    if (buildModal) {
                        populateModal(module, module.achievement.iconUrl, module.uid, loc_youDidIt, loc_badgeEarnedFor, module.title);
                    }
                }
            });
        } else {
            if (module.parents.length === 0) {
                buttonHolder.innerHTML = createModalButton(nextModuleUrl, ctaText, "continue");
            } else {
                buttonHolder.innerHTML = '<p class="is-hidden-mobile">' + loc_exploreOtherModules + "</p>";
                buttonHolder.setAttribute("data-bi-name", "learning-paths");
                module.parents.forEach(function(learningPath) {
                    var learningPathLink = document$1.createElement("a");
                    learningPathLink.classList.add("is-block");
                    learningPathLink.classList.add("is-hidden-mobile");
                    learningPathLink.href = "/" + (msDocs.data.userLocale + learningPath.url);
                    learningPathLink.innerText = learningPath.title;
                    buttonHolder.appendChild(learningPathLink);
                });
                var mobileButton = document$1.createElement("div");
                mobileButton.classList.add("is-hidden-desktop");
                mobileButton.classList.add("is-hidden-tablet");
                mobileButton.innerHTML = createModalButton(nextModuleUrl, ctaText, "continue");
                buttonHolder.appendChild(mobileButton);
            }
            if (buildModal) {
                populateModal(module, module.achievement.iconUrl, module.uid, loc_youDidIt, loc_badgeEarnedFor, module.title);
            }
        }
        buttonHolder.classList.remove("is-hidden");
    }
    function buildPathContinueButton(learningPath, buttonHolder) {
        buttonHolder.innerHTML = createModalButton(learningPath.url, loc_reviewYourLearnHistory, "continue");
        var browsePrompt = document$1.createElement("p");
        browsePrompt.classList.add("is-hidden-mobile");
        browsePrompt.innerHTML = '<a data-bi-name="continue" class="is-size-5" href="/' + msDocs.data.userLocale + '/learn/browse/?resource_type=learning%20path">' + loc_exploreOtherPaths + "</a>";
        buttonHolder.appendChild(browsePrompt);
    }
    function populateModal(achievement, imageSrc, uid, completeTitle, completeText, achievementTitle) {
        var achievementImage = document$1.getElementById("achievementSrc");
        achievementImage.src = imageSrc;
        document$1.getElementById("achievementUid").dataset.progressUid = uid;
        document$1.getElementById("modalTitle").innerText = completeTitle;
        document$1.getElementById("modalText").innerText = completeText;
        document$1.getElementById("achievementTitle").innerText = achievementTitle;
        var xpTags = Array.from(document$1.querySelectorAll(".modal-completed .xp-tag"));
        handleXpTag(xpTags, [ achievement ]);
    }
    function createModalButton(url, ctaText, biValue) {
        var biAttr = biValue ? 'data-bi-name="' + biValue + '"' : "";
        return '\n\t\t<a href="/' + (msDocs.data.userLocale + url) + '" id="complete-unit-link-mobile" class="button is-fullwidth is-primary is-radiusless is-large has-margin-none is-hidden-desktop is-hidden-tablet" ' + biAttr + ">\n\t\t\t<span>" + ctaText + '</span>\n\t\t</a>\n\n\t\t<a href="/' + (msDocs.data.userLocale + url) + '" class="button is-primary has-margin-bottom-small is-hidden-mobile" ' + biAttr + ">\n\t\t\t<span>" + ctaText + '</span>\n\t\t\t<span class="icon docon docon-chevron-right-light"></span>\n\t\t</a>\n\t';
    }
    function signInNudge(holder) {
        if (!user.isAuthenticated) {
            var signInPrompt = document$1.createElement("p");
            signInPrompt.innerHTML = '<a class="is-size-7 ' + signInClassName + '" href="#">' + loc_signInToSaveProgress + "</a>";
            holder.insertAdjacentElement("afterend", signInPrompt);
        }
    }
    function attachModuleBadge(iconUrl) {
        var animationBox = document$1.querySelector(".animation-holder");
        var moduleBadge = document$1.createElement("img");
        moduleBadge.classList.add("moduleBadge");
        moduleBadge.src = iconUrl;
        animationBox.insertAdjacentElement("afterbegin", moduleBadge);
    }
    function loadLearningPathInformation$1(pathId) {
        return getLearningPath(msDocs.data.userLocale, pathId);
    }
    var stateAttr$1 = "data-ux-state";
    var state$2 = {
        spinner: "spinner",
        signInPrompt: "sign-in",
        launchPrompt: "launch-prompt",
        releasePrompt: "release-prompt",
        retryPrompt: "retry-prompt",
        modalPrompt: "modal-prompt",
        finished: "finished"
    };
    var labArgName = "launch-lab";
    function promptLab(id, isModal, container, promptLaunch) {
        if (promptLaunch === void 0) {
            promptLaunch = true;
        }
        container.setAttribute("data-bi-name", "lab-prompt");
        renderSpinner$1(container, isModal);
        promptLaunch = promptLaunch && !shouldSkipLaunchPrompt();
        return authStatusDetermined.then(function() {
            if (!user.isAuthenticated) {
                return promptToSignIn$1(container, isModal).then(function() {
                    return renderSpinner$1(container, isModal);
                });
            }
            return undefined;
        }).then(function() {
            return labApi.get();
        }).then(function(result) {
            if (promptLaunch) {
                return promptToLaunch(container, isModal).then(function() {
                    return result;
                });
            }
            return result;
        }).then(function(result) {
            var running = result.RunningLabs.find(function(x) {
                return x.LabProfileId === id;
            });
            var saved = result.SavedLabs.find(function(x) {
                return x.LabProfileId === id;
            });
            if (running) {
                return running.Url;
            } else if (saved) {
                renderSpinner$1(container, isModal);
                return labApi.post(id).then(function(result) {
                    return result.Url;
                });
            } else if (result.RunningLabs.length || result.SavedLabs.length) {
                return promptToReleaseLabs(container, isModal, result).then(function() {
                    return renderSpinner$1(container, isModal);
                }).then(function() {
                    return labApi.post(id);
                }).then(function(result) {
                    return result.Url;
                });
            } else {
                renderSpinner$1(container, isModal);
                return labApi.post(id).then(function(result) {
                    return result.Url;
                });
            }
        }).then(function(url) {
            if (isModal) {
                promptModalLab(container, id, url);
            } else {
                renderSpinner$1(container, isModal);
                container.setAttribute(stateAttr$1, state$2.finished);
            }
            return url;
        }).catch(function(reason) {
            return promptToRetry$1(container, isModal, reason.Error).then(function() {
                return promptLab(id, isModal, container, false);
            });
        });
    }
    function shouldSkipLaunchPrompt() {
        var args = parseQueryString(location.search);
        if (args[labArgName] === "true") {
            args[labArgName] = null;
            updateQueryString(args, "replaceState");
            return true;
        }
        return false;
    }
    function createReturnUrl$1() {
        var args = parseQueryString(location.search);
        args[labArgName] = "true";
        return location.protocol + "//" + location.hostname + location.pathname + "?" + toQueryString(args) + location.hash;
    }
    function renderSpinner$1(container, isModal) {
        container.setAttribute(stateAttr$1, state$2.spinner);
        var message = isModal ? loc_portallab_loading : loc_vmlab_loading;
        container.innerHTML = '\n\t\t<p>\n\t\t\t<span class="loader"></span>\n\t\t\t<span class="has-padding-left-small has-padding-right-small">' + message + "</span>\n\t\t</p>";
    }
    function promptToSignIn$1(container, isModal) {
        container.setAttribute(stateAttr$1, state$2.signInPrompt);
        var prompt1 = isModal ? loc_portallab_prompt1 : loc_vmlab_prompt1;
        var prompt2 = isModal ? loc_portallab_prompt2 : loc_vmlab_prompt2;
        var buttonTitle = isModal ? loc_portallab_signInButton : loc_vmlab_signInButton;
        container.innerHTML = "\n\t\t<p>" + prompt1 + "</p>\n\t\t<p>" + prompt2 + '</p>\n\t\t<p><a class="button ' + signInClassName + '" href="' + createReturnUrl$1() + '">' + buttonTitle + "</a></p>";
        return user.whenAuthenticated();
    }
    function promptToLaunch(container, isModal) {
        container.setAttribute(stateAttr$1, state$2.launchPrompt);
        var prompt1 = isModal ? loc_portallab_prompt1 : loc_vmlab_prompt1;
        var prompt2 = isModal ? loc_portallab_prompt2 : loc_vmlab_prompt2;
        var buttonTitle = isModal ? loc_portallab_launchButton : loc_vmlab_launchButton;
        container.innerHTML = "\n\t\t<p>" + prompt1 + "</p>\n\t\t<p>" + prompt2 + '</p>\n\t\t<p><button type="button" class="button" data-bi-name="activate">' + buttonTitle + "</button></p>";
        return new Promise(function(resolve) {
            return container.querySelector("button").onclick = function() {
                return resolve();
            };
        });
    }
    function promptToReleaseLabs(container, isModal, result) {
        container.setAttribute(stateAttr$1, state$2.releasePrompt);
        var labs = result.RunningLabs.concat(result.SavedLabs);
        var prompt1 = isModal ? loc_portallab_releasePrompt1 : loc_vmlab_releasePrompt1;
        var prompt2 = isModal ? loc_portallab_releasePrompt2 : loc_vmlab_releasePrompt2;
        prompt2 = prompt2.replace("{lab-name}", labs[0].LabProfileName);
        var buttonTitle = isModal ? loc_portallab_releaseButton : loc_vmlab_releaseButton;
        container.innerHTML = "\n\t\t<p>" + prompt1 + "</p>\n\t\t<p>" + prompt2 + '</p>\n\t\t<p><button type="button" class="button" data-bi-name="release">' + buttonTitle + "</button></p>";
        return new Promise(function(resolve, reject) {
            container.querySelector("button").onclick = function() {
                renderSpinner$1(container, isModal);
                Promise.all(labs.map(function(x) {
                    return labApi.delete(x.LabInstanceId);
                })).then(function() {
                    return resolve();
                }, reject);
            };
        });
    }
    function promptToRetry$1(container, isModal, errorMessage) {
        container.setAttribute(stateAttr$1, state$2.retryPrompt);
        var buttonTitle = isModal ? loc_portallab_retryButton : loc_vmlab_retryButton;
        container.innerHTML = "\n\t\t<p>" + (errorMessage ? escape$1(errorMessage) : loc_somethingWentWrong) + '</p>\n\t\t<p><button type="button" class="button" data-bi-name="retry">' + buttonTitle + "</button></p>";
        return new Promise(function(resolve) {
            return container.querySelector("button").onclick = function() {
                return resolve();
            };
        });
    }
    function promptModalLab(container, id, url) {
        container.setAttribute(stateAttr$1, state$2.modalPrompt);
        container.innerHTML = "\n\t\t<p>" + loc_portallab_ready + '</p>\n\t\t<p><button type="button" class="button" data-bi-name="activate-modal">' + loc_portallab_openButton + "</button></p>";
        var target = "lab" + id;
        var features = "width=800,height=600,status=0,resizable=1,toolbar=0,menubar=0,scrollbars=0";
        container.querySelector("button").onclick = function() {
            return window.open(url, target, features);
        };
    }
    var labApi = {
        base: "https://" + (isProduction ? "" : "ppe.") + "docs.microsoft.com/api/resources/labondemand",
        get: function() {
            var _this = this;
            var init = {
                method: "GET",
                credentials: "include",
                mode: "cors"
            };
            return fetchWithTimeout(labApi.base, init).then(process401Response).then(function(response) {
                if (response.ok) {
                    return response.json().then(function(result) {
                        return _this.processStatus(result);
                    });
                }
                return Promise.reject();
            });
        },
        post: function(labId) {
            var _this = this;
            var init = {
                method: "POST",
                credentials: "include",
                mode: "cors"
            };
            return fetchWithTimeout(labApi.base + "/" + labId, init).then(process401Response).then(function(response) {
                if (response.ok) {
                    return response.json().then(function(result) {
                        return _this.processStatus(result);
                    });
                }
                return Promise.reject();
            });
        },
        delete: function(labInstanceId) {
            var _this = this;
            var init = {
                method: "DELETE",
                credentials: "include",
                mode: "cors"
            };
            return fetchWithTimeout(labApi.base + "/" + labInstanceId, init).then(process401Response).then(function(response) {
                if (response.ok) {
                    return response.json().then(function(result) {
                        return _this.processStatus(result);
                    });
                }
                return Promise.reject();
            });
        },
        processStatus: function(result) {
            return result.Status === 1 ? Promise.resolve(result) : Promise.reject(result);
        }
    };
    var Quiz = function() {
        function Quiz(form, bus, currentUnit, nextUnitUrl) {
            var _this = this;
            this.form = form;
            this.currentUnit = currentUnit;
            this.nextUnitUrl = nextUnitUrl;
            this.uid = getMeta("uid");
            this.submitButton = form.querySelector("button[type=submit]");
            var answerAllQuestionsPrompt = document$1.querySelector(".quiz-error-message");
            var inputs = Array.from(form.querySelectorAll("input")).map(function(input) {
                return {
                    input: input,
                    label: input.closest("label"),
                    question: input.closest(".quiz-question")
                };
            });
            var handleInputChange = function(event) {
                var inputInfo = inputs.find(function(x) {
                    return x.input === event.target;
                });
                if (!inputInfo) {
                    return;
                }
                answerAllQuestionsPrompt.classList.add("is-hidden");
                inputs.filter(function(x) {
                    return x.question === inputInfo.question;
                }).forEach(function(_a) {
                    var label = _a.label, input = _a.input;
                    label.classList.remove("is-incorrect");
                    label.classList.remove("is-correct");
                    var method = input.checked ? "add" : "remove";
                    label.classList[method]("is-selected");
                });
            };
            var syncFocus = function() {
                return inputs.forEach(function(_a) {
                    var input = _a.input, label = _a.label;
                    var method = input.matches(":focus") ? "add" : "remove";
                    label.classList[method]("is-focused");
                });
            };
            listenUntilUnload(form, "blur", syncFocus, true);
            listenUntilUnload(form, "focus", syncFocus, true);
            listenUntilUnload(form, "change", handleInputChange);
            listenUntilUnload(form, "submit", function(event) {
                event.preventDefault();
                if (_this.isSubmitting) {
                    return;
                }
                if (!_this.allQuestionsAnswered()) {
                    answerAllQuestionsPrompt.classList.remove("is-hidden");
                    return;
                }
                _this.isSubmitting = true;
                _this.submitButton.classList.add("is-loading");
                bus.publish(new QuizValidationRequestEvent(_this.serializeSelectedAnswers()));
            });
            bus.subscribe(QuizValidatedEvent, this.handleValidationEvent.bind(this));
        }
        Quiz.prototype.allQuestionsAnswered = function() {
            var isAnsweredByName = Array.from(this.form.querySelectorAll(".choice-input")).reduce(function(map, input) {
                map[input.name] = map[input.name] || input.checked;
                return map;
            }, {});
            return Object.keys(isAnsweredByName).reduce(function(allAnswered, name) {
                return allAnswered && isAnsweredByName[name];
            }, true);
        };
        Quiz.prototype.serializeSelectedAnswers = function() {
            var answerHash = Array.from(this.form.elements).filter(function(element) {
                return element.tagName.toLowerCase() == "input";
            }).reduce(function(state, element) {
                var name = element.name;
                var value = element.value;
                state[name] = state[name] || [];
                if (element.checked) {
                    state[name].push(value);
                }
                return state;
            }, {});
            return Object.keys(answerHash).map(function(x) {
                return {
                    id: x,
                    answers: answerHash[x]
                };
            });
        };
        Quiz.prototype.handleValidationEvent = function(event) {
            this.submitButton.classList.remove("is-loading");
            this.isSubmitting = false;
            var questions = document$1.querySelectorAll(".quiz-choice.is-selected");
            var checkQuestions = event.answers ? event.answers : event.details;
            if (checkQuestions && questions.length !== 0) {
                checkQuestions.forEach(function(answer) {
                    if (questions[answer.id]) {
                        questions[answer.id].classList.add(answer.isCorrect ? "is-correct" : "is-incorrect");
                        var explanation = questions[answer.id].nextElementSibling;
                        explanation.innerHTML = answer.isCorrect ? answer.choices[0].correctExplanation : answer.choices[0].incorrectExplanation;
                        if (!answer.isCorrect) {
                            explanation.setAttribute("role", "alert");
                        }
                    }
                });
            }
            this.reportQuizValidation(event);
            var incorrects = document$1.querySelectorAll(".quiz-choice.is-incorrect");
            if (event.passed) {
                var modalContent = document$1.createElement("div");
                modalContent.innerHTML = '\n\t\t\t<div class="modal-card fill-mobile">\n\t\t\t\t<header id="closeSection" class="modal-card-head has-padding-small">\n\t\t\t\t\t<button class="modal-close modal-card-close-button is-large" data-bi-name="close" aria-label="' + loc_close + '"></button>\n\t\t\t\t</header>\n\t\t\t\t<section class="modal-card-body has-padding-top-none has-flex-justify-content-center has-text-centered">\n\t\t\t\t\t<p class="title is-size-2 has-margin-bottom-small">' + loc_quizComplete + '</p>\n\t\t\t\t\t<p id="quizModalTitle">' + loc_youEarnedXpKnowledgeCheck + '</p>\n\t\t\t\t\t<div id="quiz-xp-earned">\n\t\t\t\t\t\t<div class="quiz-modal-image has-padding-top-extra-large has-padding-bottom-extra-large has-margin-top-medium">\n\t\t\t\t\t\t\t<div data-progress-uid="' + this.uid + '" class="xp-tag is-large is-complete has-flex-justify-content-center has-margin-top-medium is-flex">\n\t\t\t\t\t\t\t\t<div class="xp-tag-hexagon">\n\t\t\t\t\t\t\t\t\t<span class="xp-tag-icon is-shown-complete docon docon-check"></span>\n\t\t\t\t\t\t\t\t\t<span class="xp-tag-xp x-hidden-focus"></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</section>\n\t\t\t\t<footer class="modal-card-foot has-flex-justify-content-center">\n\t\t\t\t\t<div id="quiz-button-holder">\n\t\t\t\t\t\t<div class="not-authenticated">\n\t\t\t\t\t\t\t<a href="' + this.nextUnitUrl + '" id="quiz-modal-sign-in" class="docs-sign-in button is-fullwidth is-primary">\n\t\t\t\t\t\t\t\t<span>' + loc_signInToSaveProgress + '</span>\n\t\t\t\t\t\t\t\t<span class="icon docon docon-chevron-right-light"></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href="' + this.nextUnitUrl + '" id="quiz-modal-continue-unauthed" class="modal-close quiz-modal-continue is-fullwidth is-text has-margin-bottom-large has-text-primary is-small is-block is-text-centered" data-bi-name="continue-without-save">\n\t\t\t\t\t\t\t\t<span>' + loc_continueWithoutSaving + '</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a href="' + this.nextUnitUrl + '" id="quiz-modal-continue" class="modal-close quiz-modal-continue authenticated button is-primary" data-bi-name="continue">\n\t\t\t\t\t\t\t<span>' + loc_continue + "</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</footer>\n\t\t\t</div>\n\t\t\t";
                new Modal(modalContent).show();
                var modal = document$1.querySelector(".modal");
                var modalButton = document$1.querySelector(".quiz-form button");
                var continueButton = document$1.getElementById("next-section");
                var xpTag = modal.querySelector(".xp-tag");
                var xpTagSpan = modal.querySelector(".xp-tag-xp");
                if (event.achievements && event.achievements.length) {
                    var xp = event.achievements.map(function(x) {
                        return x.points.map(function(x) {
                            return x.value;
                        }).reduce(function(state, current) {
                            return state + current;
                        }, 0);
                    }).reduce(function(state, current) {
                        return state + current;
                    }, 0);
                    xpTagSpan.innerHTML = loc_xp.replace("{0}", xp.toString());
                } else {
                    handleXpTag([ xpTag ], [ this.currentUnit ]);
                }
                modalButton.classList.add("is-hidden");
                continueButton.classList.remove("is-hidden");
                this.submitButton.classList.add("is-hidden");
                Array.from(this.form.elements).forEach(function(element) {
                    element.setAttribute("disabled", "disabled");
                });
                if (!event.updated) {
                    var checkCompleteText = modal.querySelector("#quizModalTitle");
                    var xpEarnedSection = modal.querySelector("#quiz-xp-earned");
                    checkCompleteText.innerText = loc_knowledgeCheckCompleAllAnswers;
                    xpEarnedSection.classList.add("is-hidden");
                }
            } else if (incorrects.length !== 0) {
                var firstIncorrectQuestion = incorrects[0].parentElement.parentElement;
                scrollTo(window.pageYOffset + firstIncorrectQuestion.getBoundingClientRect().top, 100);
            }
        };
        Quiz.prototype.reportQuizValidation = function(event) {
            var checkQuestions = event.answers ? event.answers : event.details;
            var gradedQuestionForBi = checkQuestions.map(function(item) {
                return {
                    id: item.id,
                    isCorrect: item.isCorrect
                };
            });
            jsllReady.then(function(awa) {
                awa.ct.captureContentPageAction({
                    behavior: awa.behavior.OTHER,
                    actionType: awa.actionType.OTHER,
                    content: {
                        type: "quiz-validated",
                        uid: getMeta("uid"),
                        passed: event.passed,
                        questions: gradedQuestionForBi
                    }
                });
            });
        };
        return Quiz;
    }();
    function taskValidationModal(complete, currentUnit, nextUnitUrl, errorHtml) {
        if (errorHtml === void 0) {
            errorHtml = null;
        }
        var errorBodyHtml = errorHtml === null ? '<p id="taskModalBody" class="task-body has-margin-top-medium">' + loc_yourWorkNotCompletedCorrectly + "</p>" : '<div id="taskModalBody" class="task-body has-margin-top-medium">' + loc_hint.replace("{0}", errorHtml) + "</div>";
        var taskModal = document$1.createElement("div");
        taskModal.innerHTML = '\n\t<div class="modal-card fill-mobile">\n\t\t<header id="closeSection" class="modal-card-head has-padding-small">\n\t\t\t<button class="modal-close modal-card-close-button is-large" data-bi-name="close" aria-label="' + loc_close + '"></button>\n\t\t</header>\n\t\t<section class="modal-card-body has-padding-top-none has-flex-justify-content-center has-text-centered has-padding-bottom-none">\n\t\t\t<p id="taskModalTitle" class="task-title is-size-2">' + loc_thatIsNotRight + "</p>\n\t\t\t" + errorBodyHtml + '\n\t\t\t<img alt="" src="https://docs.microsoft.com/en-us/media/learn/modal-task-error.svg" class="task-modal-incorrect has-padding-top-large has-padding-bottom-large has-margin-top-medium"/>\n\t\t\t<div class="task-modal-background-correct task-modal-correct has-background-image has-padding-top-large has-padding-bottom-large has-margin-top-medium is-hidden">\n\t\t\t\t<div data-progress-uid="' + currentUnit.uid + '" class="xp-tag is-large is-complete has-flex-justify-content-center has-margin-top-medium is-flex">\n\t\t\t\t\t<div class="xp-tag-hexagon has-margin-none">\n\t\t\t\t\t\t<span class="xp-tag-icon is-shown-complete docon docon-check"></span>\n\t\t\t\t\t\t<span class="xp-tag-xp x-hidden-focus"></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t\t<footer class="modal-card-foot has-flex-justify-content-center has-padding-bottom-extra-large">\n\t\t\t<button class="task-modal-incorrect modal-close button is-primary">\n\t\t\t\t<span class="task-button-text">' + loc_tryAgain + '</span>\n\t\t\t\t<span class="icon docon docon-chevron-right-light"></span>\n\t\t\t</button>\n\t\t\t<a href=\'' + nextUnitUrl + '\' class="task-modal-correct button modal-close is-primary is-hidden">\n\t\t\t\t<span class="task-button-text">' + loc_continue + '</span>\n\t\t\t\t<span class="icon docon docon-chevron-right-light"></span>\n\t\t\t</a>\n\t\t</footer>\n\t</div>\n\t';
        new Modal(taskModal).show();
        taskModal.classList.add("task-completed-modal");
        taskModal.classList.add("is-incorrect");
        var taskTitle = taskModal.querySelector(".task-title");
        var taskBody = taskModal.querySelector(".task-body");
        var taskCorrect = taskModal.querySelectorAll(".task-modal-correct");
        var taskIncorrect = taskModal.querySelectorAll(".task-modal-incorrect");
        if (complete) {
            taskModal.classList.remove("is-incorrect");
            taskTitle.textContent = loc_greatWork;
            taskBody.textContent = loc_youEarnedXpTask;
            for (var i = 0; i < taskIncorrect.length; i++) {
                taskIncorrect[i].classList.add("is-hidden");
            }
            for (var i = 0; i < taskCorrect.length; i++) {
                taskCorrect[i].classList.remove("is-hidden");
            }
            var xpTags = Array.from(taskModal.querySelectorAll(".xp-tag"));
            handleXpTag(xpTags, [ currentUnit ]);
        }
    }
    var isEnabled = false;
    function enableRouter(args) {
        if (isEnabled) {
            return;
        }
        isEnabled = true;
        window$1.addEventListener("click", function(event) {
            var _a = getClickInfo(event), shouldHandle = _a.shouldHandle, anchor = _a.anchor;
            if (!shouldHandle || !args.canHandle(anchor)) {
                return;
            }
            event.preventDefault();
            render(anchor.href, location.href, true).then(function() {});
        }, true);
        window$1.addEventListener("popstate", function(event) {
            return render(location.href, event.state.url, false);
        });
    }
    function render(url, referrerUrl, withPushState) {
        return loadDocument(url).then(function(result) {
            beforeUnloadFns.splice(0, beforeUnloadFns.length).forEach(function(fn) {
                return fn();
            });
            var eventInit = {
                detail: {
                    url: result.url,
                    referrerUrl: referrerUrl,
                    title: result.document.title
                }
            };
            window$1.dispatchEvent(new CustomEvent("before-navigate", eventInit));
            document$1.documentElement.className = result.document.documentElement.className;
            replaceMetaTags(result.document.head, document$1.head);
            replaceContent(result.document, document$1);
            window$1.scrollTo(0, 0);
            if (withPushState) {
                history.pushState({
                    url: result.url
                }, document$1.title, result.url);
                document$1.title = result.document.title;
            }
            setTimeout(function() {
                window$1.dispatchEvent(new CustomEvent("after-navigate", eventInit));
            }, 0);
            return result;
        }).catch(function() {
            location.href = url;
            return Promise.reject();
        });
    }
    function getClickInfo(event) {
        var anchor = event.target instanceof Element && event.target.closest("a");
        if (!anchor || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || getOrigin(anchor) !== location.origin || anchor.hasAttribute("download") || anchor.classList.contains(signInClassName)) {
            return {
                shouldHandle: false,
                anchor: anchor
            };
        }
        var targetWindow = anchor.getAttribute("target");
        if (targetWindow !== null && targetWindow !== window$1.name && targetWindow !== "_self") {
            return {
                shouldHandle: false,
                anchor: anchor
            };
        }
        return {
            shouldHandle: true,
            anchor: anchor
        };
    }
    function getOrigin(_a) {
        var origin = _a.origin, protocol = _a.protocol, hostname = _a.hostname;
        if (origin) {
            return origin;
        }
        if (protocol && hostname) {
            return protocol + "//" + hostname;
        }
        return location.origin;
    }
    function loadDocument(url) {
        var init = {
            method: "GET",
            credentials: "include",
            redirect: "follow",
            headers: {
                Accept: "text/html"
            }
        };
        return fetch(url, init).then(function(response) {
            if (!response.ok) {
                return Promise.reject();
            }
            return response.text().then(function(html) {
                var parser = new DOMParser();
                return {
                    url: response.url || url,
                    document: parser.parseFromString(html, "text/html")
                };
            });
        });
    }
    function replaceMetaTags(source, target) {
        var selector = "meta";
        Array.from(target.querySelectorAll(selector)).forEach(function(m) {
            return m.remove();
        });
        Array.from(source.querySelectorAll(selector)).forEach(function(m) {
            m.remove();
            target.appendChild(m);
        });
    }
    function replaceContent(source, target) {
        var primarySelector = ".primary-holder";
        var sourcePrimary = source.querySelector(primarySelector);
        var targetPrimary = target.querySelector(primarySelector);
        targetPrimary.insertAdjacentElement("afterend", sourcePrimary);
        targetPrimary.remove();
        var secondaryId = "interactive-container";
        var sourceSecondary = source.getElementById(secondaryId);
        var targetSecondary = target.getElementById(secondaryId);
        targetSecondary.className = sourceSecondary.className;
    }
    var combinedProgressService;
    var progressElements$1;
    var mobileDisclaimerAdded = false;
    var isReturnModuleVisit;
    var numberCompleted;
    var moduleCheckedForCompletion = false;
    function moduleUnitPage() {
        var bus = new EventBus();
        beforeUnload(function() {
            return bus.dispose();
        });
        numberCompleted = undefined;
        var unitId = getMeta("uid");
        instrumentUnitCompletion(bus);
        var completionType = getMeta("unit_completion_type");
        var interactiveType = parseInteractiveType(getMeta("interactive"));
        var interactiveContainer = document$1.getElementById("interactive-container");
        var currentModule = getCurrentModule();
        combinedProgressService = new CombinedProgressService(user, bus);
        contentLoaded.then(feedbackLink);
        if (msDocs.data.context.chromeless) {
            contentLoaded.then(function() {
                return document$1.getElementById("next-section").classList.remove("is-hidden-mobile");
            });
        }
        var labId = getMeta("lab-id");
        var labIsModal = getMeta("lab-modal") === "true";
        if (!msDocs.data.context.chromeless && labId) {
            var resourceAlert = createResourceAlert();
            promptLab(+labId, labIsModal, resourceAlert).then(function(labUrl) {
                if (!labIsModal) {
                    location.href = labUrl;
                }
            });
        }
        var azureSandboxReady = Promise.resolve();
        if (!msDocs.data.context.chromeless && getMeta("azure_sandbox") === "true") {
            var resourceAlert_1 = createResourceAlert();
            azureSandboxReady = promptAzureSandbox(resourceAlert_1).then(function() {
                renderSandboxTimer(resourceAlert_1, azureSandbox.value, function() {
                    return promptAzureSandbox(resourceAlert_1, false);
                });
            });
            if (interactiveContainer && interactiveType && !interactiveContainer.firstElementChild) {
                renderInteractivePlaceholder(interactiveType.name, interactiveContainer);
            }
        }
        azureSandboxReady.then(function() {
            if (interactiveType && !interactiveType.flags.isExternal && !msDocs.data.context.chromeless) {
                renderInteractiveComponent(interactiveType, interactiveContainer);
            }
        });
        transformAzurePortalLinks(document$1.querySelector(".content"));
        Promise.all([ currentModule, contentLoaded ]).then(function(_a) {
            var module = _a[0];
            var xpTags = Array.from(document$1.querySelectorAll(".xp-tag"));
            var unitIndex = module.units.findIndex(function(unit) {
                return unit.uid === unitId;
            });
            var currentUnit = module.units[unitIndex];
            var nextUnit = module.units[unitIndex + 1];
            var nextUnitUrl = nextUnit ? "/" + (msDocs.data.userLocale + nextUnit.url) : "";
            handleXpTag(xpTags, [ currentUnit ]);
            if (!msDocs.data.context.chromeless) {
                var userLocale_1 = msDocs.data.userLocale;
                enableRouter({
                    canHandle: function(url) {
                        var isInModule = !!module.units.find(function(unit) {
                            return unit.url === url.pathname || "/" + userLocale_1 + unit.url === url.pathname;
                        });
                        return isInModule;
                    }
                });
            }
            var breadcrumbs = document$1.querySelector(".breadcrumbs");
            populateBreadcrumb(breadcrumbs, currentUnit.title, module);
            renderModuleNavigation(unitIndex, module, interactiveType ? interactiveType.name : null);
            switch (completionType) {
              case "view":
                combinedProgressService.completeViewUnit(unitId);
                break;

              case "quiz":
                setupQuizCompletionType(unitId, bus, currentUnit, nextUnitUrl);
                break;

              case "arm-task":
                if (!msDocs.data.context.chromeless && getMeta("azure_sandbox") === "true") {
                    setupTaskValidation(unitId, currentUnit, nextUnitUrl);
                }
                break;
            }
            bus.subscribe(ProgressUpdatedEvent, function(data) {
                progressElements$1 = Array.from(document$1.querySelectorAll("[data-progress-uid]"));
                numberCompleted = data.standardProgress.filter(function(x) {
                    return x.status === "completed" && x.type === "unit";
                }).length;
                if (user.isAuthenticated) {
                    isReturnModuleVisit = !data.isUpdated && module.status === "completed";
                } else {
                    if (!moduleCheckedForCompletion) {
                        isReturnModuleVisit = data.standardProgress.filter(function(x) {
                            return x.status === "completed" && x.type === "module";
                        }).length === 1;
                        moduleCheckedForCompletion = true;
                    }
                }
                if (numberCompleted !== module.units.length) {
                    getGameStatus();
                }
                updateProgressElements(progressElements$1, data.standardProgress);
                buildNextCTA(module, nextUnit, completionType, interactiveType ? interactiveType.name : null, numberCompleted, isReturnModuleVisit);
            });
            if (completionType === "quiz" || completionType === "arm-task") {
                getProgress(module, bus);
            }
        });
        if (interactiveType !== null && !mobileDisclaimerAdded && interactiveType.name !== "lab-on-demand") {
            showDisclaimer(loc_disclaimer_learnMobileInteractive, null, "is-hidden-tablet");
            mobileDisclaimerAdded = true;
        }
    }
    function setupQuizCompletionType(unitId, bus, currentUnit, nextUnitUrl) {
        Array.from(document$1.querySelectorAll("form.quiz-form")).map(function(form) {
            return new Quiz(form, bus, currentUnit, nextUnitUrl);
        });
        bus.subscribe(QuizValidationRequestEvent, function(_a) {
            var answers = _a.answers;
            authStatusDetermined.then(function() {
                combinedProgressService.validateQuiz(unitId, answers);
            });
        });
    }
    function setupTaskValidation(unitId, currentUnit, nextUnitUrl) {
        authStatusDetermined.then(function() {
            var validateButton = document$1.getElementById("task-validate");
            var continueButton = document$1.getElementById("next-section");
            validateButton.classList.remove("is-hidden");
            var oneWrongModal = true;
            var isSubmitting = false;
            validateButton.onclick = function() {
                if (isSubmitting) {
                    return;
                }
                var startTime = new Date();
                validateButton.classList.add("is-loading");
                isSubmitting = true;
                var validateMessage = document$1.getElementById("task-validation-message");
                validateMessage.classList.add("is-hidden");
                if (azureSandbox.value) {
                    var taskValidations = [ {
                        type: "FreeAzureSubscription",
                        azureSubscription: azureSandbox.value.subscriptionId,
                        resourceGroup: azureSandbox.value.resourceGroupName
                    } ];
                    combinedProgressService.validateTask(unitId, taskValidations).then(function(event) {
                        var endTime = new Date();
                        reportValidation(event.passed, startTime, endTime);
                        if (event.passed) {
                            taskValidationModal(true, currentUnit, nextUnitUrl);
                            validateMessage.textContent = "";
                            validateButton.setAttribute("disabled", "disabled");
                            validateButton.classList.add("is-hidden");
                            validateMessage.classList.add("is-hidden");
                            continueButton.classList.remove("is-hidden");
                        } else {
                            var errorHtml = null;
                            if (event.details) {
                                var details = event.details;
                                var availableHints = details.filter(function(x) {
                                    return x.hint;
                                });
                                var hint = availableHints[0].hint;
                                validateMessage.innerHTML = hint;
                                errorHtml = hint;
                            } else {
                                validateMessage.innerHTML = loc_taskNotComplete;
                            }
                            validateButton.innerText = loc_checkWorkAgain;
                            if (oneWrongModal) {
                                oneWrongModal = false;
                                taskValidationModal(false, currentUnit, nextUnitUrl, errorHtml);
                            }
                        }
                        validateButton.classList.remove("is-loading");
                        isSubmitting = false;
                    });
                } else {
                    var validateMessage_1 = document$1.getElementById("task-validation-message");
                    validateMessage_1.classList.remove("is-hidden");
                    validateMessage_1.innerText = loc_youMustUseSandboxResources;
                    validateButton.classList.remove("is-loading");
                    isSubmitting = false;
                }
            };
        });
    }
    function reportValidation(passed, startTime, endTime) {
        jsllReady.then(function(awa) {
            awa.ct.captureContentPageAction({
                behavior: awa.behavior.OTHER,
                actionType: awa.actionType.OTHER,
                content: {
                    type: "task-validation",
                    uid: getMeta("uid"),
                    validationType: "FreeAzureSubscription",
                    passed: passed,
                    startTime: startTime,
                    endTime: endTime
                }
            });
        });
    }
    function renderModuleNavigation(unitIndex, module, interactiveType) {
        return contentLoaded.then(function() {
            var unitTotal = module.units.length;
            if (!msDocs.data.context.chromeless) {
                buildUnitMenu(module, unitIndex);
            }
            buildUnitNavigation(module.units, unitIndex, unitTotal, interactiveType);
            return Array.from(document$1.querySelectorAll(".module-navigation-item"));
        });
    }
    function buildUnitNavigation(units, unitIndex, unitTotal, interactiveType) {
        var previousButton = document$1.getElementById("previous-unit-link");
        var nextButton = document$1.getElementById("next-unit-link");
        var unitPlace = document$1.getElementById("unit-place");
        var prevColMobile = document$1.getElementById("previous-unit-link-mobile-col");
        var prevMobile = document$1.getElementById("previous-unit-link-mobile");
        var nextColMobile = document$1.getElementById("next-unit-link-mobile-col");
        var nextMobile = document$1.getElementById("next-unit-link-mobile");
        var unitDetailText = loc_unitMarker.replace("{index}", (unitIndex + 1).toString()).replace("{total}", unitTotal.toString());
        unitPlace.innerText = unitDetailText;
        if (unitIndex !== 0) {
            previousButton.setAttribute("href", "/" + msDocs.data.userLocale + units[unitIndex - 1].url);
            previousButton.classList.remove("is-invisible");
            linkToUnit(prevMobile, units[unitIndex - 1], interactiveType);
            prevColMobile.classList.remove("is-hidden");
        }
        if (unitIndex !== unitTotal - 1) {
            nextButton.setAttribute("href", "/" + msDocs.data.userLocale + units[unitIndex + 1].url);
            nextButton.classList.remove("is-invisible");
            linkToUnit(nextMobile, units[unitIndex + 1], interactiveType);
            nextColMobile.classList.remove("is-hidden");
        }
    }
    function buildUnitMenu(module, unitIndex) {
        var template = '\n\t<div class="nav-box">\n\t\t<h2 class="nav-box-title is-size-5 has-margin-top-none">' + escape$1(module.title) + '</h2>\n\t\t<ul class="has-margin-none is-size-7 has-text-subtle is-unstyled" data-bi-name="module-menu-links">\n\t\t\t' + module.units.map(function(_a) {
            var uid = _a.uid, title = _a.title, url = _a.url, durationInMinutes = _a.durationInMinutes;
            return '\n\t\t\t\t<li data-nav-uid="' + uid + '" data-progress-uid="' + uid + '" class="nav-box-line module-navigation-item completable is-unstyled">\n\t\t\t\t\t<a href="/' + msDocs.data.userLocale + url + '" class="line-item is-spaced">\n\t\t\t\t\t\t<span>' + escape$1(title) + '</span><div>\n\t\t\t\t\t\t\t<span class="is-hidden-complete is-undecorated has-no-wrap">' + durationInMinutes + ' min</span>\n\t\t\t\t\t\t\t<span class="is-shown-complete has-text-success docon docon-check"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t';
        }).join("") + "\n\t\t</ul>\n\t</div>\n\t";
        document$1.getElementById("module-menu").innerHTML = template;
        document$1.querySelector(".has-centered-menu li:nth-of-type(" + (unitIndex + 1) + ")").classList.add("is-current");
    }
    function buildNextCTA(module, nextUnit, completionType, interactiveType, unitsComplete, moduleCompleted) {
        var nextSection = document$1.getElementById("next-section");
        var nextContinueText = document$1.getElementById("next-module");
        var continueButton = nextSection.querySelector(".button");
        var continueButtonText = nextSection.querySelector(".button span:first-of-type");
        var quizButtonHolder = document$1.getElementById("quiz-button-holder");
        var quizContinueButton = document$1.getElementById("quiz-modal-continue");
        var quizContinueUnauthedButton = document$1.getElementById("quiz-modal-continue-unauthed");
        var mobileCompleteHolder = document$1.getElementById("complete-unit-link-mobile-col");
        var mobileCompleteButton = document$1.getElementById("complete-unit-link-mobile");
        var nextColMobile = document$1.getElementById("next-unit-link-mobile-col");
        var previousColMobile = document$1.getElementById("previous-unit-link-mobile-col");
        var progressComplete = unitsComplete === module.units.length;
        if (progressComplete && !moduleCompleted) {
            continueButton.setAttribute("data-bi-name", "unlock-achievement");
            if (completionType === "quiz") {
                quizContinueButton.href = "/";
                createModuleCompleteModalButton(quizContinueButton, module);
            } else {
                nextSection.classList.remove("is-hidden");
            }
            nextContinueText.innerText = loc_moduleComplete + ".";
            continueButtonText.innerText = loc_claimReward;
            continueButton.href = "/";
            createModuleCompleteModalButton(continueButton, module);
            mobileCompleteHolder.classList.remove("is-hidden");
            previousColMobile.classList.add("is-hidden");
            nextColMobile.classList.add("is-hidden");
            createModuleCompleteModalButton(mobileCompleteButton, module);
        } else {
            if (continueButton) {
                continueButton.setAttribute("data-bi-name", "continue");
            }
            if (nextUnit) {
                linkToUnit(continueButton, nextUnit, interactiveType);
                nextContinueText.innerText = loc_next + ": " + nextUnit.title;
                if (completionType === "view") {
                    nextSection.classList.remove("is-hidden");
                }
                return;
            }
            if (!moduleCompleted) {
                var unitsCompleted = module.units.filter(function(x) {
                    return x.status !== "completed";
                });
                var firstUncompletedUnitUrl = unitsCompleted[0].url;
                if (completionType === "quiz") {
                    quizContinueUnauthedButton.innerText = loc_goBackToFinishModule;
                    quizContinueButton.innerText = loc_goBackToFinishModule;
                    quizContinueButton.href = firstUncompletedUnitUrl;
                } else {
                    nextSection.classList.remove("is-hidden");
                    continueButton.href = firstUncompletedUnitUrl;
                    nextContinueText.innerText = loc_moduleIncomplete + ":";
                    continueButtonText.innerText = loc_goBackToFinish;
                }
                return;
            }
            if (completionType === "quiz") {
                completeButtonLogic(module, quizButtonHolder, false);
            } else {
                completeButtonLogic(module, nextSection, false);
            }
            mobileCompleteHolder.classList.remove("is-hidden");
            previousColMobile.classList.add("is-hidden");
            nextColMobile.classList.add("is-hidden");
            completeButtonLogic(module, mobileCompleteHolder, false);
        }
    }
    function createModuleCompleteModalButton(button, module) {
        button.onclick = function(event) {
            event.preventDefault();
            var modalHolder;
            if (!modalHolder) {
                modalHolder = document$1.createElement("div");
                getGameStatus();
            }
            buildModuleComplete(module, modalHolder);
        };
    }
    addEventListener("keydown", function(_a) {
        var keyCode = _a.keyCode, altKey = _a.altKey, ctrlKey = _a.ctrlKey;
        if (location.hostname === "review.docs.microsoft.com" || location.hostname === "ppe.docs.microsoft.com") {
            if (keyCode === 69 && altKey && ctrlKey) {
                deleteUserProgress().then(function() {
                    alert("✅ Progress deleted. Page will be reloaded...");
                    location.reload();
                });
                gameApi.deleteGameStatus();
            }
        }
    });
    function renderInteractivePlaceholder(type, container) {
        switch (type) {
          case "bash":
          case "powershell":
            container.innerHTML = '\n\t\t\t\t<div class="is-monospace is-size-6 has-' + type + '-colors has-padding-medium is-full-height is-vertically-scrollable">\n\t\t\t\t\t<p>Azure Cloud Shell</p>\n\t\t\t\t\t<p>' + loc_unitRequiresSandbox + "</p>\n\t\t\t\t\t<p>" + loc_sandboxExplanation + "</p>\n\t\t\t\t</div>";
            break;

          default:
            container.innerHTML = "";
            break;
        }
    }
    function createResourceAlert() {
        var _a = msDocs.data, userDir = _a.userDir, userLocale = _a.userLocale;
        var metadataControl = document$1.querySelector(".page-metadata");
        var sandboxAlertHtml = '<div class="alert top-alert is-hidden-mobile" dir="' + userDir + '" lang="' + userLocale + '"></div>';
        metadataControl.insertAdjacentHTML("afterend", sandboxAlertHtml);
        var alertContainer = metadataControl.nextElementSibling;
        return alertContainer;
    }
    function feedbackLink() {
        var anchor = document$1.getElementById("module-unit-feedback-link");
        var url;
        if (!anchor) {
            return;
        }
        if (msDocs.data.userLocale.toLowerCase() === "en-us") {
            url = "mailto:learn-en-us@microsoft.com";
        } else {
            url = "mailto:learn-loc@microsoft.com";
        }
        var args = {
            subject: loc_microsoftLearnIssue,
            body: loc_microsoftLearnIssueBody.replace("{page-url}", location.href)
        };
        anchor.href = url + "?" + toQueryString(args);
    }
    function linkToUnit(anchor, to, thisInteractiveType) {
        var url = "/" + msDocs.data.userLocale + to.url;
        anchor.href = url;
        if (!msDocs.data.context.chromeless) {
            return;
        }
        var thisIsLab = thisInteractiveType === "lab-on-demand";
        var otherIsLab = to.interactive === "lab-on-demand";
        var stayInFrame = thisIsLab && otherIsLab;
        if (stayInFrame) {
            var args = {
                FromOrigin: "https://labondemand.com",
                context: "context/chromeless"
            };
            anchor.search = toQueryString(args);
        } else {
            anchor.target = "_top";
        }
    }
    function getProgress(module, bus) {
        combinedProgressService.syncUserProgress().then(function() {
            combinedProgressService.getProgressByUid(module.uid).then(function(data) {
                bus.publish(new ProgressUpdatedEvent(data));
            });
        });
    }
    function getGameStatus() {
        authStatusDetermined.then(function() {
            if (user.isAuthenticated) {
                gameApi.getStatus().then(updateGameStatus);
            }
        });
    }
    function instrumentUnitCompletion(bus) {
        var _this = this;
        bus.subscribe(UnitProgressCheckedEvent, function(event) {
            return __awaiter(_this, void 0, void 0, function() {
                var awa;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        if (!event.passed || !event.updated) {
                            return [ 2 ];
                        }
                        return [ 4, jsllReady ];

                      case 1:
                        awa = _a.sent();
                        awa.ct.captureContentPageAction({
                            actionType: awa.actionType.OTHER,
                            behavior: awa.behavior.OTHER,
                            content: {
                                type: "learn-unit-completed",
                                unit: {
                                    uid: event.unit.item.uid,
                                    completed: true
                                },
                                module: {
                                    uid: event.module.item.uid,
                                    completed: !!event.module.progress && event.module.progress.status === "completed"
                                },
                                paths: event.paths.map(function(x) {
                                    return {
                                        uid: x.item.uid,
                                        completed: !!x.progress && x.progress.status === "completed"
                                    };
                                }),
                                achievements: event.achievements.map(function(x) {
                                    return {
                                        uid: x.uid,
                                        type: x.type
                                    };
                                })
                            }
                        });
                        return [ 2 ];
                    }
                });
            });
        });
    }
    function namepaceListPage() {
        var followedByNamespaceTable = function() {
            var $next = $(this).next();
            return $next.is("div") && $next.hasClass("mx-namespace");
        };
        var filterList = function(inputField) {
            var val = $(inputField).val().toLowerCase();
            if (val && val.length) {
                var resultIsEmpty_1 = true;
                $(".mx-namespace td:nth-child(1)").each(function() {
                    var $this = $(this);
                    var $link = $this.find("a");
                    if ($link.length > 0 && $link.attr("data-name").indexOf(val) !== -1 || $this.text().toLowerCase().indexOf(val) !== -1) {
                        resultIsEmpty_1 = false;
                        $this.parents("tr").show();
                    } else {
                        $this.parents("tr").hide();
                    }
                });
                if (resultIsEmpty_1) {
                    $(".emptyFilterMessage").show();
                    $(".content h2").filter(followedByNamespaceTable).hide();
                } else {
                    $(".emptyFilterMessage").hide();
                    $(".content h2").filter(followedByNamespaceTable).each(function() {
                        var $this = $(this);
                        if ($this.next().find("tr:visible").length > 0) {
                            $this.show();
                            $this.next().show();
                        } else {
                            $this.hide();
                            $this.next().hide();
                        }
                    });
                }
            } else {
                $(".emptyFilterMessage").hide();
                $(".content h2").show();
                $(".mx-namespace").show();
                $(".mx-namespace tr").show();
            }
        };
        var init = function() {
            $(".mx-namespace table").each(function() {
                $(this).addClass("nameValue");
            });
            $(".mx-namespace td:nth-child(1) a").each(function() {
                var $this = $(this);
                $this.attr("data-name", $this.text().toLowerCase());
                $this.html(breakText(escape$1($this.text()), true));
            });
            var $namespaceForm = $(".mx-namespaceForm");
            if ($namespaceForm.length) {
                var $nsformHolder = $("<div>").addClass("nsformHolder");
                var $formFilter = $("<form>").submit(function(e) {
                    e.preventDefault();
                });
                var $formInput = $("<input>").attr("type", "search").attr("placeholder", "Filter").keypress(function(e) {
                    if (e.which === 13) {
                        e.preventDefault();
                        return;
                    }
                }).keyup(function() {
                    filterList(this);
                });
                $formFilter.append($formInput);
                $nsformHolder.append($formFilter);
                var $nsFormActions = $("<div>").addClass("nsformActions");
                $nsformHolder.append($nsFormActions);
                $namespaceForm.append($nsformHolder);
                $namespaceForm.append($("<div>").addClass("emptyFilterMessage").html("No results"));
            }
        };
        init();
    }
    function createSearchTermsFromPath() {
        return removeLocaleFromPath(location.pathname).replace(/\/|-/g, " ").trim();
    }
    function createSearchUrlFromPath() {
        var terms = encodeURIComponent(createSearchTermsFromPath()).replace(/\s+/g, "+");
        return "https://docs.microsoft.com/en-us/search/index?search=" + terms;
    }
    function notFoundPage() {
        var links = document.querySelector(".suggested-links");
        var SUGGESTION_LIMIT = 5;
        var searchTermLink = document.getElementById("term-to-search");
        searchTermLink.href = createSearchUrlFromPath();
        var placeholderLinks = {
            counter: 5,
            facets: null,
            "@nextLink": "",
            results: [ {
                title: loc_windowsDocs,
                url: "https://docs.microsoft.com/windows",
                description: "",
                lastUpdatedDate: "",
                breadcrumbs: []
            }, {
                title: loc_azureDocs,
                url: "https://docs.microsoft.com/azure/",
                description: "",
                lastUpdatedDate: "",
                breadcrumbs: []
            }, {
                title: loc_visualStudioDocs,
                url: "https://docs.microsoft.com/visualstudio/products/",
                description: "",
                lastUpdatedDate: "",
                breadcrumbs: []
            }, {
                title: loc_officeDocs,
                url: "https://docs.microsoft.com/office/",
                description: "",
                lastUpdatedDate: "",
                breadcrumbs: []
            }, {
                title: loc_dotnetDocs,
                url: "https://docs.microsoft.com/dotnet/",
                description: "",
                lastUpdatedDate: "",
                breadcrumbs: []
            } ]
        };
        var apiConfig = {
            search: createSearchTermsFromPath(),
            locale: msDocs.data.userLocale,
            $top: SUGGESTION_LIMIT
        };
        fetchWithTimeout("https://docs.microsoft.com/api/search?" + toQueryString(apiConfig)).then(function(response) {
            return response.ok ? response.json() : placeholderLinks;
        }).then(function(search) {
            var suggestions = search.results.length ? search.results : placeholderLinks.results;
            for (var i = 0; i < SUGGESTION_LIMIT; i++) {
                links.insertAdjacentHTML("beforeend", '\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="' + suggestions[i].url + '" data-bi-name="404-suggested-link">' + suggestions[i].title + "</a></li>\n\t\t\t\t\t</li>\n\t\t\t\t");
            }
        });
        return links;
    }
    function referencePage() {
        $(".derivedClassesButton").click(function() {
            var hdc = $(".hiddenDerivedClass[hidden]");
            if (hdc.length) {
                hdc.removeAttr("hidden");
                $(".derivedClassesButton").html("Less&#8230;");
            } else {
                $(".hiddenDerivedClass").attr("hidden", "true");
                $(".derivedClassesButton").html("More&#8230;");
                window.location.hash = "#derived";
            }
            return false;
        });
        $(".globalParamsHolder>a").click(function() {
            var $div = $(this).parent();
            if ($div.attr("aria-expanded") === "true") {
                $div.attr("aria-expanded", "false");
            } else {
                $div.attr("aria-expanded", "true");
            }
            return false;
        });
    }
    function searchPage() {
        var formatNumber = function(num) {
            return num.toString().replace(/\d(?=(\d{3})+$)/g, "$&,");
        };
        var encodeSearchValue = function(searchValue) {
            var map = {
                "(": "%28",
                ")": "%29",
                "'": "%27"
            };
            return encodeURIComponent(searchValue).replace(/[\(\)']/g, function(match) {
                return map[match];
            });
        };
        var queryString = parseQueryString();
        var searchValue = queryString.search === undefined ? "" : queryString.search;
        var encodedSearchValue = searchValue.split(" ").map(encodeSearchValue).join("+");
        var dataSource;
        if (queryString.hasOwnProperty("dataSource")) {
            dataSource = queryString.dataSource;
        }
        var skipValue = queryString.skip;
        var scopeValue = queryString.scope;
        var pageSize = 10;
        var selectedPageBuffer = 4;
        if (searchValue.length > 0) {
            var resultsDiv_1 = $(".searchResults");
            resultsDiv_1.append("<div class='searchResultItem'>" + loc_loading + "</div>");
            var skipParam_1 = "";
            var skipCount_1 = 0;
            if (skipValue) {
                skipParam_1 = "&$skip=" + encodeURIComponent(skipValue);
            }
            var scopeApiParam = "";
            var scopeUrlParam_1 = "";
            var dataSourceUrlParam_1 = "";
            if (scopeValue) {
                scopeApiParam = "&$filter=" + encodeURIComponent("scopes/any(t: t eq '" + scopeValue + "')");
                scopeUrlParam_1 = "&scope=" + encodeURIComponent(scopeValue);
            }
            if (dataSource) {
                dataSourceUrlParam_1 = "&dataSource=" + encodeURIComponent(dataSource);
            }
            var basePath = "https://docs.microsoft.com/api/search";
            var rssPath_1 = basePath + "/rss";
            var params_1 = "?search=" + encodedSearchValue + "&locale=" + encodeURIComponent(msDocs.data.userLocale) + dataSourceUrlParam_1 + scopeApiParam;
            $.ajax({
                url: basePath + params_1 + "&$top=" + pageSize + skipParam_1,
                dataType: "json",
                global: false
            }).done(function(data) {
                $(".searchPage h1").wrap('<div class="header-container"></div>').append("<span>" + formatNumber(data.count) + " " + loc_searchResultsFor + ' "' + escape$1(searchValue) + '"</span>');
                $(".searchPage h1").after('<div class="feed-rss"><a href="' + rssPath_1 + params_1 + '" class="link-rss" aria-label="' + loc_clickForRSS + '"><span class="docon docon-feed" aria-hidden="true"></span><span>' + loc_rss + "</span></a></div>");
                resultsDiv_1.empty();
                if (data.count > 0) {
                    var datePrefix_1 = loc_updated;
                    var index_1 = 0;
                    data.results.forEach(function(r) {
                        var html = [];
                        var dateVal = new Date(r.lastUpdatedDate);
                        html.push("<div><a data-bi-name='searchItem." + index_1 + "' href='" + r.url + "'>" + escape$1(r.title) + "</a>");
                        if (r.breadcrumbs !== undefined && r.breadcrumbs.length > 0) {
                            html.push("<ul>");
                            r.breadcrumbs.forEach(function(obj) {
                                html.push("<li><a data-bi-name='searchItem." + index_1 + ".breadcrumb' href='" + obj.url + "'>" + escape$1(obj.name) + "</a></li>");
                            });
                            html.push("</ul>");
                        }
                        if (r.description !== null) {
                            html.push("<div>" + r.description + "</div>");
                        } else {
                            html.push("<div class='na'>" + loc_descriptionNotAvailable + "</div>");
                        }
                        if (r.lastUpdatedDate !== null) {
                            html.push("<div class='date'>" + datePrefix_1 + " <time datetime='" + dateVal.toISOString() + "'>" + dateVal.toLocaleDateString(msDocs.data.userLocale, {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit"
                            }) + "</time></div>");
                        } else {
                            html.push("<div class='date na'>" + loc_dateNotAvailable + "</div>");
                        }
                        html.push("</div>");
                        resultsDiv_1.append("<div class='searchResultItem'>" + html.join("") + "</div>");
                        index_1++;
                    });
                    var pagingDiv = $(".searchPaging ul");
                    var pageCount = Math.ceil(data.count / pageSize);
                    var pageUrl = location.href.replace(location.search, "") + "?search=" + encodedSearchValue;
                    var pageIndex = 0;
                    var aClass = "";
                    var liClass = "";
                    skipParam_1 = "";
                    if (parseInt(skipValue) > 0) {
                        pageIndex = parseInt(skipValue) / pageSize;
                    }
                    if (pageIndex > 0) {
                        if (pageIndex - 1 > 0) {
                            skipCount_1 = (pageIndex - 1) * pageSize;
                            skipParam_1 = "&skip=" + skipCount_1;
                        } else {
                            skipParam_1 = "";
                        }
                        pagingDiv.append('<li><a href="' + pageUrl + skipParam_1 + scopeUrlParam_1 + ' aria-label="' + loc_previousPage + '"><span class="docon docon-arrow-left" aria-hidden="true"></span></a></li>');
                    }
                    for (var i = 0; i < pageCount; i++) {
                        if (i >= pageIndex - selectedPageBuffer && i <= pageIndex + selectedPageBuffer) {
                            liClass = aClass = "";
                            if (i > 0) {
                                skipCount_1 = i * pageSize;
                                skipParam_1 = "&skip=" + skipCount_1;
                            } else {
                                skipParam_1 = "";
                            }
                            if (i === pageIndex) {
                                aClass = "class='selected' ";
                            } else {
                                if (i < pageIndex && pageIndex - i > selectedPageBuffer * .5) {
                                    liClass = " class='edge'";
                                } else if (i > pageIndex && i - pageIndex > selectedPageBuffer * .5) {
                                    liClass = " class='edge'";
                                }
                            }
                            pagingDiv.append("<li" + liClass + "><a " + aClass + "href='" + pageUrl + skipParam_1 + scopeUrlParam_1 + dataSourceUrlParam_1 + "' aria-label='" + loc_page.replace("{0}", String(i + 1)) + "'>" + (i + 1) + "</a></li>");
                        }
                    }
                    if (pageIndex < pageCount - 1) {
                        skipCount_1 = (pageIndex + 1) * pageSize;
                        skipParam_1 = "&skip=" + skipCount_1;
                        pagingDiv.append('<li><a href="' + pageUrl + skipParam_1 + scopeUrlParam_1 + dataSourceUrlParam_1 + '" aria-label="' + loc_nextPage + '"><span class="docon docon-arrow-right"></span></a></li>');
                    }
                } else {
                    resultsDiv_1.append("<div class='searchResultItem'><h2>" + loc_noResults + "</h2></div>");
                }
                jsllReady.then(function(awa) {
                    awa.ct.captureContentPageAction({
                        behavior: awa.behavior.OTHER,
                        actionType: awa.actionType.OTHER,
                        content: {
                            event: "uhf-search-results",
                            term: searchValue,
                            results: data.count,
                            skip: skipCount_1 ? skipValue : "0",
                            dataSource: dataSource || ""
                        }
                    });
                });
            });
        } else {
            $(".searchPage h1").append(loc_noSearchTerm);
        }
    }
    var CombinedTutorialProgressService = function() {
        function CombinedTutorialProgressService(user, unitUid, progressTransferred) {
            var _this = this;
            this.user = user;
            if (unitUid) {
                this.remote = new RemoteTutorialProgressService(unitUid);
                user.whenAuthenticated().then(function() {
                    return _this.transferProgress();
                }).then(progressTransferred);
            }
            this.local = new LocalTutorialProgressService(localStorage$1, "section_" + location.pathname.replace(/[^a-zA-Z\d\s]+/g, "_"));
        }
        CombinedTutorialProgressService.prototype.getProgress = function() {
            return this.user.isAuthenticated && this.remote ? this.remote.getProgress() : this.local.getProgress();
        };
        CombinedTutorialProgressService.prototype.setProgress = function(step) {
            return this.user.isAuthenticated && this.remote ? this.remote.setProgress(step) : this.local.setProgress(step);
        };
        CombinedTutorialProgressService.prototype.transferProgress = function() {
            var _this = this;
            return Promise.all([ this.local.getProgress(), this.remote.getProgress() ]).then(function(_a) {
                var localProgress = _a[0], remoteProgress = _a[1];
                if (localProgress.isEmpty || !remoteProgress.isEmpty) {
                    return remoteProgress;
                }
                return Promise.all(Object.keys(localProgress).filter(function(step) {
                    return /^\d+$/.test(step) && localProgress[step];
                }).map(function(step) {
                    return parseInt(step);
                }).map(function(step) {
                    return _this.remote.setProgress(step);
                })).then(function() {
                    return localProgress;
                });
            });
        };
        return CombinedTutorialProgressService;
    }();
    var LocalTutorialProgressService = function() {
        function LocalTutorialProgressService(localStorage, pageId) {
            this.localStorage = localStorage;
            this.pageId = pageId;
            this.key = "tutorialProgress";
        }
        LocalTutorialProgressService.prototype.getProgress = function() {
            var data = this.getFromStorage();
            var pageData = data[this.pageId];
            if (!pageData) {
                return Promise.resolve({
                    quizComplete: false,
                    isEmpty: true
                });
            }
            var newFormat = Object.keys(pageData).filter(function(k) {
                return /^#step-\d+$/.test(k);
            }).reduce(function(progress, k) {
                progress[+k.substr(6)] = true;
                progress.isEmpty = false;
                return progress;
            }, {
                isEmpty: true
            });
            return Promise.resolve(newFormat);
        };
        LocalTutorialProgressService.prototype.setProgress = function(step) {
            var data = this.getFromStorage();
            if (!data[this.pageId]) {
                data[this.pageId] = {};
            }
            var pageData = data[this.pageId];
            pageData["#step-" + step] = true;
            this.localStorage.setItem(this.key, JSON.stringify(data));
            return Promise.resolve();
        };
        LocalTutorialProgressService.prototype.getFromStorage = function() {
            var serialized = this.localStorage.getItem(this.key);
            if (serialized === null) {
                return {};
            }
            var data = null;
            try {
                data = JSON.parse(serialized);
            } catch (e) {}
            return data || {};
        };
        return LocalTutorialProgressService;
    }();
    var RemoteTutorialProgressService = function() {
        function RemoteTutorialProgressService(unitUid) {
            this.unitUid = unitUid;
        }
        RemoteTutorialProgressService.prototype.getProgress = function() {
            var _this = this;
            return getUnitProgress(this.unitUid).then(function(data) {
                return _this.processProgressData(data);
            });
        };
        RemoteTutorialProgressService.prototype.setProgress = function(step) {
            return putUnitProgress(this.unitUid, this.unitUid + "-step-" + step).then(function() {});
        };
        RemoteTutorialProgressService.prototype.processProgressData = function(data) {
            if (data === null) {
                return {
                    isEmpty: true
                };
            }
            return data.items.reduce(function(progress, step) {
                var index = parseInt(/\d+$/.exec(step.uid)[0]);
                progress[index] = step.isCompleted;
                progress.isEmpty = false;
                return progress;
            }, {
                isEmpty: true
            });
        };
        return RemoteTutorialProgressService;
    }();
    var argName = "tutorial-step";
    var mobileQuery$1 = window.matchMedia("screen and (max-width: 768px)");
    var progressService;
    var autoExpand = false;
    var minStep = msDocs.data.context.chromeless && getMeta("labUrl") ? 1 : 0;
    var interactiveType = parseInteractiveType(getMeta("interactive_type"));
    function tutorialPage() {
        contentLoaded.then(function() {
            if (msDocs.data.context.chromeless) {
                var prevButton = document.querySelector(".tutorial-step:nth-of-type(2) .tutorial-nav-button-previous");
                prevButton.parentElement.removeChild(prevButton);
            }
            progressService = new LocalTutorialProgressService(localStorage$1, "section_" + location.pathname.replace(/[^a-zA-Z\d\s]+/g, "_"));
            processQueryString();
            addEventListener("content-update", addRunButtons);
            addEventListener("popstate", function() {
                return processQueryString();
            });
            addEventListener("click", handleStepNavClick);
        });
    }
    function readStepFromQueryString() {
        var rawStep = parseQueryString()[argName] || "0";
        if (/^\d+$/.test(rawStep)) {
            return parseInt(rawStep);
        }
        return 0;
    }
    function processQueryString() {
        var step = readStepFromQueryString();
        if (step === 0) {
            autoExpand = true;
        }
        showStep(step);
    }
    function showStep(step) {
        var steps = document.querySelectorAll(".tutorial-step");
        if (step <= minStep || step >= steps.length) {
            step = minStep;
            var args = parseQueryString();
            args[argName] = step === 0 ? null : step.toString();
            updateQueryString(args, "replaceState");
        }
        stopVideo();
        progressService.getProgress().then(renderToc);
        progressService.setProgress(step);
        var isFirst = step === 0;
        var isLast = step === steps.length - 1;
        var hasInteractive = !isFirst && !isLast && interactiveType && !msDocs.data.context.chromeless;
        var fallback = document.createElement("span");
        var h1 = document.querySelector("h1");
        var metadata = document.querySelector(".page-metadata") || fallback;
        var feedback = document.querySelector(".feedback-section") || fallback;
        var pageActionList = document.querySelector(".action-list") || fallback;
        var feedbackPageAction = (document.querySelector('.action-list a[href="#feedback"]') || fallback).parentElement || fallback;
        var pageActions = document.getElementById("page-actions") || fallback;
        h1.hidden = !isFirst;
        metadata.hidden = !isFirst;
        feedback.hidden = !isLast;
        feedbackPageAction.hidden = !isLast;
        pageActionList.hidden = !isFirst && !isLast;
        pageActions.hidden = !isFirst && !isLast;
        if (hasInteractive) {
            document.documentElement.classList.remove("hasPageActions");
        } else {
            document.documentElement.classList.add("hasPageActions");
        }
        Array.from(steps).forEach(function(s, i) {
            return s.hidden = i !== step;
        });
        notifyContentUpdated();
        scrollContentToTop();
        if (hasInteractive) {
            ensureInteractive();
        } else {
            collapseActionPanel();
        }
    }
    function ensureInteractive() {
        var actionPanel = getActionPanel(autoExpand && !mobileQuery$1.matches ? "animate" : "none");
        autoExpand = false;
        if (interactiveType) {
            renderInteractiveComponent(interactiveType, actionPanel);
        }
    }
    function handleStepNavClick(event) {
        if (!(event.target instanceof HTMLElement)) {
            return;
        }
        var anchor = event.target.closest(".tutorial-nav-behavior");
        if (!anchor) {
            return;
        }
        var targetStep = parseQueryString(anchor.search)[argName];
        if (targetStep === undefined) {
            return;
        }
        event.preventDefault();
        var args = parseQueryString(location.search);
        args[argName] = targetStep;
        updateQueryString(args, "pushState");
        processQueryString();
    }
    function renderToc(progress) {
        if (msDocs.data.context.chromeless) {
            return;
        }
        var activeStep = readStepFromQueryString();
        var checkMark = '<svg class="check-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 448"><path d="M160 397.255L9.373 246.627l45.255-45.254L160 306.745 393.373 73.373l45.254 45.255L160 397.255z"/></svg>';
        var steps = Array.from(document.querySelectorAll(".tutorial-step")).map(function(section, index) {
            return {
                index: index,
                title: section.getAttribute("tutorial-step-title"),
                type: section.getAttribute("tutorial-step-type")
            };
        });
        document.querySelector(".toc").innerHTML = '\n\t\t<ol class="tutorial-toc">\n\t\t\t' + steps.map(function(_a) {
            var index = _a.index, title = _a.title;
            return '\n\t\t\t<li class="' + (progress[index] ? "completed-step" : "") + " " + (index === activeStep ? "active-step" : "") + '">\n\t\t\t\t<a class="tutorial-nav-behavior" href="?tutorial-step=' + index + '">\n\t\t\t\t\t' + checkMark + "\n\t\t\t\t\t<span>" + title + "</span>\n\t\t\t\t</a>\n\t\t\t</li>";
        }).join("") + "\n\t\t</ol>";
    }
    function addRunButtons() {
        if (!interactiveType) {
            return;
        }
        var selector = 'section.tutorial-step:not(:first-of-type):not(:last-of-type) .codeHeader + pre > code[class="lang-' + interactiveType + '"]';
        Array.from(document.querySelectorAll(selector)).map(function(block) {
            return block.parentElement.previousElementSibling;
        }).filter(function(header) {
            return !header.querySelector(".ap-expand-behavior");
        }).forEach(function(header) {
            header.insertAdjacentHTML("beforeend", '\n\t\t\t\t<button class="action ap-expand-behavior ap-collapsed" data-bi-name="code-header-try-it-' + interactiveType + '">\n\t\t\t\t\t<span class="docon docon-play" aria-hidden="true"></span>\n\t\t\t\t\t' + loc_tryIt + "\n\t\t\t\t</button>\n\t\t\t");
        });
    }
    function stopVideo() {
        var iframes = Array.from(document.querySelectorAll(".embeddedvideo iframe"));
        if (iframes !== null) {
            iframes.forEach(function(iframe) {
                if (iframe.offsetParent !== null) {
                    var iframeSrc = iframe.src;
                    iframe.src = iframeSrc;
                }
            });
        }
    }
    function pageTemplateSpecific() {
        var pageTemplate = msDocs.data.pageTemplate;
        switch (pageTemplate) {
          case "ApiBrowserPage":
            apiBrowserPage();
            break;

          case "Home":
            homePage();
            break;

          case "Hub":
            hubPage();
            break;

          case "HubPage":
            hubPagePage();
            break;

          case "LandingPage":
            landingPage();
            break;

          case "LocalePage":
            localePage();
            break;

          case "NamespaceListPage":
            namepaceListPage();
            break;

          case "NotFound":
            notFoundPage();
            break;

          case "ProfileList":
            profileListPage();
            break;

          case "Reference":
            referencePage();
            break;

          case "SearchPage":
            searchPage();
            break;

          case "Tutorial":
            tutorialPage();
            break;

          case "Module":
            modulePage(document$1.body);
            break;

          case "ModuleUnit":
            moduleUnitPage();
            break;

          case "LearningPath":
            learningPathPage(document$1.getElementById("main"), document$1.querySelector(".breadcrumbs"));
            break;

          case "Sample":
            break;

          case "ContentBrowserPage":
            contentBrowserPage(document$1.getElementById("main"));
            break;

          case "LearnProduct":
            learnProduct();
            break;
        }
    }
    var BING_MAPS_KEY = "Apoz1_I8r9NMGHKv2saSMyFUvQaECEpRw9TVqq3RZajMaMMsmaj3NRK-jkiOabRt";
    var profiles;
    var activeProfiles;
    var filteredProfiles;
    var infobox;
    var clusterLayer;
    var map;
    var center;
    var filterInput;
    var pushpinOptions = {
        color: "#d73924"
    };
    function setupMap() {
        if (!msDocs.data.mapMode) {
            return;
        }
        var loadMapScenario = new Promise(function(resolve) {
            window.loadMapScenario = resolve;
        });
        Promise.all([ loadMapScenario, loadLibrary("https://www.bing.com/api/maps/mapcontrol?key=" + BING_MAPS_KEY + "&callback=loadMapScenario", "Microsoft") ]).then(function() {
            profiles = activeProfiles = msDocs.data.profileList;
            center = new Microsoft.Maps.Location(35.433847, -75.133743);
            filterInput = document.getElementById("filter-list-map");
            var queryStringValue = parseQueryString().filter;
            if (queryStringValue !== undefined && queryStringValue !== "") {
                filteredProfiles = searchFilterProfiles(queryStringValue, profiles);
                filterInput.value = queryStringValue;
            } else {
                filteredProfiles = profiles;
            }
            var mapConfig = {
                credentials: "",
                center: center,
                zoom: 3,
                minZoom: 3,
                maxZoom: 6,
                disableStreetside: true
            };
            map = new Microsoft.Maps.Map(document.getElementById("map"), mapConfig);
            infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
                visible: false,
                showCloseButton: false
            });
            infobox.setMap(map);
            updateClusterLayer(filteredProfiles, createCustomClusteredPin);
            Microsoft.Maps.Events.addHandler(map, "click", function() {
                infobox.setOptions({
                    visible: false
                });
            });
            filterInput.addEventListener("input", handleMapSearch);
            filterInput.addEventListener("change", handleMapSearch);
            filterInput.addEventListener("keydown", handleInfoboxVisiblity);
            var timeout;
            function handleMapSearch() {
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    map.layers.remove(clusterLayer);
                    filteredProfiles = searchFilterProfiles(escapeRegExp(filterInput.value), profiles);
                    updateClusterLayer(filteredProfiles, createCustomClusteredPin);
                    updateQueryString({
                        filter: filterInput.value
                    }, "replaceState");
                }, 300);
            }
            function handleInfoboxVisiblity() {
                if (infobox.getVisible()) {
                    infobox.setOptions({
                        visible: false
                    });
                }
            }
        });
    }
    function createPushpins(profileList) {
        var pushpins = [];
        activeProfiles = [];
        if (!profileList) {
            activeProfiles = profiles;
            return [];
        }
        if (profileList.length === 1) {
            var profile = profileList[0];
            activeProfiles.push(profileList[0]);
            var _a = profile.location, lat = _a.lat, long = _a.long;
            if (lat && long) {
                var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lat, long), pushpinOptions);
                Microsoft.Maps.Events.addHandler(pushpin, "click", pushpinClicked);
                pushpins = [ pushpin ];
            }
        } else {
            pushpins = profileList.reduce(function(pins, profile) {
                var _a = profile.location, lat = _a.lat, long = _a.long;
                if (lat && long) {
                    activeProfiles.push(profile);
                    var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lat, long), pushpinOptions);
                    Microsoft.Maps.Events.addHandler(pushpin, "click", pushpinClicked);
                    pins.push(pushpin);
                }
                return pins;
            }, []);
        }
        return pushpins;
    }
    function pushpinClicked(e) {
        showInfobox(e.target);
    }
    function showInfobox(pin) {
        var listItems = "";
        var numOfPins;
        if (pin.containedPushpins !== undefined) {
            listItems = pinsToInfoboxHtml(pin.containedPushpins, activeProfiles);
        } else {
            listItems = pinsToInfoboxHtml([ pin ], activeProfiles);
        }
        var htmlContent = '<div class="map-infobox">\n\t\t\t\t\t\t\t<ul class="map-ul">\n\t\t\t\t\t\t\t\t' + listItems + "\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>";
        var infoboxOffset = getInfoboxOffset(numOfPins);
        infobox.setOptions({
            location: pin.getLocation(),
            htmlContent: htmlContent,
            visible: true,
            offset: new Microsoft.Maps.Point(24, infoboxOffset)
        });
        function pinsToInfoboxHtml(pushpins, profiles) {
            var htmlDict = {};
            var html = "";
            numOfPins = pushpins.length;
            pushpins.forEach(function(pin) {
                var location = pin.getLocation();
                profiles.forEach(function(profile) {
                    if (location.latitude === profile.location.lat && location.longitude === profile.location.long) {
                        if (!htmlDict["" + profile.name]) {
                            htmlDict["" + profile.name] = profile.html;
                        }
                    }
                });
            });
            for (var key in htmlDict) {
                html += htmlDict[key];
            }
            return html;
        }
        function getInfoboxOffset(numOfPins) {
            var offsetY = 42.5;
            if (numOfPins > 4) {
                numOfPins = 4;
            }
            offsetY = (offsetY + (numOfPins + 1)) * numOfPins;
            return -offsetY;
        }
    }
    function buildHtmlProfiles(profiles) {
        return profiles.map(function(profile) {
            var href = profile.uid.split(".").length > 1 ? "./" + String(profile.uid.split(".")[1]) : "./" + String(profile.uid.split(".")[0]);
            profile.location.display = checkForUndefined(profile.location.display);
            profile.twitter = profile.twitter ? '<p><a class="twitter" href="http://twitter.com/' + profile.twitter + '">' + profile.twitter + "</a></p>" : "";
            profile.tagline = profile.tagline ? '<p class="tagline">' + profile.tagline + "</p>" : "";
            profile.html = '\n\t\t\t<li class="map-profile-component">\n\t\t\t\t<a href="' + href + '" title="' + profile.name + '">\n\t\t\t\t\t<img class="profile-list-image" src="' + profile.image.src + '" alt="' + profile.image.alt + '">\n\t\t\t\t</a>\n\t\t\t\t<div class="profile-text">\n\t\t\t\t\t<a href="' + href + '" title="' + profile.name + '">\n\t\t\t\t\t\t<h3>' + profile.name + "</h3>\n\t\t\t\t\t</a>\n\t\t\t\t\t" + profile.twitter + "\n\t\t\t\t\t" + profile.tagline + "\n\t\t\t\t</div>\n\t\t\t</li>";
            profile.searchText = profile.name + " " + profile.twitter + " " + profile.tagline + " " + profile.location.display;
            return profile;
        }, {});
    }
    function searchFilterProfiles(searchTerm, arr) {
        var placeholder = document.querySelector(".no-results");
        var regex = new RegExp(searchTerm, "gi");
        placeholder.hidden = true;
        var filtered = arr.filter(function(profile) {
            if (profile.searchText.match(regex)) {
                return profile;
            }
            return false;
        });
        if (filtered.length === 0) {
            placeholder.hidden = false;
            return [];
        } else {
            return filtered;
        }
    }
    function updateClusterLayer(profileList, clusteredPinCallback) {
        Microsoft.Maps.loadModule("Microsoft.Maps.Clustering", function() {
            var pins = createPushpins(profileList);
            clusterLayer = new Microsoft.Maps.ClusterLayer(pins, {
                clusteredPinCallback: clusteredPinCallback,
                gridSize: 120
            });
            var locations = clusterLayer.getPushpins().map(function(pin) {
                return pin.getLocation();
            });
            var rect = Microsoft.Maps.LocationRect.fromLocations(locations);
            map.setView({
                bounds: rect,
                zoom: 12,
                center: center
            });
            map.layers.insert(clusterLayer);
            if (locations.length === 1) {
                showInfobox(clusterLayer.getPushpins()[0]);
            }
        });
    }
    function createCustomClusteredPin(cluster) {
        cluster.setOptions(pushpinOptions);
        Microsoft.Maps.Events.addHandler(cluster, "click", pushpinClicked);
    }
    function checkForUndefined(value) {
        if (value === undefined) {
            return "";
        } else {
            return value;
        }
    }
    function handleProtocolRendering(containers) {
        if (getMeta("protocol_rendering") !== "true") {
            return;
        }
        containers.forEach(styleProtocolTables);
    }
    function styleProtocolTables(container) {
        var tables = Array.from(container.querySelectorAll("table"));
        tables.forEach(function(table) {
            return table.classList.add("protocol-table");
        });
    }
    var rtlDictionary = {
        "ar-sa": true,
        "he-il": true
    };
    function wrapContentTables() {
        var tables = Array.from(document$1.querySelectorAll(".content table"));
        if (!tables.length) {
            return;
        }
        var wrappers = tables.map(function(table) {
            var wrapper = document$1.createElement("div");
            wrapper.classList.add("table-scroll-wrapper");
            table.parentElement.insertBefore(wrapper, table);
            wrapper.appendChild(table);
            return wrapper;
        });
        listenUntilUnload(window$1, "resize", throttle(function() {
            return addBorders(wrappers);
        }));
        addBorders(wrappers);
    }
    var addBorders = function(elements) {
        elements.forEach(function(wrapper) {
            var table = wrapper.firstElementChild;
            if (wrapper.clientWidth < table.clientWidth) {
                wrapper.classList.add("table-scroll-wrapper-scrollable");
            } else {
                wrapper.classList.remove("table-scroll-wrapper-scrollable");
            }
        });
    };
    var throttle = function(fn, thisArg) {
        var running = false;
        return function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!running) {
                running = true;
                window$1.requestAnimationFrame(function() {
                    fn.apply(thisArg, args);
                    running = false;
                });
            }
        };
    };
    var Tab = function() {
        function Tab(li, a, section) {
            this.li = li;
            this.a = a;
            this.section = section;
        }
        Object.defineProperty(Tab.prototype, "tabIds", {
            get: function() {
                return this.a.getAttribute("data-tab").split(" ");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Tab.prototype, "condition", {
            get: function() {
                return this.a.getAttribute("data-condition");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Tab.prototype, "visible", {
            get: function() {
                return !this.li.hasAttribute("hidden");
            },
            set: function(value) {
                if (value) {
                    this.li.removeAttribute("hidden");
                    this.li.removeAttribute("aria-hidden");
                } else {
                    this.li.setAttribute("hidden", "hidden");
                    this.li.setAttribute("aria-hidden", "true");
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Tab.prototype, "selected", {
            get: function() {
                return !this.section.hasAttribute("hidden");
            },
            set: function(value) {
                if (value) {
                    this.a.setAttribute("aria-selected", "true");
                    this.a.tabIndex = 0;
                    this.section.removeAttribute("hidden");
                    this.section.removeAttribute("aria-hidden");
                } else {
                    this.a.setAttribute("aria-selected", "false");
                    this.a.tabIndex = -1;
                    this.section.setAttribute("hidden", "hidden");
                    this.section.setAttribute("aria-hidden", "true");
                }
            },
            enumerable: true,
            configurable: true
        });
        Tab.prototype.focus = function() {
            this.a.focus();
        };
        return Tab;
    }();
    function updateVisibilityAndSelection(group, state) {
        var anySelected = false;
        var platformTab;
        var firstVisibleTab;
        for (var _i = 0, _a = group.tabs; _i < _a.length; _i++) {
            var tab = _a[_i];
            tab.visible = tab.condition === null || state.selectedTabs.indexOf(tab.condition) !== -1;
            if (tab.visible) {
                if (!firstVisibleTab) {
                    firstVisibleTab = tab;
                }
                if (!platformTab && tab.tabIds[0] === (preferredPlatform || platform)) {
                    platformTab = tab;
                }
            }
            tab.selected = tab.visible && arraysIntersect(state.selectedTabs, tab.tabIds);
            anySelected = anySelected || tab.selected;
        }
        if (!anySelected) {
            for (var _b = 0, _c = group.tabs; _b < _c.length; _b++) {
                var tabIds = _c[_b].tabIds;
                for (var _d = 0, tabIds_1 = tabIds; _d < tabIds_1.length; _d++) {
                    var tabId = tabIds_1[_d];
                    var index = state.selectedTabs.indexOf(tabId);
                    if (index === -1) {
                        continue;
                    }
                    state.selectedTabs.splice(index, 1);
                }
            }
            var tab = platformTab || firstVisibleTab;
            tab.selected = true;
            state.selectedTabs.push(tab.tabIds[0]);
        }
    }
    function initTabGroup(element) {
        var group = {
            independent: element.hasAttribute("data-tab-group-independent"),
            tabs: []
        };
        var li = element.firstElementChild.firstElementChild;
        while (li) {
            var a = li.firstElementChild;
            a.setAttribute(contentAttrs.name, "tab");
            var dataTab = a.getAttribute("data-tab").replace(/\+/g, " ");
            a.setAttribute("data-tab", dataTab);
            var id = a.getAttribute("aria-controls");
            var section = element.querySelector('[id="' + id + '"],[data-id="' + id + '"]');
            var tab = new Tab(li, a, section);
            group.tabs.push(tab);
            li = li.nextElementSibling;
        }
        element.setAttribute(contentAttrs.name, "tab-group");
        element.tabGroup = group;
        return group;
    }
    function initTabs(container) {
        var queryStringTabs = readTabsQueryStringParam();
        var elements = container.querySelectorAll(".tabGroup");
        var state = {
            groups: [],
            selectedTabs: []
        };
        for (var i = 0; i < elements.length; i++) {
            var group = initTabGroup(elements.item(i));
            if (!group.independent) {
                updateVisibilityAndSelection(group, state);
                state.groups.push(group);
            }
        }
        container.addEventListener("click", function(event) {
            return handleClick(event, state);
        });
        container.addEventListener("keydown", function(event) {
            return handleKeyDown(event);
        });
        if (state.groups.length === 0) {
            return state;
        }
        selectTabs(queryStringTabs, container);
        updateTabsQueryStringParam(state);
        notifyContentUpdated();
        return state;
    }
    function getTabInfoFromEvent(event) {
        if (!(event.target instanceof HTMLElement)) {
            return null;
        }
        var anchor = event.target.closest("a[data-tab]");
        if (anchor === null) {
            return null;
        }
        var tabIds = anchor.getAttribute("data-tab").split(" ");
        var group = anchor.parentElement.parentElement.parentElement.tabGroup;
        if (group === undefined) {
            return null;
        }
        return {
            tabIds: tabIds,
            group: group,
            anchor: anchor
        };
    }
    function handleClick(event, state) {
        var info = getTabInfoFromEvent(event);
        if (info === null) {
            return;
        }
        event.preventDefault();
        info.anchor.href = "javascript:";
        setTimeout(function() {
            return info.anchor.href = "#" + info.anchor.getAttribute("aria-controls");
        });
        var tabIds = info.tabIds, group = info.group;
        var originalTop = info.anchor.getBoundingClientRect().top;
        if (group.independent) {
            for (var _i = 0, _a = group.tabs; _i < _a.length; _i++) {
                var tab = _a[_i];
                tab.selected = arraysIntersect(tab.tabIds, tabIds);
            }
        } else {
            if (arraysIntersect(state.selectedTabs, tabIds)) {
                return;
            }
            var previousTabId = group.tabs.filter(function(t) {
                return t.selected;
            })[0].tabIds[0];
            state.selectedTabs.splice(state.selectedTabs.indexOf(previousTabId), 1, tabIds[0]);
            for (var _b = 0, _c = state.groups; _b < _c.length; _b++) {
                var group_1 = _c[_b];
                updateVisibilityAndSelection(group_1, state);
            }
            updateTabsQueryStringParam(state);
        }
        notifyContentUpdated();
        if (isPlatform(tabIds[0])) {
            setPreferredPlatform(tabIds[0]);
        }
        var top = info.anchor.getBoundingClientRect().top;
        if (top !== originalTop && event instanceof MouseEvent) {
            window$1.scrollTo(0, window$1.pageYOffset + top - originalTop);
        }
    }
    function handleKeyDown(event) {
        var info = getTabInfoFromEvent(event);
        if (info === null) {
            return;
        }
        var tabIds = info.tabIds, group = info.group;
        var key = event.which;
        if (!event.altKey && (key === keyCodes.left || key === keyCodes.right || key === keyCodes.home || key === keyCodes.end)) {
            event.preventDefault();
            var isLeft = key === keyCodes.left || key === keyCodes.home;
            var index = void 0;
            if (event.ctrlKey || key === keyCodes.home || key === keyCodes.end) {
                var increment = isLeft ? 1 : -1;
                index = isLeft ? 0 : group.tabs.length - 1;
                while (!group.tabs[index].visible) {
                    index += increment;
                }
            } else {
                var increment = isLeft ? -1 : 1;
                index = isLeft ? group.tabs.length - 1 : 0;
                while (group.tabs[index].tabIds[0] !== tabIds[0] || !group.tabs[index].visible) {
                    index += increment;
                }
                do {
                    index += increment;
                    if (index === -1) {
                        index = group.tabs.length - 1;
                    } else if (index === group.tabs.length) {
                        index = 0;
                    }
                } while (!group.tabs[index].visible);
            }
            group.tabs[index].focus();
            return;
        }
    }
    function selectTabs(tabIds, container) {
        for (var _i = 0, tabIds_2 = tabIds; _i < tabIds_2.length; _i++) {
            var tabId = tabIds_2[_i];
            var a = container.querySelector('.tabGroup > ul > li > a[data-tab="' + tabId + '"]:not([hidden])');
            if (a === null) {
                return;
            }
            a.dispatchEvent(new CustomEvent("click", {
                bubbles: true
            }));
        }
    }
    function readTabsQueryStringParam() {
        var qs = parseQueryString();
        var t = qs.tabs;
        if (t === undefined || t === "") {
            return [];
        }
        return t.split(",");
    }
    function updateTabsQueryStringParam(state) {
        var qs = parseQueryString();
        qs.tabs = state.selectedTabs.join();
        var url = location$1.protocol + "//" + location$1.host + location$1.pathname + "?" + toQueryString(qs) + location$1.hash;
        if (location$1.href === url) {
            return;
        }
        history$1.replaceState({}, document$1.title, url);
    }
    function arraysIntersect(a, b) {
        for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
            var itemA = a_1[_i];
            for (var _a = 0, b_1 = b; _a < b_1.length; _a++) {
                var itemB = b_1[_a];
                if (itemA === itemB) {
                    return true;
                }
            }
        }
        return false;
    }
    var themeMap = {
        light: {
            text: "hsla(0, 0%, 0%, 1)",
            "text-subtle": "hsla(0, 0%, 37%, 1)",
            "text-invert": "hsla(0, 0%, 100%, 1)",
            "box-shadow-light": "hsla(0, 0%, 0%, 0.108)",
            "box-shadow-medium": "hsla(0, 0%, 0%, 0.132)",
            "box-shadow-heavy": "hsla(0, 0%, 0%, 0.18)",
            "box-shadow-extra-heavy": "hsla(0, 0%, 0%, 0.22)",
            overlay: "hsla(0, 0%, 57%, 0.5)",
            "overlay-hover": "hsla(0, 0%, 100%, 0.5)",
            "body-background": "hsla(0, 0%, 100%, 0.999)",
            "body-background-medium": "hsla(0, 0%, 98%, 1)",
            "body-background-dark": "hsla(0, 0%, 95%, 1)",
            border: "hsla(0, 0%, 89%, 1)",
            "primary-base": "hsla(206, 100%, 35%, 1)",
            "primary-background": "hsla(205, 100%, 94%, 1)",
            "primary-dark": "hsla(206, 100%, 15%, 1)",
            "primary-hover": "hsla(206, 100%, 28%, 1)",
            "primary-active": "hsla(206, 100%, 20%, 1)",
            "primary-box-shadow": "hsla(206, 100%, 35%, 0.3)",
            "primary-invert": "hsla(0, 0%, 100%, 0.998)",
            "secondary-base": "hsla(0, 0%, 67%, 1)",
            "secondary-background": "hsla(0, 0%, 89%, 0.999)",
            "secondary-dark": "hsla(0, 0%, 18%, 1)",
            "secondary-hover": "hsla(0, 0%, 78%, 1)",
            "secondary-active": "hsla(0, 0%, 78%, 0.999)",
            "secondary-box-shadow": "hsla(0, 0%, 0%, 0.3)",
            "secondary-invert": "hsla(0, 0%, 0%, 0.999)",
            "tertiary-base": "hsla(0, 0%, 27%, 1)",
            "tertiary-background": "hsla(0, 0%, 9%, 1)",
            "tertiary-dark": "hsla(0, 0%, 89%, 0.998)",
            "tertiary-hover": "hsla(0, 0%, 37%, 0.999)",
            "tertiary-active": "hsla(0, 0%, 46%, 1)",
            "tertiary-box-shadow": "hsla(206, 100%, 35%, 0.299)",
            "tertiary-invert": "hsla(0, 0%, 100%, 0.997)",
            "success-base": "hsla(120, 77%, 30%, 1)",
            "success-background": "hsla(120, 77%, 90%, 1)",
            "success-dark": "hsla(120, 77%, 15%, 1)",
            "success-hover": "hsla(120, 77%, 25%, 1)",
            "success-active": "hsla(120, 77%, 20%, 1)",
            "success-box-shadow": "hsla(120, 77%, 30%, 0.3)",
            "success-invert": "hsla(0, 0%, 100%, 0.996)",
            "info-base": "hsla(262, 46%, 58%, 1)",
            "info-background": "hsla(262, 46%, 90%, 1)",
            "info-dark": "hsla(262, 46%, 25%, 1)",
            "info-hover": "hsla(262, 46%, 50%, 1)",
            "info-active": "hsla(262, 46%, 37%, 1)",
            "info-box-shadow": "hsla(262, 46%, 90%, 0.999)",
            "info-invert": "hsla(0, 0%, 100%, 0.995)",
            "warning-base": "hsla(44, 100%, 50%, 1)",
            "warning-background": "hsla(44, 100%, 90%, 1)",
            "warning-dark": "hsla(44, 100%, 20%, 1)",
            "warning-hover": "hsla(44, 100%, 40%, 1)",
            "warning-active": "hsla(44, 100%, 30%, 1)",
            "warning-box-shadow": "hsla(44, 100%, 50%, 0.3)",
            "warning-invert": "hsla(0, 0%, 0%, 0.998)",
            "danger-base": "hsla(16, 99%, 43%, 1)",
            "danger-background": "hsla(16, 99%, 90%, 1)",
            "danger-dark": "hsla(16, 99%, 20%, 1)",
            "danger-hover": "hsla(16, 99%, 35%, 1)",
            "danger-active": "hsla(16, 99%, 25%, 1)",
            "danger-box-shadow": "hsla(16, 99%, 43%, 0.3)",
            "danger-invert": "hsla(0, 0%, 100%, 0.994)"
        },
        night: {
            text: "hsla(0, 0%, 89%, 1)",
            "text-subtle": "hsla(0, 0%, 78%, 1)",
            "text-invert": "hsla(0, 0%, 18%, 1)",
            "box-shadow-light": "hsla(0, 0%, 100%, 0.108)",
            "box-shadow-medium": "hsla(0, 0%, 100%, 0.132)",
            "box-shadow-heavy": "hsla(0, 0%, 100%, 0.18)",
            "box-shadow-extra-heavy": "hsla(0, 0%, 100%, 0.22)",
            overlay: "hsla(0, 0%, 46%, 0.5)",
            "overlay-hover": "hsla(0, 0%, 9%, 0.5)",
            "body-background": "hsla(0, 0%, 9%, 1)",
            "body-background-medium": "hsla(0, 0%, 18%, 0.999)",
            "body-background-dark": "hsla(0, 0%, 14%, 1)",
            border: "hsla(0, 0%, 27%, 1)",
            "primary-base": "hsla(206, 100%, 65%, 1)",
            "primary-background": "hsla(206, 100%, 15%, 1)",
            "primary-dark": "hsla(206, 100%, 82%, 1)",
            "primary-hover": "hsla(206, 100%, 50%, 1)",
            "primary-active": "hsla(206, 100%, 35%, 1)",
            "primary-box-shadow": "hsla(206, 100%, 35%, 0.3)",
            "primary-invert": "hsla(0, 0%, 0%, 1)",
            "secondary-base": "hsla(0, 0%, 46%, 1)",
            "secondary-background": "hsla(0, 0%, 18%, 0.998)",
            "secondary-dark": "hsla(0, 0%, 89%, 0.999)",
            "secondary-hover": "hsla(0, 0%, 57%, 1)",
            "secondary-active": "hsla(0, 0%, 67%, 1)",
            "secondary-box-shadow": "hsla(0, 0%, 0%, 0.7)",
            "secondary-invert": "hsla(0, 0%, 100%, 1)",
            "tertiary-base": "hsla(0, 0%, 27%, 0.999)",
            "tertiary-background": "hsla(0, 0%, 9%, 0.999)",
            "tertiary-dark": "hsla(0, 0%, 89%, 0.998)",
            "tertiary-hover": "hsla(0, 0%, 37%, 1)",
            "tertiary-active": "hsla(0, 0%, 46%, 0.999)",
            "tertiary-box-shadow": "hsla(206, 100%, 35%, 0.299)",
            "tertiary-invert": "hsla(0, 0%, 100%, 0.999)",
            "success-base": "hsla(120, 77%, 30%, 1)",
            "success-background": "hsla(120, 77%, 15%, 1)",
            "success-dark": "hsla(120, 77%, 90%, 1)",
            "success-hover": "hsla(120, 77%, 40%, 1)",
            "success-active": "hsla(120, 77%, 60%, 1)",
            "success-box-shadow": "hsla(120, 77%, 30%, 0.7)",
            "success-invert": "hsla(0, 0%, 100%, 0.998)",
            "info-base": "hsla(262, 46%, 58%, 1)",
            "info-background": "hsla(262, 46%, 25%, 1)",
            "info-dark": "hsla(262, 46%, 90%, 1)",
            "info-hover": "hsla(262, 46%, 65%, 1)",
            "info-active": "hsla(262, 46%, 70%, 1)",
            "info-box-shadow": "hsla(262, 46%, 17%, 0.7)",
            "info-invert": "hsla(0, 0%, 100%, 0.997)",
            "warning-base": "hsla(44, 100%, 50%, 1)",
            "warning-background": "hsla(44, 100%, 20%, 1)",
            "warning-dark": "hsla(44, 100%, 90%, 1)",
            "warning-hover": "hsla(44, 100%, 60%, 1)",
            "warning-active": "hsla(44, 100%, 70%, 1)",
            "warning-box-shadow": "hsla(44, 100%, 50%, 0.7)",
            "warning-invert": "hsla(0, 0%, 0%, 0.999)",
            "danger-base": "hsla(16, 99%, 43%, 1)",
            "danger-background": "hsla(16, 99%, 20%, 1)",
            "danger-dark": "hsla(16, 99%, 90%, 1)",
            "danger-hover": "hsla(16, 99%, 55%, 1)",
            "danger-active": "hsla(16, 99%, 70%, 1)",
            "danger-box-shadow": "hsla(16, 99%, 43%, 0.7)",
            "danger-invert": "hsla(0, 0%, 100%, 0.996)"
        }
    };
    function initThemeFallback() {
        if (supportsCSSProperties()) {
            return;
        }
        var stylesheets = Array.from(document.styleSheets).filter(function(s) {
            return s instanceof CSSStyleSheet && s.href !== null && s.href.indexOf(location.origin) === 0;
        }).map(function(s) {
            return s;
        });
        var inverseThemeMap = createInverseThemeMap(themeMap);
        addEventListener("theme-changed", function(_a) {
            var isDark = _a.detail.isDark;
            return changeTheme(stylesheets, inverseThemeMap, isDark);
        });
        if (document.documentElement.classList.contains("theme_night")) {
            changeTheme(stylesheets, inverseThemeMap, true);
        }
    }
    function supportsCSSProperties() {
        return "CSS" in window && CSS.supports && CSS.supports("--test", "red");
    }
    var hslaRegex = /hsla\(\s*(\d+)\s*,\s*(\d+)%?\s*,\s*(\d+)%?\s*,\s*0?(\.?\d+)\s*\)/;
    var globalHslaRegex = new RegExp(hslaRegex.source, "g");
    function changeTheme(stylesheets, inverseThemeMap, isDark) {
        var theme = isDark ? "night" : "light";
        var inverseTheme = isDark ? "light" : "night";
        for (var _i = 0, stylesheets_1 = stylesheets; _i < stylesheets_1.length; _i++) {
            var stylesheet = stylesheets_1[_i];
            for (var i = 0; i < stylesheet.cssRules.length; i++) {
                var rule = stylesheet.cssRules.item(i);
                if (rule.type !== CSSRule.STYLE_RULE) {
                    continue;
                }
                var cssText = rule.style.cssText.replace(globalHslaRegex, function(_, hue, saturation, lightness, alpha) {
                    var hsla = "hsla(" + hue + ", " + lightness + "%, " + saturation + "%, " + alpha + ")";
                    var name = inverseThemeMap[inverseTheme][hsla];
                    return themeMap[theme][name];
                });
                if (cssText === rule.style.cssText) {
                    continue;
                }
                rule.style.cssText = cssText;
            }
        }
    }
    function createInverseThemeMap(themeMap$$1) {
        var lookup = {
            light: {},
            night: {}
        };
        for (var _i = 0, _a = [ "light", "night" ]; _i < _a.length; _i++) {
            var theme = _a[_i];
            for (var _b = 0, _c = Object.keys(themeMap$$1[theme]); _b < _c.length; _b++) {
                var name = _c[_b];
                var hsla = themeMap$$1[theme][name];
                var _d = hsla.match(hslaRegex), hue = _d[1], saturation = _d[2], lightness = _d[3], alpha = _d[4];
                lookup[theme]["hsla(" + hue + ", " + lightness + "%, " + saturation + "%, " + alpha + ")"] = name;
            }
        }
        return lookup;
    }
    var nightClassName = "theme_night";
    var html = document.documentElement.classList;
    var pageType = getMeta("page_type");
    function setTheme(isDark) {
        if (isDark) {
            localStorage$1.setItem("theme", nightClassName);
            html.add(nightClassName);
        } else {
            html.remove(nightClassName);
            localStorage$1.removeItem("theme");
        }
    }
    function toggleTheme() {
        var isDark = !html.contains(nightClassName);
        setTheme(isDark);
        document.documentElement.dispatchEvent(new CustomEvent("theme-changed", {
            bubbles: true,
            detail: {
                isDark: isDark
            }
        }));
    }
    function syncThemeToggle(icon, text) {
        var isDark = html.contains(nightClassName);
        icon.classList.remove("docon-sun");
        icon.classList.remove("docon-clear-night");
        icon.classList.add(isDark ? "docon-sun" : "docon-clear-night");
        text.textContent = isDark ? loc_light : loc_dark;
    }
    function initThemeToggle() {
        var button = document.querySelector(".toggle-theme");
        if (!button) {
            return;
        }
        var icon = button.querySelector(".docon");
        var text = button.querySelector(".action-item-text");
        syncThemeToggle(icon, text);
        button.onclick = function() {
            toggleTheme();
            syncThemeToggle(icon, text);
        };
    }
    function initTheme() {
        if (pageType != "learn") {
            var isDark = localStorage$1.getItem("theme") === nightClassName;
            setTheme(isDark);
            contentLoaded.then(initThemeToggle);
        }
    }
    function hasClicktale() {
        var clicktaleWhiteList = {
            ApiBrowserPage: true,
            Home: true,
            Hub: true,
            HubPage: true,
            LandingData: true,
            LandingPage: true
        };
        return msDocs.data.pageTemplate in clicktaleWhiteList || getMeta("clicktale") === "true";
    }
    if (hasClicktale()) {
        Promise.all([ cookieConsent, contentLoaded ]).then(function() {
            return loadLibrary("https://cdnssl.clicktale.net/www32/ptc/78a0ae88-af64-436a-9729-c30d90de7d5e.js");
        });
    }
    if (getMeta("twitterWidgets") === "true") {
        Promise.all([ cookieConsent, contentLoaded ]).then(function() {
            return loadLibrary("https://platform.twitter.com/widgets.js");
        });
    }
    function getParam(name, type) {
        var frag = type === "hash" ? window$1.location.hash : window$1.location.search;
        if (frag.length > 1) {
            frag = frag.substring(1);
            var cmpstring = name + "=";
            var cmplen = cmpstring.length;
            var temp = frag.split("&");
            for (var i = 0; i < temp.length; i++) {
                if (temp[i].substr(0, cmplen) == cmpstring) {
                    return temp[i].substr(cmplen);
                }
            }
        }
        return undefined;
    }
    function getPdfUrl(pdfName, pdfFullPath) {
        if (pdfFullPath === void 0) {
            pdfFullPath = null;
        }
        var urlTemplate = pdfName !== null ? getMeta("pdf_url_template") : pdfFullPath;
        if (urlTemplate !== undefined) {
            var branchName = cookies.get("CONTENT_BRANCH");
            if (branchName === undefined) {
                branchName = "live";
            }
            var params = parseQueryString();
            var viewName = params.view !== undefined ? params.view : null;
            if (pdfName !== null) {
                var url = urlTemplate.replace(/\{branchName\}/, branchName);
                url = url.replace(/\{viewName\}/, viewName);
                url = url.replace(/\{pdfName\}/, pdfName);
                return url;
            } else {
                if (viewName !== null) {
                    return urlTemplate + "?view=" + viewName + "&branch=" + branchName;
                } else {
                    return urlTemplate + "?branch=" + branchName;
                }
            }
        }
        return null;
    }
    function renderPdfLink(pdfName, pdfFullPath) {
        if (pdfFullPath === void 0) {
            pdfFullPath = null;
        }
        var url = getPdfUrl(pdfName, pdfFullPath);
        if (url === null) {
            return;
        }
        var holder = document$1.querySelector(".pdf-download-holder");
        if (!holder) {
            return;
        }
        holder.insertAdjacentHTML("beforeend", '\n\t\t<a href="' + url + '"\n\t\t   class="pdf-download-link has-inner-focus"\n\t\t   data-bi-name="downloadPdf"\n\t\t>\n\t\t\t<span class="icon">\n\t\t\t\t<span class="docon docon-arrow-down" aria-hidden="true"></span>\n\t\t\t</span>\n\t\t\t<span class="pdf-download-text">' + loc_downloadPdf + "</span>\n\t\t</a>\n\t");
    }
    var pageTemplate = msDocs.data.pageTemplate;
    var pageType$1 = getMeta("page_type");
    var oldPageType = getMeta("pagetype");
    var interactiveType$1 = getMeta("interactive_type");
    var useMonikerPicker = pageMonikers.any && msDocs.data.pageTemplate !== "HubPage" || pageTemplate === "Conceptual" && oldPageType === "Reference" && platformId !== null || pageTemplate === "Conceptual" && pageType$1 === "powershell" && platformId !== null || pageTemplate === "Conceptual" && oldPageType === "Conceptual" && platformId === "powershell" || pageTemplate === "Conceptual" && pageType$1 === "conceptual" && platformId === "powershell" || (pageTemplate === "Conceptual" && pageType$1 === "conceptual" || pageTemplate === "Reference" && pageType$1 === "python") && platformId === "python" || (pageTemplate === "Conceptual" && pageType$1 === "conceptual" || pageTemplate === "Reference" && pageType$1 === "cli") && interactiveType$1 === "azurecli";
    var useApiSearch = pageTemplate === "Reference" && platformId !== null || pageTemplate === "Conceptual" && oldPageType === "Reference" && platformId !== null || pageTemplate === "Conceptual" && pageType$1 === "powershell" && platformId !== null;
    function setupToc() {
        if (!useMonikerPicker && !useApiSearch) {
            return;
        }
        var filterHolder = document.querySelector(".filterHolder");
        var h1 = document.querySelector("h1");
        if (filterHolder === null || h1 === null) {
            return;
        }
        if (useMonikerPicker) {
            handleMonikerChange();
            var picker = createMonikerPicker(false);
            filterHolder.appendChild(picker);
            var picker2 = createMonikerPicker(false);
            h1.insertAdjacentElement("beforebegin", picker2);
        }
        if (useApiSearch && useMonikerPicker) {
            initApiSearch();
            var renderHeading = false;
            var searchField = createSearchField();
            filterHolder.appendChild(searchField);
            var toc = document.querySelector(".toc");
            var resultsContainer = document.createElement("div");
            resultsContainer.classList.add("api-search-results-container");
            toc.appendChild(resultsContainer);
            addResultsContainer(resultsContainer, renderHeading);
            var position = document.querySelector(".content .moniker-picker");
            var searchField2 = createSearchField();
            position.insertAdjacentElement("afterend", searchField2);
            var resultsContainer2 = document.createElement("div");
            resultsContainer2.classList.add("api-search-results-container");
            searchField2.insertAdjacentElement("afterend", resultsContainer2);
            addResultsContainer(resultsContainer2, renderHeading);
        }
    }
    var breadCrumbsResolve;
    var breadcrumbsPromise = new Promise(function(resolve) {
        breadCrumbsResolve = resolve;
    });
    function createContextUrl(url) {
        var param = (getParam("context") || "").split("/").slice(0, -1).join("/");
        if (url) {
            return "/" + [ getLocaleFromPath(document$1.location.pathname), param, url ].join("/");
        }
        return undefined;
    }
    function createToc() {
        var urlTocQueryName = "toc";
        var urlTocMetaName = "toc_rel";
        var urlBcQueryName = "bc";
        var urlBcMetaName = "breadcrumb_path";
        var selectedClass = "selected";
        var selectedHolderClass = "selectedHolder";
        var rotateClass = "rotate";
        var noSubsClass = "noSubs";
        var noSibsClass = "noSibs";
        var filterClassName = "tocFilter";
        var emptyFilterClassName = "emptyFilter";
        var emptyFilterMessageClassName = "emptyFilterMessage";
        var hideFocusClass = "hideFocus";
        var groupClass = "group";
        var tocHolderSelector = ".toc";
        var filterHolderSelector = ".filterHolder";
        var emptyFilterMessageSelector = ".emptyFilterMessage";
        var breadcrumbClass = "breadcrumbs";
        var eventNamespace = "msDocs";
        var isTouchEvent = false;
        var debounceIntervalInMilliseconds = 500;
        var timeout = 1e4;
        var relativeCanonicalUrlNoQuery = "";
        var relativeCanonicalUrlNoQueryWithHash;
        var relativeCanonicalUrlUniformIndexWithHash;
        var relativeCanonicalUrlUniformIndex = "";
        var hasCanonicalHash = false;
        var hasFullTocMatch = false;
        var tocUrl = "";
        var tocFolder = "";
        var bcUrl = "";
        var bcFolder = "";
        var locale = "";
        var locationFolder = "";
        var $savedToc;
        var tocJson = [];
        var nodes_to_expand = [];
        var hasNodesToExpand = false;
        var tocUrlQueue = [];
        var bcUrlQueue = [];
        var pageMetadata = {};
        var tocContextUrl = createContextUrl(msDocs.data.context.tocRel);
        var tocQueryUrl = getParam(urlTocQueryName);
        var tocMetaUrl = getMeta(urlTocMetaName);
        var hasMoniker = false;
        var view = getParam("view");
        var monikerParams = "";
        if (view && view.length) {
            hasMoniker = true;
            view = view.toLowerCase();
            view = view.replace(/[^\w.|-]+/g, "");
            monikerParams = "view=" + view;
        }
        var bcContextUrl = createContextUrl(msDocs.data.context.breadcrumbPath);
        var bcQueryUrl = getParam(urlBcQueryName);
        if (bcQueryUrl) {
            bcQueryUrl = decodeURIComponent(bcQueryUrl);
        }
        var bcMetaUrl = getMeta(urlBcMetaName);
        var tocBestMatch = [];
        var tocFinished = $$1.Deferred();
        var bcFinished = $$1.Deferred();
        var normalizeToc = function(toc, extractMetadata) {
            if (extractMetadata === void 0) {
                extractMetadata = false;
            }
            if (extractMetadata) {
                if (toc.metadata) {
                    pageMetadata = toc.metadata;
                } else if (Array.isArray(toc) && toc.length) {
                    var toc0 = toc[0];
                    pageMetadata.pdf_absolute_path = toc0.pdf_absolute_path;
                    pageMetadata.pdf_name = toc0.pdf_name;
                    pageMetadata.universal_ref_toc = toc0.universal_ref_toc;
                    pageMetadata.universal_conceptual_toc = toc0.universal_conceptual_toc;
                } else if (Array.isArray(toc.items) && toc.items.length) {
                    var toc0 = toc.items[0];
                    pageMetadata.pdf_absolute_path = toc0.pdf_absolute_path;
                    pageMetadata.pdf_name = toc0.pdf_name;
                    pageMetadata.universal_ref_toc = toc0.universal_ref_toc;
                    pageMetadata.universal_conceptual_toc = toc0.universal_conceptual_toc;
                }
            }
            if (Array.isArray(toc)) {
                return toc;
            }
            if (Array.isArray(toc.items)) {
                return toc.items;
            }
            return [];
        };
        var resolveRelativePath = function(path, folder) {
            if (!path || !path.length) {
                return path;
            }
            if (typeof folder !== "string") {
                folder = locationFolder;
            }
            var firstChar = path.charAt(0);
            if (firstChar === "/") {
                return checkLocaleSupported(path.substr(1).split("/")[0]) ? path : "/" + locale + path;
            }
            if (path.substr(0, 7) === "http://" || path.substr(0, 8) === "https://") {
                return path;
            }
            if (firstChar !== ".") {
                return "/" + locale + folder + "/" + path;
            }
            if (path.substr(0, 3) === "../") {
                return resolveRelativePath(path.substr(3), getFolder(folder));
            }
            if (path.substr(0, 2) === "./") {
                return "/" + locale + folder + "/" + path.substr(2);
            }
            return path;
        };
        var removeQueryString = function(path) {
            if (path && path.length) {
                var index = path.indexOf("?");
                if (index > 0) {
                    var hashIndex = path.indexOf("#");
                    if (hashIndex === -1) {
                        path = path.substring(0, index);
                    } else {
                        path = path.substring(0, index) + path.substring(hashIndex);
                    }
                }
            }
            return path;
        };
        var getUniformIndex = function(path) {
            if (path && path.length) {
                path = removeQueryString(path);
                if (path.charAt(path.length - 1) == "/" || path.indexOf("/#") > 0) {
                    return path;
                }
                var whackIndex = path.lastIndexOf("/");
                var indexIndex = path.indexOf("index", whackIndex);
                if (indexIndex > 0) {
                    var hashIndex = path.indexOf("#");
                    if (hashIndex === -1) {
                        if (indexIndex == path.length - 5) {
                            return path.substring(0, indexIndex);
                        }
                        var dotIndex = path.indexOf(".", whackIndex);
                        if (dotIndex > 0) {
                            path = path.substring(0, dotIndex);
                            if (path.substring(path.length - 6) == "/index") {
                                return path.substring(0, path.length - 5);
                            }
                        }
                    } else {
                        var hash = path.substring(hashIndex);
                        path = path.substring(0, hashIndex);
                        if (indexIndex == path.length - 5) {
                            return path.substring(0, indexIndex) + hash;
                        }
                        var dotIndex = path.indexOf(".", whackIndex);
                        if (dotIndex > 0) {
                            path = path.substring(0, dotIndex);
                            if (path.substring(path.length - 6) == "/index") {
                                return path.substring(0, path.length - 5) + hash;
                            }
                        }
                    }
                }
            }
            return "";
        };
        var getRelativeCanonicalUrl = function(removeTheQueryString) {
            var canonicalUrl = $$1('link[rel="canonical"]').attr("href");
            if (canonicalUrl && canonicalUrl.length) {
                if (canonicalUrl.substr(0, 7) === "http://" || canonicalUrl.substr(0, 8) === "https://") {
                    canonicalUrl = canonicalUrl.substring(canonicalUrl.indexOf("//") + 2);
                    canonicalUrl = canonicalUrl.substring(canonicalUrl.indexOf("/"));
                }
            } else {
                canonicalUrl = document$1.location.pathname;
            }
            canonicalUrl = removeLocaleFromPath(canonicalUrl);
            if (removeTheQueryString) {
                canonicalUrl = removeQueryString(canonicalUrl);
            }
            return canonicalUrl;
        };
        var getFolder = function(path) {
            return path.substring(0, path.lastIndexOf("/"));
        };
        var thisIsMe = function(hrefNoQuery, hrefUniformIndex) {
            if (hrefNoQuery && hrefNoQuery.length) {
                if (hasCanonicalHash) {
                    if (relativeCanonicalUrlNoQueryWithHash === hrefNoQuery) {
                        return true;
                    }
                } else {
                    if (relativeCanonicalUrlNoQuery === hrefNoQuery) {
                        return true;
                    }
                }
                if (relativeCanonicalUrlUniformIndex && hrefUniformIndex.length > 0) {
                    if (hasCanonicalHash) {
                        if (relativeCanonicalUrlUniformIndexWithHash === hrefUniformIndex) {
                            return true;
                        }
                    } else {
                        if (relativeCanonicalUrlUniformIndex === hrefUniformIndex) {
                            return true;
                        }
                    }
                }
            }
            return false;
        };
        var thisIsAlmostMe = function(hrefNoQuery, hrefUniformIndex) {
            if (hasCanonicalHash) {
                if (hrefNoQuery && hrefNoQuery.length) {
                    if (relativeCanonicalUrlNoQuery === hrefNoQuery) {
                        return true;
                    }
                    if (relativeCanonicalUrlUniformIndex && hrefUniformIndex.length > 0) {
                        if (relativeCanonicalUrlUniformIndex === hrefUniformIndex) {
                            return true;
                        }
                    }
                }
            }
            return false;
        };
        msDocs.functions.toggleAriaExpanded = function(el) {
            var $el = $$1(el);
            var tempHeight;
            var $ulKids = $el.children("ul");
            if ($el.attr("aria-expanded") == "true") {
                $el.addClass(rotateClass).children("ul").each(function(_, el) {
                    var $tempEl = $$1(el);
                    $tempEl.css({
                        height: $tempEl.height()
                    }).animate({
                        height: 0
                    }, 200, function() {
                        $$1(this).css("height", "");
                        $el.attr("aria-expanded", "false").removeClass(rotateClass);
                    });
                });
                $ulKids.find("li").css("display", "none");
            } else {
                $el.attr("aria-expanded", "true");
                $ulKids.find("li").css("display", "");
                $ulKids.each(function(_, el) {
                    var $tempEl = $$1(el);
                    tempHeight = $tempEl.height();
                    $tempEl.css({
                        height: "0"
                    }).animate({
                        height: tempHeight
                    }, 200, function() {
                        $$1(this).css("height", "");
                    });
                });
            }
        };
        msDocs.functions.stopSomePropagation = function(e, direction) {
            switch (direction) {
              case "top":
                if (isTouchEvent) {
                    if (e.offsetY > 20) {
                        e.stopPropagation();
                    }
                } else {
                    e.stopPropagation();
                }
                break;

              case "left":
                if (isTouchEvent) {
                    if (e.offsetX > 15) {
                        e.stopPropagation();
                    }
                } else {
                    e.stopPropagation();
                }
                break;
            }
        };
        var drawToc = function(json) {
            var createTocNode = function(node, ul, nodeMap) {
                var aNode;
                var href;
                var pieces;
                var aCleanTitle;
                var displayName;
                nodeMap.push(-1);
                ul.setAttribute("role", "tree");
                ul.setAttribute("onclick", 'msDocs.functions.stopSomePropagation(event, "top")');
                for (var i = 0; i < node.length; i++) {
                    aNode = node[i];
                    aCleanTitle = cleanText(aNode.toc_title);
                    if (aNode.displayName && aNode.displayName.length) {
                        displayName = cleanText(aNode.displayName);
                    } else {
                        displayName = "";
                    }
                    nodeMap[nodeMap.length - 1] = i;
                    var nextNode = document$1.createElement("li");
                    nextNode.setAttribute("role", "treeitem");
                    var titleHolder = void 0;
                    if (aNode.href && aNode.href.length) {
                        href = aNode.href;
                        titleHolder = document$1.createElement("a");
                        if (i == 0) {
                            titleHolder.setAttribute("onclick", 'msDocs.functions.stopSomePropagation(event, "left")');
                        }
                        titleHolder.setAttribute("tabindex", "0");
                        if (aNode.thisIsMe || !hasFullTocMatch && aNode.thisIsAlmostMe) {
                            aNode.expanded = true;
                            titleHolder.classList.add(selectedClass);
                            titleHolder.setAttribute("aria-current", "page");
                            titleHolder.setAttribute("data-showme", "true");
                            if (!nodeMap.length || tocBestMatch.length < nodeMap.length) {
                                tocBestMatch = nodeMap.slice(0);
                            }
                        }
                        if (aNode.isInternalHref && (hasMoniker && !aNode.hasViewParam || aNode.maintainContext)) {
                            pieces = href.split("#");
                            titleHolder.setAttribute("href", pieces[0] + (pieces[0].indexOf("?") > -1 ? "&" : "?") + (aNode.maintainContext ? maintainContextParams + (hasMoniker && !aNode.hasViewParam ? "&" : "") : "") + (hasMoniker && !aNode.hasViewParam ? monikerParams : "") + (pieces[1] ? "#" + pieces[1] : ""));
                        } else {
                            titleHolder.setAttribute("href", href);
                        }
                    } else {
                        titleHolder = document$1.createElement("span");
                        titleHolder.setAttribute("aria-hidden", "true");
                    }
                    if (aNode.expanded) {
                        titleHolder.setAttribute("data-showme", "true");
                    }
                    titleHolder.setAttribute("data-text", aCleanTitle.toLowerCase() + " " + displayName.toLowerCase());
                    titleHolder.innerHTML = breakText(aCleanTitle);
                    nextNode.appendChild(titleHolder);
                    if (aNode.newGroup) {
                        nextNode.classList.add(groupClass);
                    }
                    if (aNode.monikers !== undefined && aNode.monikers.length) {
                        nextNode.setAttribute("data-moniker", aNode.monikers.join(" "));
                    }
                    if (aNode.children && aNode.children.length) {
                        nextNode.setAttribute("aria-expanded", "false");
                        nextNode.setAttribute("aria-label", aCleanTitle.toLowerCase() + " " + displayName.toLowerCase());
                        nextNode.setAttribute("tabindex", "0");
                        nextNode.setAttribute("role", "group");
                        nextNode.setAttribute("onclick", "event.stopPropagation();msDocs.functions.toggleAriaExpanded(this)");
                        var hasGrandKids = false;
                        for (var j = 0; j < aNode.children.length; j++) {
                            if (aNode.children[j].children && aNode.children[j].children.length) {
                                hasGrandKids = true;
                                break;
                            }
                        }
                        if (!hasGrandKids) {
                            nextNode.classList.add(noSubsClass);
                        }
                        var nextUL = document$1.createElement("ul");
                        createTocNode(aNode.children, nextUL, nodeMap.slice(0));
                        nextNode.appendChild(nextUL);
                    }
                    ul.appendChild(nextNode);
                }
            };
            var createFilter = function() {
                var $filter = $$1("<form>").addClass(filterClassName).attr("aria-label", loc_landmarkTocFilterFormLabel).submit(function(e) {
                    e.preventDefault();
                }).append($$1("<input>").addClass("input").addClass("is-size-7").attr("placeholder", loc_filterByTitle).attr("aria-label", loc_filter).attr("data-bi-name", "toc-filter").attr("id", "toc-filter").attr("type", "search").attr("aria-controls", "filterResults").keypress(function(e) {
                    if (e.which === 13) {
                        e.preventDefault();
                        return;
                    }
                }).keyup(function() {
                    filterDebounce(this);
                })).append($$1("<a>").attr("href", "#").attr("title", loc_clearfilter).addClass("clearInput").html('<span class="visually-hidden">' + loc_clearfilter + "</span>").on("click", function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    var ipt = $$1("." + filterClassName + " input[type=search]");
                    ipt.val("");
                    filterToc(ipt);
                }));
                var $noResults = $$1("<div>").addClass(emptyFilterMessageClassName).html(loc_noResults);
                return [ $filter, $noResults ];
            };
            var maintainContextParams = urlTocQueryName + "=" + encodeURIComponent(resolveRelativePath(tocUrl)) + "&" + urlBcQueryName + "=" + encodeURIComponent(resolveRelativePath(bcUrl));
            var toc = document$1.createElement("ul");
            createTocNode(json, toc, []);
            var $toc = $$1(toc);
            var selectedPath = JSON.parse(localStorage$1.getItem("toc-selected") || "{}")[tocUrl];
            if (selectedPath && Array.isArray(selectedPath)) {
                var selectedNodes = toc.querySelectorAll(".selected");
                var selected_1 = toc;
                for (var i = 0; i < selectedPath.length; i++) {
                    if (!selected_1) {
                        break;
                    }
                    var childIndex = selectedPath[i];
                    selected_1 = selected_1.children[childIndex];
                }
                if (selected_1 && selected_1.firstElementChild && selected_1.firstElementChild.classList.contains(selectedClass)) {
                    Array.from(selectedNodes).forEach(function(node) {
                        if (node.parentElement === selected_1) {
                            return;
                        }
                        node.classList.remove(selectedClass);
                        node.removeAttribute("data-showme");
                    });
                }
            }
            var $selectedParent = $toc.find("." + selectedClass).parent().addClass(selectedHolderClass);
            $toc.find("[data-showme]").parents('li[aria-expanded="false"]').attr("aria-expanded", "true");
            $toc.on("touchstart pointerdown MSPointerDown", function(e) {
                if (e.type == "touchstart" || (e.type == "pointerdown" || e.type == "MSPointerDown") && e.originalEvent.pointerType == "touch") {
                    isTouchEvent = true;
                    setTimeout(function() {
                        isTouchEvent = false;
                    }, 700);
                }
            }).on("mousedown", function() {
                $$1(this).addClass(hideFocusClass);
            }).on("mouseup", function(e) {
                $$1(e.target).blur().parent().blur();
                $$1(this).removeClass(hideFocusClass);
                saveSelectedPathToLocalStorage(e.target.parentElement, toc);
            }).on("keydown", "a", function(e) {
                if (e.which === 13) {
                    document$1.location.href = $$1(e.target).attr("href");
                    e.stopPropagation();
                    saveSelectedPathToLocalStorage(e.target.parentElement, toc);
                    return false;
                }
                return undefined;
            }).on("keydown", "li", function(e) {
                if (e.which === 13 && !$$1(this).hasClass(noSibsClass)) {
                    e.stopPropagation();
                    msDocs.functions.toggleAriaExpanded($$1(this));
                }
            });
            if (json.length == 1) {
                $toc.addClass(noSibsClass);
                $toc.children("li").attr("aria-expanded", "true").off("click." + eventNamespace).removeAttr("tabindex");
            }
            $$1(function() {
                var $tocHolder = $$1(tocHolderSelector);
                $tocHolder.attr("role", "application")[0].appendChild(toc);
                $tocHolder.attr("aria-label", loc_landmarkToc);
                $tocHolder.attr("id", "filterResults");
                try {
                    var scrollAmount_1 = $selectedParent.offset().top - $tocHolder.offset().top - 44;
                    $tocHolder.scrollTop(scrollAmount_1);
                    setTimeout(function() {
                        $tocHolder.scrollTop(scrollAmount_1);
                    }, 1);
                } catch (e) {}
                if (!useApiSearch) {
                    $$1(filterHolderSelector).append(createFilter());
                }
                tocFinished.resolve();
            });
        };
        var debounceTimeout = 0;
        var filterToc = function(inputField) {
            var val = inputField.value;
            var $tocHolder = $$1(tocHolderSelector);
            var $filterHolder = $$1(filterHolderSelector);
            var $emptyHolder = $$1(emptyFilterMessageSelector);
            var rawScope = getMeta("scope");
            var scopes = rawScope ? rawScope.split(",").map(function(s) {
                return s.trim();
            }).filter(function(s) {
                return s.length;
            }) : "";
            var scope = scopes.length !== 0 ? escape$1(scopes[scopes.length - 1]) : "";
            var _a = msDocs.data, brand = _a.brand, userLocale = _a.userLocale;
            $filterHolder.removeClass(emptyFilterClassName);
            $emptyHolder.attr("role", "none");
            if (val && val.length) {
                $$1("." + filterClassName).addClass("clearFilter");
                var resultIsEmpty_1 = true;
                var $currentToc = $tocHolder.children('ul[role="tree"]').detach();
                if (!$savedToc) {
                    $savedToc = $currentToc.clone(true, true);
                }
                $currentToc.find("li").css("display", "none").filter("[aria-expanded]").attr("aria-expanded", "false");
                var $this_1;
                var lowerCaseVal_1 = val.toLowerCase();
                $currentToc.find("a, span").each(function() {
                    $this_1 = $$1(this);
                    if ($this_1.attr("data-text").indexOf(lowerCaseVal_1) !== -1) {
                        resultIsEmpty_1 = false;
                        $this_1.parents("li").css("display", "").filter("[aria-expanded]").not($this_1.parent()).attr("aria-expanded", "true");
                    }
                });
                $tocHolder.append($currentToc);
                if (resultIsEmpty_1) {
                    var url = "/search/index?search=" + encodeURIComponent(val) + "&scope=" + encodeURIComponent(scope);
                    if (brand === "mooncake") {
                        url = "https://www.azure.cn/zh-cn/searchresults/?source=3&query=" + encodeURIComponent(val);
                    } else if (brand === "azure") {
                        url = "https://azure.microsoft.com/" + (userLocale !== undefined ? userLocale : "") + "/search/?q=" + encodeURIComponent(val);
                    }
                    $filterHolder.addClass(emptyFilterClassName);
                    $emptyHolder.attr("role", "alert");
                    $emptyHolder.html(loc_noResultsToc);
                    var termTextNode = $emptyHolder[0].firstChild;
                    termTextNode.textContent = termTextNode.textContent.replace("{term}", val);
                    var anchor = $emptyHolder[0].lastElementChild;
                    anchor.href = url;
                    anchor.textContent = anchor.textContent.replace("{filter-text}", val).replace("{scope}", scope);
                }
            } else if ($savedToc) {
                $$1("." + filterClassName).removeClass("clearFilter");
                $tocHolder.children('ul[role="tree"]').replaceWith($savedToc);
                $savedToc = null;
            }
        };
        var filterDebounce = function(input) {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(function() {
                filterToc(input);
                var val = input.value;
                if (val.length) {
                    jsllReady.then(function(awa) {
                        awa.ct.capturePageAction(input, {
                            actionType: awa.actionType.OTHER,
                            behavior: awa.behavior.SEARCH,
                            content: {
                                event: "toc-filter",
                                value: val
                            }
                        });
                    });
                }
            }, debounceIntervalInMilliseconds);
        };
        var getDataFromToc = function(nodeName) {
            return pageMetadata[nodeName] || null;
        };
        var gatherAllTocFiles = function(pageTocJson, pageTocFolder) {
            var uniRefTocUrl = getDataFromToc("universal_ref_toc");
            var uniConTocUrl = getDataFromToc("universal_conceptual_toc");
            var moniker = getMoniker();
            var addMonikerToUrl = function(aUrl, moniker) {
                if (aUrl && aUrl.length) {
                    var newMonikerTerm = "view=" + moniker;
                    var qMark = aUrl.indexOf("?");
                    var qMarkPlus1 = qMark + 1;
                    var terms = [];
                    var swapped = false;
                    if (qMark > 0 && qMarkPlus1 != aUrl.length) {
                        terms = aUrl.substring(qMarkPlus1).split("&");
                        for (var i = 0; i < terms.length; i++) {
                            if (terms[i].indexOf("view=") === 0) {
                                terms[i] = newMonikerTerm;
                                swapped = true;
                            }
                        }
                    } else {
                        if (qMarkPlus1 != aUrl.length) {
                            aUrl = aUrl + "?";
                        }
                        qMarkPlus1 = aUrl.length;
                    }
                    if (!swapped) {
                        terms.push(newMonikerTerm);
                    }
                    aUrl = aUrl.substring(0, qMarkPlus1) + terms.join("&");
                }
                return aUrl;
            };
            var updateAllHrefs = function(json, folder, checkThisIsMe) {
                var hrefLowerCase = "";
                var hrefNoQuery = "";
                var hrefUniformIndex = "";
                for (var i = 0; i < json.length; i++) {
                    if (json[i].href) {
                        json[i].href = resolveRelativePath(json[i].href, folder);
                        hrefLowerCase = json[i].href.toLowerCase();
                        if (checkThisIsMe && json[i].href.length) {
                            hrefNoQuery = removeQueryString(removeLocaleFromPath(hrefLowerCase));
                            if (relativeCanonicalUrlUniformIndex) {
                                hrefUniformIndex = getUniformIndex(hrefNoQuery);
                            } else {
                                hrefUniformIndex = "";
                            }
                            if (thisIsMe(hrefNoQuery, hrefUniformIndex)) {
                                json[i].thisIsMe = true;
                                hasFullTocMatch = true;
                            }
                            if (hasCanonicalHash && !hasFullTocMatch) {
                                if (thisIsAlmostMe(hrefNoQuery, hrefUniformIndex)) {
                                    json[i].thisIsAlmostMe = true;
                                }
                            }
                            if (hrefLowerCase.indexOf("view=") > 0) {
                                json[i].hasViewParam = true;
                            }
                        }
                        json[i].isInternalHref = isInternalHref(json[i].href);
                        if (hasNodesToExpand) {
                            for (var j = 0; j < nodes_to_expand.length; j++) {
                                if (nodes_to_expand[j] === hrefLowerCase) {
                                    json[i].expanded = true;
                                }
                            }
                        }
                    }
                    if (json[i].children) {
                        updateAllHrefs(json[i].children, folder, checkThisIsMe);
                    }
                }
            };
            if (uniRefTocUrl || uniConTocUrl) {
                var uniRefTocFinished_1 = $$1.Deferred();
                var uniConTocFinished_1 = $$1.Deferred();
                if (moniker) {
                    uniRefTocUrl = addMonikerToUrl(uniRefTocUrl, moniker);
                    uniConTocUrl = addMonikerToUrl(uniConTocUrl, moniker);
                }
                uniRefTocUrl = resolveRelativePath(uniRefTocUrl, tocFolder);
                uniConTocUrl = resolveRelativePath(uniConTocUrl, tocFolder);
                if (uniRefTocUrl) {
                    $$1.ajax({
                        url: uniRefTocUrl,
                        dataType: "json",
                        timeout: timeout
                    }).done(function(_, __, jqXHR) {
                        var uniRefTocFolder = getFolder(removeLocaleFromPath(resolveRelativePath(uniRefTocUrl)));
                        var uniRefTocJson = normalizeToc(jqXHR.responseJSON);
                        updateAllHrefs(uniRefTocJson, uniRefTocFolder);
                        uniRefTocFinished_1.resolve(uniRefTocJson);
                    }).fail(function() {
                        uniRefTocFinished_1.resolve(null);
                    });
                } else {
                    uniRefTocFinished_1.resolve(null);
                }
                if (uniConTocUrl) {
                    $$1.ajax({
                        url: uniConTocUrl,
                        dataType: "json",
                        timeout: timeout
                    }).done(function(_, __, jqXHR) {
                        var uniConTocFolder = getFolder(removeLocaleFromPath(resolveRelativePath(uniConTocUrl)));
                        var uniConTocJson = normalizeToc(jqXHR.responseJSON);
                        updateAllHrefs(uniConTocJson, uniConTocFolder);
                        uniConTocFinished_1.resolve(uniConTocJson);
                    }).fail(function() {
                        uniConTocFinished_1.resolve(null);
                    });
                } else {
                    uniConTocFinished_1.resolve(null);
                }
                updateAllHrefs(pageTocJson, pageTocFolder, true);
                $$1.when(uniRefTocFinished_1, uniConTocFinished_1).then(function(uniRefTocJson, uniConTocJson) {
                    var combinedToc;
                    var matchAndMerge = function(hrefToMatch, json, childJson) {
                        for (var i = 0; i < json.length; i++) {
                            if (json[i].href === hrefToMatch) {
                                json[i] = childJson;
                                break;
                            }
                            if (json[i].children) {
                                matchAndMerge(hrefToMatch, json[i].children, childJson);
                            }
                        }
                    };
                    if (uniRefTocJson && uniConTocJson) {
                        uniRefTocJson[0].newGroup = true;
                        var hrefToMatch = pageTocJson[0].href;
                        matchAndMerge(hrefToMatch, uniRefTocJson, pageTocJson[0]);
                        combinedToc = uniConTocJson.concat(uniRefTocJson);
                    } else if (uniConTocJson) {
                        pageTocJson[0].newGroup = true;
                        combinedToc = uniConTocJson.concat(pageTocJson);
                    } else if (uniRefTocJson) {
                        uniRefTocJson[0].newGroup = true;
                        combinedToc = pageTocJson.concat(uniRefTocJson);
                    } else {
                        combinedToc = pageTocJson;
                    }
                    tocJson = combinedToc;
                    drawToc(combinedToc);
                });
            } else {
                updateAllHrefs(pageTocJson, pageTocFolder, true);
                tocJson = pageTocJson;
                drawToc(pageTocJson);
            }
        };
        var getTocData = function(url, fallbackUrls) {
            $$1.ajax({
                url: url,
                dataType: "json",
                timeout: timeout
            }).done(function(data, _, jqXHR) {
                tocUrl = resolveRelativePath(url);
                tocFolder = getFolder(removeLocaleFromPath(tocUrl));
                tocJson = normalizeToc(jqXHR.responseJSON, true);
                if (data.metadata && "experiment_id" in data.metadata && "experimental" in data.metadata) {
                    jsllReady.then(function(awa) {
                        return awa.ct.captureContentPageAction({
                            behavior: awa.behavior.OTHER,
                            actionType: awa.actionType.OTHER,
                            content: {
                                event: "toc-experiment",
                                toc_experimental: data.metadata.experimental,
                                toc_experiment_id: data.metadata.experiment_id
                            }
                        });
                    });
                }
                gatherAllTocFiles(tocJson, tocFolder);
                var pdfUrlTemplate = getMeta("pdf_url_template");
                if (pdfUrlTemplate && pdfUrlTemplate.length) {
                    var pdfAbsolutePath = getDataFromToc("pdf_absolute_path");
                    var pdfName_1 = getDataFromToc("pdf_name");
                    if (pdfAbsolutePath && pdfAbsolutePath.length) {
                        var pdfFullPath_1 = document$1.location.origin + "/" + locale + pdfAbsolutePath;
                        $$1(function() {
                            return renderPdfLink(null, pdfFullPath_1);
                        });
                    } else if (pdfName_1 && pdfName_1.length) {
                        $$1(function() {
                            return renderPdfLink(pdfName_1, null);
                        });
                    }
                }
            }).fail(function() {
                if (fallbackUrls && fallbackUrls.length) {
                    getTocData(fallbackUrls[0], fallbackUrls.slice(1));
                }
            });
        };
        var extendBc = function() {
            var $breadcrumbs = $$1("." + breadcrumbClass);
            var addNodeToBc = function(node, bestMatch) {
                var href = node.href;
                var aCleanTitle = breakText(cleanText(node.toc_title));
                var pieces;
                $breadcrumbs.ifThen(node.thisIsMe || !href || !href.length || !bestMatch.length && relativeCanonicalUrlUniformIndex === getUniformIndex(node.href).toLowerCase(), function() {
                    this.append($$1("<li>").html(aCleanTitle));
                }, function() {
                    href = resolveRelativePath(href, tocFolder);
                    this.append($$1("<li>").append($$1("<a>").ifThen(hasMoniker, function() {
                        pieces = href.split("#");
                        this.attr("href", pieces[0] + (pieces[0].indexOf("?") > -1 ? "&" : "?") + monikerParams + (pieces[1] ? "#" + pieces[1] : ""));
                    }, function() {
                        this.attr("href", href);
                    }).html(aCleanTitle)));
                });
                if (bestMatch.length && node.children && node.children.length) {
                    addNodeToBc(node.children[bestMatch.shift()], bestMatch);
                }
            };
            if (tocBestMatch.length) {
                addNodeToBc(tocJson[tocBestMatch.shift()], tocBestMatch);
            }
            $breadcrumbs.children().has("a").last().addClass("mobile-breadcrumb");
        };
        var drawBc = function(json) {
            var relativeCanonicaFolder = getFolder(relativeCanonicalUrlNoQuery) + "/";
            var bestMatch = [];
            var $breadcrumbsContainer = $$1("<ul></ul>");
            var node;
            var nodeHrefNoQuery;
            var findBestMatch = function(json, nodeMap) {
                nodeMap.push(-1);
                for (var i = 0; i < json.length; i++) {
                    node = json[i];
                    nodeMap[nodeMap.length - 1] = i;
                    if (!nodeMap.length || bestMatch.length < nodeMap.length) {
                        if (node.href) {
                            nodeHrefNoQuery = node.href.split("?")[0].toLowerCase();
                            if (relativeCanonicaFolder.indexOf(nodeHrefNoQuery) === 0 || relativeCanonicalUrlNoQuery === nodeHrefNoQuery) {
                                bestMatch = nodeMap.slice(0);
                            }
                        }
                    }
                    if (node.children && node.children.length) {
                        findBestMatch(node.children, nodeMap.slice(0));
                    }
                }
            };
            var makeDisplayHtml = function($breadcrumbs, node, bestMatch) {
                var href = node.homepage || node.href || "";
                var aCleanTitle = breakText(cleanText(node.toc_title));
                var pieces;
                $breadcrumbs.ifThen(!href || !href.length || !bestMatch.length && relativeCanonicalUrlUniformIndex === getUniformIndex(node.href).toLowerCase(), function() {
                    if (checkIsArchived() && aCleanTitle === loc_search) {
                        aCleanTitle = loc_searchPreviousVersions;
                    }
                    this.append($$1('<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">').append($$1('<span itemprop="name">').html(aCleanTitle)));
                }, function() {
                    href = resolveRelativePath(href, bcFolder);
                    this.append($$1('<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">').append($$1('<a itemprop="item">').ifThen(hasMoniker, function() {
                        pieces = href.split("#");
                        this.attr("href", pieces[0] + (pieces[0].indexOf("?") > -1 ? "&" : "?") + monikerParams + (pieces[1] ? "#" + pieces[1] : ""));
                    }, function() {
                        this.attr("href", href);
                    }).html(aCleanTitle)));
                });
                if (bestMatch.length && node.children && node.children.length) {
                    makeDisplayHtml($breadcrumbs, node.children[bestMatch.shift()], bestMatch);
                }
            };
            findBestMatch(json, []);
            if (bestMatch.length) {
                makeDisplayHtml($breadcrumbsContainer, json[bestMatch.shift()], bestMatch);
            }
            $$1(function() {
                var $breadcrumbs = $$1("." + breadcrumbClass).empty();
                $breadcrumbsContainer.children().appendTo($breadcrumbs);
                if (!msDocs.settings.extendBreadcrumb || tocUrlQueue.length === 0) {
                    $breadcrumbs.children().has("a").last().addClass("mobile-breadcrumb");
                }
                bcFinished.resolve().then(function() {
                    return breadCrumbsResolve();
                });
            });
        };
        var getBcData = function(url, fallbackUrls) {
            var hideBc = getMeta("hide_bc");
            if (hideBc === undefined || hideBc !== "true") {
                $$1.ajax({
                    url: resolveRelativePath(url),
                    dataType: "json",
                    timeout: timeout
                }).done(function(_, __, jqXHR) {
                    bcFolder = getFolder(removeLocaleFromPath(bcUrl));
                    drawBc(normalizeToc(jqXHR.responseJSON));
                }).fail(function() {
                    if (fallbackUrls && fallbackUrls.length) {
                        getBcData(fallbackUrls[0], fallbackUrls.slice(1));
                    } else {
                        breadCrumbsResolve();
                    }
                });
            }
        };
        function saveSelectedPathToLocalStorage(element, root) {
            var store = JSON.parse(localStorage$1.getItem("toc-selected") || "{}");
            var el = element;
            var arr = [];
            while (el && el != root) {
                arr.unshift(Array.from(el.parentElement.children).indexOf(el));
                el = el.parentElement;
            }
            store[tocUrl] = arr;
            localStorage$1.setItem("toc-selected", JSON.stringify(store));
        }
        locale = getLocaleFromPath(document$1.location.pathname);
        locationFolder = getFolder(removeLocaleFromPath(document$1.location.pathname));
        nodes_to_expand = getMetas("nodes_to_expand");
        if (nodes_to_expand.length) {
            for (var i = 0; i < nodes_to_expand.length; i++) {
                nodes_to_expand[i] = resolveRelativePath(nodes_to_expand[i]).toLowerCase();
            }
            hasNodesToExpand = true;
        }
        relativeCanonicalUrlNoQuery = getRelativeCanonicalUrl(true).toLowerCase();
        relativeCanonicalUrlUniformIndex = getUniformIndex(relativeCanonicalUrlNoQuery);
        if (document$1.location.hash) {
            hasCanonicalHash = true;
            relativeCanonicalUrlNoQueryWithHash = relativeCanonicalUrlNoQuery + document$1.location.hash;
            relativeCanonicalUrlUniformIndexWithHash = relativeCanonicalUrlUniformIndex + document$1.location.hash;
        }
        if (document$1.documentElement.classList.contains("hasSidebar")) {
            if (tocContextUrl && tocContextUrl.length) {
                tocUrlQueue.push(tocContextUrl);
            }
            if (tocQueryUrl && tocQueryUrl.length) {
                tocUrlQueue.push(resolveRelativePath(decodeURIComponent(tocQueryUrl)));
            }
            if (tocMetaUrl && tocMetaUrl.length) {
                tocUrlQueue.push(tocMetaUrl);
            }
            getTocData(tocUrlQueue[0], tocUrlQueue.slice(1));
        }
        if (bcContextUrl && bcContextUrl.length) {
            bcUrlQueue.push(bcContextUrl);
        }
        if (bcQueryUrl && bcQueryUrl.length) {
            bcUrlQueue.push(bcQueryUrl);
        }
        if (bcMetaUrl && bcMetaUrl.length) {
            bcUrlQueue.push(bcMetaUrl);
        }
        bcUrl = bcContextUrl || bcQueryUrl || bcMetaUrl;
        getBcData(bcUrlQueue[0], bcUrlQueue.slice(1));
        if (msDocs.settings.extendBreadcrumb) {
            $$1(function() {
                $$1.when(tocFinished, bcFinished).done(function() {
                    extendBc();
                });
            });
        }
        contentLoaded.then(function() {
            var html = document$1.documentElement.classList;
            var mobileQuery = window$1.matchMedia("screen and (max-width: 768px)");
            if (!html.contains("hasSidebar")) {
                return;
            }
            var focusToc = function() {
                return (document$1.querySelector(".toc a.selected, .tutorial-toc .active-step a") || document$1.querySelector(".toc li a")).focus();
            };
            var constrainFocus = function(_a) {
                var target = _a.target;
                if (target instanceof HTMLElement && target.closest(".sidebar")) {
                    return;
                }
                if (mobileQuery.matches) {
                    close();
                } else {
                    focusToc();
                }
            };
            var collapseOnLinkClicks = function(_a) {
                var target = _a.target;
                if (target instanceof HTMLElement && target.closest(".toc a, .tutorial-toc a")) {
                    close();
                }
            };
            var openButtons = Array.from(document$1.querySelectorAll(".contents-button"));
            var close = function() {
                reaffixSidebar();
                html.remove("sidebar-expanded");
                mobileQuery.removeListener(close);
                removeEventListener("focus", constrainFocus, true);
                removeEventListener("click", collapseOnLinkClicks);
                eventBus.unsubscribe(APExpandedChangedEvent, close);
                openButtons[0].focus();
            };
            var closeButton = document$1.querySelector(".sidebar-header");
            closeButton.onclick = close;
            var open = function() {
                unaffixSidebar();
                html.add("sidebar-expanded");
                focusToc();
                mobileQuery.addListener(close);
                addEventListener("focus", constrainFocus, true);
                addEventListener("click", collapseOnLinkClicks);
                eventBus.subscribe(APExpandedChangedEvent, close);
            };
            openButtons.forEach(function(openButton) {
                openButton.onclick = open;
            });
        });
    }
    function isInternalHref(url) {
        if (url && url.length && url.indexOf("/") === 0 && url.indexOf("//") === -1) {
            return true;
        }
        return url.indexOf("docs.microsoft.com") !== -1 || url.indexOf(window$1.location.hostname) !== -1;
    }
    function addScopeButton() {
        var form = document$1.getElementById("searchForm");
        if (!form) {
            return;
        }
        form.action = "https://docs.microsoft.com/" + msDocs.data.userLocale + "/search/index";
        form.querySelector("button#search").removeAttribute("name");
        var searchInput = form.querySelector('input[name="search"]');
        var rawScope = msDocs.data.context.searchScope || getMeta("scope");
        var isSearchPage = msDocs.data.pageTemplate === "SearchPage";
        if (isSearchPage) {
            var queryString = parseQueryString();
            rawScope = queryString.scope;
            var searchValue = queryString.search;
            if (searchValue !== undefined && searchValue.length > 0) {
                searchInput.value = searchValue;
            }
        }
        var hideScope = getMeta("hideScope");
        if (hideScope === "true" || rawScope === undefined || rawScope.length === 0) {
            return;
        }
        var scopes = rawScope.split(",").map(function(s) {
            return s.trim();
        }).filter(function(s) {
            return s.length;
        });
        if (scopes.length === 0) {
            return;
        }
        var scopeStyle = document$1.createElement("style");
        document$1.head.appendChild(scopeStyle);
        var padInputForScope = function(padding) {
            scopeStyle.textContent = padding === 0 ? "" : '\n\t\t\t.c-uhfh input[type="search"],\n\t\t\t.c-uhfh.c-sgl-stck .c-uhfh-actions .c-search input[type="search"] {\n\t\t\t\tpadding-' + (document$1.body.dir === "rtl" ? "right" : "left") + ": " + padding + "px !important;\n\t\t\t}";
        };
        var scope = scopes[scopes.length - 1];
        var scopeInput = document$1.createElement("input");
        scopeInput.name = "scope";
        scopeInput.value = scope;
        scopeInput.hidden = true;
        var scopeAnchor = document$1.createElement("a");
        scopeAnchor.classList.add("search-scope");
        scopeAnchor.href = "#";
        scopeAnchor.setAttribute("role", "button");
        var scopeSpan = document$1.createElement("span");
        scopeSpan.classList.add("search-scope-text");
        scopeSpan.textContent = scope;
        scopeAnchor.appendChild(scopeSpan);
        scopeAnchor.title = loc_searchScopeTitle.replace("{0}", scope);
        scopeAnchor.insertAdjacentHTML("beforeend", ' <span class="docon docon-navigate-close"></span>');
        scopeAnchor.onclick = function(event) {
            event.stopPropagation();
            event.preventDefault();
            scopeAnchor.parentElement.removeChild(scopeAnchor);
            scopeInput.parentElement.removeChild(scopeInput);
            searchInput.style.transition = "padding ease .5s";
            padInputForScope(0);
            jsllReady.then(function(awa) {
                return awa.ct.capturePageAction(event.target, {
                    actionType: awa.actionType.CLICKLEFT,
                    behavior: awa.behavior.OTHER,
                    content: {
                        event: "uhf-search-scope-removed",
                        name: "uhf-search-scope-link",
                        value: scope
                    }
                });
            });
        };
        scopeAnchor.style.top = "-1000px";
        scopeAnchor.style.display = "block";
        document$1.body.appendChild(scopeAnchor);
        var scopeWidth = scopeAnchor.getBoundingClientRect().width;
        document$1.body.removeChild(scopeAnchor);
        scopeAnchor.style.cssText = "";
        padInputForScope(Math.floor(scopeWidth + 12));
        form.appendChild(scopeInput);
        form.appendChild(scopeAnchor);
    }
    function configureSearchForArchive() {
        if (!checkIsArchived()) {
            return;
        }
        var form = document$1.getElementById("searchForm");
        var searchDataSource = document$1.createElement("input");
        searchDataSource.name = "dataSource";
        searchDataSource.value = "previousVersions";
        searchDataSource.hidden = true;
        form.appendChild(searchDataSource);
        var input = document$1.getElementById("cli_shellHeaderSearchInput");
        if (input) {
            input.placeholder = loc_searchPreviousVersions;
        }
    }
    if (msDocs.data.brand !== "mooncake" && msDocs.data.brand !== "azure") {
        headerLoaded.then(addScopeButton);
        headerLoaded.then(configureSearchForArchive);
    }
    msDocs.data.rtl = rtlDictionary;
    msDocs.data.jsllReady = jsllReady;
    msDocs.data.cookieConsent = cookieConsent;
    msDocs.data.isArchived = checkIsArchived();
    msDocs.functions.notifyContentUpdated = notifyContentUpdated;
    msDocs.functions.escape = escape$1;
    msDocs.functions.cookies = cookies;
    msDocs.functions.loadLibrary = loadLibrary;
    msDocs.functions.parseQueryString = parseQueryString;
    msDocs.functions.buildHtmlProfiles = buildHtmlProfiles;
    detectFeatures();
    ie10MobileFix();
    pluginIfThen();
    initTheme();
    setDocumentLocale();
    initHeader();
    if (getMeta("page_type") !== "learn") {
        createToc();
    }
    setupDismissAlerts();
    track();
    interceptCopy();
    initCookieConsent();
    initAuth();
    initActionPanel();
    initThemeFallback();
    initZonePivots();
    initTokenRenewal();
    enableGoogleAnalytics();
    contentLoaded.then(function() {
        dedupMain();
        detectHighContrast();
        editLinkRedirect();
        fixDate();
        setupToc();
        makeCodeBlocks();
        if (pageSupportsMoniker(getMoniker())) {
            filterContentByMoniker();
        } else {
            renderInTopicTOC();
        }
        displayMonikerFallbackMessage();
        setupMap();
        handleArchive();
        affix();
        initTabs(document$1.body);
        ensureWbr();
        checkInnerTextSupported();
        var monikerContainer = document$1.querySelector(".moniker-applies-to");
        if (monikerContainer) {
            renderAppliesTo(monikerContainer);
        }
        displayTranslations();
        handleHeadings(document$1.querySelector(".content"));
        handleIframeContent(document$1.querySelector(".content"), msDocs.data.userLocale);
        initDropdowns(document$1.body);
        initSharingLinks(document$1.body, location.origin + location.pathname + location.search, document$1.title);
        pageTemplateSpecific();
        if (msDocs.data.hasComments) {
            if (msDocs.data.feedbackSystem === "GitHub") {
                initFeedback();
            }
        }
        renderBranchSelector();
        renderAzureSelectors();
        fixContent();
        initializeLightBox(document$1.querySelector("#main"));
        wrapContentTables();
        handleEngContentToggle(document$1.querySelector(".lang-toggle-container"));
        initRating({
            container: document$1.getElementById("openFeedbackContainer"),
            isArchived: checkIsArchived(),
            pageTemplate: msDocs.data.pageTemplate,
            storage: localStorage$1,
            pathname: location.pathname,
            mobile: document$1.documentElement.clientWidth < 1024
        });
        initResourceGroupNameElements(document$1.body, eventBus, azureSandbox);
        showLevelStatus();
        handleProtocolRendering(Array.from(document$1.querySelectorAll(".content")));
    });
    window.addEventListener("after-navigate", function() {
        setupLocaleLinks(msDocs.data.userLocale);
        initZonePivots();
        pageTemplateSpecific();
        makeCodeBlocks();
        fixContent();
        wrapContentTables();
        initResourceGroupNameElements(document$1.body, eventBus, azureSandbox);
        handleIframeContent(document$1.querySelector(".content"), msDocs.data.userLocale);
    });
})();