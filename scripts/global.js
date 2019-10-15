(function () {
    "use strict";
    var globalWindow = window;
    var window$1 = globalWindow;
    var navigator$1 = globalWindow.navigator;
    var document$1 = globalWindow.document;
    var history$1 = globalWindow.history;
    var location$1 = globalWindow.location;
    var $$1 = window$1.jQuery;
    var msDocs = window$1.msDocs;
    //var eventBus = new EventBus();
    var contentLoaded = new Promise(function (resolve) {
        if (document$1.readyState === "loading") {
            document$1.addEventListener("DOMContentLoaded", function () {
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
    var loc_azureDocs = "Azure Documentation";
    var loc_body = "Body";
    var loc_browse = "Browse";
    var loc_clearfilter = "Clear Filter";
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
    var loc_description = "Description";
    var loc_documentDetails = "Document Details";
    var loc_downloadPdf = "Download PDF";
    var loc_filter = "Filter";
    var loc_filterByTitle = "Filter by title";
    var loc_landmarkToc = "Table of Contents";
    var loc_landmarkTocFilterFormLabel = "Filter Table of Contents";
    var loc_light = "Light";
    var loc_next = "Next";
    var loc_nextPage = "Next page";
    var loc_no = "No";
    var loc_noOutput = "No output";
    var loc_noResults = "No results";
    var loc_noResultsRest = "No results yet, but keep typing…";
    var loc_noResultsToc = 'No results for {term}<br /><a href="{url}">Search for "{filter-text}" in all {scope} documentation</a>';
    var loc_noSearchTerm = "No search term";
    var loc_note = "Note";
    var loc_page = "Page {0}";
    var loc_parameters = "Parameters";
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
    var loc_responseCode = "Response Code";
    var loc_restart = "Restart";
    var loc_run = "Run";
    var loc_search = "Search";
    var loc_searchPreviousVersions = "Search previous versions";
    var loc_searchResultsFor = "Search results for";
    var loc_searchScopeTitle = 'Search filter is "{0}". Tap to remove.';
    var loc_start = "Start";
    var loc_submit = "Submit";
    var loc_thanksForFeedback = "Thanks for the feedback!";
    var loc_tip = "Tip";
    var loc_updated = "updated";
    var loc_version = "Version";
    var loc_yes = "Yes";

    

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // THESE FUNCTIONS HELP LEFT MENU

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
                metaDictionary[name] = [meta.content];
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

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // THESE FUNCTIONS SHOW OR HIDE RIGHT MENU

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

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // INITIALIZING HEADER

    var setHeaderLoaded;
    var headerLoaded = new Promise(function (resolve) {
        return setHeaderLoaded = resolve;
    });

    function initHeader() {
        var brand = "azure";
        return setHeaderLoaded();
    }

    function notifyContentUpdated() {
        window$1.dispatchEvent(new CustomEvent("content-update"));
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
            //eventBus.publish(new APExpandedChangedEvent(true));
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
        //eventBus.publish(new APExpandedChangedEvent(false));
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

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // THESE FUNCTIONS HELP RIGHT MENU AND THEMES FUNCTIONS

    var localStorage$1 = {
        setItem: function (key, value) {
            try {
                window$1.localStorage.setItem(key, value);
            } catch (e) { }
        },
        getItem: function (key) {
            try {
                return window$1.localStorage.getItem(key);
            } catch (e) {
                return null;
            }
        },
        removeItem: function (key) {
            try {
                window$1.localStorage.removeItem(key);
            } catch (e) { }
        }
    };
    var sessionStorage = {
        setItem: function (key, value) {
            try {
                window$1.sessionStorage.setItem(key, value);
            } catch (e) { }
        },
        getItem: function (key) {
            try {
                return window$1.sessionStorage.getItem(key);
            } catch (e) {
                return null;
            }
        },
        removeItem: function (key) {
            try {
                window$1.sessionStorage.removeItem(key);
            } catch (e) { }
        }
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // THESE FUNCTIONS RENDER THE RIGHT MENU

    var h2Headings = [];
    var sectionIndicatorEnabled = false;
    var ignoreScrollOnce = false;
    var ignoreContentUpdateUntilScroll = false;
    function renderInTopicTOC() {
        var centerContainer = document$1.getElementById("center-doc-outline");
        var sideContainer = document$1.getElementById("side-doc-outline");
        var containers = [centerContainer, sideContainer];
        if (centerContainer === null || sideContainer === null) {
            return;
        }
        //var headings1 = Array.from(document$1.querySelectorAll("#main h1, #main h2, #main h3, #main h4")).filter(function (h) {
        var headings1 = Array.from(document$1.querySelectorAll("#main h1, #main h2")).filter(function (h) {
            return h.offsetParent !== null;
        });
        var headings = headings1.sort();
        var minHeadings = msDocs.data.pageTemplate === "NamespaceListPage" ? 2 : 1;
        var hide = headings.length < minHeadings;
        containers.forEach(function (container) {
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
            sideContainer.addEventListener("click", function (event) {
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
            window.addEventListener("scroll", function () {
                if (ignoreScrollOnce) {
                    ignoreScrollOnce = false;
                    return;
                }
                ignoreContentUpdateUntilScroll = false;
                scheduleUpdate();
            }, {
                    passive: true
                });
            window.addEventListener("content-update", function () {
                if (ignoreContentUpdateUntilScroll) {
                    return;
                }
                scheduleUpdate();
            });
            sectionIndicatorEnabled = true;
        }
        scheduleUpdate();
    }


    /////////////////////////////////////////////////////////////////////////////////////////////////
    // THESE FUNCTIONS MOVE THE LEFT AND RIGHT MENUS WITH PAGE

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

    function getParentColumnWidth(element) {
        return element.parentElement.getBoundingClientRect().width;
    }
    function unaffixSidebar() {
        var left = document$1.getElementById("sidebar");
        left.style.cssText = "";
        left.setAttribute("disable-affix", "true");
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


    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // THEME SECTION LIGHT/DARK
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
        var stylesheets = Array.from(document.styleSheets).filter(function (s) {
            return s instanceof CSSStyleSheet && s.href !== null && s.href.indexOf(location.origin) === 0;
        }).map(function (s) {
            return s;
        });
        var inverseThemeMap = createInverseThemeMap(themeMap);
        addEventListener("theme-changed", function (_a) {
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
                var cssText = rule.style.cssText.replace(globalHslaRegex, function (_, hue, saturation, lightness, alpha) {
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
        for (var _i = 0, _a = ["light", "night"]; _i < _a.length; _i++) {
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
        button.onclick = function () {
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

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // DOWNLOAD PDF SECTION
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

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // CREATES LEFT MENU
    var pageTemplate = msDocs.data.pageTemplate;
    var pageType$1 = getMeta("page_type");
    var oldPageType = getMeta("pagetype");
    var interactiveType$1 = getMeta("interactive_type");
    var pageMonikers = {
        any: false
    };
    var useMonikerPicker = pageMonikers.any && msDocs.data.pageTemplate !== "HubPage" || pageTemplate === "Conceptual" && oldPageType === "Reference" && platformId !== null || pageTemplate === "Conceptual" && pageType$1 === "powershell" && platformId !== null || pageTemplate === "Conceptual" && oldPageType === "Conceptual" && platformId === "powershell" || pageTemplate === "Conceptual" && pageType$1 === "conceptual" && platformId === "powershell" || (pageTemplate === "Conceptual" && pageType$1 === "conceptual" || pageTemplate === "Reference" && pageType$1 === "python") && platformId === "python" || (pageTemplate === "Conceptual" && pageType$1 === "conceptual" || pageTemplate === "Reference" && pageType$1 === "cli") && interactiveType$1 === "azurecli";
    var useApiSearch = pageTemplate === "Reference" && platformId !== null || pageTemplate === "Conceptual" && oldPageType === "Reference" && platformId !== null || pageTemplate === "Conceptual" && pageType$1 === "powershell" && platformId !== null;
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

    var localeNames = {
        "en-us": "English (United States)"
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
    var breadcrumbsPromise = new Promise(function (resolve) {
        breadCrumbsResolve = resolve;
    });
    function createContextUrl(url) {
        var param = (getParam("context") || "").split("/").slice(0, -1).join("/");
        if (url) {
            return "/" + [getLocaleFromPath(document$1.location.pathname), param, url].join("/");
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
        var normalizeToc = function (toc, extractMetadata) {
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
        var resolveRelativePath = function (path, folder) {
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
        var removeQueryString = function (path) {
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
        var getUniformIndex = function (path) {
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
        var getRelativeCanonicalUrl = function (removeTheQueryString) {
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
        var getFolder = function (path) {
            return path.substring(0, path.lastIndexOf("/"));
        };
        var thisIsMe = function (hrefNoQuery, hrefUniformIndex) {
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
        var thisIsAlmostMe = function (hrefNoQuery, hrefUniformIndex) {
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

        // CREATES LEFT MENU
        msDocs.functions.toggleAriaExpanded = function (el) {
            var $el = $$1(el);
            var tempHeight;
            var $ulKids = $el.children("ul");
            if ($el.attr("aria-expanded") == "true") {
                $el.addClass(rotateClass).children("ul").each(function (_, el) {
                    var $tempEl = $$1(el);
                    $tempEl.css({
                        height: $tempEl.height()
                    }).animate({
                        height: 0
                    }, 200, function () {
                        $$1(this).css("height", "");
                        $el.attr("aria-expanded", "false").removeClass(rotateClass);
                    });
                });
                $ulKids.find("li").css("display", "none");
            } else {
                $el.attr("aria-expanded", "true");
                $ulKids.find("li").css("display", "");
                $ulKids.each(function (_, el) {
                    var $tempEl = $$1(el);
                    tempHeight = $tempEl.height();
                    $tempEl.css({
                        height: "0"
                    }).animate({
                        height: tempHeight
                    }, 200, function () {
                        $$1(this).css("height", "");
                    });
                });
            }
        };
        msDocs.functions.stopSomePropagation = function (e, direction) {
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
        var drawToc = function (json) {
            var createTocNode = function (node, ul, nodeMap) {
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
            var createFilter = function () {
                var $filter = $$1("<form>").addClass(filterClassName).attr("aria-label", loc_landmarkTocFilterFormLabel).submit(function (e) {
                    e.preventDefault();
                }).append($$1("<input>").addClass("input").addClass("is-size-7").attr("placeholder", loc_filterByTitle).attr("aria-label", loc_filter).attr("data-bi-name", "toc-filter").attr("id", "toc-filter").attr("type", "search").attr("aria-controls", "filterResults").keypress(function (e) {
                    if (e.which === 13) {
                        e.preventDefault();
                        return;
                    }
                }).keyup(function () {
                    filterDebounce(this);
                })).append($$1("<a>").attr("href", "#").attr("title", loc_clearfilter).addClass("clearInput").html('<span class="visually-hidden">' + loc_clearfilter + "</span>").on("click", function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    var ipt = $$1("." + filterClassName + " input[type=search]");
                    ipt.val("");
                    filterToc(ipt);
                }));
                var $noResults = $$1("<div>").addClass(emptyFilterMessageClassName).html(loc_noResults);
                return [$filter, $noResults];
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
                    Array.from(selectedNodes).forEach(function (node) {
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
            $toc.on("touchstart pointerdown MSPointerDown", function (e) {
                if (e.type == "touchstart" || (e.type == "pointerdown" || e.type == "MSPointerDown") && e.originalEvent.pointerType == "touch") {
                    isTouchEvent = true;
                    setTimeout(function () {
                        isTouchEvent = false;
                    }, 700);
                }
            }).on("mousedown", function () {
                $$1(this).addClass(hideFocusClass);
            }).on("mouseup", function (e) {
                $$1(e.target).blur().parent().blur();
                $$1(this).removeClass(hideFocusClass);
                saveSelectedPathToLocalStorage(e.target.parentElement, toc);
            }).on("keydown", "a", function (e) {
                if (e.which === 13) {
                    document$1.location.href = $$1(e.target).attr("href");
                    e.stopPropagation();
                    saveSelectedPathToLocalStorage(e.target.parentElement, toc);
                    return false;
                }
                return undefined;
            }).on("keydown", "li", function (e) {
                if (e.which === 13 && !$$1(this).hasClass(noSibsClass)) {
                    e.stopPropagation();
                    msDocs.functions.toggleAriaExpanded($$1(this));
                }
            });
            if (json.length == 1) {
                $toc.addClass(noSibsClass);
                $toc.children("li").attr("aria-expanded", "true").off("click." + eventNamespace).removeAttr("tabindex");
            }
            $$1(function () {
                var $tocHolder = $$1(tocHolderSelector);
                $tocHolder.attr("role", "application")[0].appendChild(toc);
                $tocHolder.attr("aria-label", loc_landmarkToc);
                $tocHolder.attr("id", "filterResults");
                try {
                    var scrollAmount_1 = $selectedParent.offset().top - $tocHolder.offset().top - 44;
                    $tocHolder.scrollTop(scrollAmount_1);
                    setTimeout(function () {
                        $tocHolder.scrollTop(scrollAmount_1);
                    }, 1);
                } catch (e) { }
                if (!useApiSearch) {
                    $$1(filterHolderSelector).append(createFilter());
                }
                tocFinished.resolve();
            });
        };
        var debounceTimeout = 0;
        var filterToc = function (inputField) {
            var val = inputField.value;
            var $tocHolder = $$1(tocHolderSelector);
            var $filterHolder = $$1(filterHolderSelector);
            var $emptyHolder = $$1(emptyFilterMessageSelector);
            var rawScope = getMeta("scope");
            var scopes = rawScope ? rawScope.split(",").map(function (s) {
                return s.trim();
            }).filter(function (s) {
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
                $currentToc.find("a, span").each(function () {
                    $this_1 = $$1(this);
                    if ($this_1.attr("data-text").indexOf(lowerCaseVal_1) !== -1) {
                        resultIsEmpty_1 = false;
                        $this_1.parents("li").css("display", "").filter("[aria-expanded]").not($this_1.parent()).attr("aria-expanded", "true");
                    }
                });
                $tocHolder.append($currentToc);
                if (resultIsEmpty_1) {
                    var url = "/search/index?search=" + encodeURIComponent(val) + "&scope=" + encodeURIComponent(scope);
                    //url = "index.html" + (userLocale !== undefined ? userLocale : "") + "search/?q=" + encodeURIComponent(val);
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
        var filterDebounce = function (input) {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(function () {
                filterToc(input);
                var val = input.value;
                if (val.length) {
                    jsllReady.then(function (awa) {
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
        var getDataFromToc = function (nodeName) {
            return pageMetadata[nodeName] || null;
        };
        var gatherAllTocFiles = function (pageTocJson, pageTocFolder) {
            var uniRefTocUrl = getDataFromToc("universal_ref_toc");
            var uniConTocUrl = getDataFromToc("universal_conceptual_toc");
            var moniker = getMoniker();
            var addMonikerToUrl = function (aUrl, moniker) {
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
            var updateAllHrefs = function (json, folder, checkThisIsMe) {
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
                    }).done(function (_, __, jqXHR) {
                        var uniRefTocFolder = getFolder(removeLocaleFromPath(resolveRelativePath(uniRefTocUrl)));
                        var uniRefTocJson = normalizeToc(jqXHR.responseJSON);
                        updateAllHrefs(uniRefTocJson, uniRefTocFolder);
                        uniRefTocFinished_1.resolve(uniRefTocJson);
                    }).fail(function () {
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
                    }).done(function (_, __, jqXHR) {
                        var uniConTocFolder = getFolder(removeLocaleFromPath(resolveRelativePath(uniConTocUrl)));
                        var uniConTocJson = normalizeToc(jqXHR.responseJSON);
                        updateAllHrefs(uniConTocJson, uniConTocFolder);
                        uniConTocFinished_1.resolve(uniConTocJson);
                    }).fail(function () {
                        uniConTocFinished_1.resolve(null);
                    });
                } else {
                    uniConTocFinished_1.resolve(null);
                }
                updateAllHrefs(pageTocJson, pageTocFolder, true);
                $$1.when(uniRefTocFinished_1, uniConTocFinished_1).then(function (uniRefTocJson, uniConTocJson) {
                    var combinedToc;
                    var matchAndMerge = function (hrefToMatch, json, childJson) {
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
        var getTocData = function (url, fallbackUrls) {
            $$1.ajax({
                url: url,
                dataType: "json",
                timeout: timeout
            }).done(function (data, _, jqXHR) {
                tocUrl = resolveRelativePath(url);
                tocFolder = getFolder(removeLocaleFromPath(tocUrl));
                tocJson = normalizeToc(jqXHR.responseJSON, true);
                if (data.metadata && "experiment_id" in data.metadata && "experimental" in data.metadata) {
                    jsllReady.then(function (awa) {
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
                        $$1(function () {
                            return renderPdfLink(null, pdfFullPath_1);
                        });
                    } else if (pdfName_1 && pdfName_1.length) {
                        $$1(function () {
                            return renderPdfLink(pdfName_1, null);
                        });
                    }
                }
            }).fail(function () {
                if (fallbackUrls && fallbackUrls.length) {
                    getTocData(fallbackUrls[0], fallbackUrls.slice(1));
                }
            });
        };
        var extendBc = function () {
            var $breadcrumbs = $$1("." + breadcrumbClass);
            var addNodeToBc = function (node, bestMatch) {
                var href = node.href;
                var aCleanTitle = breakText(cleanText(node.toc_title));
                var pieces;
                $breadcrumbs.ifThen(node.thisIsMe || !href || !href.length || !bestMatch.length && relativeCanonicalUrlUniformIndex === getUniformIndex(node.href).toLowerCase(), function () {
                    this.append($$1("<li>").html(aCleanTitle));
                }, function () {
                    href = resolveRelativePath(href, tocFolder);
                    this.append($$1("<li>").append($$1("<a>").ifThen(hasMoniker, function () {
                        pieces = href.split("#");
                        this.attr("href", pieces[0] + (pieces[0].indexOf("?") > -1 ? "&" : "?") + monikerParams + (pieces[1] ? "#" + pieces[1] : ""));
                    }, function () {
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
        var drawBc = function (json) {
            var relativeCanonicaFolder = getFolder(relativeCanonicalUrlNoQuery) + "/";
            var bestMatch = [];
            var $breadcrumbsContainer = $$1("<ul></ul>");
            var node;
            var nodeHrefNoQuery;
            var findBestMatch = function (json, nodeMap) {
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
            var makeDisplayHtml = function ($breadcrumbs, node, bestMatch) {
                var href = node.homepage || node.href || "";
                var aCleanTitle = breakText(cleanText(node.toc_title));
                var pieces;
                $breadcrumbs.ifThen(!href || !href.length || !bestMatch.length && relativeCanonicalUrlUniformIndex === getUniformIndex(node.href).toLowerCase(), function () {
                    if (checkIsArchived() && aCleanTitle === loc_search) {
                        aCleanTitle = loc_searchPreviousVersions;
                    }
                    this.append($$1('<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">').append($$1('<span itemprop="name">').html(aCleanTitle)));
                }, function () {
                    href = resolveRelativePath(href, bcFolder);
                    this.append($$1('<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">').append($$1('<a itemprop="item">').ifThen(hasMoniker, function () {
                        pieces = href.split("#");
                        this.attr("href", pieces[0] + (pieces[0].indexOf("?") > -1 ? "&" : "?") + monikerParams + (pieces[1] ? "#" + pieces[1] : ""));
                    }, function () {
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
            $$1(function () {
                var $breadcrumbs = $$1("." + breadcrumbClass).empty();
                $breadcrumbsContainer.children().appendTo($breadcrumbs);
                if (!msDocs.settings.extendBreadcrumb || tocUrlQueue.length === 0) {
                    $breadcrumbs.children().has("a").last().addClass("mobile-breadcrumb");
                }
                bcFinished.resolve().then(function () {
                    return breadCrumbsResolve();
                });
            });
        };
        var getBcData = function (url, fallbackUrls) {
            var hideBc = getMeta("hide_bc");
            if (hideBc === undefined || hideBc !== "true") {
                $$1.ajax({
                    url: resolveRelativePath(url),
                    dataType: "json",
                    timeout: timeout
                }).done(function (_, __, jqXHR) {
                    bcFolder = getFolder(removeLocaleFromPath(bcUrl));
                    drawBc(normalizeToc(jqXHR.responseJSON));
                }).fail(function () {
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
            $$1(function () {
                $$1.when(tocFinished, bcFinished).done(function () {
                    extendBc();
                });
            });
        }
        contentLoaded.then(function () {
            var html = document$1.documentElement.classList;
            var mobileQuery = window$1.matchMedia("screen and (max-width: 768px)");
            if (!html.contains("hasSidebar")) {
                return;
            }
            var focusToc = function () {
                return (document$1.querySelector(".toc a.selected, .tutorial-toc .active-step a") || document$1.querySelector(".toc li a")).focus();
            };
            var constrainFocus = function (_a) {
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
            var collapseOnLinkClicks = function (_a) {
                var target = _a.target;
                if (target instanceof HTMLElement && target.closest(".toc a, .tutorial-toc a")) {
                    close();
                }
            };
            var openButtons = Array.from(document$1.querySelectorAll(".contents-button"));
            var close = function () {
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
            var open = function () {
                unaffixSidebar();
                html.add("sidebar-expanded");
                focusToc();
                mobileQuery.addListener(close);
                addEventListener("focus", constrainFocus, true);
                addEventListener("click", collapseOnLinkClicks);
                eventBus.subscribe(APExpandedChangedEvent, close);
            };
            openButtons.forEach(function (openButton) {
                openButton.onclick = open;
            });
        });
    }
    initTheme();
    initHeader();
    initActionPanel();
    createToc();
    contentLoaded.then(function () {
        setupToc();
        renderInTopicTOC();
        affix();
    });
})();