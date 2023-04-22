
var myApp = angular.module("myApp", []);

var indexJobs = 2;

myApp.controller("loadMoreTruck", function ($scope, $http) {

    var checked = false;

    $scope.listTrucks;
    $scope.listFullTrucks;

    $http({
        method: 'GET',
        url: 'http://localhost:8888/api/trucks/all'
    }).then(function successCallback(response) {
        $scope.listTrucks = response.data.slice(0, 4);
        $scope.listFullTrucks = response.data;
    }, function errorCallback(response) {
        response.errorCallback;
    });


    $scope.loadMoreTruck = () => {
        if (checked == true) {
            $scope.listTrucks = $scope.listTrucks.slice(0, 4);
            checked = false;
        } else {
            $scope.listTrucks = $http.get("http://localhost:8888/api/trucks/all").
                then(function successCallback(response) {
                    $scope.listTrucks = response.data;
                }, function errorCallback(response) {
                    response.errorCallback;
                });
            checked = true;
        }
    }
});

myApp.controller("InfinityJobs", function ($scope, $http) {

    var list = document.querySelector('#infinite-list');
    var item;
    $scope.listJobsAfterSort;

    $http({
        method: 'GET',
        url: 'http://localhost:8888/api/jobs/getAllJobs'
    }).then(function successCallback(response) {
        $scope.listJobs = response.data;
    }, function errorCallback(response) {
        response.errorCallback;
    });

    var loadMore = function () {
        for (var i = indexJobs; i < indexJobs + 2; i++) {
            item = document.createElement('div');
            item.className = "card job";
            item.innerHTML =
                "<div class='card-header row'>" +
                "<div class='col-6 col-sm-6'>" +
                "<img src='ASM/resources/images/country/" + $scope.listJobs[i].imgCountry + "'" +
                "style='width: 40px;' alt='' srcset=''>" +
                "<img src='ASM/resources/images/company/" + $scope.listJobs[i].logoCompany + "'" + "style='width: 40px; object-fit: cover;' alt='' srcset=''>" +
                "</div>" +
                "<a href='#' class='col-6 col-sm-6 btn btn-primary'>Deal" +
                "Job</a>" +
                "</div>" +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" + $scope.listJobs[i].header + " <span" +
                "class='card-title' style='color: #206BB5;'>" + $scope.listJobs[i].nameCompany + "</span></h5>" +
                "<p class='card-text'>" + $scope.listJobs[i].discription + "<span" +
                "class='d-inline d-md-none'>...</span><span>" +
                "<span class='d-none d-sm-none d-md-inline'>" + $scope.listJobs[i].hiddenDescription + "</span></p>" +
                "</div>" +

                "<div class='form-check form-switch'>" +
                "<input class='form-check-input' type='checkbox'" +
                "role='switch' id='flexSwitchCheckChecked'" +
                "checked disabled>" +
                "<label class='form-check-label'for='flexSwitchCheckChecked'>We still open" +
                "job for salary: " + $scope.listJobs[i].salary + "$ / " +
                "month in the " + $scope.listJobs[i].timeWork +
                "</div>" +
                "</label>"
            list.appendChild(item);
        }
        indexJobs = indexJobs + 2;
    }

    var loadMore2 = function () {
        for (var i = indexJobs; i < $scope.listJobs.length; i++) {
            item = document.createElement('div');
            item.className = "card job";
            item.innerHTML =
                "<div class='card-header row'>" +
                "<div class='col-6 col-sm-6'>" +
                "<img src='ASM/resources/images/country/" + $scope.listJobs[i].imgCountry + "'" +
                "style='width: 40px;' alt='' srcset=''>" +
                "<img src='ASM/resources/images/company/" + $scope.listJobs[i].logoCompany + "'" + "style='width: 40px; object-fit: cover;' alt='' srcset=''>" +
                "</div>" +
                "<a href='#' class='col-6 col-sm-6 btn btn-primary'>Deal" +
                "Job</a>" +
                "</div>" +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" + $scope.listJobs[i].header + " <span" +
                "class='card-title' style='color: #206BB5;'>" + $scope.listJobs[i].nameCompany + "</span></h5>" +
                "<p class='card-text'>" + $scope.listJobs[i].discription + "<span" +
                "class='d-inline d-md-none'>...</span><span>" +
                "<span class='d-none d-sm-none d-md-inline'>" + $scope.listJobs[i].hiddenDescription + "</span></p>" +
                "</div>" +

                "<div class='form-check form-switch'>" +
                "<input class='form-check-input' type='checkbox'" +
                "role='switch' id='flexSwitchCheckChecked'" +
                "checked disabled>" +
                "<label class='form-check-label'for='flexSwitchCheckChecked'>We still open" +
                "job for salary: " + $scope.listJobs[i].salary + "$ / " +
                "month in the " + $scope.listJobs[i].timeWork +
                "</div>" +
                "</label>"
            list.appendChild(item);
        }
        indexJobs = $scope.listJobs.length;
    }

    list.addEventListener('scroll', function () {
        if (list.scrollTop + list.clientHeight + 1 >= list.scrollHeight) {
            if (indexJobs < $scope.listJobs.length && checkedd === false) {
                loadMore();
            } else if (indexJobs < $scope.listJobs.length && checkedd === false) {
                loadMore2();
            }
        }
    })

    $scope.Country = "%";
    $scope.Salary = "2000";
    $scope.Time = "%";
    $scope.Company = "%";
    var checkedd = false;

    $scope.sort = () => {

        const boxes = document.querySelectorAll('.job');

        boxes.forEach(box => {
            box.remove();
        });

        var obj = {
            "idJobs": 1,
            "imgCountry": $scope.Country,
            "logoCompany": $scope.Country,
            "nameCompany": $scope.Company,
            "discription": "We are seeking a passionate and dedicated Demo Specialist to help us",
            "hiddenDescription": "spread the word about our amazing products. This position is more than just handing out samples.",
            "timeWork": $scope.Time,
            "isOpen": false,
            "header": "Now We Are Hiring!",
            "salary": $scope.Salary * 1
        }

        $scope.get = $http.post("http://localhost:8888/api/jobs/getAllJobsForContrain", obj).
            then(function successCallback(response) {
                indexJobs = 0;
                $scope.listJobs = angular.copy(response.data);
            }, function errorCallback(response) {
                response.errorCallback;
            });
        loadMore2();
        checkedd = true;
    };
});

