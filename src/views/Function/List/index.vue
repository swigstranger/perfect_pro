<template>
  <div id="list">
    <div class="query-box">
      <el-form :inline="true" :model="form">
        <el-form-item label="id" label-width="50">
          <el-input v-model.trim="form.id" placeholder="请输入id" clearable size="mini" style="width: 200px" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="search-btn" size="mini" >查询</el-button >
        </el-form-item>
      </el-form>
    </div>
    <div class="export-box">
      <el-button type="primary" size="mini" @click="handleAdd">新增</el-button>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="名称" width="180"> </el-table-column>
      <el-table-column prop="singer" label="歌者"> </el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="scope">
          <el-button @click="handleEdit(scope.row)" type="text" size="small" >编辑</el-button>
          <el-button @click="handleRemove(scope.row)" type="text" size="small" style="color: red;" >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top:20px;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[10, 30, 60]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>

    <!-- 新增/编辑对话框 -->
    <el-dialog
      :title="title"
      v-model="dialogVisible"
      width="35%">
      <el-form :model="editForm">
        <el-form-item label="日期" label-width="50">
          <!-- <el-input v-model.trim="editForm.id" style="width: 300px" ></el-input> style中的width控制input宽度-->
          <el-input v-model.trim="editForm.id" ></el-input>
        </el-form-item>
        <el-form-item label="名称" label-width="50">
          <el-input v-model.trim="editForm.name" ></el-input>
        </el-form-item>
        <el-form-item label="歌者" label-width="50">
          <el-input v-model.trim="editForm.singer" ></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false" size="small">取 消</el-button>
          <el-button type="primary" @click="submit" size="small">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: "",
      },
      editForm: {
        id: "",
        name: "",
        singer: "",
      },
      pageSize: 10,
      pageNum: 1,
      total: undefined,
      tableData: [
        {
          id: "2021081001",
          name: "lemon",
          singer: "米津玄师",
        },
        {
          id: "2021081002",
          name: "天空之城",
          singer: "dylanf",
        },
        {
          id: "2021081003",
          name: "Summer",
          singer: "久石让 - ENCORE",
        },
        {
          id: "2021081004",
          name: "Himawari",
          singer: "Aosaki",
        },
      ],
      title: "",
      dialogVisible: false,
    };
  },
  computed: {
    // tableData(){
    //   this.total = this.tableData.length;
    // },
  },
  mounted() {
    this.total = this.tableData.length;
  },
  methods: {
    handleAdd(){
      this.title = "新增";
      this.reset();
      this.dialogVisible = true;
    },
    handleEdit(row) {
      this.title = "编辑";
      this.editForm.id = row.id;
      this.editForm.name = row.name;
      this.editForm.singer = row.singer;
      this.dialogVisible = true;
    },
    submit(){
      if(this.title == "编辑"){
        // 修改
        this.dialogVisible = false;
        this.$message.success('编辑成功!');
      }else{
        let params = {
          id: this.editForm.id,
          name: this.editForm.name,
          singer: this.editForm.singer,
        }
        this.tableData.push(params);
        console.log(this.editForm);
        this.dialogVisible = false;
        this.$message.success('新增成功!');
      }
    },
    handleRemove(row) {
      this.$confirm('确认删除该数据?', '删除', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let index =  this.tableData.indexOf(row);
        this.tableData.splice(index,1);
        this.$message.success('删除成功!');
      }).catch();
    },
    reset(){
      this.editForm.id = "";
      this.editForm.name = "";
      this.editForm.singer = "";
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
};
</script>

<style>
</style>