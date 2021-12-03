<template>
    <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="course" label="课程" width="180" />
        <el-table-column prop="data" label="时间" width="180" />
        <el-table-column prop="command" label="评价" />
    </el-table>
</template>

<script lang="ts">
export default {
    data() {
        return {
            tableData: [
                {
                    course: '2016-05-03',
                    data: 'Tom',
                    command: 'No. 189, Grove St, Los Angeles',
                },
                {
                    course: '2016-05-02',
                    data: 'Tom',
                    command: 'No. 189, Grove St, Los Angeles',
                },
                {
                    course: '2016-05-04',
                    data: 'Tom',
                    command: 'No. 189, Grove St, Los Angeles',
                },
                {
                    course: '2016-05-01',
                    data: 'Tom',
                    command: 'No. 189, Grove St, Los Angeles',
                },
            ],
        }
    },
}
</script>