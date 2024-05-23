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
import { AgendaService } from "../agenda.service";
import { AgendaCreateInput } from "./AgendaCreateInput";
import { Agenda } from "./Agenda";
import { AgendaFindManyArgs } from "./AgendaFindManyArgs";
import { AgendaWhereUniqueInput } from "./AgendaWhereUniqueInput";
import { AgendaUpdateInput } from "./AgendaUpdateInput";

export class AgendaControllerBase {
  constructor(protected readonly service: AgendaService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Agenda })
  async createAgenda(@common.Body() data: AgendaCreateInput): Promise<Agenda> {
    return await this.service.createAgenda({
      data: data,
      select: {
        createdAt: true,
        date: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Agenda] })
  @ApiNestedQuery(AgendaFindManyArgs)
  async agendaItems(@common.Req() request: Request): Promise<Agenda[]> {
    const args = plainToClass(AgendaFindManyArgs, request.query);
    return this.service.agendaItems({
      ...args,
      select: {
        createdAt: true,
        date: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Agenda })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async agenda(
    @common.Param() params: AgendaWhereUniqueInput
  ): Promise<Agenda | null> {
    const result = await this.service.agenda({
      where: params,
      select: {
        createdAt: true,
        date: true,
        description: true,
        id: true,
        title: true,
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
  @swagger.ApiOkResponse({ type: Agenda })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAgenda(
    @common.Param() params: AgendaWhereUniqueInput,
    @common.Body() data: AgendaUpdateInput
  ): Promise<Agenda | null> {
    try {
      return await this.service.updateAgenda({
        where: params,
        data: data,
        select: {
          createdAt: true,
          date: true,
          description: true,
          id: true,
          title: true,
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
  @swagger.ApiOkResponse({ type: Agenda })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAgenda(
    @common.Param() params: AgendaWhereUniqueInput
  ): Promise<Agenda | null> {
    try {
      return await this.service.deleteAgenda({
        where: params,
        select: {
          createdAt: true,
          date: true,
          description: true,
          id: true,
          title: true,
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
