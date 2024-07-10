upload.controller('Home_Index_Controller', function($rootScope, $scope, $http, $location, $routeParams, $timeout, $interval) {


        $scope.home_index = true;
        $scope.about = false;
        $scope.resume = false;
        $scope.portfolio = false;
        $scope.contact = false;

        // include trang sản phẩm porfolio
        $scope.type_web = false;
        $scope.type_edit_photo = false;


        // ----------------------------------------------01.Trang about
        //show

        $scope.show_about = function() {
                $timeout(function() {
                    $scope.home_index = false;
                    $scope.about = true;
                }, 300);




            }
            // close
        $scope.clear_about = function() {

            $timeout(function() {
                $scope.home_index = true;
                $scope.about = false;
            }, 300);
        }

        // ----------------------------------------------02.Trang resume
        // show
        $scope.show_resume = function() {
                $timeout(function() {
                    $scope.home_index = false;
                    $scope.resume = true;
                }, 300);




            }
            // close
        $scope.clear_resume = function() {

            $timeout(function() {
                $scope.home_index = true;
                $scope.resume = false;
            }, 300);
        }

        // ----------------------------------------------03.Trang portfolio

        // show
        $scope.show_portfolio = function() {
                $timeout(function() {
                    $scope.home_index = false;
                    $scope.portfolio = true;
                }, 300);




            }
            // close
        $scope.clear_portfolio = function() {

                $timeout(function() {
                    $scope.home_index = true;
                    $scope.portfolio = false;
                }, 300);
            }
            // ----------------------------------------------04.Trang blog

        // show
        $scope.show_blog = function() {
                $timeout(function() {
                    $scope.home_index = false;
                    $scope.blog = true;
                }, 300);




            }
            // close
        $scope.clear_blog = function() {

                $timeout(function() {
                    $scope.home_index = true;
                    $scope.blog = false;
                }, 300);
            }
            // ----------------------------------------------05.Trang contact

        // show
        $scope.show_contact = function() {
                $timeout(function() {
                    $scope.home_index = false;
                    $scope.contact = true;
                }, 300);




            }
            // close
        $scope.clear_contact = function() {

            $timeout(function() {
                $scope.home_index = true;
                $scope.contact = false;
            }, 300);
        }

        // ----------------------------------------------------------------------------------include trang sản phẩm 
        // Type : Web
        // show
        $scope.show_web_list = function() {
                $timeout(function() {
                    $scope.portfolio = false;
                    $scope.type_web = true;
                }, 600);




            }
            // close
        $scope.clear_web_list = function() {

                $timeout(function() {
                    $scope.portfolio = true;
                    $scope.type_web = false;
                }, 900);
            }
            // ------------------------------------------------
            // Type : Chinhsuaanh
            // show
        $scope.show_edit_photo_list = function() {
                $timeout(function() {
                    $scope.portfolio = false;
                    $scope.type_edit_photo = true;
                }, 600);




            }
            // close
        $scope.clear_edit_photo_list = function() {

                $timeout(function() {
                    $scope.portfolio = true;
                    $scope.type_edit_photo = false;
                }, 900);
            }
            // ------------------------------------------------


    }) //End controller SingleFunctionController