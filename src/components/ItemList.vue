<template>
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
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
@Component
export default class ListItem extends Vue {
  
}
</script>
