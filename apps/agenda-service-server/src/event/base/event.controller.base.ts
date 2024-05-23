/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { EventService } from "../event.service";
import { EventCreateInput } from "./EventCreateInput";
import { Event } from "./Event";
import { EventFindManyArgs } from "./EventFindManyArgs";
import { EventWhereUniqueInput } from "./EventWhereUniqueInput";
import { EventUpdateInput } from "./EventUpdateInput";

export class EventControllerBase {
  constructor(protected readonly service: EventService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Event })
  async createEvent(@common.Body() data: EventCreateInput): Promise<Event> {
    return await this.service.createEvent({
      data: data,
      select: {
        createdAt: true,
        endTime: true,
        id: true,
        location: true,
        name: true,
        startTime: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Event] })
  @ApiNestedQuery(EventFindManyArgs)
  async events(@common.Req() request: Request): Promise<Event[]> {
    const args = plainToClass(EventFindManyArgs, request.query);
    return this.service.events({
      ...args,
      select: {
        createdAt: true,
        endTime: true,
        id: true,
        location: true,
        name: true,
        startTime: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Event })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async event(
    @common.Param() params: EventWhereUniqueInput
  ): Promise<Event | null> {
    const result = await this.service.event({
      where: params,
      select: {
        createdAt: true,
        endTime: true,
        id: true,
        location: true,
        name: true,
        startTime: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Event })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEvent(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() data: EventUpdateInput
  ): Promise<Event | null> {
    try {
      return await this.service.updateEvent({
        where: params,
        data: data,
        select: {
          createdAt: true,
          endTime: true,
          id: true,
          location: true,
          name: true,
          startTime: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Event })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEvent(
    @common.Param() params: EventWhereUniqueInput
  ): Promise<Event | null> {
    try {
      return await this.service.deleteEvent({
        where: params,
        select: {
          createdAt: true,
          endTime: true,
          id: true,
          location: true,
          name: true,
          startTime: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
