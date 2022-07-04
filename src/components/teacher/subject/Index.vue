<template>
    <div id="app">
        <div class="width width-100">
            <div class="fonts fonts-32 semibold black">Mata Pelajaran</div>
            <div class="display-flex space-between align-center padding padding-top-15px padding-bottom-15px">
                <div class="width width-40 display-flex">
                    <el-input placeholder="Cari kelas" v-model="form.search" class="input-with-select">
                        <el-select v-model="select" slot="prepend" placeholder="Jenjang">
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
                <!-- <div class="width width-row-4">
                    <div class="padding padding-15px">
                        <div 
                            class="card card-main box-shadow display-flex column center align-center" 
                            style="height: 300px;">
                            <div class="display-flex column center align-center">
                                <div class="padding padding-bottom-25px">
                                    <i class="fonts fonts-32 white fa fa-lg fa-plus-circle"></i>
                                </div>
                                <div class="fonts fonts-11 white semibold align-center">Tambah Mata Pelajaran</div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div 
                    v-for="(dt, i) in classRoom" 
                    :key="i"
                    class="width width-row-4">
                    <div class="padding padding-15px">
                        <div class="card bg-white box-shadow">
                            <div 
                                class="image image-padding bg-size-contain bg-white"
                                :style="`background-image: url(${dt.image});`"
                                ></div>
                            <div class="display-flex column align-center padding padding-top-15px">
                                <div class="fonts fonts-11 black semibold align-center margin margin-bottom-5px">{{ dt.title }}</div>
                                <div class="display-flex row center margin margin-bottom-15px">
                                    <div class="fonts fonts-10 normal grey"><span class="fonts fonts-10 semibold main">{{ dt.subject }}</span> Materi</div>
                                </div>
                                <button class="btn btn-sekunder btn-full">
                                    Kelola Mata Pelajaran
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import classRoomImage from '../../../assets/img/classroom.jpeg'
export default {
    data () {
        return {
            form : {
                search: ''
            },
            classRoom: [
                {id: 1, image: classRoomImage, title: 'Matematika', subject: '15'},
                {id: 2, image: classRoomImage, title: 'B. Inggris', subject: '23'},
                {id: 3, image: classRoomImage, title: 'B. Indonesia', subject: '77'}
            ],
        }
    }
}
</script>
<style>
    .el-select .el-input {
        width: 110px;
    }
    .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }
</style>