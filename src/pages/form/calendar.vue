<template>
  <div>
    <ContentHeader
      :current="{
        title: $t('text.sideMenu.calendar'),
        url: this.$C.URL.FORM_CALENDAR
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
                  カレンダー
                </h3>
              </div>
              <div class="card-body">
                <form>
                  <div class="box-body">
                    <div class="form-group">
                      <Calendar :selected-date.sync="selectedDateFrom" />
                    </div>
                  </div>
                </form>
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
import Calendar from "@/components/form/Calendar.vue";

@Component({
  components: {
    Calendar
  }
})
export default class extends Vue {
  error = "";
  selectedDateFrom: Date | null = null;

  created(): void {
    // 選択中のサイドメニューをアクティブに変更
    sideMenuModule.setCurrentMenu({
      group: "form",
      item: "calendar"
    });
  }
}
</script>
