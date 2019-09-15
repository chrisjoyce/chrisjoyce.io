import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('test')
export class TestController {
  constructor() {}

  @Get()
  getTest() {
    console.log('hi');
    console.log('test');
    return 'hi';
  }

  // // findOne(@Param('id') id: string):  TestDto {
  // @Get(':id')
  // getTest(@Param('id') id: string): TestDto {
  //   return this.TestService.getTest(id);
  // }

  // @Post()
  // createTest(@Body() Test: TestDto) {
  //   this.TestService.createTest(Test);
  // }

  // @Put()
  // updateTest(@Body() Test: TestDto) {
  //   this.TestService.updateTest(Test);
  // }

  // /**
  //   * Delete Test
  //   * @param id
  //   */
  // @Delete()
  // deleteTest(@Param('id') id: string) {
  //   this.TestService.deleteTest(id);
  // }
}
