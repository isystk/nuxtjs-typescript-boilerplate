<template>
  <div>
    <ContentHeader
      :current="{
        title: $t('text.sideMenu.basic'),
        url: this.$C.URL.FORM_BASIC
      }"
      :breadcrumb-list="[
        { title: $t('text.sideMenu.form'), url: this.$C.URL.FORM }
      ]"
    />
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
            <div class="card card-info">
              <div class="card-header">
                <h3 class="card-title">
                  入力フォーム
                </h3>
              </div>
              <div class="card-body">
                <p v-if="error" class="text-danger">
                  {{ error }}
                </p>
                <div class="box-body">
                  <div class="form-group">
                    <p class="font-weight-bold">
                      ElementsButtonConfirm
                    </p>
                    <ElementsButtonConfirm
                      method="post"
                      action="/xxx/xxx"
                      variant="danger"
                      label="削除"
                      message="削除します。よろしいですか？"
                    />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      ElementsButtonSubmit
                    </p>
                    <form method="post" action="/user/edit/">
                      <ElementsButtonSubmit
                        label="登録する"
                        name="regist"
                        variant="primary"
                      />
                    </form>
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      ElementsInputCalendar
                    </p>
                    <ElementsInputCalendar />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      ElementsInputCheckbox
                    </p>
                    <ElementsInputCheckbox
                      name="check1"
                      :default-value="[2, 4]"
                      :options="
                        this.$_.map(
                          this.$C.PROGRAM_LANG_LABEL,
                          (value, key) => ({
                            text: value,
                            value: key
                          })
                        )
                      "
                    />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      ElementsInputColor
                    </p>
                    <ElementsInputColor name="color1" default-value="#000000" />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      ElementsInputDate
                    </p>
                    <ElementsInputDate
                      name="birthday"
                      errors="生年月日を入力してください"
                      :start-year="1950"
                      :validated="true"
                      :required="true"
                      :disabled="false"
                      :readonly="false"
                      :on-change="v => {}"
                    />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      ElementsInputFile
                    </p>
                    <ElementsInputFile name="file1" />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      ElementsInputFullName
                    </p>
                    <ElementsInputFullName
                      name="fullName"
                      default-value="ise yoshitaka"
                    />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      ElementsInputImage
                    </p>
                    <ElementsInputImage name="image1" />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      ElementsInputMailAddress
                    </p>
                    <ElementsInputMailAddress name="mail1" />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      ElementsInputPhoneNumber
                    </p>
                    <ElementsInputPhoneNumber
                      name="tel"
                      default-value="090-1111-2222"
                    />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      ElementsInputPostalCode
                    </p>
                    <ElementsInputPostalCode
                      name="postal"
                      default-value="040-0063"
                    />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      ElementsInputPulldown
                    </p>
                    <ElementsInputPulldown
                      name="select1"
                      default-value="2"
                      :options="[
                        { text: 'aaa', value: 1 },
                        { text: 'bbb', value: 2 },
                        { text: 'ccc', value: 3 }
                      ]"
                    />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      ElementsInputRadio
                    </p>
                    <ElementsInputRadio
                      name="radio1"
                      default-value="2"
                      :options="[
                        { text: 'aaa', value: 1 },
                        { text: 'bbb', value: 2 },
                        { text: 'ccc', value: 3 }
                      ]"
                    />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      ElementsInputText
                    </p>
                    <ElementsInputText name="text1" default-value="hogehoge" />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      ElementsInputTextarea
                    </p>
                    <ElementsInputTextarea
                      name="textarea1"
                      :default-value="`a\nbb\nccc`"
                    />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      ElementsInputYearMonth
                    </p>
                    <ElementsInputYearMonth
                      name="yearmonth1"
                      default-value="202006"
                    />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      ElementsLabelName
                    </p>
                    <ElementsLabelName name="やまだ たろう" />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      ElementsCell
                    </p>
                    <ElementsCell text="やまだ たろう" />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      ElementsLoading
                    </p>
                    <ElementsLoading />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      ElementsRequired
                    </p>
                    <ElementsRequired />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
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
import ContentHeader from "@/components/pages/ContentHeader.vue";

@Component({
  components: {
    ContentHeader
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
