<template>
  <div id="wrapper">
 <sideBar></sideBar>
     <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
       <!-- Main Content -->
      <div id="content">
      <navbar>    
      </navbar>
       <div class="container-fluid">
         <!-- <content></content> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, SideBar, Content } from '@/layouts/components'

export default { 
  components: {
    Navbar,
    SideBar,
    Content
  }
}
</script>
