import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/create-activity.dto';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}
  @Get('all')
  async getAllActivities() {
    return this.activityService.getAllActivities();
  }
  @Get(':id')
  async getActivityById(@Param('id') id: string) {
    return this.activityService.getActivityById(+id);
  }
  @Post('create')
  async createActivity(@Body() activity: CreateActivityDto) {
    return this.activityService.createActivity(activity);
  }
  @Delete('delete/:id')
  async deleteActiviy(@Param('id') id: string) {
    return this.activityService.deleteActivity(+id);
  }
}
