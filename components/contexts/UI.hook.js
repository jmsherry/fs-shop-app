import { use } from "react";
import {
  UIContext
} from '@/components/contexts/UI.context'

const useUI = () => use(UIContext)

export default useUI;