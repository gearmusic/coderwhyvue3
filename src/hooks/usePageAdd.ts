import { ref } from 'vue'
import PageAdd from '@/components/page-add'

type CallbackType = (data: any) => void

export default function usePageAdd(addCallback?: CallbackType, editCallback?: CallbackType) {

  const pageAddRef = ref<InstanceType<typeof PageAdd>>()

  const formData = ref<any>({})

  const addClick = () => {
    if(pageAddRef.value) {
      formData.value = {}
      pageAddRef.value.visible = true

      addCallback ? addCallback(null) : true
    }
  }

  const editClick = (data: any) => {
    if(pageAddRef.value) {
      formData.value = data
      pageAddRef.value.visible = true
    }

    editCallback ? editCallback(data) : true
  }

  return { pageAddRef, formData, addClick, editClick }
}
