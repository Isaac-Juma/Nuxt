import type { DailyGoal } from '~~/shared/types/goal'
// import { useDailyGoals } from './goals/DailyGoals'
// const { addGoal } = useDailyGoals()
export function useWpApi () {
    const wppost: any = () => {
        return useAsyncData('wp-posts-clean-stream',
            () =>$fetch('/api/wordpress/posts'), {
            server: true, // server-side fetching
            lazy: true, // Enable lazy loading
            default: () => [], // Default value before data is fetched
        })
    };

    const goalsApi = (data: DailyGoal) => {
        return $fetch('/api/wordpress/postGoals', {
            method: 'POST',
            body: data
        })
    };

    return { wppost, goalsApi }
}