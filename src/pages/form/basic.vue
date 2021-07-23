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
                      ConfirmButton
                    </p>
                    <ConfirmButton
                      method="post"
                      action="/xxx/xxx"
                      variant="danger"
                      label="削除"
                      message="削除します。よろしいですか？"
                    />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      SubmitButton
                    </p>
                    <form method="post" action="/user/edit/">
                      <SubmitButton
                        label="登録する"
                        name="regist"
                        variant="primary"
                      />
                    </form>
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      CalendarInput
                    </p>
                    <CalendarInput />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      CheckboxInput
                    </p>
                    <CheckboxInput
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
                      ColorInput
                    </p>
                    <ColorInput < p>
                      <ColorInput name="color1" default-value="#000000" />
                    </ColorInput>
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      DateInput
                    </p>
                    <DateInput
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
                      FileInput
                    </p>
                    <FileInput < p>
                      <FileInput name="file1" />
                    </FileInput>
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      FullNameInput
                    </p>
                    <FullNameInput
                      name="fullName"
                      default-value="ise yoshitaka"
                    />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      ImageInput
                    </p>
                    <ImageInput < p>
                      <ImageInput name="image1" />
                    </ImageInput>
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      MailAddressInput
                    </p>
                    <MailAddressInput < p>
                      <MailAddressInput name="mail1" />
                    </MailAddressInput>
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      PhoneNumberInput
                    </p>
                    <PhoneNumberInput
                      name="tel"
                      default-value="090-1111-2222"
                    />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      PostalCodeInput
                    </p>
                    <PostalCodeInput < p>
                      <PostalCodeInput name="postal" default-value="040-0063" />
                    </PostalCodeInput>
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      PulldownInput
                    </p>
                    <PulldownInput
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
                      RadioInput
                    </p>
                    <RadioInput
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
                      TextInput
                    </p>
                    <TextInput < p>
                      <TextInput name="text1" default-value="hogehoge" />
                    </TextInput>
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      TextareaInput
                    </p>
                    <TextareaInput
                      name="textarea1"
                      :default-value="`a\nbb\nccc`"
                    />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      YearMonthInput
                    </p>
                    <YearMonthInput < p>
                      <YearMonthInput
                        name="yearmonth1"
                        default-value="202006"
                      />
                    </YearMonthInput>
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      NameLabel
                    </p>
                    <NameLabel < p>
                      <NameLabel name="やまだ　たろう" />
                    </NameLabel>
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      Cell
                    </p>
                    <Cell < p>
                      <Cell text="やまだ　たろう" />
                    </Cell>
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      Loading
                    </p>
                    <Loading />
                  </div>
                  <div class="form-group">
                    <p class="font-weight-bold">
                      Required
                    </p>
                    <Required />
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
import ConfirmButton from "@/components/elements/Button/Confirm.vue";
import SubmitButton from "@/components/elements/Button/Submit.vue";
import CalendarInput from "@/components/elements/Input/Calendar.vue";
import CheckboxInput from "@/components/elements/Input/Checkbox.vue";
import ColorInput from "@/components/elements/Input/Color.vue";
import DateInput from "@/components/elements/Input/Date.vue";
import FileInput from "@/components/elements/Input/File.vue";
import FullNameInput from "@/components/elements/Input/FullName.vue";
import ImageInput from "@/components/elements/Input/Image.vue";
import MailAddressInput from "@/components/elements/Input/MailAddress.vue";
import PhoneNumberInput from "@/components/elements/Input/PhoneNumber.vue";
import PostalCodeInput from "@/components/elements/Input/PostalCode.vue";
import PulldownInput from "@/components/elements/Input/Pulldown.vue";
import RadioInput from "@/components/elements/Input/Radio.vue";
import TextInput from "@/components/elements/Input/Text.vue";
import TextareaInput from "@/components/elements/Input/Textarea.vue";
import YearMonthInput from "@/components/elements/Input/YearMonth.vue";
import NameLabel from "@/components/elements/Label/Name.vue";
import Cell from "@/components/elements/Cell.vue";
import Loading from "@/components/elements/Loading.vue";
import Required from "@/components/elements/Required.vue";

@Component({
  components: {
    ContentHeader,
    ConfirmButton,
    SubmitButton,
    CheckboxInput,
    CalendarInput,
    ColorInput,
    DateInput,
    FileInput,
    FullNameInput,
    ImageInput,
    MailAddressInput,
    PhoneNumberInput,
    PostalCodeInput,
    PulldownInput,
    RadioInput,
    TextInput,
    TextareaInput,
    YearMonthInput,
    NameLabel,
    Cell,
    Loading,
    Required
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
