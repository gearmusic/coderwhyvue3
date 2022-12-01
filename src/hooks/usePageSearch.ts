import { ref } from 'vue'
import PageContent from '@/components/page-content'

export default function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const searchClick = (formData: any) => {
    pageContentRef.value?.getPageData(formData)
  }

  const resetClick = () => {
    pageContentRef.value?.getPageData()
  }

  return { pageContentRef, searchClick, resetClick }
}
