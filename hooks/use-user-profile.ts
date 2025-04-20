"use client"

import { useState, useCallback, useEffect } from "react"
import { userApi } from "@/lib/api"
import { useToast } from "@/components/ui/use-toast"

export function useUserProfile() {
  const [isLoading, setIsLoading] = useState(false)
  const [profile, setProfile] = useState(null)
  const [error, setError] = useState(null)
  const { toast } = useToast()

  // Load user profile
  const loadProfile = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)
      const userProfile = await userApi.getProfile()
      setProfile(userProfile)
      return userProfile
    } catch (error) {
      console.error("Failed to load user profile:", error)
      setError("Failed to load your profile. Please try again.")
      toast({
        title: "Error",
        description: "Failed to load your profile. Please try again.",
        variant: "destructive",
      })
      return null
    } finally {
      setIsLoading(false)
    }
  }, [toast])

  // Update user profile
  const updateProfile = useCallback(
    async (profileData) => {
      try {
        setIsLoading(true)
        setError(null)
        const result = await userApi.updateProfile(profileData)
        setProfile(result.profile)
        toast({
          title: "Success",
          description: "Your profile has been updated successfully.",
        })
        return result
      } catch (error) {
        console.error("Failed to update user profile:", error)
        setError("Failed to update your profile. Please try again.")
        toast({
          title: "Error",
          description: "Failed to update your profile. Please try again.",
          variant: "destructive",
        })
        return null
      } finally {
        setIsLoading(false)
      }
    },
    [toast],
  )

  // Load profile on mount
  useEffect(() => {
    loadProfile()
  }, [loadProfile])

  return {
    isLoading,
    profile,
    error,
    loadProfile,
    updateProfile,
  }
}

