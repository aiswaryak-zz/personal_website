var angularApp = angular.module('workApp', []);

angularApp.controller('WorkController', function ($scope) {
  $scope.current = [
    {'link': 'Work/ford.html',
     'thumbnail': 'Images/Ford/thumbnail-ford.png',
     'title': 'Ford Motor Company',
     'description': 'My day job as a user-experience engineer at Ford. (July 2013 - Present)',
	 'category': '0'
	 },
    {'link': 'Work/visual-me.html',
     'thumbnail': 'Images/Current/visual-me.png',
     'title': 'Stretching me out',
     'description': 'A visual design experiment of what my behaviors could be at their extremes',
	 'category': '0'
	 },
	 {'link': 'Work/alienship.html',
     'thumbnail': 'Images/Current/alienship.png',
     'title': 'Alienship web app concept',
     'description': 'An alerts tool for international students working in the US',
	 'category': '0'
	 },
	 {'link': 'Work/phrases.html',
     'thumbnail': 'Images/Current/phrases.png',
     'title': 'Things people say',
     'description': 'An experiment in hand-lettering that captures spoken or written phrases',
	 'category': '0'
	 }
	 ];
	 
	 $scope.internships = [
    {'link': 'Work/teslatest.html',
     'thumbnail': 'Images/Teslatest/thumbnail-teslatest.png',
     'title': 'Systems Testing',
     'description': 'Interned Tesla Motors to automate vehicle testing',
	 'category': '1'
	 },
	 {'link': 'Work/teslaui.html',
     'thumbnail': 'Images/Teslaui/thumbnail-teslaui.png',
     'title': 'UI Design',
     'description': 'Paper prototyped future ideas for the Model S user interface',
	 'category': '1'
	 },
	 
	 {'link': 'Work/aura.html',
     'thumbnail': 'Images/Aura/aura.png',
     'title': 'Aura concept vehicle',
     'description': 'Designed a recumbent bicycle for young European commuters',
	 'category': '1'
	 },
    {'link': 'Work/cqs.html',
     'thumbnail': 'Images/Cqs/thumbnail-cqs.png',
     'title': 'Wireless data transfer',
     'description': 'Using a Zigbee to transfer data from a racing car to the pit lane',
	 'category': '1'
	 }
	 ];
	 
	 $scope.college = [
	 {'link': 'Work/autodesk.html',
     'thumbnail': 'Images/Autodesk/thumbnail-autodesk.png',
     'title': 'Engineering Capstone',
     'description': 'Worked with Autodesk Inc. to engage middle and high school students in 3D modeling and design',
	 'category': '2'
	 },
	 {'link': 'Work/myndr.html',
     'thumbnail': 'Images/Myndr/thumbnail-myndr.png',
     'title': 'Myndr app',
     'description': 'Usability testing on an app targeted to people with mild memory loss',
	 'category': '2'
	 },
    {'link': 'Work/suffrage.html',
     'thumbnail': 'Images/Suffrage/thumbnail-suffrage.png',
     'title': 'Suffrage app',
     'description': 'A front-end UI in Objective-C meant to encourage young people to vote in elections',
	 'category': '2'
	 },
	 {'link': 'Work/ade.html',
     'thumbnail': 'Images/Ade/thumbnail-ade.png',
     'title': 'Affordable design and entrepreneurship',
     'description': 'Designing an affordable water chlorinator for Calcutta slums',
	 'category': '2'
	 },
	 {'link': 'Work/hfid.html',
     'thumbnail': 'Images/Hfid/thumbnail_hfid.png',
     'title': 'BOWtie website design',
     'description': 'Cross-registration tool for college students designed in a Human Factors Interface Design class',
	 'category': '2'
	 },
	 {'link': 'Work/lockcracker.html',
     'thumbnail': 'Images/Lockcracker/thumbnail-lockcracker.png',
     'title': 'LockCracker project',
     'description': 'To unlock combination locks in under 3 hours',
	 'category': '2'
	 }
  ];
  
    $scope.titles = [
    {'category': 'Current'
	 },
    {'category': 'Internships'
	 },
	 {'category': 'College'
	 }
  ];
  
  
	//CHUNKED INTO 3 COLUMNS PER ROW
	  function chunk(arr, size) {
	  var newArr = [];
	  for (var i=0; i<arr.length; i+=size) {
		newArr.push(arr.slice(i, i+size));
	  }
	  return newArr;
	}

	$scope.chunked = [];
	$scope.chunked[0] = chunk($scope.current, 3);
	$scope.chunked[1] = chunk($scope.internships, 3);
	$scope.chunked[2] = chunk($scope.college, 3);
	
	
	
	//FILTERS
	$scope.filterCurrent = function(projects)
	{
		if($scope.projects.category = 1)
		{
			return true; // this will be listed in the results
		}
    return false; // otherwise it won't be within the results
	};
	
	
	$scope.filterInternships = function(projects)
	{
		if($scope.projects.category = 2)
		{
			return true; // this will be listed in the results
		}
    return false; // otherwise it won't be within the results
	};
	
	$scope.filterCollege = function(projects)
	{
		if($scope.projects.category = 3)
		{
			return true; // this will be listed in the results
		}
    return false; // otherwise it won't be within the results
	};
	

});