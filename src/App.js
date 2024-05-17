import React from 'react';
class Home extends React.Component {
    
 
  render() {
   
    return (
     
      <div className="app">
        <div class="container-scroller">
            <div class="row p-0 m-0 proBanner" id="proBanner">
              <div class="col-md-12 p-0 m-0">
                <div class="card-body card-body-padding d-flex align-items-center justify-content-between">
                  <div class="ps-lg-1">
                    <div class="d-flex align-items-center justify-content-between">
                      <p class="mb-0 font-weight-medium me-3 buy-now-text">Free 24/7 customer support, updates, and more with this template!</p>
                      <a href="https://therichpost.com" target="_blank" class="btn me-2 buy-now-btn border-0">Get Pro</a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <a href="https://therichpost.com"><i class="mdi mdi-home me-3 text-white"></i></a>
                    <button id="bannerClose" class="btn border-0 p-0">
                      <i class="mdi mdi-close text-white me-0"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
           
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
              <ul class="nav">
                <li class="nav-item nav-profile border-bottom">
                  <a href="#" class="nav-link flex-column">
                    <div class="nav-profile-image">
                      <img src="assets/images/face1.jpg" alt="profile" />
                     
                    </div>
                    <div class="nav-profile-text d-flex ms-0 mb-3 flex-column">
                      <span class="font-weight-semibold mb-1 mt-2 text-center">PG Connect</span>
                      <span class="text-secondary icon-sm text-center">$3499.00</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item pt-3">
                  <a class="nav-link d-block" href="#">
                    <img class="sidebar-brand-logo" src="assets/images/logo.svg" alt="" />
                    <img class="sidebar-brand-logomini" src="assets/images/logo-mini.svg" alt="" />
                    <div class="small font-weight-light pt-1">Responsive Dashboard</div>
                  </a>
                  <form class="d-flex align-items-center" action="#">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <i class="input-group-text border-0 mdi mdi-magnify"></i>
                      </div>
                      <input type="text" class="form-control border-0" placeholder="Search" />
                    </div>
                  </form>
                </li>
                <li class="pt-2 pb-1">
                  <span class="nav-item-head">Template Pages</span>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="mdi mdi-compass-outline menu-icon"></i>
                    <span class="menu-title">Dashboard</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                    <i class="mdi mdi-crosshairs-gps menu-icon"></i>
                    <span class="menu-title">UI Elements</span>
                    <i class="menu-arrow"></i>
                  </a>
                  <div class="collapse" id="ui-basic">
                    <ul class="nav flex-column sub-menu">
                      <li class="nav-item">
                        <a class="nav-link" href="#">Buttons</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Dropdowns</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Typography</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="mdi mdi-contacts menu-icon"></i>
                    <span class="menu-title">Icons</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="mdi mdi-format-list-bulleted menu-icon"></i>
                    <span class="menu-title">Forms</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="mdi mdi-chart-bar menu-icon"></i>
                    <span class="menu-title">Charts</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="mdi mdi-table-large menu-icon"></i>
                    <span class="menu-title">Tables</span>
                  </a>
                </li>
                <li class="nav-item pt-3">
                  <a class="nav-link" href="http://therichpost.com" target="_blank">
                    <i class="mdi mdi-file-document-box menu-icon"></i>
                    <span class="menu-title">Documentation</span>
                  </a>
                </li>
              </ul>
            </nav>
           
            <div class="container-fluid page-body-wrapper">
         
              <div id="settings-trigger"><i class="mdi mdi-settings"></i></div>
              <div id="theme-settings" class="settings-panel">
                <i class="settings-close mdi mdi-close"></i>
                <p class="settings-heading">SIDEBAR SKINS</p>
                <div class="sidebar-bg-options selected" id="sidebar-default-theme">
                  <div class="img-ss rounded-circle bg-light border me-3"></div>Default
                </div>
                <div class="sidebar-bg-options" id="sidebar-dark-theme">
                  <div class="img-ss rounded-circle bg-dark border me-3"></div>Dark
                </div>
                <p class="settings-heading mt-2">HEADER SKINS</p>
                <div class="color-tiles mx-0 px-4">
                  <div class="tiles default primary"></div>
                  <div class="tiles success"></div>
                  <div class="tiles warning"></div>
                  <div class="tiles danger"></div>
                  <div class="tiles info"></div>
                  <div class="tiles dark"></div>
                  <div class="tiles light"></div>
                </div>
              </div>
            
              <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div class="navbar-menu-wrapper d-flex align-items-stretch">
                  <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                    <span class="mdi mdi-chevron-double-left"></span>
                  </button>
                  <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                    <a class="navbar-brand brand-logo-mini" href="#"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
                  </div>
                  <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                      <a class="nav-link" id="messageDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="mdi mdi-email-outline"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-left navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                        <h6 class="p-3 mb-0 font-weight-semibold">Messages</h6>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item preview-item">
                          <div class="preview-thumbnail">
                            <img src="assets/images/face1.jpg" alt="image" class="profile-pic" />
                          </div>
                          <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                            <h6 class="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
                            <p class="text-gray mb-0"> 1 Minutes ago </p>
                          </div>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item preview-item">
                          <div class="preview-thumbnail">
                            <img src="assets/images/face6.jpg" alt="image" class="profile-pic" />
                          </div>
                          <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                            <h6 class="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you a message</h6>
                            <p class="text-gray mb-0"> 15 Minutes ago </p>
                          </div>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item preview-item">
                          <div class="preview-thumbnail">
                            <img src="assets/images/face7.jpg" alt="image" class="profile-pic" />
                          </div>
                          <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                            <h6 class="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
                            <p class="text-gray mb-0"> 18 Minutes ago </p>
                          </div>
                        </a>
                        <div class="dropdown-divider"></div>
                        <h6 class="p-3 mb-0 text-center text-primary font-13">4 new messages</h6>
                      </div>
                    </li>
                    <li class="nav-item dropdown ms-3">
                      <a class="nav-link" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                        <i class="mdi mdi-bell-outline"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-left navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                        <h6 class="px-3 py-3 font-weight-semibold mb-0">Notifications</h6>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item preview-item">
                          <div class="preview-thumbnail">
                            <div class="preview-icon bg-success">
                              <i class="mdi mdi-calendar"></i>
                            </div>
                          </div>
                          <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                            <h6 class="preview-subject font-weight-normal mb-0">New order recieved</h6>
                            <p class="text-gray ellipsis mb-0"> 45 sec ago </p>
                          </div>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item preview-item">
                          <div class="preview-thumbnail">
                            <div class="preview-icon bg-warning">
                              <i class="mdi mdi-settings"></i>
                            </div>
                          </div>
                          <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                            <h6 class="preview-subject font-weight-normal mb-0">Server limit reached</h6>
                            <p class="text-gray ellipsis mb-0"> 55 sec ago </p>
                          </div>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item preview-item">
                          <div class="preview-thumbnail">
                            <div class="preview-icon bg-info">
                              <i class="mdi mdi-link-variant"></i>
                            </div>
                          </div>
                          <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                            <h6 class="preview-subject font-weight-normal mb-0">Kevin karvelle</h6>
                            <p class="text-gray ellipsis mb-0"> 11:09 PM </p>
                          </div>
                        </a>
                        <div class="dropdown-divider"></div>
                        <h6 class="p-3 font-13 mb-0 text-primary text-center">View all notifications</h6>
                      </div>
                    </li>
                  </ul>
                  <ul class="navbar-nav navbar-nav-right">
                    <li class="nav-item nav-logout d-none d-md-block me-3">
                      <a class="nav-link" href="#">Status</a>
                    </li>
                    <li class="nav-item nav-logout d-none d-md-block">
                      <button class="btn btn-sm btn-danger">Trailing</button>
                    </li>
                    <li class="nav-item nav-profile dropdown d-none d-md-block">
                      <a class="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                        <div class="nav-profile-text">English </div>
                      </a>
                      <div class="dropdown-menu center navbar-dropdown" aria-labelledby="profileDropdown">
                        <a class="dropdown-item" href="#">
                          <i class="flag-icon flag-icon-bl me-3"></i> French </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">
                          <i class="flag-icon flag-icon-cn me-3"></i> Chinese </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">
                          <i class="flag-icon flag-icon-de me-3"></i> German </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">
                          <i class="flag-icon flag-icon-ru me-3"></i>Russian </a>
                      </div>
                    </li>
                    <li class="nav-item nav-logout d-none d-lg-block">
                      <a class="nav-link" href="#">
                        <i class="mdi mdi-home-circle"></i>
                      </a>
                    </li>
                  </ul>
                  <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span class="mdi mdi-menu"></span>
                  </button>
                </div>
              </nav>
              
              <div class="main-panel">
                <div class="content-wrapper pb-0">
                  <div class="page-header flex-wrap">
                    <div class="header-left">
                      <button class="btn btn-primary mb-2 mb-md-0 me-2"> Create new document </button>
                      <button class="btn btn-outline-primary bg-white mb-2 mb-md-0"> Import documents </button>
                    </div>
                    <div class="header-right d-flex flex-wrap mt-2 mt-sm-0">
                      <div class="d-flex align-items-center">
                        <a href="#">
                          <p class="m-0 pe-3">Dashboard</p>
                        </a>
                        <a class="ps-3 me-4" href="#">
                          <p class="m-0">ADE-00234</p>
                        </a>
                      </div>
                      <button type="button" class="btn btn-primary mt-2 mt-sm-0 btn-icon-text">
                        <i class="mdi mdi-plus-circle"></i> Add Product </button>
                    </div>
                  </div>
                
                  <div class="row">
                    <div class="col-xl-9 stretch-card grid-margin">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex justify-content-between flex-wrap">
                            <div>
                              <div class="card-title mb-0">Sales Revenue</div>
                              <h3 class="font-weight-bold mb-0">$32,409</h3>
                            </div>
                            <div>
                              <div class="d-flex flex-wrap pt-2 justify-content-between sales-header-right">
                                <div class="d-flex me-5">
                                  <button type="button" class="btn btn-social-icon btn-outline-sales">
                                    <i class="mdi mdi-inbox-arrow-down"></i>
                                  </button>
                                  <div class="ps-2">
                                    <h4 class="mb-0 font-weight-semibold head-count"> $8,217 </h4>
                                    <span class="font-10 font-weight-semibold text-muted">TOTAL SALES</span>
                                  </div>
                                </div>
                                <div class="d-flex me-3 mt-2 mt-sm-0">
                                  <button type="button" class="btn btn-social-icon btn-outline-sales profit">
                                    <i class="mdi mdi-cash text-info"></i>
                                  </button>
                                  <div class="ps-2">
                                    <h4 class="mb-0 font-weight-semibold head-count"> 2,804 </h4>
                                    <span class="font-10 font-weight-semibold text-muted">TOTAL PROFIT</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p class="text-muted font-13 mt-2 mt-sm-0"> Your sales monitoring dashboard template. <a class="text-muted font-13" href="#"><u>Learn more</u></a>
                          </p>
                          <div class="flot-chart-wrapper">
                            <div id="flotChart" class="flot-chart">
                              <canvas class="flot-base"></canvas>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 stretch-card grid-margin">
                      <div class="card card-img">
                        <div class="card-body d-flex align-items-center">
                          <div class="text-white">
                            <h1 class="font-20 font-weight-semibold mb-0"> Get premium </h1>
                            <h1 class="font-20 font-weight-semibold">account!</h1>
                            <p>to optimize your selling prodcut</p>
                            <p class="font-10 font-weight-semibold"> Enjoy the advantage of premium. </p>
                            <button class="btn bg-white font-12">Get Premium</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <div class="row">
                    <div class="col-sm-6 stretch-card grid-margin">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <div class="card-title"> Customers <small class="d-block text-muted">August 01 - August 31</small>
                            </div>
                            <div class="d-flex text-muted font-20">
                              <i class="mdi mdi-printer mouse-pointer"></i>
                              <i class="mdi mdi-help-circle-outline ms-2 mouse-pointer"></i>
                            </div>
                          </div>
                          <h3 class="font-weight-bold mb-0"> 2,409 <span class="text-success h5">4,5%<i class="mdi mdi-arrow-up"></i></span>
                          </h3>
                          <span class="text-muted font-13">Avg customers/Day</span>
                          <div class="line-chart-wrapper">
                            <canvas id="linechart" height="80"></canvas>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 stretch-card grid-margin">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <div class="card-title"> Conversions <small class="d-block text-muted">August 01 - August 31</small>
                            </div>
                            <div class="d-flex text-muted font-20">
                              <i class="mdi mdi-printer mouse-pointer"></i>
                              <i class="mdi mdi-help-circle-outline ms-2 mouse-pointer"></i>
                            </div>
                          </div>
                          <h3 class="font-weight-bold mb-0"> 0.40% <span class="text-success h5">0.20%<i class="mdi mdi-arrow-up"></i></span>
                          </h3>
                          <span class="text-muted font-13">Avg customers/Day</span>
                          <div class="bar-chart-wrapper">
                            <canvas id="barchart" height="80"></canvas>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               
                  <div class="row">
                    <div class="col-sm-4 stretch-card grid-margin">
                      <div class="card">
                        <div class="card-body p-0">
                          <img class="img-fluid w-100" src="assets/images/img_1.jpg" alt="" />
                        </div>
                        <div class="card-body px-3 text-dark">
                          <div class="d-flex justify-content-between">
                            <p class="text-muted font-13 mb-0">ENTIRE APARTMENT</p>
                            <i class="mdi mdi-heart-outline"></i>
                          </div>
                          <h5 class="font-weight-semibold"> Cosy Studio flat in London </h5>
                          <div class="d-flex justify-content-between font-weight-semibold">
                            <p class="mb-0">
                              <i class="mdi mdi-star star-color pe-1"></i>4.60 (35) 
                            </p>
                              <p class="mb-0">$5,267/night</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4 stretch-card grid-margin">
                      <div class="card">
                        <div class="card-body p-0">
                          <img class="img-fluid w-100" src="assets/images/img_2.jpg" alt="" />
                        </div>
                        <div class="card-body px-3 text-dark">
                          <div class="d-flex justify-content-between">
                            <p class="text-muted font-13 mb-0">ENTIRE APARTMENT</p>
                            <i class="mdi mdi-heart-outline"></i>
                          </div>
                          <h5 class="font-weight-semibold"> Victoria Bedsit Studio Ensuite </h5>
                          <div class="d-flex justify-content-between font-weight-semibold">
                            <p class="mb-0">
                            <i class="mdi mdi-star star-color pe-1"></i>4.83 (12) 
                            </p>
                              <p class="mb-0">$6,144/night</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4 stretch-card grid-margin">
                      <div class="card">
                        <div class="card-body p-0">
                          <img class="img-fluid w-100" src="assets/images/img_3.jpg" alt="" />
                        </div>
                        <div class="card-body px-3 text-dark">
                          <div class="d-flex justify-content-between">
                            <p class="text-muted font-13 mb-0">ENTIRE APARTMENT</p>
                            <i class="mdi mdi-heart-outline"></i>
                          </div>
                          <h5 class="font-weight-semibold">Fabulous Huge Room</h5>
                          <div class="d-flex justify-content-between font-weight-semibold">
                            <p class="mb-0">
                              <i class="mdi mdi-star star-color pe-1"></i>3.83 (15) 
                            </p> 
                              <p class="mb-0">$5,267/night</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <div class="row">
                    <div class="col-xl-4 grid-margin">
                      <div class="card card-stat stretch-card mb-3">
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <div class="text-white">
                              <h3 class="font-weight-bold mb-0">$168.90</h3>
                              <h6>This Month</h6>
                              <div class="badge badge-danger">23%</div>
                            </div>
                            <div class="flot-bar-wrapper">
                              <div id="column-chart" class="flot-chart"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card stretch-card mb-3">
                        <div class="card-body d-flex flex-wrap justify-content-between">
                          <div>
                            <h4 class="font-weight-semibold mb-1 text-black"> Member Profit </h4>
                            <h6 class="text-muted">Average Weekly Profit</h6>
                          </div>
                          <h3 class="text-success font-weight-bold">+168.900</h3>
                        </div>
                      </div>
                      <div class="card stretch-card mb-3">
                        <div class="card-body d-flex flex-wrap justify-content-between">
                          <div>
                            <h4 class="font-weight-semibold mb-1 text-black"> Total Profit </h4>
                            <h6 class="text-muted">Weekly Customer Orders</h6>
                          </div>
                          <h3 class="text-success font-weight-bold">+6890.00</h3>
                        </div>
                      </div>
                      <div class="card mt-3">
                        <div class="card-body d-flex flex-wrap justify-content-between">
                          <div>
                            <h4 class="font-weight-semibold mb-1 text-black"> Issue Reports </h4>
                            <h6 class="text-muted">System bugs and issues</h6>
                          </div>
                          <h3 class="text-danger font-weight-bold">-8380.00</h3>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-8 stretch-card grid-margin">
                      <div class="card">
                        <div class="card-body pb-0">
                          <h4 class="card-title mb-0">Financial management review</h4>
                        </div>
                        <div class="card-body p-0">
                          <div class="table-responsive">
                            <table class="table custom-table text-dark">
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Sale Rate</th>
                                  <th>Actual</th>
                                  <th>Variance</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <img src="assets/images/face2.jpg" class="me-2" alt="image" /> Jacob Jensen 
                                  </td> 
                                  <td>
                                    <div class="d-flex">
                                      <span class="pe-2 d-flex align-items-center">85%</span>
                                      <select id="star-1" name="rating" autocomplete="off">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                      </select>
                                    </div>
                                  </td>
                                  <td>32,435</td>
                                  <td>40,234</td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/face3.jpg" class="me-2" alt="image" /> Cecelia Bradley 
                                  </td> 
                                  <td>
                                    <div class="d-flex">
                                      <span class="pe-2 d-flex align-items-center">55%</span>
                                      <select id="star-2" name="rating" autocomplete="off">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                      </select>
                                    </div>
                                  </td>
                                  <td>4,36780</td>
                                  <td>765728</td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/face4.jpg" class="me-2" alt="image" /> Leah Sherman 
                                  </td>
                                  <td>
                                    <div class="d-flex">
                                      <span class="pe-2 d-flex align-items-center">23%</span>
                                      <select id="star-3" name="rating" autocomplete="off">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                      </select>
                                    </div>
                                  </td>
                                  <td>2300</td>
                                  <td>22437</td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/face5.jpg" class="me-2" alt="image" /> Ina Curry 
                                  </td> 
                                  <td>
                                    <div class="d-flex">
                                      <span class="pe-2 d-flex align-items-center">44%</span>
                                      <select id="star-4" name="rating" autocomplete="off">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                      </select>
                                    </div>
                                  </td>
                                  <td>53462</td>
                                  <td>1,75938</td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/face7.jpg" class="me-2" alt="image" /> Lida Fitzgerald 
                                  </td> 
                                  <td>
                                    <div class="d-flex">
                                      <span class="pe-2 d-flex align-items-center">65%</span>
                                      <select id="star-5" name="rating" autocomplete="off">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                      </select>
                                    </div>
                                  </td>
                                  <td>67453</td>
                                  <td>765377</td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/face2.jpg" class="me-2" alt="image" /> Stella Johnson 
                                  </td>
                                  <td>
                                    <div class="d-flex">
                                      <span class="pe-2 d-flex align-items-center">49%</span>
                                      <select id="star-6" name="rating" autocomplete="off">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                      </select>
                                    </div>
                                  </td>
                                  <td>43662</td>
                                  <td>96535</td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="assets/images/face9.jpg" class="me-2" alt="image" /> Maria Ortiz 
                                  </td>
                                  <td>
                                    <div class="d-flex">
                                      <span class="pe-2 d-flex align-items-center">65%</span>
                                      <select id="star-7" name="rating" autocomplete="off">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                      </select>
                                    </div>
                                  </td>
                                  <td>76555</td>
                                  <td>258546</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <a class="text-black font-13 d-block pt-2 pb-2 pb-lg-0 font-weight-bold ps-4" href="#">Show more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <div class="row">
                    <div class="col-sm-12 stretch-card grid-margin">
                      <div class="card">
                        <div class="row">
                          <div class="col-md-4">
                            <div class="card border-0">
                              <div class="card-body">
                                <div class="card-title">Channel Sessions</div>
                                <div class="d-flex flex-wrap">
                                  <div class="doughnut-wrapper w-50">
                                    <canvas id="doughnutChart1" width="100" height="100"></canvas>
                                  </div>
                                  <div id="doughnut-chart-legend" class="pl-lg-3 rounded-legend align-self-center flex-grow legend-vertical legend-bottom-left"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="card border-0">
                              <div class="card-body">
                                <div class="card-title">News Sessions</div>
                                <div class="d-flex flex-wrap">
                                  <div class="doughnut-wrapper w-50">
                                    <canvas id="doughnutChart2" width="100" height="100"></canvas>
                                  </div>
                                  <div id="doughnut-chart-legend2" class="pl-lg-3 rounded-legend align-self-center flex-grow legend-vertical legend-bottom-left"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="card border-0">
                              <div class="card-body">
                                <div class="card-title">Device Sessions</div>
                                <div class="d-flex flex-wrap">
                                  <div class="doughnut-wrapper w-50">
                                    <canvas id="doughnutChart3" width="100" height="100"></canvas>
                                  </div>
                                  <div id="doughnut-chart-legend3" class="pl-lg-3 rounded-legend align-self-center flex-grow legend-vertical legend-bottom-left"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <div class="row">
                    <div class="col-sm-6 col-xl-4 stretch-card grid-margin">
                      <div class="card">
                        <div class="card-body">
                          <div class="card-title mb-2">Upcoming events (3)</div>
                          <h3 class="mb-3">23 september 2019</h3>
                          <div class="d-flex border-bottom border-top py-3">
                            <div class="form-check">
                              <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" checked /></label>
                            </div>
                            <div class="ps-2">
                              <span class="font-12 text-muted">Tue, Mar 5, 9.30am</span>
                              <p class="m-0 text-black"> Hey I attached some new PSD files… </p>
                            </div>
                          </div>
                          <div class="d-flex border-bottom py-3">
                            <div class="form-check">
                              <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" /></label>
                            </div>
                            <div class="ps-2">
                              <span class="font-12 text-muted">Mon, Mar 11, 4.30 PM</span>
                              <p class="m-0 text-black"> Discuss performance with manager </p>
                            </div>
                          </div>
                          <div class="d-flex border-bottom py-3">
                            <div class="form-check">
                              <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" /></label>
                            </div>
                            <div class="ps-2">
                              <span class="font-12 text-muted">Tue, Mar 5, 9.30am</span>
                              <p class="m-0 text-black">Meeting with Alisa</p>
                            </div>
                          </div>
                          <div class="d-flex pt-3">
                            <div class="form-check">
                              <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" /></label>
                            </div>
                            <div class="ps-2">
                              <span class="font-12 text-muted">Mon, Mar 11, 4.30 PM</span>
                              <p class="m-0 text-black"> Hey I attached some new PSD files… </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 col-xl-4 stretch-card grid-margin">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex border-bottom mb-4 pb-2">
                            <div class="hexagon">
                              <div class="hex-mid hexagon-warning">
                                <i class="mdi mdi-clock-outline"></i>
                              </div>
                            </div>
                            <div class="ps-4">
                              <h4 class="font-weight-bold text-warning mb-0"> 12.45 </h4>
                              <h6 class="text-muted">Schedule Meeting</h6>
                            </div>
                          </div>
                          <div class="d-flex border-bottom mb-4 pb-2">
                            <div class="hexagon">
                              <div class="hex-mid hexagon-danger">
                                <i class="mdi mdi-account-outline"></i>
                              </div>
                            </div>
                            <div class="ps-4">
                              <h4 class="font-weight-bold text-danger mb-0">34568</h4>
                              <h6 class="text-muted">Profile visits</h6>
                            </div>
                          </div>
                          <div class="d-flex border-bottom mb-4 pb-2">
                            <div class="hexagon">
                              <div class="hex-mid hexagon-success">
                                <i class="mdi mdi-laptop-chromebook"></i>
                              </div>
                            </div>
                            <div class="ps-4">
                              <h4 class="font-weight-bold text-success mb-0"> 33.50% </h4>
                              <h6 class="text-muted">Bounce Rate</h6>
                            </div>
                          </div>
                          <div class="d-flex border-bottom mb-4 pb-2">
                            <div class="hexagon">
                              <div class="hex-mid hexagon-info">
                                <i class="mdi mdi-clock-outline"></i>
                              </div>
                            </div>
                            <div class="ps-4">
                              <h4 class="font-weight-bold text-info mb-0">12.45</h4>
                              <h6 class="text-muted">Schedule Meeting</h6>
                            </div>
                          </div>
                          <div class="d-flex">
                            <div class="hexagon">
                              <div class="hex-mid hexagon-primary">
                                <i class="mdi mdi-timer-sand"></i>
                              </div>
                            </div>
                            <div class="ps-4">
                              <h4 class="font-weight-bold text-primary mb-0"> 12.45 </h4>
                              <h6 class="text-muted mb-0">Browser Usage</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 col-xl-4 stretch-card grid-margin">
                      <div class="card color-card-wrapper">
                        <div class="card-body">
                          <img class="img-fluid card-top-img w-100" src="assets/images/img_5.jpg" alt="" />
                          <div class="d-flex flex-wrap justify-content-around color-card-outer">
                            <div class="col-6 p-0 mb-4">
                              <div class="color-card primary m-auto">
                                <i class="mdi mdi-clock-outline"></i>
                                <p class="font-weight-semibold mb-0">Delivered</p>
                                <span class="small">15 Packages</span>
                              </div>
                            </div>
                            <div class="col-6 p-0 mb-4">
                              <div class="color-card bg-success m-auto">
                                <i class="mdi mdi-tshirt-crew"></i>
                                <p class="font-weight-semibold mb-0">Ordered</p>
                                <span class="small">72 Items</span>
                              </div>
                            </div>
                            <div class="col-6 p-0">
                              <div class="color-card bg-info m-auto">
                                <i class="mdi mdi-trophy-outline"></i>
                                <p class="font-weight-semibold mb-0">Arrived</p>
                                <span class="small">34 Upgraded</span>
                              </div>
                            </div>
                            <div class="col-6 p-0">
                              <div class="color-card bg-danger m-auto">
                                <i class="mdi mdi-presentation"></i>
                                <p class="font-weight-semibold mb-0">Reported</p>
                                <span class="small">72 Support</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <footer class="footer">
                  <div class="d-sm-flex justify-content-center justify-content-sm-between">
                    <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2023 <a href="https://www.therichpost.com/" target="_blank">Love</a>. All rights reserved.</span>
                    <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i class="mdi mdi-heart text-danger"></i></span>
                  </div>
                </footer>
                
              </div>
            
            </div>

          </div>

          
      </div>
)
};
}

export default Home;