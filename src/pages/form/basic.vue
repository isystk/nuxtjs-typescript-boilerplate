<template>
  <div>
    <ContentHeader
      :current="{ title: $t('text.sideMenu.basic'), url: '/form/basic/' }"
      :breadcrumb-list="[{ title: $t('text.sideMenu.form'), url: '/form/' }]"
    />
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-6">
            <div class="card card-info">
              <div class="card-header">
                <h3 class="card-title">
                  入力フォーム
                </h3>
              </div>
              <div class="card-body">
                <form @submit.prevent="regist">
                  <p v-if="error" class="text-danger">
                    {{ error }}
                  </p>
                  <div class="box-body">
                    <div class="form-group">
                      <label class="control-label">テキスト</label>
                      <input
                        v-model="textval"
                        class="form-control"
                        type="text"
                        placeholder="textval"
                        name="textval"
                      />
                    </div>
                    <div class="form-group">
                      <label class="control-label">セレクトボックス</label>
                      <SelectBox
                        :values="
                          this.$_.map(
                            this.$C.PREFECTURE_LABEL,
                            (value, key) => ({
                              value,
                              code: key
                            })
                          )
                        "
                        :selected-code.sync="selectval"
                      />
                    </div>
                    <div class="form-group">
                      <label class="control-label">チェックボックス</label>
                      <CheckBox
                        :items="
                          this.$_.map(
                            this.$C.PROGRAM_LANG_LABEL,
                            (value, key) => ({
                              value,
                              code: key
                            })
                          )
                        "
                        :selected-code.sync="checkboxval"
                      />
                    </div>
                    <div class="form-group">
                      <label class="control-label">ラジオボタン</label>
                      <RadioBotton
                        :items="
                          this.$_.map(this.$C.SEX_LABEL, (value, key) => ({
                            value,
                            code: key
                          }))
                        "
                        :selected-code.sync="radioval"
                      />
                    </div>
                    <div class="form-group">
                      <label class="control-label">日付</label>
                      <input
                        v-model="dateval"
                        class="form-control"
                        type="date"
                        maxlength="10"
                      />
                    </div>
                    <div class="form-group">
                      <label class="control-label">テキストエリア</label>
                      <Textarea
                        :inputvalue.sync="textareaval"
                        :rows="3"
                        :maxlength="100"
                      />
                    </div>
                    <div class="form-group text-center">
                      <button type="submit" class="btn btn-primary btn-block">
                        登録する
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <!-- /.card-body -->
            </div>
          </div>
          <div class="col-6">
            <div class="card card-info">
              <div class="card-header">
                <h3 class="card-title">
                  データ
                </h3>
              </div>
              <div class="card-body">
                {{ $data }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { sideMenuModule } from "@/store/sideMenu";
import ContentHeader from "@/components/ContentHeader.vue";
import SelectBox from "@/components/form/SelectBox.vue";
import CheckBox from "@/components/form/CheckBox.vue";
import RadioBotton from "@/components/form/RadioBotton.vue";
import Textarea from "@/components/form/Textarea.vue";

@Component({
  components: {
    ContentHeader,
    SelectBox,
    CheckBox,
    RadioBotton,
    Textarea
  }
})
export default class extends Vue {
  public error = "";
  public textval = "";
  public selectval = "";
  public checkboxval = [];
  public radioval = "";
  public textareaval = "";
  public dateval = "";
  public numberval = "";

  created(): void {
    // 選択中のサイドメニューをアクティブに変更
    sideMenuModule.setCurrentMenu({
      group: "form",
      item: "basic"
    });
  }

  public regist(): void {
    try {
    } catch (e) {
      this.error = e.message;
    }
  }
}
</script>
