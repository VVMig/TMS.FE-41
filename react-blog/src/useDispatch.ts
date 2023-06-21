import { useDispatch } from "react-redux"
import { AppDispatch } from "./store"

export const useAppDispatch = () => {
    const useAppDispatch = useDispatch() as AppDispatch
     
    return useAppDispatch;
}