myApp.controller("LoadingComment", function ($scope, $http) {
    var genNum;
    var promise = $http.get("http://localhost:8888/api/reviews/getAllReviews")
        .then(function successCallback(response) {
            $scope.OriginList = response.data;
            $scope.NumPages = Math.ceil($scope.OriginList.length / $scope.ReviewsPerPage);

            genNum = document.querySelector('#gennum');
            genNum.className = "route";

        }, function errorCallback(response) {
            response.errorCallback;
        });


    $scope.ReviewsPerPage = 8;
    $scope.index = 0;

    var genNum = document.querySelector('#gennum');

    for (var i = 0; i < $scope.NumPages; i++) {
        var numberBtn = document.createElement('div');
        numberBtn.innerHTML = "<button ng-click='load(" + i + ")'>" + i + "</button>"
        $compile(numberBtn)($scope);
        genNum.appendChild(numberBtn);
    }

    Promise.all([promise]).then((value) => {
        $scope.load = (i) => {
            $scope.index = i;
            if ($scope.index * $scope.ReviewsPerPage + 8 > $scope.OriginList.length) {
                $scope.CurrentList = $scope.OriginList.slice(
                    $scope.index * $scope.ReviewsPerPage, $scope.OriginList.length
                );
            }
            else {
                $scope.CurrentList = $scope.OriginList.slice(
                    $scope.index * $scope.ReviewsPerPage, $scope.index * $scope.ReviewsPerPage + 8
                );
            }

        }
    });


});

myApp.controller("Validator", function ($scope, $http) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    var inputfirstname = document.querySelector("#firstname");
    var inputlastname = document.querySelector("#lastname");
    var inputemail = document.querySelector("#email");
    var inputpassword = document.querySelector("#password");

    $scope.firstname = "";
    $scope.lastname = "";
    $scope.email = "";
    $scope.pass = "";



    $scope.validator = () => {

        if ($scope.firstname === "") {
            $scope.firstname = "Need first name as requidment"
        } else if ($scope.firstname.length < 10 && $scope.firstname.length > 3) {
            $scope.firstname = "Only long for 3 to 10 character"
        }

        if ($scope.lastname == "") {
            $scope.lastname = "Need last name as requidment"
        } else if ($scope.lastname.length < 8 && $scope.lastname.length > 3) {
            $scope.lastname = "Only long for 3 to 10 character"
        }

        if ($scope.email == "") {
            $scope.email = "Need email as requidment"
        } else if (!$scope.email.match(validRegex)) {
            $scope.email = "Non valid email regex"
        } else {
            swal("Nice Email", "Good good", "success");
        }

        // if($scope.password == ""){

        // }else if($scope.password.length < 10 && $scope.password.length >= 5){

        // }

    }
});






