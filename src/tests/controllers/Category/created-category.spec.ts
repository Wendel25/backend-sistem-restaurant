import { Request, Response } from "express";
import { CreateCategoryService } from "../../../services/category/CreateCategoryService";
import { CreatedCategoryController } from "../../../controllers/category/CreatedCategoryController";
import { describe, expect, it, jest } from '@jest/globals';

jest.mock('../../../services/category/CreateCategoryService', () => ({
  CreateCategoryService: jest.fn().mockImplementation(() => ({
    execute: jest.fn().mockResolvedValue({ name: 'new-category' } as never),
  })),
}));

describe("create new category", () => {
  it('should create a new category', async () => {
    const req = {} as Request;
    const res = {
      json: jest.fn(),
    } as unknown as Response;

    await new CreatedCategoryController().handle(req, res);

    expect(res.json).toHaveBeenCalledWith({ name: 'new-category' });
  });
})
