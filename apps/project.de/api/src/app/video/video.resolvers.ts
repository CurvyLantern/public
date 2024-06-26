/**
 * @fileoverview  GraphQL resolvers for video module
 * @author        Dr. J. Quader
 * @copyright     © 2024 by J. Quader
 */
import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Resolver } from '@nestjs/graphql'

import { Roles } from '@jaqua/modules/admin'
import {
  VideoRemoveInput,
  VideoUpdateContentInput
} from '@jaqua/project.de/graphql'
import { GqlAuthGuard, RolesGuard } from '@jaqua/shared/util/auth-guard'

import { VideoService } from './video.service'

@Resolver('Video')
@UseGuards(GqlAuthGuard, RolesGuard)
export class VideoResolvers {
  constructor(private readonly videoService: VideoService) {}

  @Mutation(() => Number)
  @Roles('editor')
  async videoUpdateContent(
    @Args('input') input: VideoUpdateContentInput
  ): Promise<number> {
    return await this.videoService.videoUpdateContent(input)
  }

  @Mutation(() => String)
  @Roles('admin')
  async videoRemove(@Args('input') input: VideoRemoveInput): Promise<boolean> {
    return await this.videoService.videoRemove(input)
  }
}
