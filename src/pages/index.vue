<template>

<div class="wrapper">

  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
      </li>
    </ul>
  </nav>

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-purple elevation-4">
    <!-- Brand Logo -->
    <a href="#" class="brand-link">
      <img src="~/assets/img/AdminLTELogo.png" alt="AdminSample Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">AdminLTE Sample</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link active">
              <i class="nav-icon fas fa-table"></i>
              <p>
                マスタ管理
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link active">
                  <i class="far fa-circle nav-icon"></i>
                  <p>ユーザー管理</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>XXXXX</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>XXXXX</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="fa fa-cogs"></i>
              <p>
                システム設定
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-envelope"></i>
                  <p>メールテンプレート</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-file"></i>
                  <p>ファイル管理</p>
                </a>
              </li>
            </ul>
          </li>

        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">

    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>ユーザー管理</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">ユーザー管理</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">

        <div class="row">
          <div class="col-12">

            <div class="card card-purple">
              <!-- .card-header -->
              <div class="card-header">
                <h3 class="card-title">検索条件</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form">
                <div class="card-body">
                  
                  <div class="form-group">
                    <div class="control-group" id="userName">
                        <label class="col-sm-2 control-label">氏名</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" size="10" maxlength="80" id="userName" name="userName" value="">
                        </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">メールアドレス</label>
                    <div class="col-sm-8">
                      <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
                    </div>
                  </div>

                </div>
                <!-- /.card-body -->

                <div class="card-footer text-center">
                  <button type="submit" class="btn btn-secondary">検索</button>
                </div>

              </form>
            </div>

            <div class="row">
              <div class="col-12">
        
                <div class="card card-purple">
                  <!-- .card-header -->
                  <div class="card-header">
                    <h3 class="card-title">検索結果</h3>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body table-responsive p-0">
                    <table class="table table-hover text-nowrap">
                      <thead>
                        <tr>
                            <th>ID</th>
                            <th>氏名</th>
                            <th>メールアドレス</th>
                            <th>電話番号</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td>
                                <a href="#">1</a>
                            </td>
                            <td>doe john</td>
                            <td>test@sample.com</td>
                            <td>09011112222</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#">2</a>
                            </td>
                            <td>doe john</td>
                            <td>test@sample.com</td>
                            <td>09011112222</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#">3</a>
                            </td>
                            <td>doe john</td>
                            <td>test@sample.com</td>
                            <td>09011112222</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#">4</a>
                            </td>
                            <td>doe john</td>
                            <td>test@sample.com</td>
                            <td>09011112222</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#">5</a>
                            </td>
                            <td>doe john</td>
                            <td>test@sample.com</td>
                            <td>09011112222</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#">6</a>
                            </td>
                            <td>doe john</td>
                            <td>test@sample.com</td>
                            <td>09011112222</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#">7</a>
                            </td>
                            <td>doe john</td>
                            <td>test@sample.com</td>
                            <td>09011112222</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#">8</a>
                            </td>
                            <td>doe john</td>
                            <td>test@sample.com</td>
                            <td>09011112222</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#">9</a>
                            </td>
                            <td>doe john</td>
                            <td>test@sample.com</td>
                            <td>09011112222</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#">10</a>
                            </td>
                            <td>doe john</td>
                            <td>test@sample.com</td>
                            <td>09011112222</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#">11</a>
                            </td>
                            <td>doe john</td>
                            <td>test@sample.com</td>
                            <td>09011112222</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#">12</a>
                            </td>
                            <td>doe john</td>
                            <td>test@sample.com</td>
                            <td>09011112222</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#">13</a>
                            </td>
                            <td>doe john</td>
                            <td>test@sample.com</td>
                            <td>09011112222</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#">14</a>
                            </td>
                            <td>doe john</td>
                            <td>test@sample.com</td>
                            <td>09011112222</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#">15</a>
                            </td>
                            <td>doe john</td>
                            <td>test@sample.com</td>
                            <td>09011112222</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#">16</a>
                            </td>
                            <td>doe john</td>
                            <td>test@sample.com</td>
                            <td>09011112222</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#">17</a>
                            </td>
                            <td>doe john</td>
                            <td>test@sample.com</td>
                            <td>09011112222</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#">18</a>
                            </td>
                            <td>doe john</td>
                            <td>test@sample.com</td>
                            <td>09011112222</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#">19</a>
                            </td>
                            <td>doe john</td>
                            <td>test@sample.com</td>
                            <td>09011112222</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#">20</a>
                            </td>
                            <td>doe john</td>
                            <td>test@sample.com</td>
                            <td>09011112222</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- /.card-body -->
                  <!-- .card-footer -->
                  <div class="card-footer clearfix ">
                    <ul class="pagination m-0 justify-content-center">
                      <li class="page-item"><a class="page-link" href="#">«</a></li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item"><a class="page-link" href="#">»</a></li>
                    </ul>
                  </div>
                  <!-- /.card-footer -->
                </div>
                <!-- /.card -->
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <!-- Main Footer -->
  <footer class="main-footer">
    <!-- Default to the left -->
    <strong>Copyright &copy; 2019-2020 <a href="#">isystk.com</a>.</strong> All rights reserved.
  </footer>
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->

</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import { State } from "vuex-class"
// import { Skill } from "../types";
// import Profile from '../components/Profile.vue';
// import Skills from '../components/Skills.vue';
// import Works from '../components/Works.vue';
// import Contact from '../components/Contact.vue';

@Component({
  components: {
    // Profile, Skills, Works, Contact
  }
})
export default class extends Vue {
  // jumbotronPath = process.env.STATIC_PATH + 'img/jumbotron.jpg';
  // offsetTop: number = 0;
  // options = {
  //   duration: 700,
  //   offset: 0,
  //   easing: 'easeOutCubic'
  // };

  // get showFloating() {
  //     return this.offsetTop >= 300
  //   }
    
  // onScroll() {
  //   this.offsetTop = document.documentElement.scrollTop || document.body.scrollTop
  // }
}

</script>
