<template>
    <div id="app">
        <div class="width width-100">
            <div class="fonts fonts-32 semibold black">Mata Pelajaran</div>
            <div class="display-flex space-between align-center padding padding-top-15px padding-bottom-15px">
                <div class="width width-40 display-flex">
                    <el-input placeholder="Cari kelas" v-model="form.search" class="subject-input-with-select">
                        <el-select v-model="form.select" slot="prepend" placeholder="Jenjang">
                            <el-option label="SMA" value="1"></el-option>
                            <el-option label="SMP" value="2"></el-option>
                        </el-select>
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
                <div class="width width-60 display-flex right">
                    <button class="btn btn-sekunder" style="margin-left: 5px;">
                        <i class="icn fa fa-lg fa-th-large"></i>
                    </button>
                    <el-popover
                        placement="bottom-end"
                        width="200"
                        trigger="click">
                        <div>
                            URUTKAN 
                        </div>
                        <button 
                            slot="reference"
                            class="btn btn-sekunder" 
                            style="margin-left: 5px;">
                            <i class="icn icn-left fa fa-lg fa-sort"></i> Urutkan
                        </button>
                    </el-popover>
                    <el-popover
                        placement="bottom-end"
                        width="200"
                        trigger="click">
                        <div>
                            FILTER 
                        </div>
                        <button 
                            slot="reference"
                            class="btn btn-sekunder" 
                            style="margin-left: 5px;">
                            <i class="icn icn-left fa fa-lg fa-filter"></i> Filter
                        </button>
                    </el-popover>
                    <button class="btn btn-main" style="margin-left: 5px;">
                        <i class="icn icn-left fa fa-lg fa-plus-circle"></i> Tambah Mata Pelajaran
                    </button>
                </div>
            </div>
            <div class="display-flex left wrap">
                <div 
                    v-for="(dt, i) in classRoom" 
                    :key="i"
                    class="width width-row-4">
                    <Card :data="dt" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import classRoomImage from '../../../assets/img/classroom.jpg'
import Card from './components/Card'
export default {
    data () {
        return {
            form : {
                select: '',
                search: ''
            },
            classRoom: [
                {id: 1, image: classRoomImage, title: 'Matematika', subject: '15'},
                {id: 2, image: classRoomImage, title: 'B. Inggris', subject: '23'},
                {id: 3, image: classRoomImage, title: 'B. Indonesia', subject: '77'},
                {id: 4, image: classRoomImage, title: 'Matematika', subject: '15'},
                {id: 5, image: classRoomImage, title: 'B. Inggris', subject: '23'},
                {id: 6, image: classRoomImage, title: 'B. Indonesia', subject: '77'}
            ],
        }
    },
    components: {
        Card
    }
}
</script>
<style>
    .subject-input-with-select .el-select .el-input {
        width: 110px;
    }
    .subject-input-with-select .el-input-group__prepend {
        background-color: #fff;
    }
</style>