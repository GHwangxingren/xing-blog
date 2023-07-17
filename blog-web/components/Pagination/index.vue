<!--
 * @Description: 
 * @Author: web.wangxingren
 * @Date: 2023-05-21 21:22:40
 * @LastEditors: web.wangxingren
 * @LastEditTime: 2023-05-21 22:24:43
 * @FilePath: /blog-web/components/Pagination/index.vue
-->
<template>
  <div class="pagination">
    <el-pagination
      background
      :layout="layout"
      :pager-count="pagerCount"
      :page-sizes="pageSizes"
      :page-size="size"
      :total="total"
      :currentPage="current"
      @size-change="sizeChange"
      @current-change="currentChange"
      @prev-click="prev"
      @next-click="next"
    ></el-pagination>
  </div>
</template>

<script setup lang="ts">

/**
 * @description: 分页参数
 * @param {*} total 数据总数
 * @param {*} pagerCount 如果页数很多大概展示的页码
 * @param {*} current 指定跳转到多少页
 * @param {*} layout 分页组件会展示的功能项
 * @param {*} sizes 每页展示的条数，根据自己实际，且会带入请求
 * @param {*} pageSizes 指定分页展示条数
 * @return {*}
 */
 export interface Props {
  total: number
  pagerCount: number
  layout: string
  pageSizes: Array<number>
  current: number
  size: number
}
type Page = Pick<Props, 'current' | 'size'>;
const props = withDefaults(defineProps<Props>(), {
  total: 0,
  pagerCount: 5,
  layout: 'total,sizes, prev, pager, next, jumper, ->, slot',
  pageSizes: () => ([10, 20, 50]),
  current: 1,
  size: 1,
})


let page = reactive({
  size: props.size,
  current: props.current
});

const emit = defineEmits<{
  (e: 'pagination', page: Page): void
}>();

//选择每页显示数量 Change page size
const sizeChange = (val: number) => {
  page.size = val;
  emit("pagination", page);
};
//选择某一页
const currentChange = (val: number) => {
  page.current = val;
  emit("pagination", page);
};
//上一页
const prev = (val: number) => {
  page.current = val - 1;
};
//下一页
const next = (val: number) => {
  page.current = val + 1;
};
</script>

<style lang="less" scoped>
.pagination {
  width: 100%;
  padding: 10px 0;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
:deep(.el-pagination.is-background .el-pager li:not(.is-disabled).is-active) {
  background-color: #00c4b6;
  color: @colorTextWhite;
  cursor: default;
}
:deep(.el-pager li) {
  border-radius: 8px;
  color: @colorTextWhite;
  box-shadow: @cardBoxShadow;
  color: #99a9bf;
  margin: 0 6px;
  transition: all .2s;
}
:deep(.el-pager li:hover) {
  box-shadow: @cardHoverBoxShadow;
}
</style>
