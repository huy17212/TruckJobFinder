// var module = angular.module("module", []);
// module.controller("jobs", function ($scope, $http) {
    
var list = document.querySelector('#infinite-list');

var loadMore = function () {
    var item = document.createElement('div');
    item.className = 'card job';
    item.innerHTML =
        "<div class='card-header'>" +
        "Featured" +
        "</div>" +
        "<div class='card-body'>" +
        "<h5 class='card-title'>Special title treatment</h5>" +
        "<p class='card-text'>With supporting text below as a natural lead-in to additional content.</p>" +
        "<a href='#' class='btn btn-primary'>Deal Job</a>" +
        "</div>"
    list.appendChild(item);
}


list.addEventListener('scroll', function () {
    if (list.scrollTop + list.clientHeight + 1 >= list.scrollHeight) {
        loadMore();
        ass();
    }
})

loadMore();
// });


/**
 * <div class="card">
            <div class="card-header">
            Featured
            </div>
            <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Deal Job</a>
        </div>
    </div>
 */


