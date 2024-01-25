document.querySelector(".jsFilter").addEventListener("click", function () {
    document.querySelector(".filter-menu").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
    var gridButton = document.querySelector(".grid");
    var listButton = document.querySelector(".list");
    var productsWrapper = document.querySelector(".products-area-wrapper");
    var modeSwitch = document.querySelector('.mode-switch');

    document.documentElement.classList.add('dark');
    modeSwitch.classList.add('active');

    gridButton.classList.add("active");
    listButton.classList.remove("active");
    productsWrapper.classList.add("gridView");
    productsWrapper.classList.remove("tableView");


    gridButton.addEventListener("click", function () {
        listButton.classList.remove("active");
        gridButton.classList.add("active");
        productsWrapper.classList.add("gridView");
        productsWrapper.classList.remove("tableView");
    });

    listButton.addEventListener("click", function () {
        listButton.classList.add("active");
        gridButton.classList.remove("active");
        productsWrapper.classList.remove("gridView");
        productsWrapper.classList.add("tableView");
    });

    modeSwitch.addEventListener('click', function () {
        document.documentElement.classList.toggle('light');
        modeSwitch.classList.toggle('active');
    });

});