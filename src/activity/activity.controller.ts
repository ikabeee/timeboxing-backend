import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}
  @Get('all')
  async getAllActivities() {
    return this.activityService.getAllActivities();
  }
  @Get(':id')
  async getActivityById(@Param('id', ParseIntPipe) id: string) {
    return this.activityService.getActivityById(+id);
  }
  @Post('create')
  async createActivity(@Body() activity: CreateActivityDto) {
    return this.activityService.createActivity(activity);
  }

  @Patch('update/:id')
  async UpdateActivity(
    @Param('id', ParseIntPipe) id: string,
    @Body() activity: UpdateActivityDto,
  ) {
    return this.activityService.updateActivity(+id, activity);
  }

  @Delete('delete/:id')
  async deleteActiviy(@Param('id', ParseIntPipe) id: string) {
    return this.activityService.deleteActivity(+id);
  }
}
