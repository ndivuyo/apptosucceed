/*
CONTRIBUTORS: Dillon Bastan 2016

DESCRIPTION: Classes to hold and edit information of Pages with subpages sitewide
*/


//Main pages, their subpages, and functions for handling their views via AngularJs
var Pages = new function() {

	//Educators hidden subpages
	this.educators_hidden = [
		{
			title: 'Superior Content',
			url: WEB_ROOT + '/educators/#/superior-content',
			fileType: 'php'
		},
		{
			title: 'Examples of Real-World Activities',
			url: WEB_ROOT + '/educators/#/major-topics',
			fileType: 'html'
		},
		{
			title: 'Metrics',
			url: WEB_ROOT + '/educators/#/metrics',
			fileType: 'html'
		}
	];

	//Educators subpages
	this.educators = [
		{
			title: '"Teens, Our Priority"',
			url: WEB_ROOT + '/educators/#/teens-our-priority',
			fileType: 'html'
		},
		{
			title: 'Eight Trend Impacting Teens Financially',
			url: WEB_ROOT + '/educators/#/eight-trends-impacting-teens',
			fileType: 'php'
		},
		{
			title: 'Teens and Personal Finance Education',
			url: WEB_ROOT + '/educators/#/preparing-teens-to-manage',
			fileType: 'html'
		},
		{
			title: 'Map the Money Maze',
			url: WEB_ROOT + '/educators/#/map-the-money-maze',
			fileType: 'html',
			subpages: ExtendMenu.pages('ul', this.educators_hidden, 'map-the-money-maze')
		}
	];

	//Parents hidden subpages
	this.parents_hidden = [
		{
			title: 'Superior Content',
			url: WEB_ROOT + '/parents/#/superior-content',
			fileType: 'php'
		}
	];

	//Parents subpages
	this.parents = [
		{
			title: 'Financial Trends That Will Challenge Your Teen',
			url: WEB_ROOT + '/parents/#/financial-trends',
			fileType: 'php'
		},
		{
			title: 'Personal Finance Education',
			url: WEB_ROOT + '/parents/#/personal-finance-education',
			fileType: 'html'
		},
		{
			title: 'Map the Money Maze',
			url: WEB_ROOT + '/parents/#/map-the-money-maze',
			fileType: 'html',
			subpages: ExtendMenu.pages('ul', this.parents_hidden, 'map-the-money-maze')
		}
	];

	//Teens subpages
	this.teens = [
		{
			title: "You're Worried About Money?",
			url: WEB_ROOT + "/teens/#/you're-worried-about-money",
			fileType: 'html'
		},
		{
			title: 'What is Map the Money Maze?',
			url: WEB_ROOT + '/teens/#/what-is-map-the-money-maze',
			fileType: 'html'
		},
		{
			title: 'Nine Trends that Threaten Your Financial Success',
			url: WEB_ROOT + '/teens/#/financial-trends-you-will-face',
			fileType: 'php'
		},
		{
			title: 'Map the Money Maze FAQs',
			url: WEB_ROOT + '/teens/#/map-the-money-maze-faq',
			fileType: 'html'
		}
	];

	//About Us subpages
	this.aboutUs = [
		{
			title: 'Our Mission',
			url: WEB_ROOT + '/about-us/#/our-mission',
			fileType: 'html'
		},
		{
			title: 'Leadership',
			url: WEB_ROOT + '/about-us/#/leadership',
			fileType: 'html'
		},
		{
			title: 'Supporters',
			url: WEB_ROOT + '/about-us/#/supporters',
			fileType: 'html'
		},
		{
			title: 'Our Standards',
			url: WEB_ROOT + '/about-us/#/our-standards',
			fileType: 'html'
		},
		{
			title: 'Privacy Policy',
			url: WEB_ROOT + '/about-us/#/privacy-policy',
			fileType: 'html'
		}
	];

	//How to Help subpages
	this.howToHelp = [
		{
			title: 'Register',
			url: WEB_ROOT + '/how-to-help/#/register',
			fileType: 'html'
		},
		{
			title: 'Referrals',
			url: WEB_ROOT + '/how-to-help/#/referrals',
			fileType: 'html'
		},
		{
			title: 'Donate',
			url: WEB_ROOT + '/how-to-help/#/donate',
			fileType: 'html'
		},
		{
			title: 'Volunteer',
			url: WEB_ROOT + '/how-to-help/#/volunteer',
			fileType: 'html'
		}
	];

	//Home page (No subpages)
	this.home = {
		title: 'App to Succeed',
		url: WEB_ROOT
	};

	//Contact page (No subpages)
	this.contact = {
		title: 'Contact',
		url: WEB_ROOT + '/contact'
	};

	//Blog page (No subpages)
	this.blog = {
		title: 'Blog',
		url: WEB_ROOT + '/blog'
	};


	//Function using routeProvider to manage subpage views from url
	this.routePages = function(app, subpages) {
		app.config( function($routeProvider) {
			var hashIndex, pageName;

			//Check if url at any of the subpages
			for (var i = 0; i < subpages.length; i++) {

				//Get correct url name (after hashtag)
				hashIndex = subpages[i].url.indexOf('#') + 1;
				pageName = subpages[i].url.substring(hashIndex);

				//Use routProvider to open view for matching pagename
				$routeProvider.when(pageName, {
					templateUrl: "views" + pageName + '.' + subpages[i].fileType,
					controller: 'controller'
				});
			}
		});
	};


	//Redirect to page root if not at any subpage
	this.redirect = function(app, subpage) {
		app.config( function($routeProvider) {
			var hashIndex, pageName;

			hashIndex = subpage.url.indexOf('#') + 1;
			pageName = subpage.url.substring(hashIndex);

			$routeProvider.otherwise({
				redirectTo: pageName,
				controller: 'controller'
			});
		});
	};
};