<template>
  <div id="wrapper">
    <div class="flex_test-box">
      <div class="flex_test-item">
        チャンネル一覧
      </div>
      <div class="flex_test-item">
        <div>
          ファイル一覧
        </div>
        <div>
          <form action="/post" method="post" enctype="multipart/form-data">
            <div id="upload" class="form-group commonStyle" v-bind:class="{'styleA':styleA, 'styleB':styleB}" @dragover.prevent="changeStyle($event,'ok')" @dragleave.prevent="changeStyle($event,'no')" @drop.prevent="uploadFile($event)">
              <label for="upload_image" class="button">
              <p>画像を選択</p>
              <input id="upload_image" type="file" name="img" @change="uploadFile($event)" style="display:none;" accept="image/*">
              </label>
              <p>またはここに画像ファイルをドラッグ＆ドロップ</p>
              <img v-show="preview" v-bind:src="preview" style="width:300px;">
              <p v-show="preview">{{name}}</p>
            </div>
            <button class="btn btn-success">アップロード</button>
          </form>
        </div>
      </div>
      <div class="flex_test-item">
        3.コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。3.コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。
      </div>
      <div class="flex_test-item">
        4.コンテンツが入ります。
      </div>
    </div>
  </div>
</template>
